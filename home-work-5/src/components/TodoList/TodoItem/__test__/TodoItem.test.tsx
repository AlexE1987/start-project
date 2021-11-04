import TodoItem from '../TodoItem';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
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

describe('My Footer Component', () => {

  let wrapper = mount(<Provider store={store}><TodoItem {...props} /></Provider>);

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><TodoItem {...props} /></Provider>);
  });
  
  afterEach(() => {
    wrapper.unmount();
  })
  

  it('test', () => {
    expect(wrapper.length).toBe(1);
  })

});