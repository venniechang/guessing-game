import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {

    it('Renders without crashing', () => {
      shallow(<GuessCount />);

    });

    it('renders the guest count', () => {

        const value = 21;

        const wrapper = shallow(<GuessCount guessCount={value} />);

        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
      });
    });