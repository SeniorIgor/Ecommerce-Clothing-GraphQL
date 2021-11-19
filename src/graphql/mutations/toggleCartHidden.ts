import { ReactiveVar } from '@apollo/client';

const toggleCartHidden = (cartHiddenVar: ReactiveVar<boolean>) => () => {
  cartHiddenVar(!cartHiddenVar());
};

export default toggleCartHidden;
