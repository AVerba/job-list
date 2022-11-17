import styles from './NotFoundView.module.css';
import { Container } from '../../components/Container/Container';

const NotFoundView = () => {
  return (
    <Container>
      <p className={styles.notfoundPage}>Sorry, but page not found</p>
    </Container>
  );
};

export default NotFoundView;
