import { useState, type FormEvent } from "react";
import type { ContactFormData, ProjectType } from "../../types/content";
import MagneticButton from "./MagneticButton";

const projectTypes: ProjectType[] = [
  "Landing Page",
  "Business / Personal Brand",
  "E-commerce",
  "Interactive / Animated",
  "Other",
];

const budgetRanges = [
  "Under ₹5,000 / $60",
  "₹5,000–₹10,000 / $60–$120",
  "₹10,000–₹20,000 / $120–$240",
  "₹20,000+ / $240+",
  "Not sure yet",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    description: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.description.trim())
      newErrors.description = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Stage A: UI only — no backend connection yet.
      // Backend will be connected in Stage F.
      setSubmitted(true);
    }
  };

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-display text-heading text-mist">
          Thank you for reaching out.
        </p>
        <p className="font-sans text-body-sm text-mist/70 mt-4">
          Your message has been received. I will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-prose mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="input-underline text-mist"
            placeholder="Your name"
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-ember text-body-sm mt-2">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="input-underline text-mist"
            placeholder="you@example.com"
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-ember text-body-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Company / Business
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            className="input-underline text-mist"
            placeholder="Optional"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className="input-underline text-mist bg-transparent"
            aria-required="true"
            aria-invalid={!!errors.projectType}
          >
            <option value="" className="bg-void text-mist">
              Select a type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-void text-mist">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-ember text-body-sm mt-2">
              {errors.projectType}
            </p>
          )}
        </div>

        {/* Budget */}
        <div className="md:col-span-2">
          <label
            htmlFor="budget"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Approximate Budget
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className="input-underline text-mist bg-transparent"
          >
            <option value="" className="bg-void text-mist">
              Select a range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-void text-mist">
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="md:col-span-2">
          <label
            htmlFor="timeline"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Timeline
          </label>
          <input
            id="timeline"
            type="text"
            value={formData.timeline}
            onChange={(e) => updateField("timeline", e.target.value)}
            className="input-underline text-mist"
            placeholder="Optional — e.g. 2 weeks, flexible"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-label uppercase tracking-widest text-mist/60 mb-2"
          >
            Brief Description *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="input-underline text-mist resize-none"
            rows={4}
            placeholder="Tell me about your project"
            aria-required="true"
            aria-invalid={!!errors.description}
          />
          {errors.description && (
            <p className="text-ember text-body-sm mt-2">
              {errors.description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <MagneticButton variant="dark" type="submit">
          Start a Project
        </MagneticButton>
      </div>
    </form>
  );
}
