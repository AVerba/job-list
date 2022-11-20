import {createContext} from 'react';

const GlobalContext = createContext({
  jobsListItems: [],
  seJobsListItems: () => {
  },
});

export default GlobalContext;
