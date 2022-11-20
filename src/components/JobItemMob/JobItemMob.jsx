import styles from './JobItemMob.module.css';
import propTypes from 'prop-types';
import {ReactComponent as LocationIcon} from "../../img/icons/Location.svg";
import {RatingStars} from "../UI/Rating";
import {dateDiff} from "../../utils/daysDiff";

export const JobItemMob = ({id,createdAt,name,address,title,pictures}) => {
  const todayDate = new Date();
  const dayDiff = dateDiff(todayDate, createdAt);

  return (
    <li className={styles.item} id={id}>
      <div className={styles.header}>
        <div className={styles.rating}>
          <RatingStars className={styles.ratingStars}/>
        </div>
        <div className={styles.bookmark}>
          <p className={styles.postDate}>Posted {dayDiff} ago</p>
        </div>
      </div>

      <div className={styles.content}>
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
      </div>
    </li>
  )
}

JobItemMob.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  createdAt: propTypes.string,
  address: propTypes.string.isRequired,
  pictures: propTypes.arrayOf(propTypes.string.isRequired),
};
