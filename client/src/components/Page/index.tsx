import React from 'react';
import Spinner from 'src/components/Spinner';

interface IPageProps {
  loading: boolean;
}

const PageComponent: React.FC<IPageProps> = ({ loading, children }) => {
  return <>{loading ? <Spinner /> : children}</>;
};

export default PageComponent;
