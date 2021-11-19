import { FC } from 'react';

import { CheckoutItemProps } from './checkout-item.types';
import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from '../../../graphql/mutations';

import {
  Container,
  Image,
  ImageContainer,
  TextContainer,
  Quantity,
  RemoveButton,
} from './checkout-item.styles';

export const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <Quantity>
        <div className="arrow" onClick={() => removeCartItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </Quantity>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={() => clearCartItem(item)}>&#10005;</RemoveButton>
    </Container>
  );
};
