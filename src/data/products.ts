
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
    price: 99,
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80",
    category: "Fruits"
  },
  {
    id: 2,
    name: "Organic Apples",
    price: 149,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&q=80",
    category: "Fruits"
  },
  {
    id: 3,
    name: "Fresh Milk",
    price: 89,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
    category: "Dairy"
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    price: 45,
    image: "https://images.unsplash.com/photo-1598373182133-52452b7a0c56?w=500&q=80",
    category: "Bakery"
  },
  {
    id: 5,
    name: "Brown Rice",
    price: 129,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    category: "Grains"
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 59,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&q=80",
    category: "Vegetables"
  },
  {
    id: 7,
    name: "Organic Spinach",
    price: 39,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80",
    category: "Vegetables"
  },
  {
    id: 8,
    name: "Greek Yogurt",
    price: 79,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80",
    category: "Dairy"
  }
];
