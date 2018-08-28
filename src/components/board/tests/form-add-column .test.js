import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import AddColumnForm from '../form-add-column';

describe('<AddColumnForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><AddColumnForm /></Provider>);
    });
})