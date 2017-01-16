import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

// const CommentModel = Record({
//     "id": null,
//     "user": null,
//     "text": null
// })

const defaultState = arrayToMap(normalizedComments)

export default (commentState = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentState, ...payload}
    }

    return commentState
}
