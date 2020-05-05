let defaultState = {
  tasks: []
};

function taskReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_TASK":
      return {
        ...state,
        tasks:[...state.tasks,
          {...action.task
      }]}
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t=> t.id !== action.id)
      }
    default:
      return state
  }

}

export default taskReducer

