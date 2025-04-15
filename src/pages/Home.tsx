
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to FreshMart
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover fresh, high-quality groceries delivered right to your doorstep.
        </p>
        <Link to="/products">
          <Button className="bg-green-500 hover:bg-green-600">
            Browse Products <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
