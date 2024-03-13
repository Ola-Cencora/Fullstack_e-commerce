import RedirectBox from '../../common/RedirectBox/RedirectBox';
import styles from './Home.module.scss';

const Home = () => (
  <section className={styles.home}>
    <RedirectBox category="all" text="wszystkie" img="all.jpg" />
    <RedirectBox category="mugs" text="kubki" img="mugs.jpg" />
    <RedirectBox category="bowls" text="miski" img="bowls.jpg" />
    <RedirectBox category="vases" text="wazony" img="vases.jpg" />
  </section>
);

export default Home;
