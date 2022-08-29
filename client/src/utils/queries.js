import { Query } from "@apollo/react-components";
import { gql } from "apollo-boost";

const GET_ME = gql`
  {
    #call the me query in the resolvers file while passing the token
    me(token) {
        id
        username
        email
        bookCount
        SavedBooks
    }
  }
`;
