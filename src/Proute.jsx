import React from 'react'
import { Navigate } from "react-router-dom";


const Proute = ({ auth, children }) => {
    if (!auth) {
      return <Navigate to="/" replace={true} />;
    }
    return children;
  };

export default Proute;