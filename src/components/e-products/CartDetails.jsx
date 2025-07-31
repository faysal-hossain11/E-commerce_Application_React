
import { useContext } from 'react';
import { ProductContext } from '../../context';
import { getImageURL } from '../../utils/productUtils';
import OrderSummary from './OrderSummary';
import { toast } from 'react-toastify';

const CartDetails = () => {


    const { state, dispatch } = useContext(ProductContext);

    const handleDelete = (item, id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id }
        })
        toast.success(`${item?.title} delete on the cart!`, {
            position: "bottom-right"
        })
    }

    const handleIncrease = (item, id) => {
        dispatch({
            type: "INCREASE_QUANTITY",
            payload: { id }
        })
        toast.success(`${item?.title} increase quantity`, {
            position: "bottom-right"
        })
    }

    const handleDecrease = (item, id) => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: { id }
        })
        toast.success(`${item?.title} decrease quantity`, {
            position: "bottom-right"
        })
    }



    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

            {
                state?.productData?.length > 0 ? (
                    state?.productData.map((item) => {
                        return (
                            <div key={item?.id} className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                                    <img src={getImageURL(item?.cover)} alt={item?.title} className="h-full w-auto object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium">{item?.title}</h3>
                                        <button
                                            className="text-red-500 px-2 py-1 rounded-md bg-red-100 cursor-pointer"
                                            onClick={() => handleDelete(item, item?.id)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 inline">
                                        Size: {item?.sizes?.map((size) => {
                                            return (
                                                <span className='inline mr-2'>{size}</span>
                                            )
                                        })}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Color: {item?.colors?.map((color) => <span className='mr-2'>{color}</span>)}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="font-bold">${item?.price}</p>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                className="w-6 h-6 rounded flex items-center justify-center bg-green-100 cursor-pointer"
                                                onClick={() => handleDecrease(item, item?.id)}
                                            >−</button>
                                            <span className="text-sm">{item?.quantity}</span>
                                            <button
                                                className="w-6 h-6 rounded flex items-center justify-center bg-green-100 cursor-pointer"
                                                onClick={() => handleIncrease(item, item?.id)}
                                                disabled={item?.quantity > item?.stock }
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : <p className='text-center font-bold'>No Cart Data!</p>
            }




            <div className="mt-6">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>

                <OrderSummary />

                <div className="flex items-center space-x-2 mb-6">
                    <div className="flex-grow relative">
                        <input type="text" placeholder="Add promo code"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                        <span className="absolute left-3 top-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </span>
                    </div>
                    <button className="bg-black text-white rounded-md px-4 py-2 text-sm">Apply</button>
                </div>

                <a href="#"
                    className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors">
                    Go to Checkout
                    <span className="inline-block ml-2">→</span>
                </a>
            </div>
        </div>
    );
};

export default CartDetails;