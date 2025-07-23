import React from 'react';
import ProductFilter from './ProductFilter';
import CartDetails from './CartDetails';
import { getProducts } from '../../data/products';
import ProductCard from './ProductCard';

const ProductList = () => {

    const products = getProducts();
    if (!products || products.length === 0) {
        return <div className='text-center'>No products available!</div>
    }

    return (
        <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Your Products</h2>
                        <ProductFilter />
                    </div>

                    {/* Products Grid  */}

                    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            products.map((product) => {
                                return (
                                    <ProductCard key={product?.id} product={product} />
                                )
                            })
                        }


                    </div>
                </div>

                <div className="lg:col-span-1">
                    <CartDetails />
                </div>
            </div>
        </main>
    );
};

export default ProductList;