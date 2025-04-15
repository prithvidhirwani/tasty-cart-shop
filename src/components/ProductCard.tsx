
import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import type { CartItem } from '@/App';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  cartItem?: CartItem;
  updateQuantity?: (id: number, change: number) => void;
}

const ProductCard = ({ product, onAddToCart, cartItem, updateQuantity }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-medium mt-1">₹{product.price}</p>
        {!cartItem ? (
          <Button
            onClick={() => onAddToCart(product)}
            className="w-full mt-3 bg-green-500 hover:bg-green-600"
          >
            <Plus className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        ) : (
          <div className="flex items-center gap-2 mt-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity?.(product.id, -1)}
              className="flex-none"
              disabled={cartItem.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="flex-1 text-center">{cartItem.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity?.(product.id, 1)}
              className="flex-none"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
