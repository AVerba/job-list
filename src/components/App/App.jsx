import styles from './App.module.css';

import {Routes, Route} from 'react-router-dom';
import ImageLoader from "../UI/Loader/Loader";
import {lazy, Suspense} from 'react';

const MainView = lazy(() => import('../../views/MainView/MainView'));
const JobDetailsView = lazy(() => import('../../views/JobDetailsView/JobDetailsView'));
const NotFoundPage = lazy(() => import('../../views/NotFoundView/NotFoundView'));

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<ImageLoader/>}>
        <Routes>
          <Route path="/" element={<MainView/>}/>
          <Route path="/:jobID/*" element={<JobDetailsView/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
