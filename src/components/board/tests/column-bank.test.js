import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import ColumnBank from '../column-bank';

describe('<ColumnBank />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><ColumnBank /></Provider>);
    });
})