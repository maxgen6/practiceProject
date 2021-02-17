import * as actionTypes from "../actions/actionTypes";

const initialState = {
    user: [],
    photo: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_START: 
            return {
                ...state
            }
        case actionTypes.FETCH_SUCCESS_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.FETCH_ERROR_USER:
            return {
                ...state,
                error: action.error
            };
        case actionTypes.FETCH_SUCCESS_PHOTO:
            return {
                ...state,
                photo: action.photo,
            };
        case actionTypes.FETCH_ERROR_PHOTO:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}