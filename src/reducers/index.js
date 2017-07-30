import { combineReducers } from 'redux';
import ApolloClient from 'apollo-client';
import MenuReducer from './MenuReducer';

const client = new ApolloClient({ reduxRootSelector: 'differentKey' });

export default combineReducers({
  MenuReducer,
  differentKey: client.reducer(),
});
