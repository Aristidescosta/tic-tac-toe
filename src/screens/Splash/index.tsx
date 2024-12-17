import { useNavigate } from "react-router";
import { useEffect } from "react";

export const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Define o tempo da tela de splash
        const timer = setTimeout(() => {
            navigate("/settings");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='h-screen w-screen flex items-center flex-col justify-center bg-background text-text'>
            <div className="flex flex-col relative">
                <div className="animate-bounce z-50 h-[12rem] w-[12rem] bg-error rounded-full flex items-center justify-center ">
                    <span className="text-3xl font-bold z-20 text-background">Tic Tac Toe.</span>
                </div>
                <div className="bg-contrastError animate-bounce w-[12rem] h-[12rem] absolute top-4 rounded-full"></div>
                <div className="flex-col relative colored"></div>
            </div>
            <span className="mt-12">Desenvolvido por Aristides da Costa</span>
        </div>
    )
}
