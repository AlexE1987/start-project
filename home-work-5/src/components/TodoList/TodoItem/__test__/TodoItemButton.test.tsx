import TodoItemButton from '../TodoItemButton';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  toggleModalMenu: jest.fn(),
};

describe('should render TodoItemButton component', () => {

  let wrapper = mount(<TodoItemButton {...props}/>);

  beforeEach(() => {
    wrapper = mount(<TodoItemButton {...props}/>);
  });

  afterEach(() => {
    wrapper.unmount()
  })

  it('should contain button', () => {
    wrapper.find('button');
    expect(wrapper.length).toBe(1);
  });

  it('should contain image', () => {
    wrapper.find('img');
    expect(wrapper.length).toBe(1);
  });

  it('component should launch todoItemMenu', () => {
    wrapper.find('button');
    wrapper.simulate('click');
    expect(props.toggleModalMenu).toBeCalled();
  })
})




