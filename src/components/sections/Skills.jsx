/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/animations';

const skillsRow1 = [
    { name: 'React.js', color: 'text-[#61dafb]', border: 'border-[#61dafb]/30' },
    { name: 'Node.js', color: 'text-[#339933]', border: 'border-[#339933]/30' },
    { name: 'MongoDB', color: 'text-[#47A248]', border: 'border-[#47A248]/30' },
    { name: 'Express', color: 'text-gray-300', border: 'border-gray-500/30' },
    { name: 'Tailwind CSS', color: 'text-[#38bdf8]', border: 'border-[#38bdf8]/30' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]', border: 'border-[#F7DF1E]/30' },
    { name: 'TypeScript', color: 'text-[#3178C6]', border: 'border-[#3178C6]/30' },
];

const skillsRow2 = [
    { name: 'C++', color: 'text-[#00599C]', border: 'border-[#00599C]/30' },
    { name: 'Data Structures', color: 'text-[#FFD700]', border: 'border-[#FFD700]/30' },
    { name: 'Algorithms', color: 'text-[#FFD700]', border: 'border-[#FFD700]/30' },
    { name: 'Three.js', color: 'text-white', border: 'border-white/30' },
    { name: 'HTML5', color: 'text-[#E34F26]', border: 'border-[#E34F26]/30' },
    { name: 'CSS3', color: 'text-[#1572B6]', border: 'border-[#1572B6]/30' },
    { name: 'Git', color: 'text-[#F05032]', border: 'border-[#F05032]/30' },
];

// Duplicate the array contents to create a seamless infinite scroll (Marquee effect)
const doubleRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1];
const doubleRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2];

const SkillPill = ({ skill }) => (
    <div className={`glass px-8 py-3 rounded-full flex items-center justify-center border ${skill.border} bg-white/[0.02] hover:bg-white/[0.08] hover:scale-105 transition-all whitespace-nowrap mx-3 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]`}>
        <span className={`text-[15px] sm:text-[17px] font-bold tracking-wider ${skill.color}`}>{skill.name}</span>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="w-full relative overflow-hidden py-12 sm:py-16">
            {/* Background gradient blobs */}
            <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-orange-deep/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-orange-medium/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative mb-12 text-center">
                <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                    <h2 className="text-white font-black text-[30px] sm:text-[40px] md:text-[50px] drop-shadow-md tracking-tight uppercase">TECHNICAL SKILLS</h2>
                </motion.div>
            </div>

            {/* Scrolling Marquee Container */}
            <div className="w-full flex flex-col gap-6 relative z-10 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[60px] sm:before:w-[150px] before:bg-gradient-to-r before:from-[#050505] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-[60px] sm:after:w-[150px] after:bg-gradient-to-l after:from-[#050505] after:to-transparent after:content-['']">

                {/* Row 1 - scrolling left */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex w-max"
                        animate={{ x: [0, -1500] }}
                        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    >
                        {doubleRow1.map((skill, index) => (
                            <SkillPill key={`r1-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - scrolling right */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex w-max"
                        animate={{ x: [-1500, 0] }}
                        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    >
                        {doubleRow2.map((skill, index) => (
                            <SkillPill key={`r2-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
