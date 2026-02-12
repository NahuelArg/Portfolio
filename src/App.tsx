import {About, Contact, Experience, Hero, NavBar, Works} from "./components";

const App = () => {

    return (
        <div className="relative z-0 bg-[#6fb970]">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <NavBar/>
                <Hero/>
            </div>
            <About/>
            <Experience/>
            <Works/>
            <div className="relative z-0">
                <Contact/>
            </div>
        </div>
    )
}

export default App;
