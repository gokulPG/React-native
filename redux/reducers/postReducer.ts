import * as types from '../actions/constants'

const initialState = {
  posts: [],
  singlePost: {}
}

export default (state = initialState, action : any ) => {
    switch(action.type){
      case types.SET_POSTS:
        return {
          ...state,
          posts: action.payload
        }

      case types.ADD_POST: 
        return {
          ...state,
          posts: [...state.posts, ...action.payload]
        }
    
        default:
      return state
    }
} 