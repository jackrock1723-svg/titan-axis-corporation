import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import { contactPage } from '@/data/content';

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', company: '', country: '', interest: '', message: '' });
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder-gray-400 transition-colors duration-200 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/20';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading={contactPage.heading}
        text={contactPage.text}
      />

      <Section className="bg-white">
        <div className="container-base">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              {status === 'success' && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Inquiry ready to send</p>
                    <p className="mt-1 text-sm text-gray-600">
                      This form is currently set up for future integration. Your message has been validated successfully — once a backend is connected, it will be sent automatically.
                    </p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-5">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
                  <p className="text-sm text-gray-700">Please fill in your name, email and message.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name <span className="text-gold-600">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email <span className="text-gold-600">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className={labelClass}>Country</label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className={labelClass}>Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select an area of interest</option>
                    {contactPage.interests.map((interest) => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message <span className="text-gold-600">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="Tell us what you're looking for..."
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-ink-800"
                  >
                    Send Inquiry
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
