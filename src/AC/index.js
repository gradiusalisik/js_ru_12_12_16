import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE_SELECT, FILTER_DATE_RANGE } from '../constants'

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


export function filterDataRange(dateRange) {
    return {
        type: FILTER_DATE_RANGE,
        payload: { dateRange }
    }
}
