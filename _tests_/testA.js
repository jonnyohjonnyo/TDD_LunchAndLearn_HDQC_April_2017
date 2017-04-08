import { expect } from 'chai';

import * as yourCode from '../src/tdd/yourCode';

describe('TDD lunch and learn code', () => {
    it('should do part A', () => {
        const results = yourCode.doMath(5);
        expect(results).to.equal(10);
    });
});
