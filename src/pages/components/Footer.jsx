const Footer = () => {

    return (
        <footer id="footer" className="w-full h-auto flex justify-center items-center p-[20px]">
            <div className="w-full max-w-[880px] mt-40 mb-10 relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={1141}
                    height={2}
                    viewBox="0 0 1141 2"
                    fill="none"
                    className="absolute left-[50%] translate-x-[-50%] top-[-100px] max-w-full"
                >
                    <path d="M0 1H1140.5" stroke="url(#paint0_radial_51_77)" />
                    <defs>
                        <radialGradient
                            id="paint0_radial_51_77"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(570.25 1.49999) rotate(-82.0523) scale(77.7468 88592.5)"
                        >
                            <stop stopColor="#E9B735" />
                            <stop offset={1} stopColor="#E9B735" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg>

                <h2 className="font-[SoraFont-Regular] text-[25px] text-[#181818] leading-[35px] mt-4 max-sm:text-center">PALMEIRAS FABRICAÇÃO DE CACHAÇA LTDA - 28.835.607/0001-00</h2>
                <div className="flex justify-between items-center my-5 max-sm:flex-wrap ">
                    <div className="max-sm:w-full">
                        <p className="font-[SoraFont-Regular] text-[#181818] text-[19px] mb-2 max-sm:text-center">Nós acompanhe:</p>
                        <ul className="flex max-sm:justify-center">
                            <li>
                                <a href="#" className="mr-3 bg-[rgba(45,45,50,0.1)] rounded-full w-[48px] h-[48px] flex justify-center items-center hover:opacity-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        className="fill-[#2D2D32]"
                                    >
                                        <path
                                            d="M8.99998 1.62165C11.4031 1.62165 11.6877 1.6308 12.6367 1.6741C13.5142 1.71415 13.9908 1.86077 14.3079 1.98398C14.728 2.14725 15.0278 2.34231 15.3428 2.65723C15.6577 2.97215 15.8528 3.272 16.016 3.69206C16.1392 4.00923 16.2859 4.48577 16.3259 5.36323C16.3692 6.31228 16.3783 6.5969 16.3783 9.00002C16.3783 11.4031 16.3692 11.6878 16.3259 12.6368C16.2859 13.5143 16.1392 13.9908 16.016 14.308C15.8528 14.728 15.6577 15.0279 15.3428 15.3428C15.0278 15.6577 14.728 15.8528 14.3079 16.016C13.9908 16.1393 13.5142 16.2859 12.6367 16.3259C11.6879 16.3692 11.4032 16.3784 8.99998 16.3784C6.59672 16.3784 6.3121 16.3692 5.36323 16.3259C4.48574 16.2859 4.00919 16.1393 3.69206 16.016C3.27196 15.8528 2.97212 15.6577 2.6572 15.3428C2.34228 15.0279 2.14721 14.728 1.98398 14.308C1.86073 13.9908 1.71411 13.5143 1.67406 12.6368C1.63076 11.6878 1.62162 11.4031 1.62162 9.00002C1.62162 6.5969 1.63076 6.31228 1.67406 5.36326C1.71411 4.48577 1.86073 4.00923 1.98398 3.69206C2.14721 3.272 2.34228 2.97215 2.6572 2.65723C2.97212 2.34231 3.27196 2.14725 3.69206 1.98398C4.00919 1.86077 4.48574 1.71415 5.36319 1.6741C6.31224 1.6308 6.59687 1.62165 8.99998 1.62165ZM8.99998 0C6.55571 0 6.24926 0.0103605 5.28931 0.05416C4.33133 0.0978881 3.67712 0.250008 3.10462 0.472507C2.51279 0.702508 2.01088 1.01025 1.51055 1.51058C1.01021 2.01092 0.702472 2.51283 0.47247 3.10466C0.249972 3.67716 0.0978521 4.33137 0.054124 5.28935C0.0103245 6.24926 0 6.55575 0 9.00002C0 11.4443 0.0103245 11.7508 0.054124 12.7107C0.0978521 13.6687 0.249972 14.3229 0.47247 14.8954C0.702472 15.4872 1.01021 15.9891 1.51055 16.4895C2.01088 16.9898 2.51279 17.2975 3.10462 17.5275C3.67712 17.75 4.33133 17.9021 5.28931 17.9459C6.24926 17.9897 6.55571 18 8.99998 18C11.4443 18 11.7507 17.9897 12.7107 17.9459C13.6686 17.9021 14.3228 17.75 14.8953 17.5275C15.4872 17.2975 15.9891 16.9898 16.4894 16.4895C16.9898 15.9891 17.2975 15.4872 17.5275 14.8954C17.75 14.3229 17.9021 13.6687 17.9458 12.7107C17.9896 11.7508 18 11.4443 18 9.00002C18 6.55575 17.9896 6.24926 17.9458 5.28935C17.9021 4.33137 17.75 3.67716 17.5275 3.10466C17.2975 2.51283 16.9898 2.01092 16.4894 1.51058C15.9891 1.01025 15.4872 0.702508 14.8953 0.472507C14.3228 0.250008 13.6686 0.0978881 12.7107 0.05416C11.7507 0.0103605 11.4443 0 8.99998 0ZM8.99998 4.37838C6.44753 4.37838 4.37835 6.44757 4.37835 9.00002C4.37835 11.5525 6.44753 13.6217 8.99998 13.6217C11.5524 13.6217 13.6216 11.5525 13.6216 9.00002C13.6216 6.44757 11.5524 4.37838 8.99998 4.37838ZM8.99998 12C7.34314 12 5.99996 10.6569 5.99996 9.00002C5.99996 7.34317 7.34314 6 8.99998 6C10.6568 6 12 7.34317 12 9.00002C12 10.6569 10.6568 12 8.99998 12ZM14.8842 4.19579C14.8842 4.79226 14.4007 5.27581 13.8042 5.27581C13.2077 5.27581 12.7242 4.79226 12.7242 4.19579C12.7242 3.59931 13.2077 3.1158 13.8042 3.1158C14.4007 3.1158 14.8842 3.59931 14.8842 4.19579Z"
                                            fill="#2D2D32"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-3 bg-[rgba(45,45,50,0.1)] rounded-full w-[48px] h-[48px] flex justify-center items-center hover:opacity-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={16}
                                        viewBox="0 0 18 16"
                                        fill="none"
                                        className="fill-[#2D2D32]"
                                    >
                                        <path
                                            d="M18 2.28977C17.3279 2.59435 16.6128 2.79336 15.88 2.87977C16.6546 2.40154 17.23 1.65918 17.5 0.789766C16.7788 1.22892 15.9872 1.54017 15.16 1.70977C14.8181 1.33308 14.4014 1.03182 13.9365 0.825202C13.4716 0.618586 12.9687 0.511155 12.46 0.509766C11.9688 0.516288 11.4838 0.619498 11.0325 0.813502C10.5813 1.00751 10.1726 1.2885 9.82997 1.64044C9.48731 1.99239 9.21734 2.40838 9.03547 2.86467C8.85359 3.32096 8.76339 3.80861 8.77 4.29977C8.76812 4.58944 8.8017 4.87825 8.87 5.15977C7.38868 5.07227 5.94299 4.6703 4.62911 3.9806C3.31524 3.29091 2.16332 2.3293 1.25 1.15977C0.91729 1.7555 0.744999 2.42744 0.75 3.10977C0.748996 3.72926 0.898669 4.3397 1.18612 4.88847C1.47357 5.43723 1.89017 5.90786 2.4 6.25977C1.81036 6.24041 1.23408 6.07919 0.72 5.78977C0.71363 6.65633 1.00521 7.49877 1.54589 8.17599C2.08658 8.85321 2.84354 9.32409 3.69 9.50977C3.36363 9.59586 3.02753 9.63955 2.69 9.63977C2.45959 9.65493 2.22822 9.64487 2 9.60977C2.22502 10.3555 2.67965 11.0112 3.29912 11.4834C3.91859 11.9557 4.6713 12.2203 5.45 12.2398C4.15613 13.2854 2.54355 13.857 0.88 13.8598C0.586864 13.875 0.293136 13.875 0 13.8598C1.6856 14.9495 3.65286 15.523 5.66 15.5098C12.45 15.5098 16.17 9.73977 16.17 4.73977C16.17 4.56977 16.17 4.40977 16.17 4.24977C16.8929 3.69292 17.5152 3.01649 18.01 2.24977"
                                            fill="#2D2D32"
                                        />
                                    </svg>
                                </a>

                            </li>
                            <li>
                                <a href="#" className="mr-3 bg-[rgba(45,45,50,0.1)] rounded-full w-[48px] h-[48px] flex justify-center items-center hover:opacity-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={26}
                                        height={26}
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        className="fill-[#2D2D32]"
                                    >
                                        <path
                                            d="M17.56 8.68937C20.1 8.68937 22 10.3694 22 13.9794V20.7294H18.14V14.4294C18.14 12.8494 17.58 11.7694 16.14 11.7694C15.6974 11.768 15.2657 11.9065 14.9066 12.1651C14.5474 12.4237 14.2791 12.7892 14.14 13.2094C14.0353 13.5146 13.9911 13.8373 14.01 14.1594V20.7294H10.22V20.6294C10.22 19.5694 10.22 10.0094 10.22 8.95937H14.08V10.6194C14.4284 10.0105 14.937 9.50867 15.5505 9.16842C16.164 8.82817 16.859 8.66249 17.56 8.68937ZM8.09002 8.95937V20.7294H4.23002V8.95937H8.09002ZM6.18002 3.28937C6.4558 3.26723 6.73317 3.30256 6.9946 3.39311C7.25603 3.48366 7.49583 3.62746 7.69884 3.81544C7.90185 4.00341 8.06365 4.23145 8.17402 4.48516C8.28438 4.73886 8.3409 5.0127 8.34002 5.28937C8.34128 5.56879 8.28398 5.84538 8.1718 6.10131C8.05963 6.35723 7.89507 6.58681 7.68874 6.77524C7.4824 6.96367 7.23887 7.10678 6.97385 7.19533C6.70882 7.28388 6.42818 7.31592 6.15002 7.28937C5.87504 7.31005 5.59875 7.27365 5.33851 7.18244C5.07827 7.09123 4.83971 6.94719 4.6378 6.75937C4.43589 6.57155 4.27501 6.34401 4.16525 6.09104C4.0555 5.83806 3.99924 5.56512 4.00002 5.28937C3.99889 5.01087 4.05593 4.7352 4.16751 4.48002C4.27908 4.22484 4.44272 3.99578 4.64794 3.8075C4.85316 3.61923 5.09544 3.47589 5.35927 3.38666C5.62309 3.29744 5.90264 3.2643 6.18002 3.28937Z"
                                            fill="#2D2D32"
                                        />
                                    </svg>
                                </a>

                            </li>
                            <li>
                                <a href="#" className="mr-3 bg-[rgba(45,45,50,0.1)] rounded-full w-[48px] h-[48px] flex justify-center items-center hover:opacity-75er">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={26}
                                        height={26}
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        className="fill-[#2D2D32]"
                                    >
                                        <path
                                            d="M14.88 4.01008C14.319 3.96946 13.7559 4.05193 13.2301 4.25173C12.7043 4.45153 12.2285 4.76383 11.8361 5.16676C11.4436 5.56969 11.144 6.05352 10.9581 6.58439C10.7722 7.11526 10.7046 7.68034 10.76 8.24008V10.6001H8V13.8001H10.76V22.0101H14.07V13.8001H16.82L17.24 10.6001H14.07V8.60008C14.07 7.63008 14.33 7.01008 15.65 7.01008H17.35V4.14008C16.5298 4.05046 15.7051 4.00706 14.88 4.01008Z"
                                            fill="#2D2D32"
                                        />
                                    </svg>
                                </a>

                            </li>
                        </ul>
                    </div>
                    <div className="w-[300px] max-sm:w-full">
                        <img className="w-full max-sm:max-w-[300px] max-sm:mx-auto max-sm:my-5" src="/image/footer/selo.png" alt="Selo do google" />
                    </div>
                </div>
                <p className="font-[SoraFont-Regular] text-[25px] text-[#181818] leading-[35px] flex max-sm:justify-center max-sm:flex-wrap">Desenvolvido por: <img className="w-[130px] ml-3" src="/image/footer/atomo.png" alt="Agencia Atomo" /></p>

            </div>
        </footer>
    );
};

export default Footer;