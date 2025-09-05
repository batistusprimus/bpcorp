"use client";
import { useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!form.name || !form.email || !form.message) {
      setError('Please fill the required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setError('An error occurred.');
      }
    } catch (err) {
      setError('A network error occurred.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} className="w-full border border-gray-300 p-2" required />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm mb-1">Company</label>
        <input id="company" name="company" value={form.company} onChange={onChange} className="w-full border border-gray-300 p-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} className="w-full border border-gray-300 p-2" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm mb-1">Phone</label>
        <input id="phone" name="phone" value={form.phone} onChange={onChange} className="w-full border border-gray-300 p-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} className="w-full border border-gray-300 p-2" rows={5} required />
      </div>
      <div className="flex items-center gap-4">
        <button type="submit" disabled={submitting} className="border border-gray-900 bg-black text-white px-4 py-2">
          {submitting ? 'Sending…' : 'Send'}
        </button>
        {success && <span className="text-sm text-gray-700">We received your message.</span>}
        {error && <span className="text-sm text-red-700">{error}</span>}
      </div>
    </form>
  );
}


