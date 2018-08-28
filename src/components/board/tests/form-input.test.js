import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Input from '../form-input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Input /></Provider>);
    });
})