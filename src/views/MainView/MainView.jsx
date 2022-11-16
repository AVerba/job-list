import style from './MainView.module.css';
import {useEffect, useState} from "react";
import jobAPI from '../../services/serviceApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const MainView = () => {
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const res =jobAPI.fetchSearchJobs();
    console.log( res);

  })

  return (
    <>Main View</>
  )
}
