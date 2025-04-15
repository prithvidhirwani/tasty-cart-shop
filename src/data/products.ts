
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80",
    category: "Fruits"
  },
  {
    id: 2,
    name: "Organic Apples",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&q=80",
    category: "Fruits"
  },
  {
    id: 3,
    name: "Fresh Milk",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
    category: "Dairy"
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1598373182133-52452b7a0c56?w=500&q=80",
    category: "Bakery"
  }
];
