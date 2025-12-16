"use client"

import { useState } from "react";
import { InputField, TextAreaField } from "../../common/inputFeild/page";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    validateField(field);
  };

  const validateField = (field: string) => {
    const value = formData[field as keyof typeof formData];
    let error = '';

    if (!value.trim()) {
      error = 'Please fill this field';
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email';
    }

    setErrors(prev => ({
      ...prev,
      [field]: error
    }));

    return error;
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field);
      if (error) newErrors[field] = error;
    });

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <InputField
              name="name"
              label="Full name"
              placeholder="John Mackly"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              error={touched.name ? errors.name : ''}
              required
            />
            <InputField
              name="email"
              type="email"
              label="Email address"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              error={touched.email ? errors.email : ''}
              required
            />
          </div>

          {/* Subject Field */}
          <InputField
            name="subject"
            label="Subject"
            placeholder="Question about simulation limits"
            value={formData.subject}
            onChange={handleChange}
            onBlur={() => handleBlur('subject')}
            error={touched.subject ? errors.subject : ''}
            required
          />

          {/* Message Field */}
          <TextAreaField
            name="message"
            label="Message"
            placeholder="Describe your question or issue in a few sentences..."
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            error={touched.message ? errors.message : ''}
            rows={6}
            required
          />

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmit}
              disabled={Object.values(formData).some(val => !val.trim())}
              className="px-4 py-2 bg-[#0F172A] text-[#D9D9D9] text-sm font-semibold rounded-lg hover:bg-[#0F172A]/80 transition-all"
            >
              Send message
            </button>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-start my-10">
        <p className="text-sm font-bold leading-relaxed">{"We typically respond within 1–3 working days. For urgent bugs, please include “BUG” in the subject."}</p>
        <p className="text-xs font-normal leading-relaxed">{"Your information is only used to respond to your message. See our Privacy Policy for details."}</p>
      </div>
    </section>
  );
}