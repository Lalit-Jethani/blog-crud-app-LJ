// eslint-disable-next-line import/no-anonymous-default-export
const initialState = {
    post: [],
    error: {},
    isError: false,
    isLoading: false,
    isRefreshed: false,
    singlePost: {},
    status: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {

    switch (action.type) {
        /**
         * @param  {} action.payload
         * @param  {} ;return{...state
         * @param  {action.payload} post
         * @param  {false};case'FETCH_POST_ERROR':console.log(action.payload} isLoading
         * @returns true
         */
        case 'FETCH_POST_SUCCESS':

            return { ...state, post: action.payload, isLoading: false };

        case 'FETCH_POST_ERROR':

            return { ...state, error: action.payload.response, isError: true, isLoading: false };

        case 'DATE_LOADING':

            return { ...state, error: action.payload.response, isLoading: true };

        case 'CREATE_POST_SUCCESS':

            return { ...state, post: [...state.post, action.payload], isLoading: false };

        case 'CREATE_POST_ERROR':

            return { ...state, error: action.payload.response, isError: true, isLoading: false };


        case 'DELETE_POST_SUCCESS':

            return { ...state, isRefreshed: !state.isRefreshed, post: [...state.post, action.payload], isLoading: false };

        case 'DELETE_POST_ERROR':

            return { ...state, error: action.payload.response, isError: true, isLoading: false };


        case "EDIT_SELECTED":
            return {
                ...state, singlePost: { ...state.singlePost, isEdited: true }
            }

        case 'EDIT_POST_SUCCESS':

            return { ...state, isRefreshed: !state.isRefreshed, post: [...state.post, action.payload], isLoading: false };

        case 'EDIT_POST_ERROR':

            return { ...state, error: action.payload.response, isError: true, isLoading: false };

        case 'FETCH_SINGLE_POST_SUCCESS':

            return { ...state, singlePost: action.payload, isLoading: true };


        case 'DELETE_ALL_POST_SUCCESS':

            return { ...state, post: [], isRefreshed: !state.isRefreshed, status: action.payload.message, isLoading: false };
        default:
            return state;
    }
}