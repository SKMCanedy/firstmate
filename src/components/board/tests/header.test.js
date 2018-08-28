import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Header from '../header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Header /></Provider>);
    });
})