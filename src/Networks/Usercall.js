import axios from "axios";

export const HomepageImages = () => {

    const config = {
        method: 'GET',
        url: 'http://3.17.202.194/api/main_category/ ',
        withCredentials: true,
    }
    return axios(config)

}

export const SubCatergry = () => {

    const config = {
        method: 'GET',
        url: 'http://3.17.202.194/api/sub_category/ ',
        withCredentials: true,
    }
    return axios(config)

}

export const TypeCatergery = () => {

    const config = {
        method: 'GET',
        url: 'http://3.17.202.194/api/file_type/ ',
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
 
