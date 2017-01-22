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
    entities: new OrderedMap({})
})


export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + SUCCESS:
            console.log(state.toJS())
            return state.update('entities', entities => arrayToMap(response, CommentModel).merge(entities))
    }

    return state
}
