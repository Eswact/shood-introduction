'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('landing');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Bağlantı hatası. Lütfen tekrar deneyin.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
            {t('contact.form.name-label')}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form.name')}
            required
            className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
            {t('contact.form.email-label')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.email')}
            required
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
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('contact.form.subject')}
          required
          className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-black dark:text-white mb-2 text-left">
          {t('contact.form.message-label')}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder={t('contact.form.message')}
          required
          className="w-full px-4 py-3 rounded-xl bg-bg dark:bg-secondary text-black dark:text-white border-2 border-transparent focus:border-primary outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 text-lg font-bold text-white bg-linear-to-r from-primary to-tertiary rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Gönderiliyor...' : `${t('contact.form.submit')} →`}
      </button>

      {status === 'success' && (
        <div className="p-3 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-xl text-green-700 dark:text-green-300 text-center font-semibold">
          Mesajınız başarıyla gönderildi!
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-xl text-red-700 dark:text-red-300 text-center font-semibold">
          {errorMessage}
        </div>
      )}
    </form>
  );
}