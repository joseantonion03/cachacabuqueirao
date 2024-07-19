const Hero = () => {

    return (
        <section id="hero" className="w-full h-auto min-h-[790px] bg-img_bg_hero max-md:bg-img_bg_hero_mobile 2xl:bg-img_bg_hero_full bg-no-repeat bg-cover 2xl:bg-contain bg-center bg-top flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[1000px]">
                <div className="max-w-[600px] max-md:mt-[90vw] max-md:mx-auto">
                    <h1 className="text-[39px] font-[SoraFont-Regular] text-[#181818]">DESCUBRA <span className="font-[SoraFont-Bold] text-[#6B4226]">BUQUEIRÃO</span> E A TRADIÇÃO EM CADA GOLE.</h1>
                    <p className="font-[SoraFont-Light] my-5 text-[24px]">Feita com paixão na Fazenda Palmeiras, nossa cachaça artesanal combina tradição e inovação. Sinta a riqueza de sabores únicos e celebre a essência da verdadeira cachaça Buqueirão.</p>              
                    <a href="#" target="_blank" className="inline-block mt-3 btn-primary-bg font-[SoraFont-Bold] text-[#ffffff] px-10 py-5 hover:opacity-75">CONHEÇA NOSSA HISTÓRIA</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;