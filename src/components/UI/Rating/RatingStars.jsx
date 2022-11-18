import styles from './RatingStars.module.css';
import Rating from '@mui/material/Rating';
import {useState} from "react";
import {ReactComponent as StarTrue} from "../../../img/icons/starTrue.svg"
import {ReactComponent as StarFalse} from "../../../img/icons/starFalse.svg"


export const RatingStars = () => {
  const [value, setValue] = useState(2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      icon={<StarTrue fontSize="inherit" />}
      emptyIcon={<StarFalse fontSize="inherit" />}
      sx={{
        '& .MuiRating-iconFilled': {
          color: '#38415D',
        },
        '& .MuiRating-iconFocus': {
          color: '#38415D',
        },
        '& .MuiRating-iconHover': {
          color: '#38415D',
        },
      }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  )

}
