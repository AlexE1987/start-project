import TodoItemMenu from "../TodoItemMenu";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  id: 0,
  hideModalMenu: true,
  toComplete:  jest.fn(),
  toFavorite:  jest.fn(),
  toEdit:  jest.fn(),
  toggleModalRemove: jest.fn(),
};

describe('TodoItemMenu Component', () => {
  let wrapper = mount(<TodoItemMenu {...props} />);

  beforeEach(()=> {
    wrapper = mount(<TodoItemMenu {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('TodoItemMenu should be hide', () => {

    it('ModalMenu shoulde have class hide', () => {
      expect(wrapper.find('.hide').exists()).toBe(props.hideModalMenu);
    });

  });

  describe('TodoItemMenu should be displayed', () => {

    it('ModalMenu shoulde have class item-menu_container', () => {
      expect(wrapper.find('.item-menu_container').exists()).toBe(!props.hideModalMenu);
    });

    it('Button should toggle toFavorite', () => {
      wrapper.find('[data-test-id="btn-to-favorite"]').simulate('click');
      expect(props.toFavorite).toBeCalled();
    });

    it('Button should toggle toComplete', () => {
      wrapper.find('[data-test-id="btn-to-complete"]').simulate('click');
      expect(props.toComplete).toBeCalled();
    });

    it('Button should toggle toEdit', () => {
      wrapper.find('[data-test-id="btn-to-edit"]').simulate('click');
      expect(props.toEdit).toBeCalled();
    });
    
    it('Button should toggleModalRemove', () => {
      wrapper.find('[data-test-id="btn-tggle-remove"]').simulate('click');
      expect(props.toggleModalRemove).toBeCalled();
    });

  })
})