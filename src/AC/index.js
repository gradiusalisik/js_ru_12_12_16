import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE_SELECT } from '../constants'

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

export function filterArticleSelect(selected) {
    return {
        type: FILTER_ARTICLE_SELECT,
        payload: { selected }
    }
}
