// app/terms/page.tsx — Terms & Conditions
import DateBar from "../../components/DateBar";
import HeaderClient from "../../components/HeaderClient";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import SectionTitle from "../../components/SectionTitle";

export const metadata = {
    title: "Terms & Conditions – Financial Outlook",
    description: "Terms of use and service for Financial Outlook – your trusted financial news platform.",
};

export default async function TermsPage() {
    const [latestArticlesData, popularArticlesData] = await Promise.all([
        import("../../../public/data/home/home-latest-articles.json").then(m => m.default),
        import("../../../public/data/home/home-popular-articles.json").then(m => m.default),
    ]);
    return (
        <>
            <div className="bg-black text-white min-h-screen font-sans ">
                <div className="max-w-7xl mx-auto ">
                    <DateBar />
                    <HeaderClient currentPage="terms" />

                    <SectionTitle title="TERMS & CONDITIONS" subCategories={["Last Updated: November 21, 2025"]} />

                    {/* Main Content */}
                    <section className="py-12 px-6 md:px-12 lg:px-24 ">
                        <div className="max-w-5xl mx-auto space-y-12 p-8 border border-white rounded-lg">
                            <section className="py-6 px-6">
                                <div className="bg-red-900 text-white p-8 rounded-lg shadow-xl border-4 border-black max-w-5xl mx-auto">
                                    <p className="text-lg leading-relaxed">
                                        Your use of this website and services is subject to these Terms & Conditions. By accessing or using Financial Outlook, you agree to be bound by these terms.
                                        If you do not agree with any part of these terms, you must not use our website or services.
                                    </p>
                                </div>
                            </section>
                            {/* 1. Use of Service */}
                            {/* 1. Acceptance of Terms */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    By accessing and using this Financial Journal, you accept and agree to be bound by these terms and conditions.
                                    These terms apply to all visitors, readers, and others who access or use our news service.
                                </p>
                            </div>

                            {/* 2. Content Usage and Copyright */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    2. Content Usage and Copyright
                                </h2>

                                <h3 className="text-xl font-bold mt-8 mb-4">Our Content Rights</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    All news articles, photographs, videos, graphics, and other content published on this Financial Journal are
                                    protected by copyright laws and are owned by us or our content contributors. Unauthorized reproduction,
                                    distribution, or modification of our content is strictly prohibited.
                                </p>

                                <h3 className="text-xl font-bold mt-8 mb-4">Personal Use License</h3>
                                <p className="text-lg leading-relaxed">
                                    You may access and read our news content for personal, non-commercial purposes. This limited license allows you to:
                                </p>
                                <ul className="list-disc pl-8 mt-4 space-y-2 text-lg">
                                    <li>Read and view articles on your personal devices</li>
                                    <li>Share articles using our designated sharing tools</li>
                                    <li>Print articles for personal reference</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-6">
                                    You may NOT:
                                </p>
                                <ul className="list-disc pl-8 mt-4 space-y-2 text-lg">
                                    <li>Reproduce, republish, or redistribute our content without permission</li>
                                    <li>Use our content for commercial purposes</li>
                                    <li>Remove copyright notices or watermarks</li>
                                    <li>Create derivative works from our content</li>
                                    <li>Use automated tools to scrape or download content</li>
                                </ul>
                            </div>

                            {/* 3. User Registration and Accounts */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    3. User Registration and Accounts
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    Some features of our Financial Journal may require registration. When creating an account, you agree to:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Provide accurate, current, and complete information</li>
                                    <li>Maintain and update your information to keep it accurate</li>
                                    <li>Maintain the security of your password and account</li>
                                    <li>Accept responsibility for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-6">
                                    We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited activities.
                                </p>
                            </div>

                            {/* 4. User Comments and Submissions */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    4. User Comments and Submissions
                                </h2>

                                <h3 className="text-xl font-bold mt-8 mb-4">Comment Policy</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    We welcome reader comments and discussions. By posting comments, you agree that:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Your comments do not contain illegal, defamatory, or offensive content</li>
                                    <li>You will not impersonate others or misrepresent your affiliation</li>
                                    <li>You grant us a non-exclusive license to use, modify, and display your comments</li>
                                    <li>You are responsible for the content of your submissions</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-8 mb-4">Prohibited Content</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    Comments and submissions must not contain:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Hate speech, harassment, or discriminatory content</li>
                                    <li>False or misleading information</li>
                                    <li>Spam, advertising, or promotional content</li>
                                    <li>Personal attacks or abusive language</li>
                                    <li>Violations of privacy or confidentiality</li>
                                    <li>Content that infringes intellectual property rights</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-6">
                                    We reserve the right to remove any comments that violate this policy without notice.
                                </p>
                            </div>
                            {/* 5. Journalistic Standards and Accuracy */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    5. Journalistic Standards and Accuracy
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    We strive to provide accurate, fair, and balanced news coverage. However:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>News content may be updated or corrected as new information becomes available</li>
                                    <li>Opinions expressed in opinion pieces are those of the authors, not necessarily the Financial Journal</li>
                                    <li>We make reasonable efforts to verify information but cannot guarantee absolute accuracy</li>
                                    <li>Breaking news may contain preliminary information subject to change</li>
                                </ul>
                                <div className="bg-yellow-600 border-2 border-yellow-600 p-6 mt-8 rounded">
                                    <p className="text-lg font-bold">
                                        Corrections Policy: If you believe we have published inaccurate information, please contact our editorial team.
                                        We take accuracy seriously and will investigate and correct errors promptly.
                                    </p>
                                </div>
                            </div>

                            {/* 6. Third-Party Content and Links */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    6. Third-Party Content and Links
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    Our website may contain links to third-party websites, advertisements, or embedded content. We are not responsible for:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>The content, accuracy, or opinions expressed in third-party materials</li>
                                    <li>The privacy practices of external websites</li>
                                    <li>Products or services advertised by third parties</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-6">
                                    Links to external sites do not constitute endorsement of those sites or their content.
                                </p>
                            </div>

                            {/* 7. Advertising and Sponsored Content */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    7. Advertising and Sponsored Content
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our website may display advertisements and sponsored content. We maintain editorial independence, and advertising does not influence our news coverage. Sponsored content will be clearly labeled as such.
                                    We are not responsible for the claims made in advertisements or the quality of advertised products and services.
                                </p>
                            </div>

                            {/* 8. Newsletter and Email Communications */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    8. Newsletter and Email Communications
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    If you subscribe to our newsletter or email alerts:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>You consent to receive email communications from us</li>
                                    <li>You can unsubscribe at any time using the link in our emails</li>
                                    <li>We will not share your email address with third parties without consent</li>
                                    <li>We may send service-related announcements when necessary</li>
                                </ul>
                            </div>

                            {/* 9. Intellectual Property Rights */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    9. Intellectual Property Rights
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our website name, logo, design, and branding are our trademarks. You may not use our trademarks without prior written permission.
                                    All intellectual property rights in our content remain with us or our licensors.
                                </p>
                            </div>

                            {/* 10. News Alerts and Notifications */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    10. News Alerts and Notifications
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    We may offer breaking news alerts and push notifications. By enabling these features:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>You consent to receive time-sensitive news notifications</li>
                                    <li>You can disable notifications in your device or browser settings</li>
                                    <li>We will use notifications responsibly and avoid spam</li>
                                </ul>
                            </div>

                            {/* 11. Prohibited Activities */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    11. Prohibited Activities
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    You agree not to:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Interfere with or disrupt the website's operation</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Use automated tools or bots without permission</li>
                                    <li>Collect user information without consent</li>
                                    <li>Engage in any activity that violates applicable laws</li>
                                    <li>Upload viruses or malicious code</li>
                                    <li>Impersonate our staff or other users</li>
                                </ul>
                            </div>{/* 12. Disclaimer of Warranties */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    12. Disclaimer of Warranties
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    Our news website and content are provided "as is" without warranties of any kind. We do not warrant that:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>The website will be uninterrupted or error-free</li>
                                    <li>All content is completely accurate or current</li>
                                    <li>The website is free from viruses or harmful components</li>
                                    <li>Defects will be corrected immediately</li>
                                </ul>
                            </div>

                            {/* 13. Limitation of Liability */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    13. Limitation of Liability
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    To the fullest extent permitted by law, we shall not be liable for any damages arising from:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Use of or inability to use our website</li>
                                    <li>Reliance on any content published on our website</li>
                                    <li>Errors, omissions, or inaccuracies in our content</li>
                                    <li>Unauthorized access to your account or data</li>
                                    <li>Third-party content or advertisements</li>
                                </ul>
                            </div>

                            {/* 14. Indemnification */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    14. Indemnification
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg mt-4">
                                    <li>Your violation of these Terms and Conditions</li>
                                    <li>Your comments or submissions on our website</li>
                                    <li>Your violation of any third-party rights</li>
                                    <li>Your use of our website in violation of applicable laws</li>
                                </ul>
                            </div>

                            {/* 15. Age Restrictions */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    15. Age Restrictions
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our website is intended for general audiences. Some content may not be suitable for children. Parents and guardians are responsible for monitoring their children's internet usage. We do not knowingly collect information from children under 13.
                                </p>
                            </div>

                            {/* 16. Governing Law and Jurisdiction */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    16. Governing Law and Jurisdiction
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    These Terms and Conditions are governed by the laws of the jurisdiction where our news organization is registered.
                                    Any disputes shall be resolved in the courts of that jurisdiction.
                                </p>
                            </div>

                            {/* 17. Changes to Content and Services */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    17. Changes to Content and Services
                                </h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    We reserve the right to:
                                </p>
                                <ul className="list-disc pl-8 space-y-2 text-lg">
                                    <li>Modify, suspend, or discontinue any aspect of our website</li>
                                    <li>Update, correct, or remove content at any time</li>
                                    <li>Change our website design, features, or functionality</li>
                                    <li>Introduce new services or features</li>
                                </ul>
                            </div>

                            {/* 18. Termination */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    18. Termination
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    We may terminate or suspend your access to our website immediately, without prior notice, if you breach these terms.
                                    Upon termination, your right to use the website will cease immediately.
                                </p>
                            </div>

                            {/* 19. Severability */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    19. Severability
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                                </p>
                            </div>

                            {/* 20. Changes to Terms */}
                            <div>
                                <h2 className="text-3xl font-black mb-6 border-b-4 border-red-600 pb-2 inline-block">
                                    20. Changes to Terms
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date.
                                    Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                                </p>
                            </div>

                        </div>
                    </section>

                    <FullHeader currentPage="terms" />
                    <FooterSection
                        latestArticles={latestArticlesData}
                        popularArticles={popularArticlesData}
                    />
                </div>
            </div>
        </>
    );
}