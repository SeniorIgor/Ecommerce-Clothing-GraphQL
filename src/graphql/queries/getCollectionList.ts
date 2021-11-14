import { gql, useQuery } from '@apollo/client';
import { Collection } from '../../models/collection';

interface CollectionListResponse {
  collections: Array<Omit<Collection, 'routeName'>>;
}

export const GET_COLLECTION_LIST = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const useGetCollectionList = () =>
  useQuery<CollectionListResponse>(GET_COLLECTION_LIST);
