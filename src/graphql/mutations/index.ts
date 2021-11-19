import createToggleCartHidden from './toggleCartHidden';
import createAddCartItem from './addCartItem';
import createRemoveCartItem from './removeCartItem';
import createClearCartItem from './clearCartItem';

import { cartHiddenVar, cartItemsVar } from '../cache';

export const toggleCartHidden = createToggleCartHidden(cartHiddenVar);
export const addCartItem = createAddCartItem(cartItemsVar);
export const removeCartItem = createRemoveCartItem(cartItemsVar);
export const clearCartItem = createClearCartItem(cartItemsVar);
