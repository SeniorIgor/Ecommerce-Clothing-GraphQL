import { FC, memo, useCallback } from 'react';

import { toggleCartHidden } from '../../../graphql/mutations';
import { useGetCartQuantity } from '../../../graphql/queries';

import { Container, Icon, ItemCount } from './cart-icon.styles';

export const CartIcon: FC = memo(() => {
  const quantity = useGetCartQuantity();

  const handleClick = useCallback(() => toggleCartHidden(), []);

  return (
    <Container onClick={handleClick}>
      <Icon />
      <ItemCount>{quantity}</ItemCount>
    </Container>
  );
});
