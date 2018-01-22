import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import { TIMEOUT } from 'dns';
import AvatarSelector from '../components/AvatarSelector';

it('should use the correct picture and be the same as Esmeralda', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Esmeralda" />);
    expect(wrapper.props().src).toEqual('esmeralda.png');
});

it('should use the correct picture and be the same as Zac', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Zac" />);
    expect(wrapper.props().src).toEqual('zac.png');
});

it('should use the correct picture and be the same as Morgana', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Morgana" />);
    expect(wrapper.props().src).toEqual('morgana.png');
});
