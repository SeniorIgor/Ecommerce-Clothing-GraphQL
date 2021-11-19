import { ApolloClient, createHttpLink } from '@apollo/client';

import { cache } from './graphql/cache';

const link = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

// const typeDefs = gql`
//   extend type Query {
//     cartHidden: Boolean!
//   }
// `;

export const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});
