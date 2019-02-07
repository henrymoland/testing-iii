// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Describe the display component', () => {
    it('renders the display', () => {
        render(<Display />)
    });

    it('display closed if closed property is true', () => {
        const { getByText } = render(<Display closed= { true }/>)
        getByText(/closed/i)
    });

    it('display open if closed property is false', () => {
        const { getByText } = render(<Display closed= { false }/>)
        getByText(/open/i)
    });

    it("displays 'Locked' if the locked prop is true", () => {
        const {getByText} = render(<Display locked={true}/>);
        getByText(/locked/i)

         
        const div = getByText(/locked/i);
        expect(div).toHaveClass("green-led");
    });

    it("displays 'unlocked' if the closed prop is false", () => {
        const {getByText} = render(<Display locked={false}/>);
        getByText(/unlocked/i)  

        const div = getByText(/unlocked/i);
        expect(div).toHaveClass("green-led");   
 });    
});