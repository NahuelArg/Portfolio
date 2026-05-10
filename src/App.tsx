import {About, Contact, Experience, Hero, NavBar, Works} from "./components";

const App = () => {

    return (
        <div className="relative z-0 bg-[#0f2410]">
            <div className="bg-hero-pattern bg-[length:28px_28px] bg-cover bg-no-repeat bg-center">
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
