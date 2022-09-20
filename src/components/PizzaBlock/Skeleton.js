import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="117" cy="117" r="117" />
    <rect x="0" y="251" rx="15" ry="15" width="240" height="17" />
    <rect x="0" y="286" rx="15" ry="15" width="240" height="88" />
    <rect x="2" y="396" rx="15" ry="15" width="95" height="30" />
    <rect x="127" y="388" rx="15" ry="15" width="109" height="46" />
  </ContentLoader>
);

export default Skeleton;
