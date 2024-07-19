const Venda = () => {

    return (
        <section id="venda" className="w-full h-auto flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[1300px] mt-10">
                <div style={{ background: 'linear-gradient(90deg, #181818 6.01%, rgba(24, 24, 24, 0.80) 108.09%)' }}
                className="w-[800px] rounded-[30px] flex justify-center items-center px-16 py-14 max-sdscreen:px-5 mx-auto max-lg:flex-wrap max-lg:w-full max-lg:max-w-[800px]"
                >
                    <div className="w-[200px] mr-7 max-lg:w-full max-lg:mr-0 max-lg:mb-5">
                        <img className="w-full max-w-[200px] mx-auto" src="/image/venda/aviso.webp" alt="Proibido para menores de 18 anos" />
                    </div>
                    <div className="w-[calc(100%-200px)] max-lg:w-full">
                        <h2 className="text-[32px] font-[SoraFont-Bold] text-[#FF413F] leading-[40px] max-lg:text-center">PROIBIDA A VENDA PARA MENORES DE 18 ANOS.</h2>
                        <p className="font-[SoraFont-Regular] text-[25px] text-[#ffffff] leading-[35px] mt-4 max-lg:text-center">EVITE CONSUMO EXCESSIVO DE ÁLCOOL E SE BEBER NÃO DIRIJA!</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venda;