import { TodoListActionTypes, ITodoListState, ITodoListActions} from "../../types/todoList";

const initialState: ITodoListState = {
  todoList: [],
  loading: false,
  error: null  
};



 export const todoListReducer = (state = initialState, action: ITodoListActions): ITodoListState => {
  switch(action.type) {
    case TodoListActionTypes.GET_TODO_LIST :
      return {todoList: [], loading: true, error: null};
    case TodoListActionTypes.GET_TODO_LIST_SUCCESS :
      return {todoList: action.payload , loading: false, error: null};
    case TodoListActionTypes.GET_TODO_LIST_ERROR :
      return {todoList: [], loading: false, error: action.payload};
    case TodoListActionTypes.UPDATE_TODO_LIST :
      return {todoList: action.payload, loading: true, error: null}
    default :
      return state
  };
 };

 // const {todoList, error, loading} = useTypedSelector((store) => store.todo);
// useEffect(()=> {
// dispatch(fetchTodoList())
// },[dispatch]);
//   if(loading) {return <h1>Loading...</h1>};
//   if(error) {return <h1>{error}</h1>};