"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: ""
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof typeof initialState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@")) return "Please enter a valid email.";
    if (form.message.trim().length < 10) return "Message should be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-fg">
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg shadow-sm outline-none transition focus:border-accent"
            placeholder="Your name"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-fg">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg shadow-sm outline-none transition focus:border-accent"
            placeholder="you@email.com"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-fg">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-[160px] w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg shadow-sm outline-none transition focus:border-accent"
          placeholder="Tell me about your project..."
          required
        />
      </label>
      {status === "error" && error && (
        <p className="text-sm font-medium text-warning">{error}</p>
      )}
      {status === "success" && (
        <p className="text-sm font-medium text-success">Message sent successfully.</p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent"
        >
          Hire Me
        </a>
      </div>
    </form>
  );
}