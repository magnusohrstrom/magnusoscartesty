import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Button from '../components/Button';

it('should create correct default button with correct default class', () => {
    const wrapper = shallow(<Button onClick = {jest.fn()} danger = {false} children = {<div>tihi</div>}  />);
    expect(wrapper.hasClass('bg-indigo-dark')).toBe(true);
});

it('should create danger-button with correct danger class', () => {
    const wrapper = shallow(<Button onClick = {jest.fn()} danger = {true} children = {<div>tihi</div>}  />);
    expect(wrapper.hasClass('bg-red-dark')).toBe(true);
});

