import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { fetchPing } from './redux/actions';

import PageComponent from 'src/components/Page';

const PingPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    loading: { isLoading },
    state: {
      ping: { ping },
    },
  } = useSelector((state: RootState) => state.ping);

  useEffect(() => {
    dispatch(fetchPing.request());
  }, [dispatch]);

  return (
    <PageComponent loading={isLoading}>
      <div>
        <p>This is ping page</p>
        <div>Ping value is: {`${ping}`}</div>
      </div>
    </PageComponent>
  );
};

export default PingPage;
