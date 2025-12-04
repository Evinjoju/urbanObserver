// app/about/page.tsx
import DateBar from "../../components/DateBar";
import HeaderClient from "../../components/HeaderClient";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import SectionTitle from "../../components/SectionTitle";
import { Newspaper, Globe, CheckCircle2, Scale, Search, Shield } from "lucide-react";

export const metadata = {
    title: "About Us – Financial Outlook",
    description: "Founded in 2025, Financial Outlook delivers trusted, in-depth financial news and analysis on markets, crypto, billionaires, and global economy.",
};

export default async function AboutPage() {
    const [latestArticlesData, popularArticlesData] = await Promise.all([
        import("../../../public/data/home/home-latest-articles.json").then(m => m.default),
        import("../../../public/data/home/home-popular-articles.json").then(m => m.default),
    ]);
    return (
        <>
            <div className="bg-black text-white min-h-screen font-sans">
                <div className="max-w-7xl mx-auto">
                    <DateBar />
                    <HeaderClient currentPage="about" />

                    <SectionTitle
                        title="ABOUT US"
                        subCategories={["Committed to truth, accuracy, and fearless journalism"]}
                    />

                    {/* Main Content */}
                    <section className="py-8 px-6 md:px-6 lg:px-16">
                        <div className="max-w-8xl mx-auto bg-black text-white border border-white p-8 md:p-8 shadow-2xl rounded-lg">
                            <h2 className="text-4xl md:text-4xl font-black mb-8 border-b-4 border-black inline-block">
                                Our Story
                            </h2>

                            <div className="space-y-8 text-lg leading-relaxed text-gray-400">
                                <p>
                                    Founded in 2025, our news organization was born from a simple yet powerful belief: that quality journalism matters. In an era of information overload and clickbait headlines, we set out to create a news platform dedicated to accuracy, integrity, and in-depth reporting.
                                </p>

                                <p>
                                    What began as a small team of passionate journalists working from a modest office has evolved into a respected news source serving millions of readers worldwide. Our commitment to investigative journalism and unbiased reporting has earned us numerous awards and, more importantly, the trust of our readers.
                                </p>

                                <p>
                                    Through political upheavals, global crises, and technological revolutions, we've remained steadfast in our mission: to inform and empower our audience with reliable, well-researched journalism that cuts through the noise.
                                </p>

                                <p className="text-xl font-bold text-red-600 pt-6">
                                    At Financial Outlook, we don't just report the news — we help you understand what it means for your money, your future, and the world economy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision Cards */}
                    <section className="py-4 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Our Mission */}
                            <div className="bg-black border border-white rounded-lg p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                                <div className="flex justify-center mb-8">
                                    <div className="bg-red-600 rounded-full p-6">
                                        <Newspaper className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-black text-center mb-8">Our Mission</h2>
                                <p className="text-lg leading-relaxed text-gray-400 text-center">
                                    To deliver accurate, unbiased, and timely news that empowers our readers to make informed decisions.
                                    We are committed to investigative journalism that holds power accountable and gives voice to the voiceless,
                                    while maintaining the highest standards of editorial integrity.
                                </p>
                            </div>

                            {/* Our Vision */}
                            <div className="bg-black border border-white rounded-lg p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                                <div className="flex justify-center mb-8">
                                    <div className="bg-red-600 rounded-full p-6">
                                        <Globe className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-black text-center mb-8">Our Vision</h2>
                                <p className="text-lg leading-relaxed text-gray-400 text-center">
                                    To be the most trusted and respected news source globally, recognized for our commitment to truth,
                                    journalistic excellence, and positive impact on society. We envision a world where quality journalism thrives
                                    and informed citizens shape a better future.
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* Editorial Principles */}
                    <section className="py-8 px-6 bg-black">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-black text-center mb-12">Our Editorial Principles</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Accuracy */}
                                <div className="bg-black border border-white rounded-lg p-8 text-center hover:shadow-2xl transition-shadow">
                                    <div className="bg-green-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                        <CheckCircle2 className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Accuracy</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Every fact is verified, every source is checked. We correct errors promptly and transparently.
                                    </p>
                                </div>

                                {/* Impartiality */}
                                <div className="bg-black border border-white rounded-lg p-8 text-center hover:shadow-2xl transition-shadow">
                                    <div className="bg-yellow-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                        <Scale className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Impartiality</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We report without bias, presenting all sides of a story fairly and objectively.
                                    </p>
                                </div>

                                {/* Independence */}
                                <div className="bg-black border border-white rounded-lg p-8 text-center hover:shadow-2xl transition-shadow">
                                    <div className="bg-purple-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                        <Search className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Independence</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Our editorial decisions are free from political, commercial, or personal influence.
                                    </p>
                                </div>

                                {/* Accountability */}
                                <div className="bg-black border border-white rounded-lg p-8 text-center hover:shadow-2xl transition-shadow">
                                    <div className="bg-blue-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                        <Shield className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Accountability</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We hold ourselves to the same standards we apply to those we cover, admitting and correcting mistakes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Stats Banner */}
                    <section className="pb-12 pt-4 px-6">
                        <div className="bg-gray-700 rounded-2xl p-12 shadow-2xl">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-4xl md:text-6xl font-black text-white mb-4">15+</div>
                                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">
                                        Years of Quality<br />Journalism
                                    </p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-6xl font-black text-white mb-4">10M+</div>
                                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">
                                        Monthly Readers
                                    </p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-6xl font-black text-white mb-4">200+</div>
                                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">
                                        Journalists &<br />Contributors
                                    </p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-6xl font-black text-white mb-4">50+</div>
                                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">
                                        Awards Won
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <FullHeader currentPage="about" />
                    <FooterSection
                        latestArticles={latestArticlesData}
                        popularArticles={popularArticlesData}
                    />
                </div>
            </div>
        </>
    );
}