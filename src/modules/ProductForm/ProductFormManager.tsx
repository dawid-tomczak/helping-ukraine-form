import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Category } from '../../@types/helpers/Category';
import { Product } from '../../@types/helpers/Product';
import { getCategories, getProducts } from '../../helpers/ProductsAPI';
import Form from './Form/Form';

export const ProductFormManager = (): ReactElement => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const downloadCategories = useCallback(async () => {
    const downloadedCategories = await getCategories();
    setCategories(downloadedCategories);
  }, []);

  const downloadProducts = useCallback(async () => {
    const downloadedCategories = await getProducts();
    setProducts(downloadedCategories);
  }, []);

  useEffect(() => {
    downloadCategories();
    downloadProducts();
  }, []);

  return <Form categories={categories} products={products} />;
};
