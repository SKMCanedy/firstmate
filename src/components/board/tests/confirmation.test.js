import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Confirmation from '../confirmation';

describe('<Confirmation />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Confirmation /></Provider>);
    });
})