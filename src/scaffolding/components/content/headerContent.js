import React, { Component, PropTypes } from 'react';

export default class HeaderContent extends Component {
    render() {
        const { route } = this.props;
        return (
            <div></div>
        );
    }
}

HeaderContent.propTypes = {
    route: PropTypes.string,
};
