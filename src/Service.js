import axios from "axios";
export default class ServiceApi {
    getUser(){
       return axios.get("https://houserent-e92b3-default-rtdb.firebaseio.com/users.json")
    }
}