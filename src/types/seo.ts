export default interface Seo {
  title: {
    default: string;
    template: string;
  };
  description: string;
  keywords: string[];
  openGraph?: {
    title: string;
    description: string;
    type: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
    siteName: string;
    locale: string;
    images?: string[];
  };
  twitter?: {
    card: "summary" | "summary_large_image" | "player" | "app";
    site: string;
    creator: string;
  };
}