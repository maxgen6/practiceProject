import * as actionTypes from "./actionTypes"
import axios from 'axios'


export function fetchUser() {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStart)
            const res = await axios.get('http://jsonplaceholder.typicode.com/users/1')  
            const state = getState().user;
            const user = [...state.user]
            
            if(res.data.length) {
                res.data.map(item => {
                    user.push(item)
                })    
            } else {
                user.push(res.data)
            }
            dispatch(fetchSuccessUser(user))
        } catch (error) {
            dispatch(fetchErrorUser(error))
        }
    }
}

export function fetchStart(user) {
    return {
        type: actionTypes.FETCH_START,
        user
    }
}

export function fetchSuccessUser(user) {
    return {
        type: actionTypes.FETCH_SUCCESS_USER,
        user
    }
}

export function fetchErrorUser(e) {
    return {
        type: actionTypes.FETCH_ERROR_USER,
        error: e
    }
}

export function fetchPhoto() {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get('http://jsonplaceholder.typicode.com/photos/1')  
            const state = getState().user;
            const photo = [...state.photo]
            if(res.data.length) {
                res.data.map(item => {
                    return photo.push(item)
                })    
            } else {
                photo.push(res.data)
            }
            dispatch(fetchSuccessPhoto(photo))
        } catch (error) {
            dispatch(fetchErrorPhoto(error))
        }
    }
}

export function fetchSuccessPhoto(photo) {
    return {
        type: actionTypes.FETCH_SUCCESS_PHOTO,
        photo
    }
}

export function fetchErrorPhoto(e) {
    return {
        type: actionTypes.FETCH_ERROR_PHOTO,
        error: e
    }
}

export function fetchUserInfo() {
    return async dispatch => {
        try {
            const res = await axios.get('http://jsonplaceholder.typicode.com/users/1')  
            const user = []
            
            if(res.data.length) {
                res.data.map(item => {
                    user.push(item)
                })    
            } else {
                user.push(res.data)
            }
            dispatch(fetchSuccessUserInfo(user))
        } catch (error) {
            dispatch(fetchErrorUserInfo(error))
        }
    }
}

export function fetchSuccessUserInfo(user) {
    return {
        type: actionTypes.FETCH_SUCCESS_USER_INFO,
        user
    }
}

export function fetchErrorUserInfo(e) {
    return {
        type: actionTypes.FETCH_ERROR_USER_INFO,
        error: e
    }
}