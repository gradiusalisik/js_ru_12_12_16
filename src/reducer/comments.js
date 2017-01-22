import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})


export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .update('entities', entities => arrayToMap(response.records, CommentModel).merge(entities))
                .set('loading', false)
                .set('loaded', true)
                .set('error', null)

        case LOAD_ALL_COMMENTS + FAIL:
            return state
                .set('error', error)
                .set('loading', false)
    }

    return state
}
