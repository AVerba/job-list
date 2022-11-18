import styles from './JobItem.module.css';

import * as propTypes from "prop-types";
import {RatingStars} from "../UI/Rating";

import {ReactComponent as LocationIcon} from "../../img/icons/Location.svg"
import {ReactComponent as BookMark} from "../../img/icons/Bookmark.svg"

export const JobItem = () => {

  return (
    <li key="12" className={styles.item}>
      <div className={styles.itemImg}>
        <img className={styles.img} src="https://picsum.photos/200/300" alt="Sureplex"/>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla
          ipsum eiusmod.</h2>
        <p className={styles.name}>Department name • Sureplex</p>
        <div className={styles.location}>
          <LocationIcon className={styles.icon} width="13px" height="18px"/>
          76 Blende Jardine Place
        </div>
      </div>
      <div className={styles.rating}>
        <RatingStars className={styles.ratingStars}/>
      </div>
      <div className={styles.bookmark}>
        <BookMark/>
        <p className={styles.postDate}>Posted 2 days ago</p>
      </div>
    </li>

  );
}
// JobItem.propTypes = {
//   id: propTypes.number.isRequired,
//   title: propTypes.string.isRequired,
//   poster: propTypes.string,
// };
