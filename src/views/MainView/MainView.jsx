import styles from './MainView.module.css';
import {JobList} from "../../components/JobList";
import {PaginationItem} from "../../components/UI/Pagination";

const MainView = () => {
  return (
    <>
      <JobList/>
      <PaginationItem/>
    </>


  )
}
export default MainView;
