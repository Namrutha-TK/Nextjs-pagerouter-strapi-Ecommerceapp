'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { ProductService } from '../../services/Products_Service';
import CategoryList from '../../components/CategoryList/CategoryList';
import Style from './Products.module.css';
import { MerchantService } from '@/services/Merchant_Service';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await ProductService.getProducts();
        const fetchedCategories = await MerchantService.getCategory();

        setProducts(fetchedProducts);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <ProductPageClient products={products} categories={categories} />;
};

const ProductPageClient: React.FC<{ products: any[]; categories: string[] }> = ({ products, categories }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryFilter = (category: string | null) => {
    if (category) {
      const filtered = products.filter((product) => product.category_name === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <CategoryList categories={categories} setCategoryFilter={handleCategoryFilter} />
        <div className={` d-flex ${Style.product_List}`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any) => (
              <ProductCard key={product.documentId} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;






