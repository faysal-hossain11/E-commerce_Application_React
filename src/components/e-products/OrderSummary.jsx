import React, { useContext } from 'react';
import { ProductContext } from '../../context';

const OrderSummary = () => {

    const {state} = useContext(ProductContext)

    const totalPrice = state.productData.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const discount = totalPrice * 12 / 100;
    const deliveryFee = 15;
    const grandTotal = totalPrice - discount + deliveryFee;

    return (
        <div className="space-y-2 mb-4">
            <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500">
                <span>Discount (-12%)</span>
                <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default OrderSummary;