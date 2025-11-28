import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/src/styles/globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ThemeProvider from "@/src/components/theme-provider";
import LocaleInitializer from "@/src/components/locale-initializer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-montserrat",
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return {
    title: {
      default: messages.seo?.title?.default ?? "Shood",
      template: messages.seo?.title?.template ?? "%s | Shood",
    },
    description: messages.seo?.description ?? "We turn your ideas into powerful digital experiences.",
    keywords: messages.seo?.keywords ?? ["software","digital","website","web development","mobile apps","cloud","cluod solutions","ui/ux","design","consulting","maintenance"],
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Shood",
    },
    formatDetection: {
      telephone: false,
    },
    // openGraph: {
    //   title: messages.seo?.title ?? "Shood",
    //   description: messages.seo?.description ?? "We turn your ideas into powerful digital experiences.",
    //   type: "website",
    //   siteName: "Shood",
    //   locale: params.locale === 'en' ? 'en_US' : params.locale === 'es' ? 'es_ES' : params.locale === 'tr' ? 'tr_TR' : 'en_US',
    //   images: []
    // },
    twitter: {
      card: "summary_large_image",
      site: "@shood",
      creator: "@shood"
    },
  };
}


export default async function LocaleLayout({
  children,
  params,
}: {
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