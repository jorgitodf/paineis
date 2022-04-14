import {Http} from '../../config/globalConfig';
import { changeloading } from './loading.action';
import { changenotify } from './notify.action';

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    GET_USERNAME: 'GET_USERNAME',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    CHANGE: 'CHANGE',
    ERROR: 'ERROR'
}

export const getToken = (token) => ({
  type: actionTypes.GET_TOKEN,
  token
});

export const getUsername = (username) => ({
    type: actionTypes.GET_USERNAME,
    username
});

export const removeToken = () => ({
  type: actionTypes.LOGOUT
});

export const loginSuccess = bool => ({
    type: actionTypes.SUCCESS,
    bool
});

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
});

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
});

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool,
        msg: msg
    }
});

export const getUserToken = () => dispatch => {
    localStorage.getItem('access_token')
    .then(res => {
        dispatch(loading(false));
        if (typeof res !== 'undefined') {
            dispatch(getToken(res));
        }
    });
}

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('access_token', token);
    dispatch(loading(false));
    dispatch(loginSuccess(true));
};

export const getUserName = () => dispatch => {
    localStorage.getItem('username')
    .then(res => {
        dispatch(loading(false));
        if (typeof res !== 'undefined') {
            dispatch(getUsername(res));
        }
    });
}

export const setUserName = (username) => dispatch => {
    localStorage.setItem('username', username);
    dispatch(loading(false));
    dispatch(loginSuccess(true));
};

export const login = (credentials) => {
    return dispatch => {
        dispatch(changeloading({
            open: true,
            msg: 'Autenticando'
        }));
        return Http.post('/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: '48mAFolMPzBZixQif5zgxGTyOWVXG70f8t6NEWfD',
            username: credentials.username,
            password: credentials.password
        })
        .then(res => {
            dispatch(changeloading({
                open: false,
                msg: ''
            }));

            if (typeof res !== 'undefined') {
                dispatch(setUserToken(res.data.access_token));
                dispatch(setUserName(credentials.username));
            }
        })
        .catch(error => {
            dispatch(changeloading({
                open: false,
                msg: ''
            }));

            if (error.response) {
                if (error.response.status === 401 || error.response.status === 400) {
                    dispatch(changenotify({
                        open: true,
                        msg: 'E-mail ou Senha incorretos',
                        class: 'error'
                    }))
                }
            } else {
                dispatch(changenotify({
                    open: true,
                    msg: 'Erro ao efetuar o Login',
                    class: 'error'
                }))
            }
        })
    }
}
 