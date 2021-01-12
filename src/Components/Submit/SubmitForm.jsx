import React from 'react';

const SubmitForm = ({ children, onSubmit, formClass }) => (
  <form onSubmit={onSubmit} className={formClass}>
    {children}
  </form>
);

export default SubmitForm;
