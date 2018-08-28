import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Modal from '../modal';

describe('<Modal />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Modal /></Provider>);
    });
})