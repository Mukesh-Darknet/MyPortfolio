/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/animations';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        name: 'StudyFlow',
        description: 'A comprehensive MERN stack application featuring real-time chat functionality, an interactive radius-based filtering system to find nearby services, and a secure user authentication module.',
        tags: [
            { name: 'react', color: 'text-[#61dafb]' },
            { name: 'mongodb', color: 'text-[#47A248]' },
            { name: 'socket.io', color: 'text-white' },
            { name: 'express', color: 'text-gray-400' },
        ],
        image: 'https://images.unsplash.com/photo-1540304453527-62f97914fd76?q=80&w=2670&auto=format&fit=crop',
        source_code_link: 'https://github.com/Mukesh-Darknet/studyflow-frontend',
        live_link: 'https://www.mukeshdev.in/auth',
    },
    {
        name: 'AI Ebook Generator',
        description: 'An AI-driven platform integrating the Gemini API to automatically generate ebooks. Features a robust markdown editor, intuitive drag & drop interface, and seamless PDF export.',
        tags: [
            { name: 'react', color: 'text-[#61dafb]' },
            { name: 'gemini-api', color: 'text-[#00f0ff]' },
            { name: 'node.js', color: 'text-[#339933]' },
            { name: 'tailwind', color: 'text-[#38bdf8]' },
        ],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
        source_code_link: 'https://github.com/',
        live_link: 'https://ai-ebook.com',
    },
    {
        name: 'Real-Time Dashboard',
        description: 'Enterprise level data visualization dashboard showing real-time metrics with custom chart libraries and responsive Grid layout.',
        tags: [
            { name: 'react', color: 'text-[#61dafb]' },
            { name: 'd3.js', color: 'text-[#f9a03c]' },
            { name: 'redux', color: 'text-[#764abc]' },
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        source_code_link: 'https://github.com/',
        live_link: 'https://dashboard.com',
    }
];

const ProjectCard = ({ index, ...project }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
            className="w-full preserve-3d group"
            style={{ perspective: '1000px' }}
        >
            <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 rounded-3xl w-full flex flex-col h-full border border-white/5 hover:border-orange-medium/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-300 relative bg-[#0a0a0a]/50"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-medium/5 to-orange-deep/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full h-[230px] rounded-2xl overflow-hidden z-10 border border-white/10">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 right-4 flex gap-3">
                        <div
                            onClick={() => window.open(project.source_code_link, '_blank')}
                            className="bg-black/50 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-orange-medium/80 transition-colors border border-white/10 hover:border-white/40 shadow-lg"
                        >
                            <Github className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 relative z-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start lg:items-center bg-transparent gap-4">
                        <h3 className="text-white font-bold text-[24px] tracking-wide">{project.name}</h3>
                        <a href={project.live_link} target="_blank" rel="noreferrer" className="text-orange-medium hover:text-white transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full flex-shrink-0">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="mt-4 text-gray-400 text-[15px] leading-[26px] flex-1">
                        {project.description}
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.name}
                            className={`text-[11px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-widest font-mono ${tag.color}`}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="w-full min-h-screen mx-auto relative overflow-hidden py-24 sm:py-32">
            {/* Background gradient blob */}
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-orange-medium/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="text-left">
                    <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-mono">My Work</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-md">Projects</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
                    >
                        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.name} index={index} {...project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
