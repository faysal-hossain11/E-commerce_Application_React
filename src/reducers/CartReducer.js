const initialState = {
    productData: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
            return {
                productData: [
                    ...state.productData,
                    action.payload
                ]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                productData: state.productData.filter((product) => product?.id !== action?.payload?.id)
            }
        default:
            return state;
    }
}


export {
    initialState,
    cartReducer
}