import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Historia = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    const handleResize = () => {
        if (window.innerWidth < 300) {
            setSlidesPerView(1);
        } else if (window.innerWidth < 600) {
            setSlidesPerView(2);
        } else if (window.innerWidth < 900) {
            setSlidesPerView(4);
        } else if (window.innerWidth < 1200) {
            setSlidesPerView(5);
        } else {
            setSlidesPerView(6)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // chama a função para definir o valor inicial
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slides = [
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        { src: 'image/historia/slide/02.png', alt: 'Image 1' },
        // Adicione mais imagens conforme necessário
    ];


    return (
        <section id="historia" className="w-full overflow-hidden h-auto min-h-[2327px] bg-img_bg_historia bg-no-repeat bg-contain bg-custom-center flex justify-center my-20 p-[20px]">
            <div className="w-full max-w-[1300px] mb-2">
                <h2 className="text-primary-bg font-[SoraFont-Bold] text-[42px] text-center">História da Cachaça Buqueirão</h2>
                <p className="font-[SoraFont-Light] my-5 text-[18px] text-center mx-auto max-w-[730px]">Abaixo contém um pouco da história da Cachaça Buqueirão, uma destilaria artesanal que há décadas produz cachaças de qualidade, combinando tradição familiar com técnicas inovadoras de produção.</p>
                <div className="flex max-lg:flex-wrap items-center mx-auto max-w-[1100px]">
                    <div className="w-[500px] h-[550px] max-lg:w-full max-lg:h-auto">
                        <img className="w-full" src="/image/historia/mulher.png" alt="Foto de uma mulher" />
                    </div>
                    <div className="w-[calc(100%-550px)] max-lg:w-full">
                        <p className="font-[SoraFont-Regular] sm:text-justify max-lg:mb-5 text-[18px]">Um pecuarista e produtor de algodão do sudeste, Deolindo de Castro Lima, iniciou sua jornada em 1932, cultivando cana-de-açúcar e produzindo cachaça artesanal na Fazenda Palmeiras, em Sebastião Laranjeiras, Bahia. Com o tempo, a produção de cachaça tornou-se a paixão de Deolindo, resultando no registro oficial da Cachaça Buqueirão em 1949. Após seu falecimento, sua esposa Lísia assumiu o alambique em 1956, sindicalizando os funcionários e mantendo a qualidade e a tradição do produto.</p>
                    </div>
                </div>
                <div className="flex items-center mx-auto max-w-[1000px] lg:pl-3">

                    <div className="w-full">
                        <p className="font-[SoraFont-Regular] sm:text-justify max-lg:my-5 text-[18px]">A tradição familiar continuou com Osvaldo Lelis Lima, filho de Deolindo, que conduziu a produção a partir de 1968, garantindo que os métodos artesanais fossem preservados. Em 2014, Carlos Alberto, filho caçula de Osvaldo, junto com sua esposa Drª Luciana, trouxe uma nova perspectiva à fábrica, combinando tradição com inovação tecnológica. Hoje, sob a administração de Carlos Alberto e Drª Luciana, a Cachaça Buqueirão continua a encantar os apreciadores com sua qualidade inigualável e sua rica história de dedicação e paixão.</p>
                    </div>
                </div>
                <h2 className="text-primary-bg font-[SoraFont-Bold] text-[42px] text-center mt-32">Linha do tempo</h2>
                <div className="mx-auto max-w-[1000px] my-48 max-sm:my-10 max-sm:flex max-sdscreen:flex-wrap">
                    <ul className="flex relative max-sm:flex-wrap">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={1258}
                            height={176}
                            viewBox="0 0 1258 176"
                            fill="none"
                            className="absolute max-w-[1200px] top-[-190px] right-[30%] max-sm:hidden"
                        >
                            <path
                                d="M1258 175.5H476.085C467.19 175.5 458.455 173.127 450.783 168.626L312.428 87.4521C298.225 79.1189 289.5 63.8843 289.5 47.417V47.417C289.5 21.7816 268.718 1 243.083 1H-131"
                                stroke="#556B2F"
                            />
                        </svg>

                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px] after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">1932</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">Deolindo de Castro Lima começa a cultivar cana-de-açúcar e a produzir cachaça artesanal na Fazenda Palmeiras.</p>
                        </li>
                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px] after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">1949</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">A cachaça Buqueirão é oficialmente registrada, marcando o início de uma longa tradição de qualidade.</p>
                        </li>
                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px] after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">1956</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">Após o falecimento de Deolindo, sua esposa Lísia assume o alambique e sindicaliza os funcionários, garantindo a continuidade da produção.</p>
                        </li>
                    </ul>
                    <ul className="flex sm:mt-60 relative max-sm:flex-wrap">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={1539}
                            height={136}
                            viewBox="0 0 1539 136"
                            fill="none"
                            className="absolute max-w-[1200px] top-[-35px] left-[20px] max-sm:hidden"
                        >
                            <path
                                d="M0.5 0.5H200.346C210.689 0.5 220.609 4.60892 227.923 11.9228V11.9228C243.153 27.1533 267.847 27.1533 283.077 11.9228V11.9228C290.391 4.60892 300.311 0.5 310.654 0.5H1124.29C1137.55 0.5 1150.27 5.76784 1159.64 15.1447L1186.86 42.3553C1196.23 51.7322 1208.95 57 1222.21 57H1303.29C1316.55 57 1329.27 62.2678 1338.64 71.6447L1387.86 120.855C1397.23 130.232 1409.95 135.5 1423.21 135.5H1539"
                                stroke="#556B2F"
                            />
                        </svg>

                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px]  after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">1968</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">Osvaldo Lelis Lima, filho de Deolindo, assume a condução dos trabalhos de produção do engenho, mantendo a tradição familiar.</p>
                        </li>
                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px]  after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">2014</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">Carlos Alberto, filho caçula de Osvaldo, junto com sua esposa, assume o comando da fábrica, trazendo uma nova perspectiva e inovação para a produção.</p>
                        </li>
                        <li className="relative px-5 after:content-[''] after:absolute after:top-[-25px] max-sm:after:top-[30px]  after:w-[12px] after:h-[12px] after:bg-[#556B2F] after:rounded-full">
                            <p className="font-[SoraFont-SemiBold] text-[#556B2F] text-[20px] my-5 max-sm:pl-5">2024</p>
                            <p className="font-[SoraFont-Light] text-[14px] max-w-[330px]">Atualmente, a indústria é administrada por Carlos Alberto e sua esposa Drª Luciana, sócia-fundadora da empresa Palmeiras Fabricação de Cachaça, mantendo a tradição e a qualidade da Buqueirão.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className="text-secondary-bg text-[120px] font-[SoraFont-ExtraBold] text-center max-md:text-[14vw]">EXPOSIÇÃO</h3>
                        <h2 className="text-[38px] font-[SoraFont-SemiBold] mt-[-70px] text-center leading-[40px]">EVENTOS QUE PARTICIPAMOS</h2>
                    </div>
                    <div className='my-10 select-none'>
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={false} // Ajuste para garantir que não haja slide centralizado
                            slidesPerView={slidesPerView} // Exibir slides com base no estado
                            loop={true}
                            SwiperSlide={{
                                isPrev: false
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <img src={slide.src} alt={slide.alt} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Historia;