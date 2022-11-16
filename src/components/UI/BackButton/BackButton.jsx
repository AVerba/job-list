import styles from './BackButton.module.css';
import {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [from, setFrom] = useState('');

  useEffect(() => {
    if (state?.from) {
      const {pathname, search} = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <button
      className={styles.backBtn}
      title="Back"
      onClick={handleBack}
      type="button"
    >
      return to job board
    </button>
  )

}
