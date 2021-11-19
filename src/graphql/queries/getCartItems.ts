import { gql, useQuery } from '@apollo/client';

import { CartItem } from '../../models';

interface CartItemsResponse {
  cartItems: Array<CartItem>;
}

export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const useGetCartItems = () => useQuery<CartItemsResponse>(GET_CART_ITEMS);

export default useGetCartItems;
