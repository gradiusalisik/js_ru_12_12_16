import { INCREMENT, DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addComment(add) {
    return {
        type: ADD_COMMENT,
        payload: { add }
    }
}
