

import { SplashScreen } from "@pages/SplashScreen";
import { BrowserRouter, Routes, Route } from "react-router";

export const TicTacToeRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
