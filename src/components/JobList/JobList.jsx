import styles from './JobList.module.css';
import * as propTypes from "prop-types";

export const JobList = ({jobs}) => {

  return (
    <ul className={styles.jobList}>
      {jobs.map(item => (
        <JobItem
          key={item.id}
          id={item.id}
          title={item.original_title}
          poster={item.poster_path}
        />
      ))}
    </ul>
  )
}
JobList.propTypes = {
  jobs: propTypes.arrayOf(
    propTypes.shape({
      item: propTypes.object,
    })
  ),
};
