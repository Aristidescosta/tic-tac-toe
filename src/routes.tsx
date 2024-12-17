import { BrowserRouter, Routes, Route } from "react-router";

import { SplashScreen, Settings, Game } from "@/screens";

export const TicTacToeRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}
