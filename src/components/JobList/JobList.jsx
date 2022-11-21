import styles from './JobList.module.css';
import * as propTypes from "prop-types";
import {JobItem} from "../JobItem";
import {Desktop, Mobile, Tablet} from "../../utils/mediaQuery";
import {JobItemMob} from "../JobItemMob/JobItemMob";
import {useContext, useEffect, useState} from "react";
import jobAPI from "../../services/serviceApi";
import GlobalContext from "../../context/GlobalContext";
import {Notify} from "notiflix";
import ImageLoader from "../UI/Loader/Loader";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const JobList = () => {
  const {jobsListItems, seJobsListItems} = useContext(GlobalContext);
  const {setTotalPages} = useContext(GlobalContext);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const searchJobs = () => {
    setStatus(Status.PENDING);
    jobAPI.fetchSearchJobs()
      .then((results) => {
        setStatus(Status.RESOLVED);
        seJobsListItems(results);
        setTotalPages(1);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    ;
  }

  useEffect(() => {
    searchJobs();
  }, [])

  useEffect(() => {
    console.log(jobsListItems)

  }, [jobsListItems])

  return (
    <>
      {status === 'pending' ? <ImageLoader/> : null}
      {status === 'rejected' ? Notify.warning(`${error.message}`) : null}

      <Mobile>
        {status === 'resolved' ? (
          <ul className={styles.list}>
            {jobsListItems.map((item) => (
              <JobItemMob
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                name={item.name}
                address={item.address}
                title={item.title}
                pictures={item.pictures}
              />
            ))}
          </ul>
        ) : null}
      </Mobile>

      <Tablet>
        <>Main View Tablet</>
      </Tablet>

      <Desktop>
        {status === 'resolved' ? (
          <ul className={styles.list}>
            {jobsListItems.map((item) => (
              <JobItem
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                name={item.name}
                address={item.address}
                title={item.title}
                pictures={item.pictures}
              />
            ))}
          </ul>
        ) : null}
        {/*<JobItem/>*/}
      </Desktop>
    </>
  )
}
JobList.propTypes = {
  jobs: propTypes.arrayOf(
    propTypes.shape({
      item: propTypes.object,
    })
  ),
};
