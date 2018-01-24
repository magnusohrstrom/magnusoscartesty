import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';
import App from '../components/App';

it("should render the button when author and current persona match", () => {
    const wrapper = render(<SingleComment author="Zac" currentPersona="Zac" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000" />)
    expect(wrapper.find("button").html()).toEqual("x");
})

it("should not render the button when author and current persona dont match", () => {
    const wrapper = render(<SingleComment author="Zac" currentPersona="Morgana" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000" />)
    expect(wrapper.find("button").html()).toEqual(null);
})