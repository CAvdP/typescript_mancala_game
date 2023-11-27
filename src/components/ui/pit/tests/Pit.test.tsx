import React from 'react'
import renderer from 'react-test-renderer'
import Pit from '../Pit';



describe("Pit Component", () => {
    it('matches the saved snapshot', () => {
        const actualSnapshot = renderer
          .create(<Pit id={0} weight={0} enabled={false} onClick={ (id: number)=>{}}  className={'neon_pink'} />)
          .toJSON()
          
        expect(actualSnapshot).toMatchSnapshot()
      });
});