import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import { TIMEOUT } from 'dns';
import PersonaSwitcher from '../components/PersonaSwitcher';

test('renders the app', () => {
  render(<App />);
});

it('should define current persona when app is mounted and then change currentPersona', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find(PersonaSwitcher).render().find('select').val()).toEqual('Zac');
  let selector = wrapper.find('select');
  selector.simulate('change', {target : { value : "Esmeralda" }});
  expect(wrapper.state().currentPersona).toEqual('Esmeralda');
});

it('should change to correct page when changePage is called', ()=> {
  const wrapper = mount(<App/>);
  wrapper.instance().changePage();
  expect(wrapper.state().currentPage).toEqual('bot');
});

it('should set page to home', () => {
  const wrapper = mount(<App/>);
  wrapper.setState({currentPage: 'bot'});
  wrapper.instance().changePage();
  expect(wrapper.state().currentPage).toEqual('home');
})


