import { expect } from 'chai';
import _ from 'lodash';

import yourCode from '../src/tdd/yourCode';

describe('TDD lunch and learn function', () => {
	const results = yourCode();
    it('should return an array containing at least three strings', () => {
        expect(_.size(results)).to.be.at.least(3);
    });
    it('should only contain strings', () => {
    	expect(_.size(results)).to.be.at.least(1);
        const nonStrings = _.reduce(results, (collection, item) => {
        	if (!_.isString(item)) {
        		collection.push(item);
        	}
        	return collection;
        }, []);
        console.log('non strings', nonStrings);
        expect(_.size(nonStrings)).to.equal(0);
    });
});
