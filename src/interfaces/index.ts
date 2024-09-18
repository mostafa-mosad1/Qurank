/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IQuran {
  count: number;
  references: TReferences[];
}
export interface TReferences {
  englishName: string;
  englishNameTranslation: string;
  name: number;
  number: number;
  numberOfAyahs: string;
  revelationType: string;
}

export interface ISurah {
  ayahs: IAyah[];
  edition: any;
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}

export interface IAyah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}
export interface IHadiths {
  available: number;
  hadiths: any;
  id: string;
  name: string;
  requested: number;
}
export interface ISingleDescript {
  result: ISingleExplanationLine[];
}
export interface ISingleExplanationLine {
  arabic_text: string;
  aya: string;
  footnotes: string;
  id: string;
  sura: string;
  translation: string;
}

export interface ISingleHadit {
  arab: string;
  id: string;
  number: number;
}
export interface IRadios {
  radios: IRadio[];
}
export interface IRadio {
  id: number;
  name: string;
  url: string;
  recent_date: string;
}
