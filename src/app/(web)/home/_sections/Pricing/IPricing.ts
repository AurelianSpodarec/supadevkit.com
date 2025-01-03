export interface IServiceItem {
  name: string;
  highlighted: boolean;
}

export interface IPricingItem {
  highlight: boolean;
  name: string;
  description: string;
  price: number;
  priceOption?: "m"
  subtitle: string;
  services: IServiceItem[];
}
