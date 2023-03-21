import { add } from './feat1';

describe(`feat 1`, () => {
  describe(`#add`, () => {
    it(`should add operands`, () => {
      expect(add(2, 3)).toBe(5);
    });
  });
});
