import axios from "axios"
import { useQuery } from "react-query"

export const response = () => {
    return axios.get("http://localhost:3001/data").then((res) => res)
}

export const reservation = () => {
    return axios.get("http://localhost:3001/reservation").then((res) => res)
}

export const addUserList = (newUser) => {
    console.log("test")
    return axios.post("http://localhost:3001/user", newUser)
}
