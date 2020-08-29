import axios from 'axios';
import { createLocalAuthState, destroyLocalAuthState } from '../LocalStorage';
import moment from 'moment';

export const IsUserLoggedIn = () => {
    // checks whether the user is loggedIn or not
    const config = {
        method: 'GET',
        url: '/api/user/auth_status/',
        withCredentials: true
    }

    axios(config).then((response) => {
        if (response.data.user_status) {
            createLocalAuthState(response.data)
        } else {
            destroyLocalAuthState()
        }
    }).catch((err) => {
        destroyLocalAuthState()
        console.log("[Notice] you've been logged out")
    })
}

export const AuthRedirectHandler = (data, props) => {

    console.log(data, "data object")

    // helps in authentication redirection after logging in
    if (data.user_status && !data.is_Manager && !data.is_superuser) {
        props.history.push(props.employeeInitialRoute)
    } else if (data.user_status && data.is_Manager && !data.is_superuser) {
        props.history.push(props.managerInitialRoute)
    } else if (data.user_status && data.is_Manager && data.is_superuser) {
        props.history.push(props.employerInitialRoute)
    }
}

export const SecureLoginUser = (email, password, props) => {
    // Logs user in
    const config = {
        method: 'POST',
        url: '/api/signin',
        withCredentials: true,
        data: {
            email: email,
            password: password,
        }
    }
    axios(config).then((res) => {
        // Save data to localstorage.
        createLocalAuthState(res.data)
        AuthRedirectHandler(res.data, props)
        // console.log(res.data)
    }).catch((err) => {
        console.log('[Error] unsuccessful login attempt', err, props)
        alert("Please check your username/email or password!")

    })
}

export const SecureLogoutUser = () => {
    // Logout for user
    const config = {
        method: 'GET',
        url: '/api/user/logout/',
        withCredentials: true
    }
    axios(config).then((response) => {
        destroyLocalAuthState()
        window.location.pathname = '/'
    }).catch(err => {
        destroyLocalAuthState()
        window.location.pathname = '/'
        console.log('[Error] Logging out user')
    })
}


//to register the employee 
export const SecureRegisterUser = (email, password, firstName, lastName, phoneNumber, gender, props) => {
    // Logs user in
    const config = {
        method: 'POST',
        url: '/api/signup',
        withCredentials: true,
        data: {
            email: email,
            password: password,
            profile: {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                gender: gender,
                age:'10',
            }
        }
    }
    axios(config).then((res) => {
        // Save data to localstorage.
        createLocalAuthState(res.data)
        AuthRedirectHandler(res.data, props)
        console.log(res.data)
    }).catch((err) => {
        console.log('[Error] unsuccessful login attempt', err, props)
    })
}
