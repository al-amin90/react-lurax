import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 py-24 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-20 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What types of properties does your website offer?</summary>
                            <div className="px-4 pb-4">
                                <p>Our website features a diverse range of luxury properties, including penthouses, beachfront estates, private islands, villas, and mansions.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I create an account on your website?</summary>
                            <div className="px-4 pb-4">
                                <p>To create an account, simply click on the "Sign Up" button and follow the prompts to provide your details. You'll then have access to personalized features such as saved searches and property alerts.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> Can I update my profile information after signing up?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Yes, you can easily update your profile information at any time by navigating to the "Profile" section and editing your details.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> Are the property listings on your website verified?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Yes, all property listings on our website undergo thorough verification processes to ensure accuracy and authenticity.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> What amenities are typically included in your luxury properties?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p> Our luxury properties often feature a range of amenities such as private pools, spas, home theaters, expansive outdoor spaces, and state-of-the-art security systems.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> What sets your luxury real estate website apart from others?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p> Our website offers an exclusive collection of meticulously curated luxury properties, combined with personalized service and expertise to cater to the discerning needs of our clients.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;