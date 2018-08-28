import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Warning from '../warning-message';

describe('<Warning />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Warning /></Provider>);
    });
})