/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';
import DottedBackground from './DottedBackground';
import logo from '../../assets/imag3.png';

const Hero = () => {
    return (
        <section id="hero" className="w-full h-screen mx-auto relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/80">
            {/* Background Image & 3D Scene Setup */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <Scene />
                <DottedBackground />
                <img
                    src={logo}
                    alt="Hero Background"
                    className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full object-cover opacity-80 mix-blend-luminosity z-1"
                />
                {/* Optional dark gradients over the image to blend it further */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-[#0a0a0a]/80 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none z-0" />
            </div>

            <div className="absolute inset-0 top-[180px] max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center z-10 pointer-events-none pb-20">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[88px] mt-2 drop-shadow-xl pointer-events-auto">
                            I AM  <br className="sm:hidden block" />
                            <span className="text-gradient inline-block transition-transform duration-300 hover:scale-110 hover:-rotate-2 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]">
                                MUKESH 
                            </span>
                        </h1>
                        <p className="text-[#dfd9ff] font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 tracking-wide">
                            I craft scalable <span className="text-white drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">MERN Stack</span> <br className="sm:block hidden" />
                            real-time web applications.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-12 pointer-events-auto flex flex-col sm:flex-row gap-6 max-w-fit mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <a href="#contact" className="px-8 py-4 rounded-xl border-2 border-orange-medium text-white font-bold tracking-wider hover:bg-orange-medium/20 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] flex justify-center text-center">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-xl border-2 border-orange-medium text-white font-bold tracking-wider hover:bg-orange-medium/20 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] flex justify-center text-center">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
