/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/animations';
import { GraduationCap, BookOpen, Building } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen mx-auto relative overflow-hidden py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                    <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-mono">Introduction</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-md">OVERVIEW</h2>
                </motion.div>

                <div className="mt-20 flex flex-col md:flex-row gap-16 items-center justify-between">
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="md:w-1/2 w-full text-gray-300 text-[17px] leading-[30px]"
                    >
                        <p className="mb-6">
                            I am a <span className="text-orange-medium font-semibold">MERN Stack Developer</span> with experience in building
                            modern, scalable, and real-time web applications. I specialize in the React ecosystem, Node.js backends,
                            and leveraging AI integrations.
                        </p>
                        <p className="mb-6">
                            As a fresher, I focus on writing clean code and creating smooth user experiences. I enjoy building projects like markdown editors, real-time chat applications, and other useful tools. My background in C++ and Data Structures helps me understand problem-solving and build efficient applications while keeping the design simple and user-friendly (<span className="text-orange-deep font-semibold">C++, DSA</span>) and a sharp eye for aesthetic design.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="glass px-6 py-4 rounded-2xl border-l-[3px] border-l-orange-medium border-[1px] border-white/5 glow-hover min-w-[140px]">
                                <h3 className="text-white font-bold text-[32px]">1</h3>
                                <p className="text-gray-400 text-[12px] uppercase tracking-widest mt-1 font-mono">Years Exp.</p>
                            </div>
                            <div className="glass px-6 py-4 rounded-2xl border-l-[3px] border-l-orange-medium border-[1px] border-white/5 glow-hover min-w-[140px]">
                                <h3 className="text-white font-bold text-[32px]">3+</h3>
                                <p className="text-gray-400 text-[12px] uppercase tracking-widest mt-1 font-mono">Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'spring', 0.4, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="md:w-1/2 w-full flex justify-center"
                    >
                        {/* 3D tilt-like effect using framer motion */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-full max-w-[380px] glass p-2 rounded-[32px] relative preserve-3d group shadow-2xl"
                            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-medium/20 to-orange-deep/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div
                                className="w-full h-[400px] bg-[#0d0d0d] rounded-[28px] overflow-hidden flex flex-col items-center justify-center relative z-10 p-6 border border-white/5"
                                style={{ transform: 'translateZ(30px)' }}
                            >
                                {/* Cyberpunk grid background pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-orange-medium to-orange-deep p-1 relative z-20 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-shadow duration-500">
                                    <div className="w-full h-full bg-[#0a0a0a] rounded-full flex justify-center items-center">
                                        <span className="text-[60px] font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-light to-white drop-shadow-md">MY</span>
                                    </div>
                                </div>

                                <h3 className="text-white text-2xl font-bold mt-8 relative z-20">Mukesh Yadav</h3>
                                <p className="text-gray-400 font-mono text-sm mt-2 relative z-20">Fullstack Engineer</p>

                                <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-orange-medium shadow-[0_0_10px_rgba(249,115,22,1)] animate-pulse" />
                                <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-orange-deep shadow-[0_0_10px_rgba(234,88,12,1)] animate-ping" style={{ animationDuration: '3s' }} />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Horizontal Education Timeline */}
                <div className="mt-32 w-full relative z-10">
                    <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-16 flex flex-col items-center">
                        <h3 className="text-white text-3xl font-bold font-mono uppercase tracking-widest text-center relative inline-block">
                            Education 
                            <span className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-medium to-transparent absolute -bottom-3 left-1/4 rounded-full" />
                        </h3>
                    </motion.div>

                    <div className="relative w-full max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-white/10" />

                        {/* Connecting Line active part (orange gradient) */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-medium/80 via-white/5 to-white/5" />

                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
                            {/* Class 10 */}
                            <motion.div
                                variants={fadeIn('up', 'spring', 0.2, 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="flex flex-col items-center text-center w-full md:w-1/3 group cursor-pointer"
                            >
                                <div className="w-[88px] h-[88px] rounded-full glass flex justify-center items-center border-[2px] border-white/10 group-hover:border-orange-medium group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all bg-[#0a0a0a] z-10 relative mb-6">
                                    <BookOpen className="w-8 h-8 text-gray-400 group-hover:text-orange-medium group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all" />
                                </div>
                                <div className="glass p-6 rounded-2xl border border-white/5 group-hover:border-orange-medium/30 transition-all w-full md:w-[280px]">
                                    <h4 className="text-white font-bold text-xl mb-1">Class 10th</h4>
                                    <h5 className="text-orange-medium font-medium mb-3">2019</h5>
                                    <p className="text-gray-400 text-sm">Completed schooling with a strong foundation in science and mathematics and Computer Fundamental with 91 % </p>
                                </div>
                            </motion.div>

                            {/* Class 12 */}
                            <motion.div
                                variants={fadeIn('up', 'spring', 0.4, 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="flex flex-col items-center text-center w-full md:w-1/3 group cursor-pointer"
                            >
                                <div className="w-[88px] h-[88px] rounded-full glass flex justify-center items-center border-[2px] border-white/10 group-hover:border-orange-medium group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all bg-[#0a0a0a] z-10 relative mb-6">
                                    <Building className="w-8 h-8 text-gray-400 group-hover:text-orange-medium group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all" />
                                </div>
                                <div className="glass p-6 rounded-2xl border border-white/5 group-hover:border-orange-medium/30 transition-all w-full md:w-[280px]">
                                    <h4 className="text-white font-bold text-xl mb-1">Class 12th</h4>
                                    <h5 className="text-orange-medium font-medium mb-3">2021</h5>
                                    <p className="text-gray-400 text-sm">Specialized in Science (PCM). Developed early computer skills with fundamental concepts and understanding  with 77 %</p>
                                </div>
                            </motion.div>

                            {/* Graduation */}
                            <motion.div
                                variants={fadeIn('up', 'spring', 0.6, 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="flex flex-col items-center text-center w-full md:w-1/3 group cursor-pointer"
                            >
                                <div className="w-[88px] h-[88px] rounded-full glass flex justify-center items-center border-[2px] border-orange-medium/50 group-hover:border-orange-medium shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all bg-[#0a0a0a] z-10 relative mb-6">
                                    <GraduationCap className="w-8 h-8 text-orange-medium drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all" />
                                </div>
                                <div className="glass p-6 rounded-2xl border border-orange-medium/20 group-hover:border-orange-medium/50 transition-all w-full md:w-[280px] bg-orange-medium/5">
                                    <h4 className="text-white font-bold text-xl mb-1">Graduation</h4>
                                    <h5 className="text-orange-medium font-medium mb-3">2022-26</h5>
                                    <p className="text-gray-400 text-sm">Completed B.Tech in CSE. I have focused on core subjects  Data Structures, Algorithms, Computer Networks, and Mern Stack</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
