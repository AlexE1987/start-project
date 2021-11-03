import TodoInput from '../TodoInput';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  addListItem: jest.fn(),
};

describe('should input send new item', () => {
  let wrapper = mount(<TodoInput {...props}/>);

  beforeEach(() => {
    wrapper = mount(<TodoInput {...props}/>);
  });

  afterEach(() => {
    wrapper.unmount()
  });

  it('component button should not addListItem while input is empty', () => {    
    wrapper.find('button').simulate('click');
    expect(props.addListItem).not.toBeCalled();
  });

  it('component button should addListItem if input has text', () => {
    wrapper.find('input').simulate('change', {target: {value: 'Not empty'}});
    wrapper.find('button').simulate('click');
    expect(props.addListItem).toBeCalled();
  });
})