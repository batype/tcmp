import { history, Link } from 'umi';
import styles from './index.less';

function HomeIndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page home</h1>
      <button
        onClick={() => {
          history.push('main/list');
        }}
      >
        跳转main/list
      </button>
      <button
        onClick={() => {
          history.push('main/card?index=001');
        }}
      >
        跳转main/card
      </button>
      <button
        onClick={() => {
          history.push({
            pathname: 'main/card',
            query: {
              index: '001',
            },
          });
        }}
      >
        main/card
      </button>
      <Link to="/404">go to 404 link</Link>
    </div>
  );
}

HomeIndexPage.title = 'HomeIndexPage';
export default HomeIndexPage;
