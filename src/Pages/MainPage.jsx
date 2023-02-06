import React from "react"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import MainPhoto from "../components/Main/MainPhoto"
import MainReservation from "../components/MainReservaition/MainReservation"
import MainReservationGrid from "../components/MainReservaition/MainReservationGrid"
import MainStore from "../components/MainStore/MainStore"
import StoreGrid from "../components/MainStore/StoreGrid"
import TopButton from "../components/TopButton/TopButton"
import Info from "../components/MainTitle/Info"

export default function MainPage() {
    return (
        <>
            <Main />
            <Header />
            <TopButton />
            <MainPhoto />
            <Info />
            <MainStore />
            <StoreGrid />
            <MainReservation />
            <MainReservationGrid />
        </>
    )
}
