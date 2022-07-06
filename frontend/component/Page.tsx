import React, { Children } from 'react';

const Page = ({ children }) => {
  return (
    <div>
      <h1>Page Component</h1>
      {children}
    </div>
  );
};

export default Page;
