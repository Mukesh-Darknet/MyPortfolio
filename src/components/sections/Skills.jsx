/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../utils/animations';

const skills = [
    { name: 'React.js', icon: '⚛️', color: 'text-[#61dafb]', border: 'border-[#61dafb]/20', glow: 'hover:shadow-[0_0_25px_rgba(97,218,251,0.3)] hover:border-[#61dafb]/60', level: '90%' },
    { name: 'Node.js', icon: '🌿', color: 'text-[#339933]', border: 'border-[#339933]/20', glow: 'hover:shadow-[0_0_25px_rgba(51,153,51,0.3)] hover:border-[#339933]/60', level: '85%' },
    { name: 'MongoDB', icon: '🍃', color: 'text-[#47A248]', border: 'border-[#47A248]/20', glow: 'hover:shadow-[0_0_25px_rgba(71,162,72,0.3)] hover:border-[#47A248]/60', level: '85%' },
    { name: 'Express', icon: '🚂', color: 'text-gray-300', border: 'border-gray-500/20', glow: 'hover:shadow-[0_0_25px_rgba(200,200,200,0.3)] hover:border-gray-400/60', level: '80%' },
    { name: 'C++', icon: '⚙️', color: 'text-[#00599C]', border: 'border-[#00599C]/20', glow: 'hover:shadow-[0_0_25px_rgba(0,89,156,0.3)] hover:border-[#00599C]/60', level: '95%' },
    { name: 'DSA', icon: '🧠', color: 'text-[#FFD700]', border: 'border-[#FFD700]/20', glow: 'hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:border-[#FFD700]/60', level: '90%' },
    { name: 'Tailwind', icon: '🎨', color: 'text-[#38bdf8]', border: 'border-[#38bdf8]/20', glow: 'hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-[#38bdf8]/60', level: '95%' },
    { name: 'Three.js', icon: '🧊', color: 'text-white', border: 'border-white/20', glow: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-white/60', level: '60%' },
];

const SkillCard = ({ skill, index }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
        whileHover={{ y: -8, scale: 1.02 }}
        className={`glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border ${skill.border} ${skill.glow} group relative overflow-hidden bg-white/[0.02]`}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="text-[45px] drop-shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">{skill.icon}</div>
        <h3 className={`text-lg font-bold tracking-wide z-10 ${skill.color}`}>{skill.name}</h3>

        <div className="w-full bg-black/40 rounded-full h-1.5 mt-2 z-10 border border-white/5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), type: 'spring' }}
                className="h-full rounded-full bg-gradient-to-r from-orange-medium to-orange-deep shadow-[0_0_8px_rgba(249,115,22,0.5)] relative"
            >
                <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 rounded-full shadow-[0_0_10px_white]" />
            </motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="w-full min-h-screen mx-auto relative overflow-hidden py-24 sm:py-32">
            {/* Background gradient blobs */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-orange-deep/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-medium/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="text-left">
                    
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-md">TECHNICAL SKILLS</h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
