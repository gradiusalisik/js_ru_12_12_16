import { FILTER_DATE_RANGE, FILTER_ARTICLE_SELECT } from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
};

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case FILTER_DATE_RANGE:
            return {...filters,...payload};

        case FILTER_ARTICLE_SELECT:
            return {...filters,...payload};
    }

    return filters
}
