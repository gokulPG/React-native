import * as types from './constants'
import {Dispatch} from 'redux'
import http from '../../utils/http'


export const getPosts = (pageNumber: number) => (dispatch: Dispatch) => {
    http.get(`search_by_date?tags=story&page=${pageNumber}`)
        .then(res => {
          if(pageNumber === 0) {
            dispatch({
              type: types.SET_POSTS,
              payload: res.data.hits 
            })
          } else {
            dispatch({
              type: types.ADD_POST,
              payload: res.data.hits 
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
}


export const getSinglePost = () => () => {
  
}

