import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from '../form-input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn();
        shallow(<Input meta={callback} input={callback}/>);
    });
})