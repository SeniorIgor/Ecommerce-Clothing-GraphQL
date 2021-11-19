import { FC, memo } from 'react';

import { CollectionItemProps } from './collection-item.types';
import { addCartItem } from '../../../graphql/mutations';

import {
  Container,
  Image,
  Button,
  FooterContainer,
  Name,
  Price,
} from './collection-item.styles';

export const CollectionItem: FC<CollectionItemProps> = memo(
  ({ item, className }) => {
    const { name, price, imageUrl } = item;

    return (
      <Container className={className}>
        <Image image={imageUrl} />
        <FooterContainer>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </FooterContainer>

        <Button theme="light" onClick={() => addCartItem(item)}>
          Add to cart
        </Button>
      </Container>
    );
  }
);
