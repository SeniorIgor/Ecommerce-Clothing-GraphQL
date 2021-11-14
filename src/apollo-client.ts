import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';

const link = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link,
  cache,
});

apolloClient.writeQuery({
  query: gql`
    query GetCartHidden {
      cartHidden
    }
  `,
  data: {
    cartHidden: true,
  },
});
