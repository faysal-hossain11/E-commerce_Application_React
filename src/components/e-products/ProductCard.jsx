import React from 'react';
import { getImageURL } from '../../utils/productUtils';
import Rating from './Rating';

const ProductCard = ({product}) => {
    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={getImageURL(product?.cover)} alt={product?.title}
                    className="h-full w-auto object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-medium">{product?.title}</h3>
                <div className="flex items-center justify-between">
                    <Rating rating={product?.rating} />
                    <span className="text-xs text-gray-700">Stock: ({product?.stock})</span>
                </div>
                <div className="flex items-center">
                    <p className="font-bold">${product?.price}</p>
                    <p className="text-gray-400 line-through ml-2">
                        ${product?.originalPrice || product?.price + 20}
                    </p>

                </div>
                <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;