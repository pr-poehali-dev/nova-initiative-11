import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Execution Architect</title>
        <meta name="description" content="Personal data processing policy for this website. Data controller: Eugene Abramenko." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="bg-black px-8 pt-32 pb-24 md:px-16">
        <div className="container mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
            Privacy Policy
          </p>
          <h1 className="mb-16 text-3xl font-light text-white md:text-4xl">
            Personal Data Processing Policy
          </h1>

          <div className="space-y-10 text-base font-light leading-relaxed text-white/60">

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">1. Data Controller</p>
              <p>Eugene Abramenko, em.abramenko@gmail.com. This website is operated as a personal professional portfolio and business contact platform.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">2. Data Collected</p>
              <p>When you submit a contact form, we collect:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-white/20" />Your name</li>
                <li className="flex gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-white/20" />A description of your situation or initiative (context)</li>
              </ul>
              <p className="mt-3">No other personal data (email, phone, IP address) is collected or stored by this website.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">3. Purpose of Processing</p>
              <p>The data is used solely to respond to your inquiry and establish a potential business relationship. It is not used for marketing, profiling, or any automated decision-making.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">4. Legal Basis</p>
              <p>Processing is based on your explicit consent given at the time of form submission (Art. 6(1)(a) GDPR).</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">5. Data Retention</p>
              <p>Submitted data is received via email and retained only as long as necessary to respond to your inquiry. No database storage is used.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">6. Third Parties</p>
              <p>Data is transmitted via SMTP email infrastructure. No data is sold, shared, or transferred to third parties for commercial purposes.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">7. Your Rights</p>
              <p>You have the right to access, rectify, or request deletion of your data at any time by contacting em.abramenko@gmail.com.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">8. Withdrawing Consent</p>
              <p>You may withdraw your consent at any time by sending a request to em.abramenko@gmail.com. Withdrawal does not affect the lawfulness of processing prior to withdrawal.</p>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">9. Contact</p>
              <p>For any questions regarding this policy: em.abramenko@gmail.com</p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}