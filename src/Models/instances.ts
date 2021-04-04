/* eslint-disable max-lines */
import { Category } from './types';
export const restaurant_menu: Category[] = [
  {
    name: 'Para comer',
    description: 'Se pueden pedir para llevar a casa.',
    products: [
      {
        name: 'PROMOCIÓN PARA PICAR',
        description: `Bebida natural (limonada, pomelada, limonada de piña y perejil)
        + quiche artesanal (bacon o salmón ahumado)`,
        price: 5,
      },
      {
        name: 'Quiche de bacon',
        image: 'https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg',
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
    ],
  },
  {
    name: 'Hamburguesas',
    description: `Se pueden pedir para llevar a casa.
  
      En pan de cristal y acompañadas de patatas y ensalada.`,
    products: [
      {
        name: 'Clásica con miel',
        image: 'https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg',
        description: `Ternera con queso cheddar y nuestra salsa bbq de la casa con bacon.`,
        price: 12.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
          {
            name: 'pescao',
            icon: 'pescao',
          },
        ],
      },
      {
        name: 'Montañesa',
        image: 'https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg',
        description: 'Ternera con pimientos asados, queso de cabra y lechuga.',
        price: 14.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
    ],
  },
  {
    name: 'Postres',
    description: 'Se pueden pedir para llevar a casa',
    products: [
      {
        name: 'Brownie',
        description: `Brownie casero de chocolate. Inolvidable.`,
        price: 5,
      },
      {
        name: 'Tarta de lima',
        description: `Tarta ligera de lima y crema de nata, con base crujiente de galleta.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        description: 'Bizcochos caseros',
        name: `Bizcocho de naranja y semillas de amapola.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        description: 'Bizcochos caseros',
        name: `Bizcocho de arándanos y almendra.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        description: 'Bizcochos caseros',
        name: `Bizcocho de plátano y dátiles.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        description: 'Bizcochos caseros',
        name: `Bizcocho de cacao y avellanas.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        description: 'Bizcochos caseros',
        name: `Bizcocho vegano de plátano.`,
        price: 2.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
      {
        name: 'Croissant artesano',
        price: 2,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
    ],
  },
  {
    name: 'Hamburguesas',
    description: `Se pueden pedir para llevar a casa.
  
      En pan de cristal y acompañadas de patatas y ensalada.`,
    products: [
      {
        name: 'Clásica',
        image: 'https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg',
        description: `Ternera con queso cheddar y nuestra salsa bbq de la casa con bacon.`,
        price: 12.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
          {
            name: 'pescao',
            icon: 'pescao',
          },
        ],
      },
      {
        name: 'Montañesa',
        image: 'https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg',
        description: 'Ternera con pimientos asados, queso de cabra y lechuga.',
        price: 14.5,
        allergens: [
          {
            name: 'trigo',
            icon: 'trigo',
          },
        ],
      },
    ],
  },
];
