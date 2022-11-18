import styles from './JobList.module.css';
import * as propTypes from "prop-types";
import {JobItem} from "../JobItem";

export const JobList = () => {

  return (
    <ul className={styles.jobList}>
    </ul>
  )
}
// JobList.propTypes = {
//   jobs: propTypes.arrayOf(
//     propTypes.shape({
//       item: propTypes.object,
//     })
//   ),
// };
