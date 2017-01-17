import { ADD_COMMENT, DELETE_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
    "id": null,
    "user": null,
    "text": null
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (commentState = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return commentState.set(randomId, new CommentModel({ ...payload.comment, id: randomId }))

        case DELETE_COMMENT:
            return commentState.delete(payload.id)
    }

    return commentState
}
