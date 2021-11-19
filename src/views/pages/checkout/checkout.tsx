import { FC, memo } from 'react';

import { CheckoutItem } from '../../components/checkout-item';
import { StripeButton } from '../../components/stripe-button';
import { useGetCartItems, useGetCartTotal } from '../../../graphql/queries';
import { headerColumns } from './checkout.data';

import {
  Container,
  HeaderContainer,
  HeaderColumn,
  Total,
  Message,
} from './checkout.styles';

export const Checkout: FC = memo(() => {
  const { data } = useGetCartItems();
  const total = useGetCartTotal();

  const itemsView = data?.cartItems.map((item) => (
    <CheckoutItem item={item} key={item.id} />
  ));

  const headerView = headerColumns.map(({ id, title }) => (
    <HeaderColumn key={id}>
      <span>{title}</span>
    </HeaderColumn>
  ));

  return (
    <Container>
      <HeaderContainer>{headerView}</HeaderContainer>
      {itemsView}

      <Total>Total: ${total}</Total>
      <Message
        href="https://stripe.com/docs/testing#cards"
        target="_blank"
        rel="noreferrer"
      >
        *Please use the following test credit card for payments* <br />
        4242 4242 4242 4242&nbsp;&mdash; Exp: 01/25&nbsp;&mdash; CVV: 123 <br />
      </Message>
      <StripeButton price={total} />
    </Container>
  );
});
