import { Http } from "../../config/globalConfig";
import { changeloading } from "./loading.action";
import { changenotify } from "./notify.action";
import {setUserToken} from './auth.action';

export const actionTypes = {
    SUCCESS: 'SUCCESS',
    CHANGE: 'CHANGE',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const registerUser = (data) => {
    return dispatch => {
        dispatch(changeloading({
            open: true,
            msg: 'Registrando Usuário'
        }))
        return Http.post('/register', data)
        .then(res => {
            dispatch(changeloading({
                open: false,
                msg: ''
            }))

            if (typeof res !== 'undefined') {

                if (res.data.error) {
                    dispatch(registerError(res.data.error));
                }

                if (res.data.success) {
                    dispatch(changenotify({
                        open: true,
                        class: 'success',
                        msg: 'Usuário cadastrado com sucesso!'
                    }))
                    dispatch(setUserToken(res.data.token));
                    dispatch(success(true));
                }

            }
        })
        .catch(() => {
            dispatch(changeloading({
                open: false,
                msg: ''
            }))
        })
    }
}