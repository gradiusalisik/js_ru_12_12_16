import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, SUCCESS } from '../constants'
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
    loaded: false
})

const defaultState = arrayToMap([], CommentModel)

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(randomId, new CommentModel({ ...payload.comment, id: randomId }))

        // case LOAD_ALL_COMMENTS + SUCCESS:
        //     return state.merge(arrayToMap(response, CommentModel))

        case LOAD_COMMENT + SUCCESS:
            return state.merge(arrayToMap(response, CommentModel))
    }

    return state
}
