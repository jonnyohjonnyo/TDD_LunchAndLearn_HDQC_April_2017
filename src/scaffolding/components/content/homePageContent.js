import React from 'react';

import Component from '../../../tdd/yourCode';

const HomePageContent = () => {
    return (
        <div className="inner cover">
            <h1 className="cover-heading" style={{ color: '#f96302'}} >CONGRATULATIONS</h1>
            <p className="lead" style={{ fontFamily: 'Homervetica, Helvetica' }}>
            	You just made a React component!
        	</p>
            <Component />
        </div>);
};

export default HomePageContent;
