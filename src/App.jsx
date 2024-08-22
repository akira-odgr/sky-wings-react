import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Destination } from "./components/destination/Destination";
import { Journey } from "./components/journey/Journey";
import { Showcase } from "./components/showcase/Showcase";
import { Footer } from "./components/footer/Footer";

import "./App.scss";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Destination />
            <Journey />
            {/* <Showcase /> */}
            {/* <Footer /> */}
        </>
    );
}

export default App;
