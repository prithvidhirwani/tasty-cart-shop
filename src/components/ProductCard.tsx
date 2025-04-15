
import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-medium mt-1">${product.price.toFixed(2)}</p>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full mt-3 bg-green-500 hover:bg-green-600"
        >
          <Plus className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
