import styles from './JobItemMob.module.css';
import {RatingStars} from "../UI/Rating";
import {ReactComponent as BookMark} from "../../img/icons/Bookmark.svg";
import {ReactComponent as LocationIcon} from "../../img/icons/Location.svg";

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

      <div className={styles.content}>
        <div className={styles.itemImg}>
          <img className={styles.img} src="https://picsum.photos/200/300" alt="Sureplex"/>
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat
            nulla
            ipsum eiusmod.</h2>
          <p className={styles.name}>Department name • Sureplex</p>
          <div className={styles.location}>
            <LocationIcon className={styles.icon} width="13px" height="18px"/>
            76 Blende Jardine Place
          </div>
        </div>

      </div>


    </li>
  )
}
