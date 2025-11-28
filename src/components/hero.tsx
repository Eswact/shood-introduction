'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('landing.home');

  return (
    <div className='max-w-7xl px-6 sm:px-12 pb-16 pt-4 flex flex-col items-center justify-center gap-4 text-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className='aspect-square bg-white dark:bg-dark-bg rounded-lg flex items-center justify-center shadow-lg'>
          <Image src={'/icons/icon-512x512.png'} alt="Shood" width={72} height={72} className='w-16 sm:w-18' />
        </div>
      </motion.div>

      <div className='flex-1 flex flex-col items-center justify-center gap-10 sm:gap-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white">
            <span>{t('title.first-line.start')} </span>
            <span className="bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent font-extrabold">
              {t('title.first-line.highlight')}
            </span>
            <span> {t('title.first-line.end')} </span>
            <span>{t('title.second-line')} </span>
            <span className="bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent font-extrabold">
              {t('title.third-line')}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-base lg:text-lg font-semibold">{t('description')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 text-lg lg:text-xl font-bold text-white bg-indigo-600 rounded-xl shadow-xl hover:bg-opacity-90 transition-all"
          >
            {t('contact')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}