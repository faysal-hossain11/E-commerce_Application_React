import React, { useContext } from 'react';
import { getImageURL } from '../../utils/productUtils';
import Rating from './Rating';
import { ProductContext } from '../../context';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {

    const { state, dispatch } = useContext(ProductContext)

    // for stock calculate
    const cartItem = state.productData.find((item) => item.id === product.id);
    const remainingStock = product.stock - (cartItem?.quantity || 0)

    const handleAddToCart = (e, product) => {
        e.preventDefault();

        if (remainingStock <= 0) {
            toast.error(`Stock out for ${product?.title}`, {
                position: 'bottom-right'
            });
            return;
        }


        // find this card
        const find = state?.productData?.find((item) => {
            return item?.id === product?.id;
        });

        if (!find) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...product
                }
            })
            toast.success(`Add to cart ${product?.title} this product!`, {
                position: "bottom-right"
            })
        } else {
            toast.error(`${product?.title} is already in the cart!`, {
                position: "bottom-right"
            })
        }
    }

    if (!state || state.length === 0) {
        return <div className='text-center'>No products available!</div>
    }


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
                    <span className="text-xs text-gray-700">{remainingStock <= 0 ? 'Stock out' : "Stock:"} ({remainingStock})</span>
                </div>
                <div className="flex items-center">
                    <p className="font-bold">${product?.price}</p>
                    <p className="text-gray-400 line-through ml-2">
                        ${product?.originalPrice || product?.price + 20}
                    </p>
                </div>
                <button
                    disabled={remainingStock <= 0}
                    className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 hover:bg-red-400 hover:cursor-pointer"
                    onClick={(e) => handleAddToCart(e, product)}
                >
                    {remainingStock <= 0 ? "Stock out" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;