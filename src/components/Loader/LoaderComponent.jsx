import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ThreeDots } from  'react-loader-spinner'

const LoaderComponent = () => {
    return (
        <div className="loader">
            <ThreeDots
                type="Circles"
                color="#00BFFF" 
                height={50}
                width={100}
                //timeout={1000} //3 secs
            />
        </div>
    );
};

export default LoaderComponent;