import {createContext} from 'react';

const GlobalContext = createContext({
  jobsListItems: [],
  seJobsListItems: () => {
  },
  totalPages: 0,
  setTotalPages: index => {},
});

export default GlobalContext;
