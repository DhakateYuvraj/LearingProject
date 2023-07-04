import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HandleRedirect = () => {
  const history = useHistory();
  useEffect(() => {
    const userPresent = true;
    if (userPresent) {
      history.push('/dashboard');
    } else {
      history.push('/signin');
    }
  }, [history]);

  return <h1>asasdd</h1>;
};

export default HandleRedirect;
