import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations('footer');

  const quickLinks = [
    { label: 'home', href: '#home' },
    { label: 'services', href: '#services' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ];

  const services = [
    'web-development',
    'mobile-apps',
    'cloud-solutions',
    'ui-ux-design',
    'consulting',
    'maintenance',
  ];

  return (
    <footer className="w-full bg-black dark:bg-dark-bg border-t-2 border-white dark:border-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-6 sm:pt-16 pb-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/shood-dark.png" alt="Shood Logo Dark" width={120} height={40} className="w-32"/>
            </div>
            <p className="text-sm text-dark-fg opacity-80 leading-relaxed">
              {t('company.description')}
            </p>
            <div className="flex gap-3">
              <a
                key='LinkedIn'
                href='https://linkedin.com'
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all text-white hover:text-primary"
                aria-label='LinkedIn'
              >
                <Linkedin />
              </a>
              <a
                key='Twitter'
                href='https://x.com'
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all text-white hover:text-primary"
                aria-label='Twitter'
              >
                <Twitter />
              </a>
              <a
                key='Github'
                href='https://github.com'
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all text-white hover:text-primary"
                aria-label='Github'
              >
                <Github />
              </a>
              <a
                key='Instagram'
                href='https://instagram.com'
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all text-white hover:text-primary"
                aria-label='Instagram'
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">
              {t('quick-links.title')}
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-fg opacity-75 hover:text-primary hover:opacity-100 transition-all text-sm"
                  >
                    {t(`quick-links.items.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">
              {t('services.title')}
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-dark-fg opacity-75 hover:text-primary hover:opacity-100 transition-all text-sm"
                  >
                    {t(`services.items.${service}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">
              {t('contact.title')}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="text-bg text-lg" />
                <div>
                  <p className="text-xs text-dark-fg opacity-75 mb-1">
                    {t('contact.email-label')}
                  </p>
                  <a 
                    href="mailto:hello@shood.com"
                    className="text-sm text-dark-fg opacity-90 hover:text-primary hover:opacity-100 transition-all"
                  >
                    {t('contact.email')}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-bg text-lg" />
                <div>
                  <p className="text-xs text-dark-fg opacity-75 mb-1">
                    {t('contact.phone-label')}
                  </p>
                  <a 
                    href="tel:+15551234567"
                    className="text-sm text-dark-fg opacity-90 hover:text-primary hover:opacity-100 transition-all"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-bg text-lg" />
                <div>
                  <p className="text-xs text-dark-fg opacity-75 mb-1">
                    {t('contact.address-label')}
                  </p>
                  <p className="text-sm text-dark-fg opacity-90">
                    {t('contact.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-dark-fg/85 dark:border-secondary py-4 sm:py-8 flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-fg opacity-85 text-center md:text-left">
            {t('bottom.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a
              // href="/privacy"
              className="text-xs sm:text-sm text-dark-fg opacity-85 hover:text-primary hover:opacity-100 transition-all"
            >
              {t('bottom.privacy')}
            </a>
            <a
              // href="/terms"
              className="text-xs sm:text-sm text-dark-fg opacity-85 hover:text-primary hover:opacity-100 transition-all"
            >
              {t('bottom.terms')}
            </a>
            <a
              // href="/cookies"
              className="text-xs sm:text-sm text-dark-fg opacity-85 hover:text-primary hover:opacity-100 transition-all"
            >
              {t('bottom.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}