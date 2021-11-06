import TodoItem from '../TodoItem';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  todoList: [],
  id: 0,
  description: '',
  isCompleted: false,
  isInFavorite: false,
  isEdit: '',
  creationDate: '',
}

const mockStore = configureStore();
const store = mockStore();
// jest.mock('react-redux', () => ({
//   useDispatch: () => {},
//   useSelector: () => ([]),
// }));

describe('TodoItem Component', () => {


  let wrapper = shallow(<Provider store={store}><TodoItem {...props} /></Provider>);
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><TodoItem {...props} /></Provider>);
  })
  // let wrapper = mount(<Provider store={store}><TodoItem {...props} /></Provider>);
  // beforeEach(() => {
  //   wrapper = mount(<Provider store={store}><TodoItem {...props} /></Provider>);
  // });
  
  // afterEach(() => {
  //   wrapper.unmount();
  // });
  
  describe('TodoItem completed', () => {
    it('TodoItem should display ico complete', () => {
      wrapper.setProps({isCompleted: true});
      expect(wrapper.find('.img-complete').length).toBe(1);
      console.log(wrapper.debug());
    });
  });

});