import React, {useState, useEffect, useReducer, useMemo} from 'react';
import GlobalContext from './GlobalContext';


export default function ContextWrapper(props) {
  const [jobsListItems, seJobsListItems] = useState([]);


  return (
    <GlobalContext.Provider
      value={{
        jobsListItems,
        seJobsListItems,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
