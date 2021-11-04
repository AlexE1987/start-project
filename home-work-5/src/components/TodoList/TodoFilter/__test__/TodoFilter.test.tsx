import TodoFilter from "../TodoFilter";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  activeFilter: '',
  filterAll: jest.fn(),
  filterCompleted: jest.fn(),
  filterUncompleted: jest.fn(),
  filterFavorite: jest.fn(),
};

let wrapper = mount(<TodoFilter {...props}/>);

beforeEach(() => {
  wrapper = mount(<TodoFilter {...props}/>);
});

afterEach(() => {
  wrapper.unmount()
});

describe('TodoFilter Component', () => {

  it('Filter btn should be toggle on complete', () => {
    wrapper.find('[data-test-id="filter-completed"]').simulate('click');
    expect(props.filterCompleted).toBeCalled();
  });

  it('Filter btn completed should be active', () => {    
    wrapper.setProps({activeFilter: 'Completed'});
    expect(wrapper.find('[data-test-id="filter-completed"]')
    .hasClass('active')).toBe(true);
  });

  it('Filter btn should be toggle on uncomplete', () => {
    wrapper.find('[data-test-id="filter-uncompleted"]').simulate('click');
    expect(props.filterUncompleted).toBeCalled();
  });

  it('Filter btn uncompleted should be active', () => {
    wrapper.setProps({activeFilter: 'Uncompleted'});
    expect(wrapper.find('[data-test-id="filter-uncompleted"]')
    .hasClass('active')).toBe(true);
  });

  it('Filter btn should be toggle on favorite', () => {
    wrapper.find('[data-test-id="filter-favorite"]').simulate('click');
    expect(props.filterFavorite).toBeCalled();
  });

  it('Filter btn favorite should be active', () => {
    wrapper.setProps({activeFilter: 'Favorite'});
    expect(wrapper.find('[data-test-id="filter-favorite"]')
    .hasClass('active')).toBe(true);
  });

  it('Filter btn should be toggle on all', () => {
    wrapper.find('[data-test-id="filter-all"]').simulate('click');
    expect(props.filterAll).toBeCalled();
  });

  it('Filter btns should not be active', () => {
    wrapper.setProps({activeFilter: ''});
    expect(wrapper.exists('.active')).toBe(false);
    console.log(wrapper.debug());
  });

});

