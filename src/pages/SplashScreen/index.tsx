export const SplashScreen = () => {
    return (
        <div className='h-screen w-screen flex items-center flex-col justify-center bg-background text-text'>
            <div className="animate-bounce h-[12rem] relative w-[12rem] bg-error rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold z-20 text-background">Tic Tac Toe.</span>
                <div className="bg-contrastError w-[12rem] h-[12rem] absolute top-4 rounded-full"></div>
            </div>
            <span className="mt-12">Desenvolvido por Aristides da Costa</span>
        </div>
    )
}
