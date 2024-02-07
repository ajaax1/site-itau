import React from 'react';
import Image from 'next/image';
import AppleStore from '@/assets/btn-apple-store.svg'
import GooglePlay from '@/assets/btn-google-play.svg'
import Arrow from '@/assets/arrow-explorer.svg'
import Woman from '@/assets/woman.png'
import { motion } from "framer-motion"

const SectionHero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 2 }} className='w-full animation xl2:h-[704px] h-auto text-white bg-img_bg_hero bg-no-repeat bg-center bg-cover flex justify-center items-center'>
            <div className='max-w-[1400px] pt-10 xl2:pt-0 flex flex-wrap  w-full h-full justify-center xl2:flex-nowrap xl2:justify-between items-center pr-10 pl-10'>
                <div className='flex-col '>
                    <div className='flex-1 max-w-[500px] flex-column justify-center items-center text-center xl2:text-left  '>
                        <motion.h1
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className='font-bold text-4xl  mb-4 xl2:text-7xl'>Tenha seu banco na palma da mão.
                        </motion.h1>
                        <motion.p
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className='text-xl xl2:max-w-[408px] mb-8'>Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.
                        </motion.p>
                    </div>
                    <div className='flex flex-column justify-center items-center xl2:items-start xl2:justify-start gap-4 mb-8 flex-wrap'>
                        <motion.img
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className=''
                            src={AppleStore.src}
                            alt='apple'
                        />
                        <motion.img
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className=''
                            src={GooglePlay.src}
                            alt='apple'
                        />
                    </div>
                    <button className='flex gap-3 items-center'>
                        <div className=''>
                            <Image className='animate-bounce' src={Arrow} alt='arrow' />
                        </div>
                        <span className='text-sm font-bold'>Continue explorando
                        </span>
                    </button>
                </div>
                <div className='h-full flex items-end'>
                    <Image src={Woman} alt='woman' />
                </div>
            </div>
        </motion.section>
    );
};

export default SectionHero;
