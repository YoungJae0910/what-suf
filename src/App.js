import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main/Main"
import Info from "./components/MainTitle/Info"
import MainSlide from "./components/MainSlider/MainSlider"
import MainStore from "./components/MainStore/MainStore"
import MainPhoto from "./components/Main/MainPhoto"
import StoreGrid from "./components/MainStore/StoreGrid"
import Header from "./components/Header/Header"
import MainReservation from "../src/components/MainReservaition/MainReservation"
import MainReservationGrid from "../src/components/MainReservaition/MainReservationGrid"
import TopButton from "./components/TopButton/TopButton"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import { QueryClient, QueryClientProvider } from "react-query"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {/* <Main />
            <Header />
            <TopButton />
            <MainPhoto />
            <Info />
            <MainStore />
            <StoreGrid />
            <MainReservation />
            <MainReservationGrid /> */}
            {/* <ItemDetail /> */}
            {/* <Login /> */}
            <Register />
        </QueryClientProvider>
    )
}

export default App
