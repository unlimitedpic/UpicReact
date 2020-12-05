import * as actionTypes from './actionTypes'
import axios from 'axios';


export const authStart = (isAdmin) => {
    return {
        type: actionTypes.AUTH_START,
        isAdmin:isAdmin,
    }
}

export const authSuccess = (token,user_id ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user_id: user_id,
        token: token,
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (email, password, props) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/api/signin', {
            email: email,
            password: password,
        })
        .then(res => {
            const token = res.data.token;
            const isAdmin = res.data.isAdmin
            // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            console.log(localStorage.setItem('token', token),'token login')
            // localStorage.setItem('bull8_token', access_token);
            // localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(authStart(isAdmin));
            dispatch(checkAuthTimeout(360000));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (email, password, firstName, lastName, phoneNumber, gender, props ) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/api/signup', {
            email:email,
            password:password,
            profile: {
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    gender: gender
                    }
            // username: username,
            // email: email,
            // password1: password1,
            // password2: password2,
        })
        .then(res => {
            const user_id = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', user_id);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(user_id));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
