import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';
import App from '../components/App';

it("should render the button when author and current persona match", () => {
    const wrapper = render(<SingleComment author="Zac" currentPersona="Zac" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000"  postId="llsk232"/>)
    expect(wrapper.find("button").html()).toEqual("x");
})

it("should not render the button when author and current persona dont match", () => {
    const wrapper = render(<SingleComment author="Zac" currentPersona="Morgana" comment="HejHej" id="blabla" onClick={jest.fn()} date="20010000" postId="llsk232"/>)
    expect(wrapper.find("button").html()).toEqual(null);
})

it("should remove comment on button click", () => {
    const mockedItem =  [{
        "comment": "Kommentaren",
        "id": "2213jk",
        "postId": "llsk232",
        "author": "Zac",
        "date":"1/22/2018, 1:14:46 PM"
    }];    
    const mocked = JSON.stringify(mockedItem);
    localStorage.setItem("comments",mocked);
    const wrapper = mount(<Comments currentPersona='Zac' author="Zac" postId="llsk232"/>);
    wrapper.instance().setCommentsFromLocalStorage("llsk232");
    
    const removeButton = wrapper.find('.bg-red-dark');

    //console.log(removeButton.html());
    //removeButton.simulate('click');
    //console.log(wrapper.find('.bg-red-dark'));
    //expect(wrapper.render().find('.bg-red-dark').html()).toBeNull();

});