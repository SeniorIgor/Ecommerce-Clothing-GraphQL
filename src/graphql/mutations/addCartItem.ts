import { ReactiveVar } from '@apollo/client';

import { CartItem, CollectionItem } from '../../models';
import { changeCartItem } from '../utils';

const addCartItem = (cartItemsVar: ReactiveVar<Array<CartItem>>) => {
  return (newItem: CartItem | CollectionItem) => {
    cartItemsVar(changeCartItem(cartItemsVar(), newItem));
  };
};

export default addCartItem;
