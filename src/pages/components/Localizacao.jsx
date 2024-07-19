const Localizacao = () => {

    return (
        <section id="localizacao" className="w-full h-auto flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[1300px] mt-40">
                <h2 className="text-[42px] text-center mx-auto max-w-[900px] font-[SoraFont-SemiBold] text-[#181818] leading-[45px]">Localização da fabrica</h2>
                <p className="font-[SoraFont-Regular] text-center mt-2 mb-7 mx-auto max-w-[750px] text-[22px]">Venha nos visitar e conhecer nossas instalações de perto!</p>
                <div className="max-w-[700px] my-10 mx-auto">
                    <p className="font-[SoraFont-Regular] text-[22px] text-[#6B4226]">Entre em contato</p>
                    <p className="font-[SoraFont-Regular] text-[18px]"><span className="font-[SoraFont-Medium] inline">Telefone:</span> (77) 9000-0000 ou <span className="font-[SoraFont-Medium]">E-mail:</span> contato@cachacabuqueirao.com.br</p>
                </div>
                <div className="relative">
                    <div
                        style={{ filter: 'drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.10)) drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.10)) drop-shadow(-14px 17px 22px rgba(0, 0, 0, 0.09)) drop-shadow(-32px 39px 30px rgba(0, 0, 0, 0.05)) drop-shadow(-57px 70px 36px rgba(0, 0, 0, 0.01)) drop-shadow(-89px 109px 39px rgba(0, 0, 0, 0.00))' }}
                        className="absolute top-[50%] translate-y-[-50%] bg-white w-[320px] max-md:w-[280px] p-5 rounded-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            className="absolute top-[50%] translate-y-[-50%] right-[-28px]"
                        >
                            <path
                                d="M0.209473 0.583984L29.745 14.6485L0.209473 29.0646V0.583984Z"
                                fill="white"
                            />
                        </svg>

                        <h3 className="font-[SoraFont-Regular] text-[32px] max-w-[150px] leading-[30px]">Onde estamos</h3>
                        <p className="font-[SoraFont-Medium] text-[15px] text-[#7B7B7B] leading-[20px] my-4">Fazenda Palmeiras, Sebastão Laranjeiras - BA, 46450-00</p>
                        <a className="inline-block btn-primary-bg font-[SoraFont-Regular] text-[16px] text-[#ffffff] px-5 py-2 hover:opacity-75" href="https://maps.app.goo.gl/4NdHbF1KjTJGh7REA" target="_blank">COMO CHEGAR</a>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.709460517728!2d-42.935235524894615!3d-14.558600085922764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75a9e7ada5cfca5%3A0xdf8300c4c187559e!2sFazenda%20Palmeira!5e0!3m2!1spt-BR!2sbr!4v1721346422197!5m2!1spt-BR!2sbr"
                        width={757}
                        height={428}
                        style={{ border: 0 }}
                        aria-label="Visualizar Mapa"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="mx-auto rounded-3xl max-lg:w-full max-lg:max-w-[700px]"
                    />

                </div>
            </div>
        </section>
    );
};

export default Localizacao;