import { FC, memo } from 'react';

import { CollectionPreview } from '../collection-preview';
import { Spinner } from '../spinner';
import { Props } from './collections-overview.types';
import { Container } from './collections-overview.styled';
import { useGetCollectionList } from '../../../graphql/queries';

export const CollectionsOverview: FC<Props> = memo(({ className }) => {
  const { data, loading, error } = useGetCollectionList();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const collectionsView = data?.collections.map(({ id, ...otherProps }) => (
    <CollectionPreview {...otherProps} key={id} />
  ));

  return <Container className={className}>{collectionsView}</Container>;
});
