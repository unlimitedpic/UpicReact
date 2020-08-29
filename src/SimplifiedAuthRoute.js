import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IsUserLoggedIn, SecureLoginUser } from './Networks/Auth';
import { getLocalAuthState } from './LocalStorage';
import { authSuccess } from './redux/actions/auth'


export const UserAuthRoute = ({ component: Component, ...args }) => (
    // user Authenticated Route
    <Route  {...args} 
            render={(props) => {
                IsUserLoggedIn()
                const { user_status, is_superuser } = getLocalAuthState()
                props = {
                        ...props, 
                        }
                return( user_status && is_superuser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                ))
            }
    } />
)

export const AdminAuthRoute = ({component: Component, ...args }) => (   
    // Admin 
    <Route {...args}
           render={
               (props) => {
                    IsUserLoggedIn()
                    const { user_status, is_Manager, is_superuser } = getLocalAuthState()
                    props = {
                            ...props, 
                            }
                    return(
                        user_status && !is_Manager &&  !is_superuser ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={{ pathname: '/' }} />
                        ) 
                    )
               }
           }
    />
)


export const PublicRoute = ({component: Component, ...args }) => {
const {  UserAuthRoute } = args
return(
    <Route  {...args}
            render={
                (props) => {
                    authSuccess()
                    const { user_status, is_Manager, is_superuser } = getLocalAuthState()
                    if(user_status) {
                        console.log('Im here');
                        console.log(is_Manager, 'hhyyy')
                        console.log(is_superuser, 'hhhghfghyyy')

                        return(<Redirect to={{
                            pathname: UserAuthRoute
                        }} />)
                    }
                    // added Initial routes to the props
                    props = {
                             ...props, 
                             UserAuthRouteInitialRoute: UserAuthRoute, 
                            //  employeeInitialRoute: employeeRoute,
                            //  managerInitialRoute: managerRoute,
                            }
                    
                    return(
                        <Component {...props} />                
                    )
                }
            }
    />
)}