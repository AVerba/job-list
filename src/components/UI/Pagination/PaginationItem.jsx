import styles from './PaginationItem.module.css';
import {Pagination} from "@mui/material";
import {useContext} from "react";
import GlobalContext from "../../../context/GlobalContext";

export const PaginationItem = () => {
  const {totalPages} = useContext(GlobalContext);

  return (
    totalPages ? (<Pagination count={totalPages} variant="outlined" shape="rounded"/>):(<></>)

  )
}
