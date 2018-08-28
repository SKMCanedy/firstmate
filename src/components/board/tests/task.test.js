import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Task from '../task';

describe('<Task />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Task /></Provider>);
    });
})