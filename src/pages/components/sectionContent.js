import IconPhone from '@/assets/icon-phone.svg'
import IconCard from '@/assets/icon-card.svg'
import IconSolutions from '@/assets/icon-solutions.svg'
import IconOptions from '@/assets/icon-options.svg'
import Phone from '@/assets/phone.png'
import Image from 'next/image';

const SectionContent = () => {
    return (
        <section className='w-full flex pt-32 h-[965px] justify-center '>
            <div className="max-w-[1400px] w-full flex justify-between pr-10 pl-10 flex-col xl2:flex-row items-center gap-10">
                <div className="flex-1 max-w-[594px] ">
                    <span className="uppercase text-sm font-bold  text-amber-600 mb-9 ">SERVIÇOS EXCLUSIVOS
                    </span>
                    <h2 className="text-gray-900 text-[56px] font-bold leading-tight mb-6">
                        Gerencie suas finanças sem sair de casa
                    </h2>
                    <p className="text-lg max-w-[554px] mb-16 text-gray-700">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no corforto da sua casa.
                    </p>
                    <ul className=''>
                        <li className='flex gap-5 mb-8'>
                            <div className='h-7 w-7 flex justify-center item-center'><Image src={IconPhone} alt='iconphone' /></div>
                            <p className=' text-gray-700'>
                                Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
                            </p>
                        </li>
                        <div className='w-full h-px bg-black mb-8 opacity-5 '></div>
                        <li className='flex gap-5 mb-8'>
                            <div className='flex h-7 w-7 justify-center item-center'><Image src={IconSolutions} alt='iconsolutions' />
                            </div>
                            <p className=' text-gray-700'>
                                Soluções de empréstimos e renegociação para organizar suas finanças
                            </p>
                        </li>
                        <div className='w-full h-px bg-black mb-8 opacity-5'></div>
                        <li className='flex gap-5 mb-8'>
                            <div className='flex h-7 w-7 justify-center item-center'><Image src={IconOptions} alt='iconoptions' />
                            </div>
                            <p className=' text-gray-700'>
                                Diversas opções de investimentos, de acordo com o seu perfil de investidor
                            </p>
                        </li>
                        <div className='w-full h-px bg-black mb-8 opacity-5'></div>
                        <li className='flex gap-5 mb-8'>
                            <div className='flex h-7 w-7 justify-center item-center'><Image src={IconCard} alt='iconcard' />
                            </div>
                            <p>
                                Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='full'>
                    <Image className='' src={Phone} alt='phone' />
                </div>
            </div>
        </section>
    );
}
export default SectionContent;
