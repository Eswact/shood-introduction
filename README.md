# Shood Introduction Website

Next.js ile geliştirilmiş, çok dilli (TR/EN/ES) ve PWA destekli modern bir kurumsal tanıtım sitesi şablonu.

## Teknolojiler

- **Next.js 15** — App Router
- **next-intl** — Çok dilli destek (TR / EN / ES)
- **Tailwind CSS** — Stil
- **next-pwa** — Progressive Web App
- **Zustand** — State yönetimi
- **Nodemailer** — İletişim formu e-posta gönderimi

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Komutlar

```bash
npm run dev        # Geliştirme sunucusu
npm run build      # Production build
npm run start      # Production sunucusu
npm run lint       # Lint kontrolü
```

## Proje Yapısı

```
src/
├── app/
│   ├── [locale]/     # Dile göre sayfalar
│   └── api/contact/  # İletişim formu API
├── components/       # UI bileşenleri
├── messages/         # Çeviri dosyaları (tr, en, es)
├── i18n/             # next-intl yapılandırması
└── stores/           # Zustand store
public/
├── images/           # Görseller
└── icons/            # PWA ikonları
```

## Dil Desteği

| Dil | Kod |
|-----|-----|
| Türkçe | `tr` |
| İngilizce | `en` |
| İspanyolca | `es` |
