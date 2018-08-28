import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import AddTaskForm from '../form-add-task';

describe('<AddTaskForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><AddTaskForm /></Provider>);
    });
})