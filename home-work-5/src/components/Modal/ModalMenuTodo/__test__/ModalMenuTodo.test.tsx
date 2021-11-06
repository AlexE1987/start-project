import React from 'react';
import ModalMenuTodo from '../ModalMenuTodo';
import TodoItemMenu from '../../../TodoList/TodoItemMenu/TodoItemMenu';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  hideModalMenu: true,
  toggleModalMenu:jest.fn(),
  children: TodoItemMenu
}

describe('ModalMenuTodo Component', () => {

  let wrapper = mount(<ModalMenuTodo {...props}/>);
  beforeEach(() => {
    wrapper = mount(<ModalMenuTodo {...props}/>);
  });
  
  afterEach(() => {
    wrapper.unmount();
  });

  it('test', () => {
    expect(wrapper.length).toBe(1);
  });

});