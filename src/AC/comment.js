import { LOAD_ALL_COMMENTS, LOAD_COMMENT,
    START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

// export function loadAllComments(id) {
//   return {
//     type: LOAD_ALL_COMMENTS,
//     callAPI: '/api/comment?article=' + id
//   }
// }

export function loadCommentById(id) {
  return (dispatch, getState) => {
    // if (getState().articles.getIn(['entities', id, 'text'])) return null

    dispatch({
      type: LOAD_COMMENT + START,
      payload: {id}
    })

    $.get(`/api/comment?article=${id}`)
      .done(response => dispatch({
        type: LOAD_COMMENT + SUCCESS,
        payload: { id },
        response
      }))
      .fail(error => dispatch({
        type: LOAD_COMMENT + FAIL,
        payload: { id },
        error
      }))
  }
}
