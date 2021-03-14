
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

export type Allergen = {
    name: string;
    icon: string;
};
