import React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '../HomeScreen'


describe("HomeScreen Component", () => {
    it('matches the saved snapshot', () => {
        const actualSnapshot = renderer
          .create(<HomeScreen />)
          .toJSON()
          
        expect(actualSnapshot).toMatchSnapshot()
      });
});