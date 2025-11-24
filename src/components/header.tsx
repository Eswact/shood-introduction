import Image from "next/image"
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from "@/src/components/language-switcher";
import ThemeSwitcher from "@/src/components/theme-switcher";

export default async function Header() {
  const t = await getTranslations('shared');

  return (
    <header className="z-10 fixed h-20 w-full p-2 flex justify-center items-center bg-white/85 dark:bg-dark-bg/85 backdrop-blur-xl shadow-md">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div>
          <a href="#home">
            <Image src="/images/shood.png" alt="Shood Logo" width={120} height={40} className="w-24 md:w-32 dark:hidden"/>
            <Image src="/images/shood-dark.png" alt="Shood Logo Dark" width={120} height={40} className="w-24 md:w-32 hidden dark:block"/>
          </a>
        </div>
        <nav className="hidden sm:flex flex-1 justify-center items-center">
          <ul className="flex items-center gap-2 lg:px-4 sm:gap-10 sm:px-10 text-secondary dark:text-dark-fg text-sm md:text-lg">
            <li><a href="#services" className="p-2 lg:p-4 font-medium hover:text-primary">{t('services')}</a></li>
            <li><a href="#about" className="p-2 lg:p-4 font-medium hover:text-primary">{t('about')}</a></li>
            <li><a href="#contact" className="p-2 lg:p-4 font-medium hover:text-primary">{t('contact')}</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}