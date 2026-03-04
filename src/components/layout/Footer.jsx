/* eslint-disable no-unused-vars */
import { Github, Code2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full relative py-8 border-t border-white/10 bg-[#0a0a0a] overflow-hidden">
            {/* Background gradient blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-deep/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="flex gap-6 mb-6 relative z-10">
                    <motion.a
                        whileHover={{ y: -3 }}
                        href="https://github.com/mukesh162"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass flex justify-center items-center hover:bg-orange-medium/20 hover:text-orange-medium text-gray-400 transition-colors border border-white/5 hover:border-orange-medium/50 group"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3 }}
                        href="https://leetcode.com/u/mukesh162"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass flex justify-center items-center hover:bg-[#FFA116]/20 hover:text-[#FFA116] text-gray-400 transition-colors border border-white/5 hover:border-[#FFA116]/50 group"
                        aria-label="LeetCode"
                    >
                        <Code2 className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,161,22,0.8)]" />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3 }}
                        href="https://www.geeksforgeeks.org/user/mukesh162/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass flex justify-center items-center hover:bg-[#2F8D46]/20 hover:text-[#2F8D46] text-gray-400 transition-colors border border-white/5 hover:border-[#2F8D46]/50 group"
                        aria-label="GeeksforGeeks"
                    >
                        <BookOpen className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(47,141,70,0.8)]" />
                    </motion.a>
                </div>
                <p className="text-gray-500 text-sm font-mono text-center">
                    &copy; {new Date().getFullYear()} Mukesh Yadav. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
