import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Consultoria from "./pages/Consultoria";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Consultoria" element={<Consultoria />}></Route>
                <Route path="/Playlist" element={<Playlist />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;