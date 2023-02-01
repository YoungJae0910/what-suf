import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main/Main"
import Info from "./components/MainTitle/Info"
import MainSlide from "./components/MainSlider/MainSlider"
import MainStore from "./components/MainStore/MainStore"
import StoreList from "./components/MainStore/StoreList"

function App() {
    return (
        <>
            <Main />
            <StoreList />
        </>
    )
}

export default App
