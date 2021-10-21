import TimeIndex from '@/component/time';
import ListVertical from '@/pages/component/ListVertical';
import { Card, Col, Row, Input } from 'antd';
import './index.less';
import React from 'react';
import { BlogDataSource } from '../../../dataSource/data.source';
import { useHistory } from 'umi';

const { Search } = Input;

class PageProps {}

const Page: React.FC<PageProps> = () => {
  console.log(BlogDataSource);
  const onSearch = (value: any) => {
    console.log(value);
  };
  const history = useHistory();

  return (
    <div className="song-blog-div">
      <Row>
        <Col span={18}>
          <ListVertical></ListVertical>
        </Col>
        <Col span={6} className="song-blog-left-col">
          <Search
            placeholder="输入所搜内容"
            onSearch={onSearch}
            enterButton
          ></Search>
          <div style={{ height: 10 }}></div>
          <Card title="最新链接">
            {BlogDataSource?.newBlog?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="song-list-style"
                  onClick={() => {
                    history.push('/home/blog/context?id=0000001');
                  }}
                >
                  <Row>
                    <Col span={12}>{item.name}</Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      {item.time}
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Card>
          <div style={{ height: 10 }}></div>
          <Card title="热度统计">
            <div>sss222222</div>
          </Card>
          <div style={{ height: 10 }}></div>
          <Card title="分类统计">
            <div>sss222222</div>
          </Card>
          <div style={{ height: 10 }}></div>
          <Card title="友情链接">
            {BlogDataSource?.friendUrl?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="song-list-style"
                  onClick={() => {
                    window.open(item.url);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
