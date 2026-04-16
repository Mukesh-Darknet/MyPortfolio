/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import img from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import { CheckCircle2, Star, Award, Brain, Rocket, FlaskConical, MessageSquare } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="w-full min-h-screen relative overflow-hidden bg-[#050505] flex items-center justify-center pt-24 pb-0">

            {/* Using max-w-7xl for the constrained container */}
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between relative z-10 h-full gap-12 lg:gap-0">

                {/* LEFT CONTENT */}
                <div className="flex-1 flex flex-col items-start justify-center lg:pr-10 z-20 w-full mt-10 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-[0.2em] mb-4 uppercase font-semibold">
                            Engineer Portfolio
                        </p>

                        <h1 className="text-white font-black text-[40px] sm:text-[50px] lg:text-[70px] leading-[1.1] mb-8 drop-shadow-xl">
                            Hello I am <br />
                            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-medium to-orange-light font-medium tracking-wide">MUKESH </span><br />
                            Software Engineer
                        </h1>

                        {/* Checkmarks */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-medium" />
                                <span className="text-gray-300 text-sm font-medium">WebDesigner</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-medium" />
                                <span className="text-gray-300 text-sm font-medium"> Frontend Dev.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-medium" />
                                <span className="text-gray-300 text-sm font-medium"> AI Engineer</span>
                            </div>
                        </div>

                        {/* Ratings */}

                        {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <img key={i} src={`https://picsum.photos/seed/${i + 20}/100/100`} alt="user" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#050505] object-cover" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-medium text-orange-medium" />)}
                                </div>
                                <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Trusted Web Dev Service Worldwide</p>
                            </div>
                        </div> */}
                    </motion.div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 w-full h-[400px] lg:h-[600px] relative flex items-end justify-center mt-12 lg:mt-0 z-10 lg:pl-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="w-full h-full relative flex items-end justify-center"
                    >
                        {/* Giant Number Background */}
                        <div className="absolute top-[40%] left-1/15 -translate-x-1/2 -translate-y-1/2 text-[300px] sm:text-[200px] lg:text-[250px] font-black text-orange-medium/[0.10] select-none leading-none z-0 flex items-center justify-center tracking-tighter">
                            MUKESH YADAV
                        </div>

                        {/* Interactive Floating Image Grid */}
                        <div className="relative z-10 w-full sm:w-[80%] lg:w-[90%] h-[400px] lg:h-full flex items-center justify-center">
                            <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                                {/* Image 1 (Top Left) */}
                                <motion.div
                                    className="absolute top-[5%] left-[-1%] w-[45%] aspect-square rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] border border-white/10 glass z-10 hover:z-30 cursor-pointer"
                                    animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt="grid-1" />
                                    <div className="absolute inset-0 bg-orange-medium/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Image 2 (Top Right) */}
                                <motion.div
                                    className="absolute top-[10%] right-[4%] w-[40%] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] border border-white/10 glass z-10 hover:z-30 cursor-pointer"
                                    animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -3, 0] }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                >
                                    <img src={img5} className="w-full h-full object-cover" alt="grid-2" />
                                    <div className="absolute inset-0 bg-orange-medium/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Image 3 (Center) */}
                                <motion.div
                                    className="absolute top-[40%] left-[25%] w-[45%] aspect-square rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.2)] border border-white/10 glass z-20 hover:z-30 cursor-pointer"
                                    animate={{ y: [0, -25, 0], x: [0, -10, 0], rotate: [0, 2, 0] }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                                >
                                    <img src={img3} className="w-full h-full object-cover" alt="grid-3" />
                                    <div className="absolute inset-0 bg-orange-medium/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Image 4 (Bottom Left) */}
                                <motion.div
                                    className="absolute bottom-[5%] left-[-4%] w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.1)] border border-white/10 glass z-10 hover:z-30 cursor-pointer"
                                    animate={{ y: [0, 20, 0], x: [0, 15, 0], rotate: [0, -4, 0] }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                                >
                                    <img src={img4} className="w-full h-full object-cover" alt="grid-4" />
                                    <div className="absolute inset-0 bg-orange-medium/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Image 5 (Bottom Right) */}
                                <motion.div
                                    className="absolute bottom-[0%] right-[5%] w-[45%] aspect-square rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.2)] border border-white/10 glass z-10 hover:z-30 cursor-pointer"
                                    animate={{ y: [0, -15, 0], x: [0, -20, 0], rotate: [0, 6, 0] }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                                >
                                    <img src={img2} className="w-full h-full object-fit" alt="grid-5" />
                                    <div className="absolute inset-0 bg-orange-medium/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Years of Experience text overlay */}
                        <div className="absolute bottom-6 right-0 z-20 text-right w-full flex justify-end">

                        </div>
                    </motion.div>
                </div>

                {/* Floating Social / Features Icons Right Edge */}
                {/* <div className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-30">
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, staggerChildren: 0.1 }} className="flex flex-col gap-4">
                        {[Award, Brain, Rocket, FlaskConical, MessageSquare].map((Icon, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (idx * 0.1) }}
                                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass flex items-center justify-center hover:bg-orange-medium/20 hover:border-orange-medium transition-all cursor-pointer group shadow-lg"
                            >
                                <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-orange-medium transition-colors" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div> */}

            </div>
        </section>
    );
};

export default Hero;
