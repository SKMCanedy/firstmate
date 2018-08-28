import React from 'react';
import {shallow, mount} from 'enzyme';

import HomeMenu from '../home-menu';

describe('<HomeMenu />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn();
        mount(<HomeMenu anchorLink={callback}/>);
    });
})