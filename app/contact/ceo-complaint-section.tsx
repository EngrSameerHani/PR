"use client";

import { FormEvent, useState } from "react";
import {
  ShieldCheck,
  Clock3,
  CircleCheck,
  Headphones,
  FilePenLine,
  Send,
} from "lucide-react";

export default function CeoComplaintSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    // Reset success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fcf8] py-12 sm:py-16 lg:py-20">
      {/* Background decorative circles */}
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#dff3e5] opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#dff3e5] opacity-70 blur-2xl" />

      <div className="relative mx-auto w-[92%] max-w-[1320px]">
        <div className="overflow-hidden rounded-[24px] border border-[#d8e8dc] bg-white shadow-[0_10px_45px_rgba(0,70,35,0.08)]">
          <div className="grid lg:grid-cols-2">
            
            {/* ================= LEFT SIDE ================= */}
            <div className="relative flex min-h-[700px] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f4fbf5] via-[#f7fcf8] to-[#e8f6eb] px-7 py-12 sm:px-12 lg:px-14 lg:py-16">
              
              {/* Decorative background */}
              <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-[400px] w-[400px] rounded-full bg-[#d9f1df] opacity-70" />

              <div className="relative z-10 text-center">
                
                {/* Small heading */}
                <div className="mb-5 flex items-center justify-center gap-4">
                  <span className="h-[2px] w-12 bg-[#d9a928]" />

                  <span className="text-xs font-semibold tracking-[0.22em] text-[#075d35] sm:text-sm">
                    WE ARE HERE TO LISTEN
                  </span>

                  <span className="h-[2px] w-12 bg-[#d9a928]" />
                </div>

                {/* Main heading */}
                <h1 className="font-serif text-4xl font-bold leading-[1.12] text-[#075d35] sm:text-5xl lg:text-[48px]">
                  Submit Your
                  <br />
                  Complaint to CEO
                </h1>

                {/* Gold dot divider */}
                <div className="my-6 flex items-center justify-center gap-2">
                  <span className="h-[4px] w-10 rounded-full bg-[#075d35]" />

                  <span className="h-3 w-3 rounded-full bg-[#e1ae32]" />

                  <span className="h-[4px] w-10 rounded-full bg-[#075d35]" />
                </div>

                {/* Description */}
                <p className="mx-auto max-w-[480px] text-base leading-7 text-[#17252a] sm:text-lg">
                  Your feedback is important to us.
                  <br />
                  Please share your concern and our team
                  <br className="hidden sm:block" />
                  will ensure it reaches the CEO.
                </p>
              </div>

              {/* City illustration area */}
              <div className="relative z-10 mt-8 flex h-[270px] items-end justify-center overflow-hidden">
                {/* Glow */}
                <div className="absolute bottom-0 h-36 w-[90%] rounded-full bg-[#ccebd4] blur-2xl" />

                {/* Simple skyline */}
                <div className="relative flex h-full w-full items-end justify-center gap-2 opacity-80">
                  
                  <div className="h-[55%] w-7 rounded-t bg-[#b6dcca]" />
                  <div className="h-[40%] w-10 rounded-t bg-[#c8e7d0]" />

                  <div className="h-[75%] w-8 rounded-t bg-[#9fcdb5]">
                    <div className="mx-auto mt-3 h-2 w-2 bg-white/70" />
                    <div className="mx-auto mt-3 h-2 w-2 bg-white/70" />
                    <div className="mx-auto mt-3 h-2 w-2 bg-white/70" />
                  </div>

                  <div className="h-[50%] w-12 rounded-t bg-[#c4e4cc]" />

                  <div className="h-[90%] w-10 rounded-t bg-[#86bfa0]">
                    <div className="mx-auto mt-4 h-2 w-2 bg-white/70" />
                    <div className="mx-auto mt-4 h-2 w-2 bg-white/70" />
                    <div className="mx-auto mt-4 h-2 w-2 bg-white/70" />
                    <div className="mx-auto mt-4 h-2 w-2 bg-white/70" />
                  </div>

                  <div className="h-[60%] w-9 rounded-t bg-[#aed6ba]" />

                  <div className="h-[80%] w-8 rounded-t bg-[#9bc9aa]" />

                  <div className="h-[48%] w-11 rounded-t bg-[#c3e2ca]" />
                </div>

                {/* House */}
                <div className="absolute bottom-3 left-1/2 w-[180px] -translate-x-1/2 sm:w-[220px]">
                  <div className="relative h-[110px] rounded-t-[4px] bg-white shadow-sm">
                    {/* Roof */}
                    <div className="absolute -top-12 left-[-15px] h-0 w-0 border-l-[125px] border-r-[125px] border-b-[55px] border-l-transparent border-r-transparent border-b-[#b7d9c0]" />

                    {/* Windows */}
                    <div className="absolute left-5 top-8 h-9 w-10 border-2 border-[#3d8058] bg-[#e3f3e7]" />
                    <div className="absolute right-5 top-8 h-9 w-10 border-2 border-[#3d8058] bg-[#e3f3e7]" />

                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 h-14 w-10 -translate-x-1/2 bg-[#075d35]" />
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="relative z-10 mt-8 grid grid-cols-2 divide-x divide-[#c9dfcf] sm:grid-cols-4">
                
                <Benefit
                  icon={<ShieldCheck size={28} />}
                  title="Confidential"
                  description="Your identity is always protected"
                />

                <Benefit
                  icon={<Clock3 size={28} />}
                  title="Timely Review"
                  description="We review your complaint promptly"
                />

                <Benefit
                  icon={<CircleCheck size={28} />}
                  title="Fair Process"
                  description="Every complaint is handled with fairness"
                />

                <Benefit
                  icon={<Headphones size={28} />}
                  title="Resolution"
                  description="We are committed to resolving your issue"
                />
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="bg-white px-7 py-12 sm:px-12 lg:px-14 lg:py-14">
              
              {/* Form heading */}
              <div className="mb-8 text-center">
                <div className="mb-5 flex items-center justify-center gap-5">
                  <span className="h-[2px] w-16 bg-[#d9a928]" />

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e5f5e8]">
                    <FilePenLine
                      size={42}
                      strokeWidth={1.8}
                      className="text-[#075d35]"
                    />
                  </div>

                  <span className="h-[2px] w-16 bg-[#d9a928]" />
                </div>

                <h2 className="text-2xl font-bold tracking-[0.08em] text-[#075d35] sm:text-3xl">
                  COMPLAINT INFORMATION
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <FormField
                  label="Your Name"
                  required
                  placeholder="Enter your full name"
                  name="name"
                  type="text"
                />

                {/* Email */}
                <FormField
                  label="Your Email"
                  required
                  placeholder="Enter your email address"
                  name="email"
                  type="email"
                />

                {/* Phone */}
                <FormField
                  label="Phone"
                  required
                  placeholder="Enter your phone number"
                  name="phone"
                  type="tel"
                />

                {/* Project */}
                <FormField
                  label="Project Invested In"
                  required
                  placeholder="Enter project name"
                  name="project"
                  type="text"
                />

                {/* Complaint */}
                <div>
                  <label
                    htmlFor="complaint"
                    className="mb-2 block text-base font-semibold text-[#075d35]"
                  >
                    Your Complaint <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="complaint"
                    name="complaint"
                    required
                    rows={5}
                    placeholder="Please describe your complaint in detail..."
                    className="w-full resize-none rounded-lg border border-[#b7c9bd] px-4 py-3 text-[15px] text-[#17252a] outline-none transition placeholder:text-[#7c8b91] focus:border-[#075d35] focus:ring-2 focus:ring-[#075d35]/10"
                  />
                </div>

                {/* Success */}
                {submitted && (
                  <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                    Your complaint has been submitted successfully.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#e1ae32] bg-[#075d35] px-6 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-[#064b2c] hover:shadow-xl"
                >
                  <Send
                    size={23}
                    className="rotate-[-8deg] text-[#e1ae32] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFIT COMPONENT ================= */

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="px-3 text-center sm:px-4">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#e2f3e6] text-[#075d35]">
        {icon}
      </div>

      <h3 className="text-sm font-bold text-[#17252a] sm:text-base">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-[#34434a] sm:text-sm">
        {description}
      </p>
    </div>
  );
}

/* ================= FORM FIELD COMPONENT ================= */

function FormField({
  label,
  required,
  placeholder,
  name,
  type,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-base font-semibold text-[#075d35]"
      >
        {label}{" "}
        {required && (
          <>
            <span className="font-normal text-[#17252a]">(required)</span>{" "}
            <span className="text-red-500">*</span>
          </>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-[#b7c9bd] px-4 text-[15px] text-[#17252a] outline-none transition placeholder:text-[#7c8b91] focus:border-[#075d35] focus:ring-2 focus:ring-[#075d35]/10"
      />
    </div>
  );
}