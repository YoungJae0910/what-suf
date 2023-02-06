import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/Auth/Login"
import MyPage from "../components/Auth/MyPage"
import Register from "../components/Auth/Register"
import UserUpDate from "../components/Auth/UserUpDate"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import MainPage from "../Pages/MainPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/itemdetail" element={<ItemDetail />} />
                <Route path="/userupdate" element={<UserUpDate />} />
            </Routes>
        </BrowserRouter>
    )
}
