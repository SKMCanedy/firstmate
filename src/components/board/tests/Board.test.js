import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import { Board }from '../Board';

describe('<Board />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Board /></Provider>);
    });
})