import React from 'react'
import renderer from 'react-test-renderer'
import Store from '../Store';



describe("Pit Component", () => {
    it('matches the saved snapshot', () => {
        const actualSnapshot = renderer
          .create(<Store weight={0} enabled={false} className={'neon_pink'} />)
          .toJSON()
          
        expect(actualSnapshot).toMatchSnapshot()
      });
});