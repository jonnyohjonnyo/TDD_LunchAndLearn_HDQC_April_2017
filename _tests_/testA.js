import { expect } from 'chai';
import _ from 'lodash';

import yourCode from '../src/tdd/yourCode';

describe('TDD lunch and learn function', () => {
    it('should return an array', () => {
        const results = yourCode();
        expect(_.isArray(results)).to.equal(true);
    });
});
