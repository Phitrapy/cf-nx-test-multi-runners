import { sub } from './feat2';

describe(`feat 2`, () => {
  describe(`#sub`, () => {
    it(`should substract operands`, () => {
      expect(sub(5, 2)).toBe(3);
    });
  });
});
