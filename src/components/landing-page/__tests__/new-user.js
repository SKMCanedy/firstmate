import React from 'react';
import {shallow, mount} from 'enzyme';

import NewUser from '../new-user';

describe('<NewUser />', () => {
    it('Renders without crashing', () => {
        shallow(<NewUser />);
    });
})