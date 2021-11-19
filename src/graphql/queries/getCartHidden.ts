import { gql, useQuery } from '@apollo/client';

interface CartHiddenResponse {
  cartHidden: boolean;
}

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const useGetCartHidden = () => useQuery<CartHiddenResponse>(GET_CART_HIDDEN);

export default useGetCartHidden;
