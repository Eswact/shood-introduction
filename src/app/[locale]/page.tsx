import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default async function Landing() {
  const t = await getTranslations('landing');

  const servicesImages = [
    { image: '/images/web-development.png', alt: 'Web Development' },
    { image: '/images/mobile-development.png', alt: 'mobile-development' },
    { image: '/images/ui-ux-design.png', alt: 'ui-ux-design' },
    { image: '/images/cloud-solutions.png', alt: 'cloud-solutions' },
    { image: '/images/consulting.png', alt: 'consulting' },
    { image: '/images/maintenance.png', alt: 'maintenance' },
  ];

  return (
    <div className="w-full pt-20 flex flex-col items-center">
      {/* HOME SECTION */}
      <section id='home' className="relative scroll-mt-20 w-full bg-white dark:bg-dark-bg min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center" style={{ backgroundImage: "url('images/climpek.png')" }}>
        <span className="hidden dark:block pointer-events-none absolute top-2 left-2 w-72 h-72 bg-primary/10 blur-3xl rounded-2xl"></span>
        <span className="hidden dark:block pointer-events-none absolute bottom-8 right-8 w-72 h-72 bg-tertiary/10 blur-3xl rounded-2xl"></span>
        <div className='max-w-7xl px-6 sm:px-12 pb-16 pt-4 flex flex-col items-center justify-center gap-4 text-center'>
          <div className='aspect-square bg-white dark:bg-dark-bg rounded-lg flex items-center justify-center shadow-lg'>
            <Image src={'/icons/icon-512x512.png'} alt="Shood" width={72} height={72} className='w-16 sm:w-18' />
          </div>
          <div className='flex-1 flex flex-col items-center justify-center gap-10 sm:gap-16 text-center'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white">
              <span>{t('home.title.first-line.start')} </span>
              <span className="bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent font-extrabold">{t('home.title.first-line.highlight')} </span>
              <span>{t('home.title.first-line.end')} </span>
              <span>{t('home.title.second-line')} </span>
              <span className="bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent font-extrabold">{t('home.title.third-line')}</span>
            </h1>
            <p className="text-base lg:text-lg font-semibold">{t('home.description')}</p>
            <a href="#contact" className="px-8 py-3 text-lg lg:text-xl font-bold text-white bg-primary rounded-xl shadow-lg hover:bg-opacity-90 transition-all">
              {t('home.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS SECTION */}
      <section>

      </section>

      {/* SERVICES SECTION */}
      <section id='services' className="scroll-mt-20 w-full bg-bg dark:bg-secondary min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="max-w-7xl p-6 sm:p-12 w-full flex flex-col items-center gap-8">
          <h3 className='text-base font-bold px-4 py-1 text-tertiary border-2 border-tertiary bg-tertiary/25 rounded-full shadow-xl'>{t(`services.section`)}</h3>
          <div className='flex-1 flex flex-col items-center justify-center gap-12 text-center'>
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">{t('services.title')}</h2>
              <p className="text-sm sm:text-lg text-secondary dark:text-dark-fg opacity-80">{t('services.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-white to-white/50 dark:from-dark-bg dark:to-dark-bg/50 border-2 border-white dark:border-dark-bg p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-lg">
                    <Image src={servicesImages[index].image} alt={servicesImages[index].alt} width={72} height={72} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                    {t(`services.items.${index}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary dark:text-dark-fg opacity-75">
                    {t(`services.items.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id='about' className="scroll-mt-20 w-full bg-white dark:bg-dark-bg min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="max-w-7xl p-6 sm:p-12 w-full flex flex-col items-center gap-8">
          <h3 className='text-base font-bold px-4 py-1 text-tertiary border-2 border-tertiary bg-tertiary/25 rounded-full shadow-xl'>
            {t(`about.section`)}
          </h3>
          <div className='w-full flex-1 flex flex-col items-center justify-center gap-16 text-center'>
            <div className="flex flex-col gap-6 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white">
                {t('about.title')}
              </h2>
              <p className="text-sm sm:text-lg mx-auto text-secondary dark:text-dark-fg opacity-75 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="text-center p-6 flex flex-col items-center justify-center gap-2 bg-linear-to-br from-white to-bg dark:from-tertiary/15 dark:to-secondary/15 border-2 border-bg dark:border-secondary rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                  <div className="text-3xl sm:text-5xl font-bold text-primary">
                    {t(`about.stats.${index}.value`)}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary dark:text-dark-fg opacity-75 font-medium">
                    {t(`about.stats.${index}.label`)}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full bg-bg dark:bg-secondary/10 rounded-2xl p-6 sm:p-12 flex flex-col gap-12 justify-center items-center shadow-md" style={{ backgroundImage: "url('images/climpek.png')" }}>
              <div className="text-center max-w-4xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
                  {t('about.story.title')}
                </h3>
                <p className="text-sm sm:text-lg font-medium mx-auto text-secondary dark:text-dark-fg opacity-75 leading-relaxed">
                  {t('about.story.description')}
                </p>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white text-center mb-4">
                {t('about.team.title')}
              </h3>
              <p className="text-sm sm:text-base text-center max-w-2xl mx-auto text-secondary dark:text-dark-fg opacity-75 mb-12">
                {t('about.team.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-white to-bg dark:from-tertiary/25 dark:to-secondary/25 border-2 border-bg dark:border-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center gap-4"
                  >
                    <Image
                      src={t(`about.team.members.${index}.image`)}
                      alt={t(`about.team.members.${index}.name`)}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover object-top shadow-md"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                        {t(`about.team.members.${index}.name`)}
                      </h4>
                      <p className="text-sm text-primary font-semibold mb-2">
                        {t(`about.team.members.${index}.role`)}
                      </p>
                      <p className="text-sm text-secondary dark:text-dark-fg opacity-75">
                        {t(`about.team.members.${index}.bio`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section>

      </section>

      {/* CONTACT SECTION */}
      <section id='contact' className="scroll-mt-20 w-full bg-bg dark:bg-secondary min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center pb-10">
        <div className="max-w-7xl p-6 sm:p-12 w-full flex flex-col items-center gap-8">
          <h3 className='text-base font-bold px-4 py-1 text-tertiary border-2 border-tertiary bg-tertiary/25 rounded-full shadow-xl'>
            {t(`contact.section`)}
          </h3>
          <div className='w-full flex-1 flex flex-col items-center justify-center gap-12 text-center'>
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">{t('contact.title')}</h2>
              <p className="text-lg text-secondary dark:text-dark-fg opacity-80 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="flex flex-col justify-center gap-6 lg:col-span-2 bg-white dark:bg-dark-bg p-10 rounded-2xl shadow-lg">
                <form className="flex flex-col justify-center gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
                        {t('contact.form.name-label')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('contact.form.name')}
                        className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
                        {t('contact.form.email-label')}
                      </label>
                      <input
                        type="email"
                        placeholder={t('contact.form.email')}
                        className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
                      {t('contact.form.subject-label')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.form.subject')}
                      className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
                      {t('contact.form.message-label')}
                    </label>
                    <textarea
                      rows={6}
                      placeholder={t('contact.form.message')}
                      className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-lg font-bold text-white bg-linear-to-r from-primary to-tertiary rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    {t('contact.form.submit')} →
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-2xl" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-1">Email</h3>
                      <a
                        href="mailto:hello@shood.com"
                        className="text-sm text-secondary dark:text-dark-fg opacity-75 hover:text-primary transition-all"
                      >
                        {t('contact.info.email')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-2xl" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-secondary dark:text-dark-fg opacity-75 hover:text-primary transition-all"
                      >
                        {t('contact.info.phone')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-2xl" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-1">Address</h3>
                      <p className="text-sm text-secondary dark:text-dark-fg opacity-75">
                        {t('contact.info.address')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12059.597017035732!2d29.2051395!3d40.9179548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4e88ba3fc3f%3A0x78d5d8b3fc0227c5!2zUGHFn2FiYWjDp2UgU2l0ZQ!5e0!3m2!1sen!2str!4v1763919557196!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}