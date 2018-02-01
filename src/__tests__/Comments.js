import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';
import App from '../components/App';



it('Should fetch comments from mocked local storage and set state', () => {
    const wrapper2 = mount(<Comments postId="llsk232" currentPersona="Zac"/>)
    const mockedItem =  [{
            "comment": "Hejhej på dig",
            "id": "2213jk",
            "postId": "llsk232",
            "author": "Zac",
            "date":"1/22/2018, 1:14:46 PM"
        }];    
    const mocked = JSON.stringify(mockedItem);
    localStorage.setItem("comments",mocked)
    wrapper2.instance().setCommentsFromLocalStorage("llsk232")
    expect(wrapper2.state().comments[0].id).toEqual("2213jk");

});

it('should delete comment', () => {
    const wrapper2 = mount(<Comments postId="llsk232" currentPersona="Zac"/>)
    const mockedItem =  [{
            "comment": "Hejhej på dig",
            "id": "2213jk",
            "postId": "llsk232",
            "author": "Zac",
            "date":"1/22/2018, 1:14:46 PM"
        }];    
    const mocked = JSON.stringify(mockedItem);
    localStorage.setItem("comments",mocked)
    expect(wrapper2.state().comments[0].id).toEqual("2213jk");
    wrapper2.instance().removeComment("2213jk");
    expect(wrapper2.state().comments).toEqual([]);
})

it('should render single comment', () => {
    
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
    wrapper.instance().setCommentsFromLocalStorage("llsk232")
    wrapper.instance().renderCommentList(wrapper.state().comments);
    expect(wrapper.render().find('p').html()).toEqual('Kommentaren');
})