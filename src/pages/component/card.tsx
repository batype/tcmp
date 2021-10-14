import { List } from 'antd';
import { Key, useEffect } from 'react';
import api from '../../../mock/api';
import styles from './index.less';
import BreadcrumbOverlay from './BreadcrumbOverlay';
export default function IndexPage() {
  useEffect(() => {
    console.log(api['POST /api/tags']);
  }, []);
  return (
    <div>
      <BreadcrumbOverlay />
      <h1 className={styles.title}>Page card</h1>
      <List>
        {api['POST /api/tags'].list.map(
          (
            item: {
              name: {} | null | undefined;
            },
            index: Key | null | undefined,
          ) => {
            return <List.Item key={index}>{item.name}</List.Item>;
          },
        )}
      </List>
    </div>
  );
}
