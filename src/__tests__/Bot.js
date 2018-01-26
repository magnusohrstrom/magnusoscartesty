import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Bot from '../components/Bot/Bot';
import MessageForm from '../components/Bot/MessageForm';
jest.useFakeTimers();

function flushAllPromises() {
	return new Promise(resolve => setImmediate(resolve))
}

it('should set correct message string to state from userInput', () => {
    const wrapper = mount(<Bot/>);
    wrapper.find(MessageForm).find("input[name='userMessage']").simulate('change', 
        { target : { name:'userMessage', value:'Botsy' }});
    wrapper.find(MessageForm).simulate('submit');
    expect(wrapper.state().messages[0].message).toEqual('Botsy');
});

it('should send correct message string to state from bot on user submit', () => {
    const wrapper = mount(<Bot/>);
    wrapper.find(MessageForm).find("input[name='userMessage']").simulate('change', 
        { target : { name:'userMessage', value:'Botsy' }});
    wrapper.find(MessageForm).simulate('submit');
    expect(wrapper.state().messages[0].message).toEqual('Botsy');
    jest.runAllTimers();
    console.log(wrapper.state());
    return flushAllPromises().then( () => {
        expect(true);
        console.log(wrapper.state().messages);
        
        expect(wrapper.state().messages[1]).toBeDefined();
        
    });
});

