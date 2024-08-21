import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Discover } from "./components/discover/Discover";
import { Footer } from "./components/footer/Footer";

import "./App.scss";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Discover />
            {/* <Footer /> */}
        </>
    );
}

export default App;
