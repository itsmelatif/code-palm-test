export type ITypeInputText = 'primary' | 'danger' | 'success';

export enum ITypeInputTextEnum {
  primary = 'primary',
  danger = 'danger',
  success = 'success'
}

export type ITypeButton = 'rounded';

export interface IWidgetFooter {
  title: string;
  links: {
    label: string;
    url: string;
  }[]
};

export interface ISocialMediaLinks {
  url: string;
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
