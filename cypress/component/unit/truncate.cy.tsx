/// <reference types="cypress" />

import { truncate } from '../../../src/lib/util/truncate';

describe('Component | Unit | Util | Truncate', () => {
  before(() => {
    // check if the import worked correctly
    expect(truncate).to.be.a('function');
  });

  context('truncate', function () {
    it('should truncate content and add "..." after "n" limit of chars', () => {
      expect(truncate('abcdefghij', 3)).to.be.eq('abc...');
    });

    it('should display raw content when content is smaller than limit', () => {
      expect(truncate('abc', 3)).to.be.eq('abc');
      expect(truncate('abc', 4)).to.be.eq('abc');
      expect(truncate('abc', 2)).to.not.be.eq('abc');
    });

    it('should truncate as 80 chars as limit by default', () => {
      const longSentence = 'A'.repeat(81);

      expect(truncate(longSentence)).to.be.eq(
        longSentence.slice(0, -1) + '...',
      );
    });
  });
});
