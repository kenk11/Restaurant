/**
 * Created by ken on 3/24/17.
 */
export const settingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FILTER':
            return {
                radius: action.params,
            };

        default:
            return state;
    }
};

export const actionCreators = {
    setFilter: (value) => {
        return {
            type: 'FILTER',
            params: value,
        }
    }
};