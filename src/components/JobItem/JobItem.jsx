import styles from './JobItem.module.css';
import {RatingStars} from "../UI/Rating";

export const JobItem = () => {

  return (
    <li key={}>
      <img className={styles.avatar} src={} alt={}/>
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
