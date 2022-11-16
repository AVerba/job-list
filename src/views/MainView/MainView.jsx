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
  const [jobs, setJobs] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const searchJobs = () => {
    jobAPI.fetchSearchJobs()
      .then((results) => {
        setJobs(results)
      });
  }

  useEffect(() => {
    searchJobs();
  }, [])

  useEffect(() => {
    console.log(jobs)

  }, [jobs])

  return (
    <>Main View</>
  )
}
