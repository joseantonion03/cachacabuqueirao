const Exclusividade = () => {

    return (
        <section id="exclusividade" className="w-full h-auto flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[1300px]">
                <h2 className="text-[40px] text-center mx-auto max-w-[900px] font-[SoraFont-Bold] text-[#181818] leading-[45px]"><span className="text-primary-bg font-[SoraFont-Bold]">GARANTIA DE QUALIDADE</span> CACHAÇA BUQUEIRÃO COM MARCA REGISTRADA</h2>
                <p className="font-[SoraFont-Light] text-center my-3 mx-auto max-w-[600px] text-[20px]">Experimente a melhor cachaça artesanal com a Buqueirão: tradição, autenticidade e sabor únicos em cada gole.</p>
                <div className="w-full h-[700px] max-md:h-auto mt-32 mb-20 relative">
                    <img className="absolute background-image top-[50%] left-[50%] object-contain z-[-1] translate-x-[-50%] translate-y-[-50%]" src="/image/exclusividade/ellipse.png" alt="Imagem de efeito" />

                    <picture>
                        <source srcSet="/image/exclusividade/contrato.webp" media="(min-width: 768px)" />
                        <source srcSet="/image/exclusividade/contrato-mobile.webp" media="(max-width: 767px)" />
                        <img
                            className="mx-auto w-full max-w-[950px] background-image"
                            src="/image/exclusividade/contrato.webp"
                            alt="Nosso compromisso" />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default Exclusividade;