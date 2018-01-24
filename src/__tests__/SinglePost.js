import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/Posts';
import SinglePost from '../components/SinglePost';
import Posts from '../components/Posts';
import SingleComment from '../components/SingleComment';

it("should render the button when author and current persona match", () => {
    const wrapper = render(<SinglePost author="Zac" currentPersona="Zac" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000" />)
    expect(wrapper.find("button").html()).toEqual("x");
})

it("should not render the button when author and current persona dont match", () => {
    const wrapper = render(<SinglePost author="Zac" currentPersona="Morgana" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000" />)
    expect(wrapper.find("button").html()).toEqual(null);
})

it('should remove post when x button is clicked', () => {
    const mockedItem = [{ 
        "title": "Posty", 
        "content": "Contenty", 
        "id": "_ilfas!", 
        "author": "Zac", 
        "date": "2018-01-23 10:58:36" 
    }];
    const stringified = JSON.stringify(mockedItem);
    localStorage.setItem("posts",stringified);
    const wrapper = mount(<Posts currentPersona='Zac'/>);
    const removeButton = wrapper.find('.bg-red-dark');
    removeButton.simulate('click');
    expect(wrapper.render().find('.bg-red-dark').html()).toBeNull();
})