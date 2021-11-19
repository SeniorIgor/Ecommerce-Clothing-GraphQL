import getCartItems from './getCartItems';

const useGetTotal = () => {
  const { data } = getCartItems();

  if (!data) {
    return 0;
  }

  return data.cartItems.reduce(
    (res, { price, quantity }) => res + price * quantity,
    0
  );
};

export default useGetTotal;
