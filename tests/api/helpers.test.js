import { getInterestingInfo } from '../../app/api/helpers';

describe('should get the interest facts of a pokemon', () => {
  test('interesting fact for dugtrio', () => {
    expect(getInterestingInfo('dugtrio')).toBe(
      'A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.'
    );
  });
});
