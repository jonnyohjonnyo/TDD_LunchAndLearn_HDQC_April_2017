import React from 'react';

import Cheater from '../../../tdd/cheating/is/always/encouraged/stealMe';

const HomePageContent = () => {
    return (
        <div className="inner cover">
            <h1 className="cover-heading" style={{ color: '#f96302'}} >CONGRATULATIONS</h1>
            <p className="lead" style={{ fontFamily: 'Homervetica, Helvetica' }}>
            	You just made a React component!
        	</p>
            <Cheater text="yo" />
        </div>);
};

export default HomePageContent;
