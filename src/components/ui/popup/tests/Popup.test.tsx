import React from 'react'
import renderer from 'react-test-renderer'
import Popup from '../Popup';



describe("Popup Component", () => {
    it('matches the saved snapshot', () => {
        const actualSnapshot = renderer
          .create(<Popup player1Points={0} player2Points={0} resetFunction={()=>{}} />)
          .toJSON()
          
        expect(actualSnapshot).toMatchSnapshot()
      });
});