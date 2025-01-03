/* eslint-disable react/prop-types */
import React from 'react';
function ErrorMessage({ message }) {
  return (
    <p style={{ color: 'red' }}>{message}</p>
  );
}
export default ErrorMessage;