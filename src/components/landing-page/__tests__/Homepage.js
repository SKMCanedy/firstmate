import React from 'react';
import {shallow, mount} from 'enzyme';

import Homepage from '../Homepage';

describe('<Homepage />', () => {
    it('Renders without crashing', () => {
        shallow(<Homepage />);
    });
})