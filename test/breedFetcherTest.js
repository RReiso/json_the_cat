import { fetchBreedDescription } from '../breedFetcher.js';
import { assert, expect } from 'chai';

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.Siberian.trim());

      done();
    });
  });

  it('returns empty object when search does not bring any results', (done) => {
    fetchBreedDescription('hghghf', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      
      const expectedDesc = {};

      // compare returned object
      expect(expectedDesc).to.eql(desc)

      done();
    });
  });
});
