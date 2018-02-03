import React from "react";

const NotFound = ({ staticContext = {} }) => {
  staticContext.NotFound = true;
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default { component: NotFound };
