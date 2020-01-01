import axios from "axios";

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
