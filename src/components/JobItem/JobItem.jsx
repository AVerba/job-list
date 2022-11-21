import styles from './JobItem.module.css';

import * as propTypes from "prop-types";
import {RatingStars} from "../UI/Rating";

import {ReactComponent as LocationIcon} from "../../img/icons/Location.svg"
import {ReactComponent as BookMark} from "../../img/icons/Bookmark.svg"
import {dateDiff} from "../../utils/daysDiff";
import {JobItemMob} from "../JobItemMob/JobItemMob";
import {Link, useLocation, useParams} from 'react-router-dom';

export const JobItem = ({id, createdAt, name, address, title, pictures}) => {
  const location = useLocation();
  const todayDate = new Date();
  const dayDiff = dateDiff(todayDate, createdAt);


  return (
    <li className={styles.item} id={id}>
      <Link
        to={`/${id}`}
        state={{from: location}}
        className={styles.link}>

        <div className={styles.itemImg}>
          <img className={styles.img} src={pictures[0]} alt="Sureplex"/>
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.name}>Department name • {name}</p>
          <div className={styles.location}>
            <LocationIcon className={styles.icon} width="13px" height="18px"/>
            {address}
          </div>
        </div>
        <div className={styles.rating}>
          <RatingStars className={styles.ratingStars}/>
        </div>
        <div className={styles.bookmark}>
          <BookMark/>
          <p className={styles.postDate}>Posted {dayDiff} ago</p>
        </div>
      </Link>
    </li>

  );
}
JobItemMob.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  createdAt: propTypes.string,
  address: propTypes.string.isRequired,
  pictures: propTypes.arrayOf(propTypes.string.isRequired),
};
