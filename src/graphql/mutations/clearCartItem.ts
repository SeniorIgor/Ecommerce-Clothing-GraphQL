import { ReactiveVar } from '@apollo/client';

import { CartItem } from '../../models/cart';
import { changeCartItem } from '../utils';

const clearCartItem = (cartItemsVar: ReactiveVar<Array<CartItem>>) => {
  return (item: CartItem) => {
    cartItemsVar(changeCartItem(cartItemsVar(), item, -item.quantity));
  };
};

export default clearCartItem;
