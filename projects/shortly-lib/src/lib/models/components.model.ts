export type ITypeInputText = 'primary' | 'danger' | 'success';

export enum ITypeInputTextEnum {
  primary = 'primary',
  danger = 'danger',
  success = 'success'
}

export type ITypeButton = 'rounded' | 'is-active-mobile';

export interface IWidgetFooter {
  title: string;
  links: {
    label: string;
    url: string;
  }[]
};

export interface ISocialMediaLinks {
  type: 'svg' | 'image';
  path: any;
}

export interface ICardIcon {
  pathImage: string;
  title: string;
  description: string;
}

export interface ICardLink {
  rawUrl: string;
  shortUrl: string;
}
