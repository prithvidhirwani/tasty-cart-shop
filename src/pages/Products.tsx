
import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/data/products';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products = ({ onAddToCart }: ProductsProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
