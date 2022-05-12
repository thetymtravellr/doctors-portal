import React from 'react';

const PrimaryButton = ({ children }) => {

    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary uppercase font-bold text-base-100 border-none">
       {children}
      </button>
    );
};

export default PrimaryButton;