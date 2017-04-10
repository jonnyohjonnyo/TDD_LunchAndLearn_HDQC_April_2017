import React from 'react';
import reactDom from 'react-dom/server';
import { expect } from 'chai';
import dom from 'cheerio';
import _ from 'lodash';

import yourCode from '../src/tdd/yourCode';
const render = reactDom.renderToStaticMarkup;

const isAButton = (node) => node.name === 'form' && node.attribs.action && node.children[0].name === 'button';

describe('TDD lunch and learn function', () => {
	const props = {};
    const Component = yourCode(props);
    const $ = dom.load(render(Component));

    it('should render', () => {
        const output = $('div').html();
        expect(output).to.be.ok;
    });

    it('should render a div with at least 3 buttons', () => {
        const children = $('div').children();
        expect(_.size(children)).to.be.at.least(3);

        const buttons = _.reduce(children, (collection, child) => {
        	if (isAButton(child)) {
        		collection.push(child);
        	}
        	return collection;
        }, []);
        expect(_.size(buttons)).to.be.at.least(3);
    });
});
