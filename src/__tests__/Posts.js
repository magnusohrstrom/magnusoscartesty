import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Posts from '../components/Posts';
import { exec } from 'child_process';

it('should set fetch posts from local storage and setState on component mount', ()=>{
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

    expect(wrapper.state().posts[0].id).toEqual('_ilfas!');
    
});

it('should remove post', () => {
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

    expect(wrapper.state().posts[0].id).toEqual('_ilfas!');
    wrapper.instance().removePost('_ilfas!');
    expect(wrapper.state().posts[0]).toBeUndefined();
})

it('should render correct SinglePost html', () => {

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
    wrapper.instance().renderPostList(wrapper.state().posts);
    expect(wrapper.render().find('h2').html()).toEqual('Posty');
    expect(wrapper.render().find('p').html()).toEqual('Contenty');
});