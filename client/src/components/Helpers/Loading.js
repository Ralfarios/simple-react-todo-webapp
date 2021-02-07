import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/json/json_spinner.json';

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
    <div id="Loading" style={{height: 'calc(100vh - 70px)'}} className="d-flex">
      <Lottie options={defaultOptions} width={240} height={240} style={{marginTop: 'auto', marginBottom: 'auto'}} />
    </div>
  );
};

export default Loading;