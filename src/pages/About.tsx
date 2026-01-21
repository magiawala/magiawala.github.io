import Header from "@/components/Header";
import Footer from "@/components/Footer";
import experienceJourney from "@/assets/experience-journey.png";
import profileImage from "@/assets/profile-2949.jpg";
import beach1 from "@/assets/beach-1.jpg";
import beach2 from "@/assets/beach-2.jpg";
import beach3 from "@/assets/beach-3.jpg";
import beach4 from "@/assets/beach-4.jpg";
import beach5 from "@/assets/beach-5.jpg";
import beach6 from "@/assets/beach-6.jpg";

const About = () => {
    return (
        <div className="min-h-screen font-outfit relative">
            {/* Background Gradient matching Home */}
            <div className="background-gradient" />

            <Header variant="home" />

            <main className="pt-32 pb-20 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">

                    {/* Left Column: Photo & Contact */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-8">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-200 shadow-sm">
                            <img
                                src={profileImage}
                                alt="Devanshu Magiawala"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold tracking-widest text-[#731826] uppercase">Connect</h3>
                            <a href="mailto:magiaanshu@gmail.com" className="text-zinc-600 hover:text-black transition-colors font-medium">magiaanshu@gmail.com</a>
                            <div className="flex gap-6 mt-2">
                                <a href="https://linkedin.com/in/magiawala" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#0A66C2] transition-colors">LinkedIn ↗</a>
                                <a href="https://github.com/magiawala" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors">GitHub ↗</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio & Experience */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-12">

                        {/* Bio Section */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest text-[#731826] uppercase">About Me</h3>
                            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                                DE-vahn-shoo
                            </h1>
                            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
                                I'm a Developer turned Designer, passionate about crafting data-driven solutions that solve real problems.
                                My background in engineering allows me to bridge the gap between design and development seamlessly.
                            </p>
                        </div>



                        {/* Experience Section */}

                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest text-[#731826] uppercase">Experience</h3>
                            {/* Journey Visual */}
                            <div className="pt-4">
                                <img
                                    src={experienceJourney}
                                    alt="Experience Journey"
                                    className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-2 border-zinc-200 pl-6 py-1">
                                    <h4 className="font-bold text-zinc-900">HP Inc.</h4>
                                    <p className="text-zinc-500">Product Designer (AI & User Research)</p>
                                </div>
                                <div className="border-l-2 border-zinc-200 pl-6 py-1">
                                    <h4 className="font-bold text-zinc-900">Verizon Business</h4>
                                    <p className="text-zinc-500">Product Designer (AI Sales Tools)</p>
                                </div>
                                <div className="border-l-2 border-zinc-200 pl-6 py-1">
                                    <h4 className="font-bold text-zinc-900">Nuanceo</h4>
                                    <p className="text-zinc-500">Design Engineer</p>
                                </div>
                            </div>
                        </div>



                        {/* Interests Section */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest text-[#731826] uppercase">Interests</h3>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-3 bg-transparent border border-[#731826] rounded-md text-[#731826] font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 cursor-default">🏀 Obsessed with Basketball</span>
                                <span className="px-6 py-3 bg-transparent border border-[#731826] rounded-md text-[#731826] font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 cursor-default">⚡️ Harry Potter Fan</span>
                                <span className="px-6 py-3 bg-transparent border border-[#731826] rounded-md text-[#731826] font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 cursor-default">🎵 Music Lover</span>
                            </div>
                        </div>

                        {/* Beach Gallery */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest text-[#731826] uppercase">Beach Vibes</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <img src={beach1} alt="Beach" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                <img src={beach2} alt="Beach" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                <img src={beach3} alt="Beach" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                <img src={beach4} alt="Beach" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                <img src={beach5} alt="Beach" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 md:col-span-2" />

                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
