import { gql, useQuery } from '@apollo/client';
import { Collection } from '../../models/collection';

interface CollectionByTitleResponse {
  getCollectionsByTitle: Omit<Collection, 'routeName'>;
}

interface CollectionByTitleVariables {
  title: string;
}

export const GET_COLLECTION_BY_TITLE = gql`
  query GetCollectionByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const useGetCollectionByTitle = (variables: CollectionByTitleVariables) =>
  useQuery<CollectionByTitleResponse, CollectionByTitleVariables>(
    GET_COLLECTION_BY_TITLE,
    { variables }
  );

export default useGetCollectionByTitle;
