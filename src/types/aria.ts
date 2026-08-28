export interface AriaImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  year: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square" | "panoramic";
}

export interface AriaData {
  intro: {
    headline: string;
    subhead: string;
  };
  statement: {
    text: string;
  };
  about: {
    background: string;
    approach: string;
    philosophy: string;
    location: string;
  };
  gallery: AriaImage[];
}