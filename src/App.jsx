import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="mt-12">
                <h1 className="text-center text-[48px] font-albertSans">
                    How our product works
                </h1>
                <p className="font-albertSans text-[24px] text-center">
                    Convert your waste products into tokens on the{" "}
                    <span className="font-semibold">blockchain.</span>
                </p>
            </div>
        </>
    );
}

export default App;
