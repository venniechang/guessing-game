import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {

    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });



    it('Renders feedback', () => {

        const testFeedback = 'testing feedback'
        
        let wrapper = shallow(<Feedback feedback={testFeedback} />)
        expect(wrapper.contains(testFeedback).toEqual(true))


    });













});