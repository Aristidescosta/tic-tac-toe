

import { BrowserRouter, Routes, Route } from "react-router";
import { SplashScreen, Settings } from "@/screens";

// Importar as páginas


export const TicTacToeRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}
