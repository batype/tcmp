import { history } from '@/.umi/core/history';
import { Button, Result } from 'antd';

export default function Index404Page() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push('/home')}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
