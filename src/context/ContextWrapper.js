import React, {useState, useEffect, useReducer, useMemo} from 'react';
import GlobalContext from './GlobalContext';


export default function ContextWrapper(props) {
  const [jobsListItems, seJobsListItems] = useState([]);
  const [totalPages, setTotalPages] = useState(null);


  return (
    <GlobalContext.Provider
      value={{
        jobsListItems,
        seJobsListItems,
        totalPages,
        setTotalPages
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
