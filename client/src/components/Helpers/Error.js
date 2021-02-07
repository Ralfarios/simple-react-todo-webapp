import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/json/json_error.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="Loading" style={{ height: 'calc(100vh - 70px)' }} className="d-flex justify-content-center">
      <div style={{ marginTop: 'auto', marginBottom: 'auto', width: 'auto' }}>
        <Lottie options={defaultOptions} width={240} height={240} />
        <h3 className="text-center">An unexpected error occurred, please try again later!</h3>
      </div>
    </div>
  );
};

export default Loading;