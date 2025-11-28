import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/src/styles/globals.css";
import Seo from "@/src/types/seo";
import enMessages from "@/src/messages/en.json";
import trMessages from "@/src/messages/tr.json";
import esMessages from "@/src/messages/es.json";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ThemeProvider from "@/src/components/theme-provider";
import LocaleInitializer from "@/src/components/locale-initializer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#342E37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const messagesMap: { [key: string]: typeof enMessages } = {
  en: enMessages,
  tr: trMessages,
  es: esMessages,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = messagesMap[locale] ?? enMessages;
  const seo = messages.seo as Seo;

  return {
    title: {
      default: seo.title.default || "Shood",
      template: seo.title.template || "",
    },
    description: seo.description || "We turn your ideas into powerful digital experiences.",
    keywords: seo.keywords || ["software", "digital", "website", "web development", "mobile apps", "cloud", "cloud solutions", "ui/ux", "design", "consulting", "maintenance"],
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [
        { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" }
      ]
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: seo.title.default,
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      title: seo.openGraph?.title,
      description: seo.openGraph?.description,
      type: seo.openGraph?.type,
      siteName: seo.openGraph?.siteName,
      locale: seo.openGraph?.locale,
      images: seo.openGraph?.images?.map((img: string) => `${process.env.NEXT_PUBLIC_BASE_URL}${img}`) || [],
    },
    twitter: {
      card: seo.twitter?.card,
      site: seo.twitter?.site,
      creator: seo.twitter?.creator
    },
  };
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.variable} bg-bg dark:bg-dark-bg text-fg dark:text-dark-fg min-h-screen`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleInitializer />
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}