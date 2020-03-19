export const FASHION_PRODUCTS = [
  {
    id: 10,
    categoryId: 1,
    name: 'Кофта'
  },
  {
    id: 11,
    categoryId: 1,
    name: 'Футболка'
  }
];

export const PARFUME_PRODUCTS = [
  {
    id: 20,
    categoryId: 2,
    name: 'Zara'
  },
  {
    id: 21,
    categoryId: 2,
    name: 'Dior'
  }
];

export const ALL_PRODUCTS = [ ...FASHION_PRODUCTS, ...PARFUME_PRODUCTS ]

