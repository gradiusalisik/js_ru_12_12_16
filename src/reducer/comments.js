import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, SUCCESS, START, FAIL } from '../constants'
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

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(randomId, new CommentModel({ ...payload.comment, id: randomId }))

        // case LOAD_ALL_COMMENTS + SUCCESS:
        //     return state.merge(arrayToMap(response, CommentModel))

        // case LOAD_COMMENT + START:
        //     return state.set('loading', true)

        case LOAD_COMMENT + SUCCESS:
            return state.merge(arrayToMap(response, CommentModel))
                // .set('loading', false)
                // .set('loaded', true)
                // .set('error', null)

        // case LOAD_COMMENT + FAIL:
        //     return state
        //         .set('error', error)
        //         .set('loading', false)
    }

    return state
}
