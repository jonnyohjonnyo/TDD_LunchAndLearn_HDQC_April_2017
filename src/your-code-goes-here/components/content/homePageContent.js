import React from 'react';

import Cheater from '../../../tdd/cheating/is/always/encouraged/stealMe';

const HomePageContent = () => {
    return (
        <div className="inner cover">
            <h1 className="cover-heading">Full-screen single page app</h1>
            <p className="lead" style={{ fontFamily: 'Homervetica, Helvetica' }}>
            	Full-screen app uses react and redux router to create a full screen experience. And hot reloading.
        	</p>
            <Cheater text="yo" />
        </div>);
};

export default HomePageContent;
