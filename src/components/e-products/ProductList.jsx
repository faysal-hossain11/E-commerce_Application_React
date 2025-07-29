import React, { useContext } from 'react';
import ProductFilter from './ProductFilter';
import CartDetails from './CartDetails';
import { getProducts } from '../../data/products';
import ProductCard from './ProductCard';
import { ProductContext } from '../../context';

const ProductList = () => {

    const { searchQuery, sortOption } = useContext(ProductContext)

    const products = getProducts();

    // search filter
    const filteredProducts = products.filter((product) =>
        product?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // sort apply
    if (sortOption === "Low to High") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "High to Low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
        filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
                            filteredProducts.map((product) => {
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