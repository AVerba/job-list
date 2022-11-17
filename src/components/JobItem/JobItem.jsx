import styles from './JobItem.module.css';
import {RatingStars} from "../UI/Rating";
import * as propTypes from "prop-types";

export const JobItem = ({ id, poster, title }) => {

  return (
    <li key={id}>
      <img className={styles.avatar} src={poster} alt={title}/>
      <div className={styles.description}>
        <h3 className={styles.title}>Job Item</h3>
        <p className={styles.subTitle}>sub title</p>
      </div>
      <div className={styles.rating}>
        <RatingStars/>
      </div>
      <div className={styles.bookmark}></div>
    </li>

  );
}
JobItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string,
};
