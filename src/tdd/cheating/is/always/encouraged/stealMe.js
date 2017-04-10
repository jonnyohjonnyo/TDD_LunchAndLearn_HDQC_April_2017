import React from 'react';
import _ from 'lodash';

import Button from '../../../../button';

const RadComponent = () => {
    const collection = ['heyo', 'lets', 'go'];
    const buttons = _.map(collection, word => (
        <Button text={word} />
    ));
    return (<div className="button-group">{buttons}</div>);
};

export default RadComponent;
