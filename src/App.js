import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main/Main"
import Info from "./components/MainTitle/Info"
import MainSlide from "./components/MainSlider/MainSlider"
import MainStore from "./components/MainStore/MainStore"
import MainPhoto from "./components/Main/MainPhoto"
import StoreGrid from "./components/MainStore/StoreGrid"
import Header from "./components/Header/Header"
import MainReservation from "./MainReservaition/MainReservation"
import MainReservationGrid from "./MainReservaition/MainReservationGrid"

function App() {
    return (
        <>
            <Main />
            <Header />
            <MainPhoto />
            <Info />
            <MainStore />
            <StoreGrid />
            <MainReservation />
            <MainReservationGrid />
        </>
    )
}

export default App
