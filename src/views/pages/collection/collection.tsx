import { FC, memo } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Spinner } from '../../components/spinner';
import {
  Container,
  Title,
  ItemsContainer,
  CollectionItem,
} from './collection.styles';
import { useGetCollectionByTitle } from '../../../graphql/queries';

export const Collection: FC = memo(() => {
  const { collectionId } = useRouteMatch<{ collectionId: string }>().params;
  const { data, loading, error } = useGetCollectionByTitle({
    title: collectionId,
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const itemsView = data?.getCollectionsByTitle.items.map((item) => (
    <CollectionItem item={item} key={item.id} />
  ));

  return (
    <Container>
      <Title>{data?.getCollectionsByTitle.title}</Title>
      <ItemsContainer>{itemsView}</ItemsContainer>
    </Container>
  );
});
