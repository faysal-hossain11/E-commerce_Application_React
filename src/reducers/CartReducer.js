const initialState = {
    productData: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                productData: [
                    ...state.productData,
                    { 
                        ...action.payload, 
                        quantity: 1,
                        stock: action.payload.stock - 1 
                    }
                ]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                productData: state.productData.filter((product) => product?.id !== action?.payload?.id)
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                productData: state.productData.map((item) =>
                    item?.id === action?.payload?.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                productData: state.productData.map((item) => 
                    item?.id === action?.payload?.id && item?.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
                )
            }
        default:
            return state;
    }
}


export {
    initialState,
    cartReducer
}