import styles from './MainView.module.css';
import {useEffect, useState} from "react";
import jobAPI from '../../services/serviceApi';
import {Desktop, Mobile, Tablet} from "../../utils/mediaQuery";
import {MapLocation} from "../../components/MapLocation";
import {JobList} from "../../components/JobList";
import {JobItem} from "../../components/JobItem";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MainView = () => {
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
    <>
      <Mobile>
        <>Main View Mobile</>
      </Mobile>

      <Tablet>
        <>Main View Tablet</>
        {/*<MapLocation/>*/}
      </Tablet>

      <Desktop>

          {/*<>Main View Desktop</>*/}
        <JobItem/>
          {/*<JobList/>*/}


      </Desktop>
    </>

  )
}
export default MainView;
