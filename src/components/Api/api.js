import axios from "axios"
import { useQuery } from "react-query"

export const response = () => {
    return axios.get("http://localhost:3001/data").then((res) => res.data)
}

export const reservation = () => {
    return axios
        .get("http://localhost:3001/reservation")
        .then((res) => res.data)
}

export const getUserId = () => {
    return axios.get("http://localhost:3001/user").then((res) => res.data)
}

export const addUserList = (newUser) => {
    return axios.post("http://localhost:3001/user", newUser)
}

export const upDateUser = (upDate) => {
    return axios.patch("http://localhost:3001/user", upDate)
}

// export const deleteUserList = (id) => {
//     console.log("test1")
//     return axios.delete(`http://localhost:3001/user/${id}`)
// }

// const { mutate } = useMutation(deleteUserList)
// const onRegisterFormSubmit = async (e) => {
//     e.preventDefault()

//     mutate(newUser)
//     // Do something
// }
