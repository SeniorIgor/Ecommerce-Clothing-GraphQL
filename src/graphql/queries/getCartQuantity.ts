import getCartItems from './getCartItems';

const getCartQuantity = () => {
  const { data } = getCartItems();

  if (!data) {
    return 0;
  }

  return data.cartItems.reduce((res, { quantity }) => res + quantity, 0);
};

export default getCartQuantity;
