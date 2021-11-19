import { InMemoryCache, makeVar } from '@apollo/client';

import { CartItem } from '../models';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartHidden: {
          read() {
            return cartHiddenVar();
          },
        },
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});

export const cartHiddenVar = makeVar<boolean>(true);
export const cartItemsVar = makeVar<Array<CartItem>>([]);
