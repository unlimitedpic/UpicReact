import axios from "axios";
// const authToken = localStorage.getItem('sessionid');
// const AuthStr = `sessionid=${authToken}`;

export const HomepageImages = () => {

    const config = {
        method: 'GET',
        url: '/api/main_category/ ',
        withCredentials: true,
    }
    return axios(config)

}

export const SubCatergry = () => {

    const config = {
        method: 'GET',
        url: '/api/sub_category/ ',
        withCredentials: true,
    }
    return axios(config)

}

export const TypeCatergery = () => {

    const config = {
        method: 'GET',
        url: '/api/file_type/ ',
        withCredentials: true,
    }
    return axios(config)

}


export const TypeSearch = (name) => {
    const config = {
        method: 'GET',
        url: '/api/image_upload/?type',
        withCredentials: 'true',
        params: {

            type: name

        },
    }
    return axios(config)

}


export const userDetails = (AuthStr) => {

    const config = {
        method: 'GET',
        url: '/api/users/',
        headers: { 
            accept: "application/json",
            Cookie: `sessionid=${AuthStr}`
        },
        withCredentials: true,
    }
    return axios(config)

}

export const ProfileDetails = (token) => {

    const config = {
        method: 'GET',
        url: '/api/profile/',
        headers: { 
            accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
    }
    return axios(config)

}


export const Myfavorite = (token) => {

    const config = {
        method: 'GET',
        url: '/api/myfavorite/',
        withCredentials: true,
        headers: { 
            accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    }
    return axios(config)

}

export const Myupload = (token) => {

    const config = {
        method: 'GET',
        url: '/api/image/',
        withCredentials: true,
        headers: { 
            accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    }
    return axios(config)

}

export const Mydownload = (token) => {

    const config = {
        method: 'GET',
        url: '/api/my_downloads/',
        headers: { 
            accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
    }
    return axios(config)

}

export const AdminHistory = (token) => {

    const config = {
        method: 'GET',
        url: '/api/image_history/',
        headers: { 
            accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
    }
    return axios(config)

}


// export const Search_Data = (selected_Date) => {
 
//     const config = {
//       method:'GET',
//       url:'/api/image_upload/',
//       withCredentials:true,
//       params: {
//         select_date:moment(selected_Date).format('YYYY-MM-DD')
//       }
 
//     }
 
//     return axios(config)
 
//  }
 
