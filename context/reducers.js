export const ADD_PRODUCT = "ADD_PRODUCT";

export const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.sku === product.sku
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        console.log('enter');
        const updatedItem = {
        ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
    return addProductToCart(action.product, state);
};
