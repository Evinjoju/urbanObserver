// app/privacy/page.tsx — FINAL & PERFECT
import DateBar from "../../components/DateBar";
import HeaderClient from "../../components/HeaderClient";
import SectionTitle from "../../components/SectionTitle";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";

export const metadata = {
    title: "Privacy Policy – Financial Outlook",
    description: "How we collect, use, and protect your personal information at Financial Outlook.",
};

export default async function PrivacyPage() {
    const [latestArticlesData, popularArticlesData] = await Promise.all([
        import("../../../public/data/home/home-latest-articles.json").then(m => m.default),
        import("../../../public/data/home/home-popular-articles.json").then(m => m.default),
    ]);
    return (
        <>
            <div className="bg-black text-white min-h-screen font-sans ">
                <div className="max-w-7xl mx-auto ">
                    <DateBar />
                    <HeaderClient currentPage="privacy" />

                    <SectionTitle title="PRIVACY POLICY" subCategories={["Last Updated: November 21, 2025"]} />

                    {/* Main Content */}
                    <section className="py-12 px-6 md:px-12 lg:px-24 ">
                        <div className="max-w-5xl mx-auto space-y-12 p-8 border border-white rounded-lg">
                            <section className="py-6 px-6">
                                <div className="bg-red-900 text-white p-8 rounded-lg shadow-xl border-4 border-black max-w-5xl mx-auto">
                                    <p className=" leading-relaxed">
                                        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                    </p>
                                </div>
                            </section>
                            {/* 1. Use of Service */}
                            {/* 1. Acceptance of Terms */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    1. Information We Collect
                                </h2>

                                <h3 className="text-xl font-bold mt-8 mb-4">Personal Data</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    We may collect personally identifiable information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc pl-8 space-y-3 text-lg">
                                    <li>Register on the website</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Fill out a contact form</li>
                                    <li>Make a purchase or transaction</li>
                                    <li>Participate in surveys or promotions</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-6">
                                    This information may include your name, email address, phone number, postal address, payment information, and other details you choose to provide.
                                </p>

                                <h3 className="text-xl font-bold mt-12 mb-4">Automatically Collected Information</h3>
                                <p className="text-lg leading-relaxed">
                                    When you visit our website, we may automatically collect certain information about your device, including:
                                </p>
                                <ul className="list-disc pl-8 mt-4 space-y-3 text-lg">
                                    <li>IP address and browser type</li>
                                    <li>Operating system and device information</li>
                                    <li>Pages viewed and time spent on pages</li>
                                    <li>Referring website and exit pages</li>
                                    <li>Date and time of visit</li>
                                    <li>Clickstream data and cookies</li>
                                </ul>
                            </div>

                            {/* 2. How We Use Your Information */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    2. How We Use Your Information
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    We use the information we collect in the following ways:
                                </p>
                                <ul className="list-disc pl-8 space-y-3 text-lg">
                                    <li>To provide, operate, and maintain our website and services</li>
                                    <li>To improve, personalize, and expand our content</li>
                                    <li>To understand and analyze how you use our website</li>
                                    <li>To develop new products, services, features, and functionality</li>
                                    <li>To communicate with you for customer service, updates, and marketing</li>
                                    <li>To process transactions and send related information</li>
                                    <li>To prevent fraudulent transactions and protect against criminal activity</li>
                                    <li>To comply with legal obligations and enforce our terms</li>
                                </ul>
                            </div>

                            {/* 3. Disclosure of Your Information */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    3. Disclosure of Your Information
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    We may share your information in the following situations:
                                </p>
                                <ul className="list-disc pl-8 space-y-3 text-lg">
                                    <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                    <li><strong>With Your Consent:</strong> When you give us explicit permission to share your data</li>
                                </ul>
                            </div>

                            {/* 4. Cookies and Tracking Technologies */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    4. Cookies and Tracking Technologies
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                                </p>
                            </div>

                            {/* 5. Data Security */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    5. Data Security
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                                </p>
                            </div>

                            {/* 6. Your Privacy Rights */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    6. Your Privacy Rights
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    Depending on your location, you may have the following rights:
                                </p>
                                <ul className="list-disc pl-8 space-y-3 text-lg">
                                    <li><strong>Access:</strong> Request access to your personal data</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                    <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                                </ul>
                            </div>

                            {/* 7. Third-Party Links */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    7. Third-Party Links
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
                                </p>
                            </div>

                            {/* 8. Children's Privacy */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    8. Children's Privacy
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us immediately.
                                </p>
                            </div>

                            {/* 9. Changes to This Privacy Policy */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-blue-600 pb-2 inline-block">
                                    9. Changes to This Privacy Policy
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </div>

                        </div>
                    </section>

                    <FullHeader currentPage="privacy" />
                    <FooterSection
                        latestArticles={latestArticlesData}
                        popularArticles={popularArticlesData}
                    />
                </div>
            </div>
        </>
    );
}