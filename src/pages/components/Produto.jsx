const Produto = () => {

    return (
        <section id="produto" className="w-full h-auto flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[1300px]">
                <div className="flex max-lg:flex-wrap items-center justify-center my-10">
                    <div className="w-[560px] max-lg:order-2">
                        <div className="btn-primary-bg w-full">
                            <h2 className="font-[SoraFont-Bold] text-[#ffffff] pt-5 pb-10 px-7">NOSSOS PRODUTOS</h2>
                        </div>
                        <div className="bg-[#181818] py-5 px-7 mt-[-20px] rounded-2xl">
                            <p className="font-[SoraFont-Regular] text-[22px] py-3 text-[#ffffff]">Oferecemos uma variedade de cachaças artesanais de alta qualidade para todos os gostos.</p>
                            <p className="font-[SoraFont-Regular] text-[22px] py-3 text-[#ffffff]">Desde a cachaça prata até a envelhecida, temos opções que agradam todos os paladares e ocasiões especiais.</p>
                        </div>
                    </div>
                    <div className="lg:ml-[-9%] lg:mt-[-10%] w-[690px] max-lg:order-1">
                        <img src="/image/produto/kit.webp" className="w-full" alt="Imagem da cachaça" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Produto;