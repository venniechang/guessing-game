import React from 'react';

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {

    it('Renders without crashing', () => {

        shallow(<AuralStatus />);
    });

    it('Renders an aural update', () => {

        let testStatus = 'Testing status';

        const wrapper = shallow(<AuralStatus auralStatus={testStatus} />);
        expect(wrapper.contatins(testStatus).toEqual(true));





    })















})