import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Destination } from "./components/destination/Destination";
import { Journey } from "./components/journey/Journey";
import { Showcase } from "./components/showcase/Showcase";
import { Banner } from "./components/banner/Banner";
import { Discover } from "./components/discover/Discover";
import { Footer } from "./components/footer/Footer";

import "./App.scss";
import { Client } from "./components/client/Client";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Destination />
            <Journey />
            <Showcase />
            <Banner />
            <Discover />
            <Client />
            <Footer />
        </>
    );
}

export default App;
