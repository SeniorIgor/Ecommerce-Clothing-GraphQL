import { FC, useMemo, memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { CartItem } from '../cart-item';
import { toggleCartHidden } from '../../../graphql/mutations';
import { useGetCartItems } from '../../../graphql/queries';

import {
  Container,
  Message,
  CartItemsContainer,
  CartItems,
  Button,
} from './cart-dropdown.styles';

import 'react-perfect-scrollbar/dist/css/styles.css';

type HandleClick = React.MouseEventHandler<HTMLButtonElement>;

const scrollBarProps = {
  wheelPropagation: false,
};

export const CartDropdown: FC = memo(() => {
  const { data } = useGetCartItems();

  const history = useHistory();

  const handleClick: HandleClick = useCallback(() => {
    history.push('/checkout');
    toggleCartHidden();
  }, [history]);

  const itemsView = useMemo(() => {
    return data?.cartItems.map((item) => (
      <CartItem item={item} key={item.id} />
    ));
  }, [data]);

  return (
    <Container>
      <CartItemsContainer>
        {data?.cartItems.length ? (
          <PerfectScrollbar options={scrollBarProps}>
            <CartItems>{itemsView}</CartItems>
          </PerfectScrollbar>
        ) : (
          <Message>Your cart is empty</Message>
        )}
      </CartItemsContainer>
      <Button onClick={handleClick}>Go to checkout</Button>
    </Container>
  );
});
