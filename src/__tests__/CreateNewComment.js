import React from 'react';
import { render, shallow, mount } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';
import Comments from '../components/Comments';

it('should set state comments on change of inputvalue for textarea and create new comment on form submit', () => {
    
    const wrapperComments = mount(<Comments/>);
    const wrapperCreate = mount(<CreateNewComment 
        author ="Zac"
        postId = "asfks"
        updateComments = {wrapperComments.instance()
            .setCommentsFromLocalStorage}/>);
    
    const text = wrapperCreate.find('#comment');
    text.simulate('change', { target : { name: "comment", value : "ÅÅÅÅÅSKAAAAR" }});
    expect(wrapperCreate.state().comment).toEqual("ÅÅÅÅÅSKAAAAR");
    const button = wrapperCreate.find('form');
    button.simulate('submit');
    expect(wrapperComments.state().comments[0]
        .comment).toEqual('ÅÅÅÅÅSKAAAAR');
});


it('should set state comments on change of inputvalue for false value', () => {
    
    const wrapperComments = mount(<Comments/>);
    const wrapperCreate = mount(<CreateNewComment 
        author ="Zac"
        postId = "asfks"
        updateComments = {wrapperComments.instance()
            .setCommentsFromLocalStorage}/>);
    
    const text = wrapperCreate.find('#comment');
    text.simulate('change', { target : { name: "comment", value : false }});
    expect(wrapperCreate.state().comment).toEqual(false);
    const button = wrapperCreate.find('form');
    button.simulate('submit');
    expect(wrapperComments.state().comments[1]
        .comment).toEqual(false);
});

