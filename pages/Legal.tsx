import React from 'react';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';

export const Legal: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
            <a href="#/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-brand-yellow transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Legal Information</h1>
            <p className="text-xl text-zinc-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Navigation Tabs (Visual only for this static page) */}
        <div className="flex gap-4 border-b border-zinc-200 mb-12 overflow-x-auto pb-1">
            <div className="px-4 py-2 border-b-2 border-brand-yellow font-bold text-black cursor-pointer whitespace-nowrap">
                Terms & Privacy
            </div>
            <div className="px-4 py-2 border-b-2 border-transparent text-zinc-500 hover:text-black cursor-pointer whitespace-nowrap">
                Cookie Policy
            </div>
            <div className="px-4 py-2 border-b-2 border-transparent text-zinc-500 hover:text-black cursor-pointer whitespace-nowrap">
                Disclaimer
            </div>
        </div>

        {/* Content Content */}
        <div className="grid gap-16">
            
            {/* Privacy Policy Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <Lock className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold">Privacy Policy</h2>
                </div>
                
                <div className="prose prose-lg text-zinc-600 max-w-none">
                    <p>
                        At CoolCliQ ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                        and tell you about your privacy rights.
                    </p>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">1. Information We Collect</h3>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 mb-4">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">2. How We Use Your Data</h3>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 mb-4">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </div>
            </section>

            {/* Divider */}
            <hr className="border-zinc-200" />

            {/* Terms of Service Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center text-yellow-700">
                        <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold">Terms of Service</h2>
                </div>

                <div className="prose prose-lg text-zinc-600 max-w-none">
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use CoolCliQ if you do not agree to take all of the terms and conditions stated on this page.
                    </p>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">1. Services</h3>
                    <p>
                        CoolCliQ provides digital marketing, branding, and development services. The specific deliverables and timelines for any project will be outlined in a separate Statement of Work (SOW) or contract agreed upon by both parties.
                    </p>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">2. Intellectual Property</h3>
                    <p>
                        Unless otherwise stated, CoolCliQ and/or its licensors own the intellectual property rights for all material on CoolCliQ. All intellectual property rights are reserved. You may access this from CoolCliQ for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">3. Payment Terms</h3>
                    <p>
                        Payment schedules will be defined in individual client contracts. Generally, a deposit is required to commence work, with remaining balances due upon milestones or completion. Late payments may incur interest charges.
                    </p>

                    <h3 className="text-black font-bold mt-8 mb-4 text-xl">4. Limitation of Liability</h3>
                    <p>
                        In no event shall CoolCliQ, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services whether such liability is under contract.
                    </p>
                </div>
            </section>

        </div>

        {/* Footer Note */}
        <div className="mt-20 p-6 bg-zinc-50 rounded-2xl border border-zinc-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-200 rounded-full mb-4">
                <Shield className="w-6 h-6 text-zinc-600" />
            </div>
            <h4 className="font-bold text-lg mb-2">Questions about these terms?</h4>
            <p className="text-zinc-500 mb-4">If you have any questions about our legal policies, please contact us directly.</p>
            <a href="mailto:grow@coolcliq.in" className="text-brand-yellow font-bold hover:underline">grow@coolcliq.in</a>
        </div>

      </div>
    </div>
  );
};