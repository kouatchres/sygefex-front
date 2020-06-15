import withApollo from 'next-with-apollo';
// brings in all the bells and whistles for a modern Apollo client state and link management
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          // sends in all neccessary info about the logged in client
          credentials: 'include',
        },
        headers,
      });
    },
   
  });
}

export default withApollo(createClient);
