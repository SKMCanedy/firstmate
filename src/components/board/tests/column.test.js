import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Column from '../column';

describe('<Column />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Column /></Provider>);
    });
})