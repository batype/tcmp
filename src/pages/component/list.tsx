import styles from './index.less';
import api from '../../../mock/api';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page list</h1>
      {api['/api/getButton'].map((item) => {
        return <Button key={item.title}>{item.title}</Button>;
      })}
    </div>
  );
}
