import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Starts a new game', () => {
        const wrapper = shallow(<Game />);

        wrapper.setState({
            guesses: [1,2,3],
            feedback: 'Awesome',
            correctAnswer: -1
        });

        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make Your Guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Makes guesses', () => {

        const wrapper = shallow(<Game />);

        wrapper.setState( {
            correctAnswer: 50
        });

        wrapper.instance().makeGuess(10);
        expect(wrapper.state('guesses')).toEqual(10);
        expect(wrapper.state('feedback')).toEqual(`You\'re Ice Cold...`);

        wrapper.instance().makeGuess(25);
        expect(wrapper.state('guesses')).toEqual(25);
        expect(wrapper.state('feedback')).toEqual(`You\'re Cold...`);

        wrapper.instance().makeGuess(40);
        expect(wrapper.state('guesses')).toEqual(40);
        expect(wrapper.state('feedback')).toEqual(`You\'re Warm.`);

        wrapper.instance().makeGuess(45);
        expect(wrapper.state('guesses')).toEqual(45);
        expect(wrapper.state('feedback')).toEqual(`You\'re Hot!`);

        wrapper.instance().makeGuess(45);
        expect(wrapper.state('guesses')).toEqual(50);
        expect(wrapper.state('feedback')).toEqual(`You got it!`);        

    })

    it('Can generate aural updates', () => {

        const wrapper = shallow(<Game />)

        wrapper.setState ( {
            correctAnswer: 55
        })

        wrapper.instance().makeGuess(10);
        wrapper.instance().makeGuess(20);
        wrapper.instance().makeGuess(30);
        wrapper.instance().generateAuraUpdate();

        expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Cold... You\'ve made 3 guesses. In order of most- to least-recent, they are: 30, 20, 10')
    })











})