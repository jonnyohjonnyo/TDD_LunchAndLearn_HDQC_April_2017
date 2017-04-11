import React, { PropTypes } from 'react';

import Content from './parcels/content';
import Header from './parcels/header';
import Footer from './parcels/footer';

const styles = {
    parent: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    fillArea: {
        padding: '8px',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    fillAreaContent: {
        overflow: 'auto',
        width: '100%',
        padding: '10px',
    },
};

const FullScreenLayout = (props) => {
    const { contentOptions, headerOptions, footerOptions } = props;

    const header = (headerOptions.useHeader) ?
    (<Header>{headerOptions.component}</Header>) :
    null;

    const footer = (footerOptions.useFooter) ?
    (<Footer>{footerOptions.component}</Footer>) :
    null;

    return (
        <div style={styles.parent}>
            <div className="">
                {header}
            </div>
            <div style={styles.fillArea}>
                <div style={styles.fillAreaContent}>
                    <Content>{contentOptions.component}</Content>
                </div>
            </div>
            <div className="flexbox-item footer">
                {footer}
            </div>
        </div>
    );
};

FullScreenLayout.propTypes = {
    headerOptions: PropTypes.object,
    footerOptions: PropTypes.object,
    contentOptions: PropTypes.object,
};
FullScreenLayout.defaultProps = {
    headerOptions: { useHeader: false },
    footerOptions: { useFooter: false },
    contentOptions: { component: (<div />) },
};

export default FullScreenLayout;
