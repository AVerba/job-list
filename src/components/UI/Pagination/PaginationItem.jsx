import styles from './PaginationItem.module.css';
import {Pagination} from "@mui/material";

export const PaginationItem = () => {

  return (
    <Pagination count={10} variant="outlined" shape="rounded" />
  )
}
