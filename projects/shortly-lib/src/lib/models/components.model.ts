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
  type: 'svg' | 'image';
  path: any;
}
