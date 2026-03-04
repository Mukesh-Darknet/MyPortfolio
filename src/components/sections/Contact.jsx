/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/animations';
import { Send, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setForm({ name: '', email: '', message: '' });
            alert('Thank you. I will get back to you as soon as possible.');
        }, 1500);
    };

    return (
        <section id="contact" className="w-full min-h-screen mx-auto relative overflow-hidden py-24 sm:py-32">
            {/* Background gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-deep/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="text">
                    
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-md">CONTACT</h2>
                </motion.div>

                <div className="mt-20 flex flex-col-reverse md:flex-row gap-12 overflow-hidden items-center md:items-stretch">
                    {/* Contact Details side */}
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex-[0.4] w-full glass p-8 rounded-3xl flex flex-col border border-white/5 bg-[#0a0a0a]/80"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Information</h3>

                        <div className="flex flex-col gap-8 flex-1">
                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-medium group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
                                    <Mail className="text-orange-medium w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">Email</h4>
                                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">mukesh111222yadav@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-deep group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all">
                                    <MapPin className="text-orange-deep w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">Location</h4>
                                    <p className="text-gray-400 text-sm">New Delhi, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-deep group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all">
                                    <MapPin className="text-orange-deep w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">Social</h4>
                                    <p className="text-gray-400 text-sm">YouTube</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-deep group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all">
                                    <MapPin className="text-orange-deep w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">More</h4>
                                    <p className="text-gray-400 text-sm">New Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-medium text-lg mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center hover:bg-orange-medium/20 hover:text-orange-medium text-gray-300 transition-colors border border-transparent hover:border-orange-medium/50">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center hover:bg-[#0077B5]/20 hover:text-[#0077B5] text-gray-300 transition-colors border border-transparent hover:border-[#0077B5]/50">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] text-gray-300 transition-colors border border-transparent hover:border-[#1DA1F2]/50">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex-[0.6] w-full glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-medium/5 to-orange-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 w-full h-full justify-between">
                            <label className="flex flex-col gap-2">
                                <span className="text-white font-medium pl-1">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    required
                                    className="bg-[#0a0a0a]/50 py-4 px-6 text-white rounded-xl outline-none border border-white/10 font-medium transition-all focus:border-orange-medium focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:bg-[#0a0a0a]/80"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-white font-medium pl-1">Your Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your email?"
                                    required
                                    className="bg-[#0a0a0a]/50 py-4 px-6 text-white rounded-xl outline-none border border-white/10 font-medium transition-all focus:border-orange-medium focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:bg-[#0a0a0a]/80"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-white font-medium pl-1">Your Message</span>
                                <textarea
                                    rows={6}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What do you want to say?"
                                    required
                                    className="bg-[#0a0a0a]/50 py-4 px-6 text-white rounded-xl outline-none border border-white/10 font-medium transition-all focus:border-orange-medium focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:bg-[#0a0a0a]/80 resize-none"
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 bg-gradient-to-r from-orange-medium to-orange-deep py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-orange-medium/30 rounded-xl hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                style={{ cursor: loading ? 'wait' : 'none' }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <Send className="w-5 h-5 ml-2" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
