export type Category = {
  name: string;
  description: string;
  products: Product[];
};

export type Product = {
  name: string;
  description?: string;
  price: number;
  image?: string;
  allergens?: Allergen[];
};
export type ProductBasket = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  allergens?: Allergen[];
  howMuch: number;
};
export type Allergen = {
  name: string;
  icon: string;
};
export type BasketProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};
