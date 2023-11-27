import React from 'react'
import renderer from 'react-test-renderer'
import MessageBoard from "../MessageBoard"



describe("MessageBoard Component", () => {
    it('matches the saved snapshot', () => {
        const actualSnapshot = renderer
          .create(<MessageBoard playerOneTurn={false} />)
          .toJSON()
          
        expect(actualSnapshot).toMatchSnapshot()
      });
});
