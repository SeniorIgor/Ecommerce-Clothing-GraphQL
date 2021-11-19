import { ReactiveVar } from '@apollo/client';

import { CartItem } from '../../models/cart';
import { changeCartItem } from '../utils';

const removeCartItem = (cartItemsVar: ReactiveVar<Array<CartItem>>) => {
  return (item: CartItem) => {
    cartItemsVar(changeCartItem(cartItemsVar(), item, -1));
  };
};

export default removeCartItem;
