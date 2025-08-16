export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  monthlySpend: string;
  ecommerseSpend: string;
  amazon: string;
  flipkart: string;
  tataNeu: string;
  myntra: string;
  bigBasket: string;
  blinkIt: string;
  ecommerseOthers: string;
  travelSpend: string;
  makeMyTrip: string;
  irctc: string;
  vistara: string;
  airIndia: string;
  indigo: string;
  easeMyTrip: string;
  ola: string;
  uber: string;
  offlineTravelSpend: string;
  diningSpend: string;
  zomato: string;
  swiggy: string;
  eazyDiner: string;
  luxurySpend: string;
  offlineApparelFashion: string;
  departmentalStoresSupermarket: string;
  hotelsAndHolidays: string;
  movieSpend: string;
  pvr: string;
  bookMyShow: string;
  fuel: string;
  utility: string;
  foreignCurrencyTransaction: string;
  otherSpends: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface StepConfig {
  step: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}
