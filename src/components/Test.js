import React from 'react';

const Test = ({ text }) => (
  <div>
    <div className="alert-success">
      {text.text}
    </div>
    <div className="alert-danger">
      {text.textError}
    </div>
  </div>
);

export default Test;
