import styles from './JobItemMob.module.css';
import {RatingStars} from "../UI/Rating";
import {ReactComponent as BookMark} from "../../img/icons/Bookmark.svg";

export const JobItemMob = () => {

  return (
    <li className={styles.item}>
      <div className={styles.header}>
        <div className={styles.rating}>
          <RatingStars className={styles.ratingStars}/>
        </div>
        <div className={styles.bookmark}>
          <p className={styles.postDate}>Posted 2 days ago</p>
        </div>
      </div>

      <div className={styles.itemImg}>
        <img className={styles.img} src="https://picsum.photos/200/300" alt="Sureplex"/>
      </div>
    </li>
  )
}
