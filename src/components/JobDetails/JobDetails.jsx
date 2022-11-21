import styles from './JobDetails.module.css';
import {BackButton} from "../UI/BackButton";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import {dateDiff} from "../../utils/daysDiff";

export const JobDetails = () => {
  const {jobsListItems} = useContext(GlobalContext);
  const {jobID} = useParams();
  const todayDate = new Date();
  const jobItem = jobsListItems.find(item => item.id === jobID);
  const dayDiff = dateDiff(todayDate, jobItem.createdAt);


  return (
    <>
      <header>Job Details</header>
      <button type="button">Apply Now</button>
      <p className={styles.description}>{jobItem.title}</p>
      <p className={styles.postDate}>Posted {dayDiff} ago</p>
      <p className={styles.description}>{jobItem.description}</p>
      <BackButton/>
    </>
  )
}
