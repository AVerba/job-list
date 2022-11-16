import styles from './RatingStars.module.css';
import Rating from '@mui/material/Rating';
import {useState} from "react";


export const RatingStars = () => {
  const [value, setValue] = useState(2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  )

}
