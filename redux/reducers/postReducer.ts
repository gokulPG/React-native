import * as types from '../actions/constants'
import {State, PostListAction} from "../../types/Types"

const initialState : State = {
  posts: [],
  singlePost: {
    title: "",
    url: "",
    author: "",
    created_at: "",
    objectID: ""
  }
}

export default (state = initialState, action :  PostListAction) => {
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