import React from 'react';
import { render, shallow, mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';
import Posts from '../components/Posts';

it('should create new posts with correct title and content', () => {
    const wrapperPost = mount(<Posts />)
    const wrapper =  mount(<CreateNewPost 
    author="Zac"  
    updatePosts = {wrapperPost.instance()
    .setPostFromLocalStorage} />);

    const formSubmit = wrapper.find("form")
    const title = wrapper.find("#title");   
    const content = wrapper.find("textarea")
    
    title.simulate('change', { target : { name: "title", value : "Magnus" }});
    content.simulate('change', { target : { name: "content", value : "MagnusContent" }});
    formSubmit.simulate('submit');

    expect(wrapperPost.state().posts[0].content).toEqual("MagnusContent");
    expect(wrapperPost.state().posts[0].title).toEqual("Magnus");

});
