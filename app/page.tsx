"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  BookOpen,
  ArrowRight,
  Download,
  Star,
  Users,
  Briefcase,
  Menu,
  X,
  Server,
  Shield,
  Layers,
  TrendingUp,
  Rocket,
  Heart,
  Settings,
  Cpu,
  Monitor,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LucideIcon } from "lucide-react";

// StatCard Component with animations
function StatCard({
  icon: Icon,
  number,
  suffix,
  label,
  color,
  delay,
}: {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldCount, setShouldCount] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let scrollHandler: (() => void) | null = null;

    // Small delay to check initial position after render
    const initTimeout = setTimeout(() => {
      if (!cardRef.current) return;

      // Check if element is already visible on initial load (no scroll)
      const rect = cardRef.current.getBoundingClientRect();
      const isInViewportOnLoad = rect.top >= 0 && rect.top < window.innerHeight && window.scrollY === 0;
      
      // Create observer
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggeredRef.current) {
              hasTriggeredRef.current = true;
              setIsVisible(true);
              setTimeout(() => {
                setShouldAnimate(true);
              }, 50);
              setTimeout(() => {
                setShouldCount(true);
              }, delay * 1000 + 500);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -10% 0px'
        }
      );
      
      // If element is visible on load without scrolling, wait for scroll
      if (isInViewportOnLoad) {
        scrollHandler = () => {
          if (window.scrollY > 50 && !hasTriggeredRef.current && cardRef.current && observer) {
            observer.observe(cardRef.current);
            window.removeEventListener('scroll', scrollHandler!);
            scrollHandler = null;
          }
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
      } else {
        // Element is not visible on load, observe immediately
        if (cardRef.current) {
          observer.observe(cardRef.current);
        }
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      if (observer && cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const { displayValue } = useCountUp({
    end: number,
    duration: 3500,
    start: 0,
    suffix: suffix,
    shouldStart: shouldCount,
  });

  const staggerClass = `stat-card-stagger-${Math.min(Math.floor(delay * 10) + 1, 4)}`;

  return (
    <div ref={cardRef} className="w-full">
      <Card
        className={`text-center stat-card-hover bg-white/70 backdrop-blur-sm border-white/20 ${
          shouldAnimate ? `stat-card-enter ${staggerClass}` : "opacity-0 translate-y-[60px] scale-90 pointer-events-none"
        }`}
      >
        <CardContent className="p-6">
          <Icon className={`h-8 w-8 mx-auto mb-4 ${color}`} />
          <div className={`text-3xl font-bold mb-2 ${color}`}>
            {shouldCount ? displayValue : "0" + suffix}
          </div>
          <div className="text-sm text-slate-600">{label}</div>
        </CardContent>
      </Card>
    </div>
  );
}

// About Metric Card Component with count-up animation
function AboutMetricCard({
  icon: Icon,
  label,
  value,
  index,
  isVisible,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  index: number;
  isVisible: boolean;
}) {
  const [shouldCount, setShouldCount] = useState(false);

  // Parse value to extract number and suffix/prefix
  const match = value.match(/(\d+)(.*)/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value; // If no number, use original value (for "5★")

  useEffect(() => {
    if (isVisible) {
      // Start count-up after card animation (delay based on index)
      const timer = setTimeout(() => {
        setShouldCount(true);
      }, 200 + index * 150 + 300); // Wait for card animation + extra delay
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  const { displayValue } = useCountUp({
    end: number,
    duration: 2500,
    start: 0,
    suffix: suffix,
    shouldStart: shouldCount && number > 0,
  });

  return (
    <Card
      className={`bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isVisible ? "about-fade-in-right" : "opacity-0 translate-x-[30px]"
      }`}
      style={{
        animationDelay: isVisible ? `${0.2 + index * 0.15}s` : undefined,
      }}
    >
      <CardContent className="p-6 text-center">
        <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
        <div className="text-2xl font-bold text-blue-600 mb-2">
          {number > 0 ? (shouldCount ? displayValue : `0${suffix}`) : value}
        </div>
        <div className="text-sm text-slate-600">{label}</div>
      </CardContent>
    </Card>
  );
}

// Experience Section Component with animations
function ExperienceSection() {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isExperienceVisible, elementRef: experienceRef } = useScrollAnimation();
  const { isVisible: isEducationVisible, elementRef: educationRef } = useScrollAnimation();

  const jobs = [
    {
      title: "Senior Software Engineer (LAMP / JavaScript Stack)",
      company: "Techverx",
      period: "Apr 2024 – Sep 2025",
      description:
        "Owning backend and API development for enterprise SaaS and POS platforms using Laravel and JavaScript.",
      skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "Livewire",
        "AWS",
        "Docker",
        "Jenkins",
        "CI/CD",
        "Team Lead",
      ],
    },
    {
      title: "Software Engineer (Laravel / JavaScript)",
      company: "Kodex Technologies",
      period: "Apr 2022 – Mar 2024",
      description:
        "Built payment, marketplace and health platforms with Laravel APIs, JavaScript frontends and cloud deployments.",
      skills: [
        "PHP",
        "Laravel",
        "API Development",
        "MySQL",
        "PostgreSQL",
        "JavaScript",
        "Docker",
        "AWS",
        "Shippo",
        "Stripe",
        "PayPal",
        "Form.io",
      ],
    },
    {
      title: "PHP Developer",
      company: "Dynamic Logix",
      period: "Mar 2020 – Mar 2022",
      description:
        "Delivered custom web solutions for international clients using PHP, MySQL and modern front-end tools.",
      skills: [
        "PHP",
        "MySQL",
        "HTML/CSS",
        "Bootstrap",
        "jQuery",
        "Google Cloud",
        "GitHub",
        "Stripe",
        "ActiveCampaign",
        "SendGrid",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Comsats University Islamabad",
      period: "2016 - 2020",
      description:
        "Foundation in computer science fundamentals, algorithms, and data structures. Active member of the Computer Science Society.",
      achievements: [
        "Algorithms",
        "Data Structures",
        "CS Society",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "experience-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "experience-fade-in experience-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div ref={experienceRef}>
            <h3
              className={`text-2xl font-bold mb-8 flex items-center ${
                isExperienceVisible ? "experience-fade-in" : "opacity-0 translate-y-[30px]"
              }`}
            >
              <Award className="h-6 w-6 mr-3 text-primary" />
              Experience
            </h3>

            <div className="space-y-8">
              {jobs.map((job, index) => (
                <ExperienceTimelineItem
                  key={index}
                  job={job}
                  index={index}
                  isVisible={isExperienceVisible}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={educationRef}>
            <h3
              className={`text-2xl font-bold mb-8 flex items-center ${
                isEducationVisible ? "experience-fade-in" : "opacity-0 translate-y-[30px]"
              }`}
            >
              <BookOpen className="h-6 w-6 mr-3 text-secondary" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationTimelineItem
                  key={index}
                  education={edu}
                  index={index}
                  isVisible={isEducationVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Timeline Item Component
function ExperienceTimelineItem({
  job,
  index,
  isVisible,
}: {
  job: {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  };
  index: number;
  isVisible: boolean;
}) {
  const [shouldAnimateSkills, setShouldAnimateSkills] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimateSkills(true);
      }, 300 + index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      className={`relative pl-8 border-l-2 border-primary/20 ${
        isVisible ? "experience-timeline-enter" : "opacity-0 translate-x-[-40px]"
      }`}
      style={{
        animationDelay: isVisible ? `${0.3 + index * 0.25}s` : undefined,
      }}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
      <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-foreground">
              {job.title}
            </h4>
            <p className="text-primary font-medium">{job.company}</p>
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {job.period}
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, skillIndex) => (
              <Badge
                key={skill}
                variant="outline"
                className={`text-xs ${
                  shouldAnimateSkills ? "experience-skill-enter" : "opacity-0 scale-80"
                }`}
                style={{
                  animationDelay: shouldAnimateSkills
                    ? `${0.5 + index * 0.25 + skillIndex * 0.05}s`
                    : undefined,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Education Timeline Item Component
function EducationTimelineItem({
  education,
  index,
  isVisible,
}: {
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
    achievements: string[];
  };
  index: number;
  isVisible: boolean;
}) {
  const [shouldAnimateAchievements, setShouldAnimateAchievements] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimateAchievements(true);
      }, 300 + index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      className={`relative pl-8 border-l-2 border-secondary/20 ${
        isVisible ? "experience-timeline-enter" : "opacity-0 translate-x-[-40px]"
      }`}
      style={{
        animationDelay: isVisible ? `${0.3 + index * 0.25}s` : undefined,
      }}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
      <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-foreground">
              {education.degree}
            </h4>
            <p className="text-secondary font-medium">{education.school}</p>
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {education.period}
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {education.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {education.achievements.map((achievement, achievementIndex) => (
              <Badge
                key={achievement}
                variant="outline"
                className={`text-xs ${
                  shouldAnimateAchievements ? "experience-skill-enter" : "opacity-0 scale-80"
                }`}
                style={{
                  animationDelay: shouldAnimateAchievements
                    ? `${0.5 + index * 0.25 + achievementIndex * 0.05}s`
                    : undefined,
                }}
              >
                {achievement}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Contact Section Component with animations
function ContactSection({
  form,
  errors,
  loading,
  handleChange,
  handleSubmit,
}: {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  };
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  };
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isLeftVisible, elementRef: leftRef } = useScrollAnimation();
  const { isVisible: isFormVisible, elementRef: formRef } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zeeshan.haider.engineer@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+971 58 989 0134" },
    {
      icon: MapPin,
      label: "Location",
      value: "26 A street 34 villa Abu Hail Diera, Dubai",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "contact-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "contact-fade-in contact-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Ready to start your next project? Let's discuss how I can help
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={leftRef}>
            <h3
              className={`text-2xl font-bold mb-6 text-slate-800 ${
                isLeftVisible ? "contact-fade-in-left" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              Let's work together
            </h3>
            <p
              className={`text-slate-600 mb-8 leading-relaxed text-lg ${
                isLeftVisible ? "contact-fade-in-left contact-stagger-1" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              I'm a dedicated software engineer specializing in backend and
              full-stack development. Whether you need to build
              enterprise-grade solutions, modernize legacy applications, or
              integrate complex systems, I'd love to collaborate and help
              bring your vision to life.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-center group ${
                    isLeftVisible ? "contact-item-enter" : "opacity-0 translate-x-[-20px]"
                  }`}
                  style={{
                    animationDelay: isLeftVisible
                      ? `${0.3 + index * 0.15}s`
                      : undefined,
                  }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <contact.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      {contact.label}
                    </p>
                    <p className="text-slate-600">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={isLeftVisible ? "contact-fade-in-left contact-stagger-3" : "opacity-0 translate-x-[-30px]"}
            >
              <p className="font-medium text-slate-800 mb-4">Follow Me</p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border-blue-200 bg-transparent"
                  asChild
                >
                  <a
                    href="https://github.com/iamzeeshanhaider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border-blue-200 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/zeeshan-haider73/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div ref={formRef}>
            <Card
              className={`bg-white/70 backdrop-blur-sm border-white/20 shadow-2xl ${
                isFormVisible ? "contact-form-enter" : "opacity-0 translate-y-[40px] scale-95"
              }`}
            >
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-800 mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        className={`bg-white/50 border-slate-200 ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-800 mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={handleChange}
                        className={`bg-white/50 border-slate-200 ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-800 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`bg-white/50 border-slate-200 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-800 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Discussion"
                      value={form.subject}
                      onChange={handleChange}
                      className={`bg-white/50 border-slate-200 ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-800 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className={`min-h-[120px] bg-white/50 border-slate-200 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className={`
                      w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg cursor-pointer disabled:cursor-not-allowed
                    `}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component with animations
function TestimonialsSection() {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isCardsVisible, elementRef: cardsRef } = useScrollAnimation();

  const testimonials = [
    {
      name: "Mahnoor Mughal",
      role: "Senior Graphic Designer",
      company: "Design Studio",
      rating: 5,
      testimonial:
        "I had the pleasure of collaborating with Zeeshan, and I must say, he is truly exceptional in his work. Zeeshan brought to life the website I designed in Figma, and I am thoroughly impressed with his level of expertise and commitment. His attention to detail and dedication to delivering outstanding results make him a standout web developer. 100% recommended.",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Ahmed Hassan",
      role: "CEO",
      company: "TechStart Solutions",
      rating: 5,
      testimonial:
        "Zeeshan delivered our e-commerce platform ahead of schedule with exceptional quality. His expertise in Laravel and payment integrations saved us months of development time. Highly professional and reliable.",
      avatar: "/confident-businessman.png",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "HealthTech Inc",
      rating: 5,
      testimonial:
        "Working with Zeeshan on our healthcare CRM was a game-changer. He reduced our manual processes by 40% and delivered a scalable solution that grows with our business. Outstanding developer!",
      avatar: "/professional-woman-healthcare.png",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "testimonials-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Client{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "testimonials-fade-in testimonials-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            What clients say about working with me
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isVisible={isCardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component with animations
function TestimonialCard({
  testimonial,
  index,
  isVisible,
}: {
  testimonial: {
    name: string;
    role: string;
    company: string;
    rating: number;
    testimonial: string;
    avatar: string;
  };
  index: number;
  isVisible: boolean;
}) {
  return (
    <Card
      className={`hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-white/20 ${
        isVisible ? "testimonials-card-enter" : "opacity-0 translate-y-[50px] scale-95"
      }`}
      style={{
        animationDelay: isVisible ? `${0.2 + index * 0.15}s` : undefined,
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-slate-800">
              {testimonial.name}
            </h4>
            <p className="text-sm text-slate-600">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-yellow-400 fill-current"
            />
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed italic">
          "{testimonial.testimonial}"
        </p>
      </CardContent>
    </Card>
  );
}

// Projects Section Component with animations
function ProjectsSection() {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isCardsVisible, elementRef: cardsRef } = useScrollAnimation();

  const projects = [
    {
      title: "Ship2World",
      description:
        "Ship2World is a data-driven logistics platform that helps eCommerce sellers ship parcels globally with end-to-end tracking and optimized rates.",
      link: "https://ship2world.co/",
      image: "/ship2world_with_bgc.png",
      tags: [
        "PHP",
        "Laravel",
        "javascript",
        "MYSQL",
        "AWS",
        "Github",
        "Bootstrap",
        "Amazon",
        "ebay",
        "Etsy",
        "Shopify",
        "Stripe",
      ],
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "W-Flotte",
      description:
        "W-Flotte offers scenic Rhine cruises, private charters, and event trips in Düsseldorf with onboard dining and entertainment.",
      image: "/W-Flotte.png",
      link: "https://w-flotte.de/",
      tags: [
        "PHP",
        "Codeignitor",
        "Mysql",
        "javascript",
        "Bootstrap",
        "AWS",
      ],
      gradient: "from-gray-800 to-gray-900",
    },
    {
      title: "RichTV",
      description:
        "A modern trading club website for stock and crypto investors, featuring custom WordPress layouts, live market data widgets, and structured content for news, rich picks, and trading education.",
      image: "/richtv.png",
      link: "https://richtv.io/",
      tags: [
        "PHP",
        "WordPress",
        "MySQL",
        "JavaScript",
        "REST API",
        "TradingView",
      ],
      gradient: "from-emerald-400 to-sky-500",
    },
    {
      title: "The Apprentice Doctor",
      description:
        "A medical education platform built on WordPress, combining an online academy, articles, and product pages into a cohesive experience for future medical professionals.",
      image: "/apprentice-doctor.png",
      link: "https://theapprenticedoctor.com/",
      tags: [
        "PHP",
        "WordPress",
        "WooCommerce",
        "MySQL",
        "JavaScript",
        "CSS",
      ],
      gradient: "from-amber-400 to-orange-500",
    },
    {
      title: "HBCU 20x20 Application",
      description:
        "The Application (HBCU 20x20) is a free platform offering thousands of students access to academic and career resources, including job listings, scholarships, mock interviews, and college applications.",
      image: "/the_application.png",
      link: "http://theapplication.org/",
      tags: [
        "PHP",
        "Laravel",
        "LiveWire",
        "Mysql",
        "Javascript",
        "AWS",
        "Stripe",
        "Bitbucket",
      ],
      gradient: "from-teal-400 to-blue-500",
    },
    {
      title: "Framesuite",
      description:
        "A clean, conversion-focused website built for photographers to easily design, price, and order custom wall art layouts with a smooth and guided workflow.",
      image: "/framesuite.png",
      link: "https://framesuite.com/",
      tags: [
        "PHP",
        "Laravel",
        "Mysql",
        "Javascript",
        "Reacat.js",
        "Canvas",
        "AWS",
        "S3",
        "Stripe",
        "Bitbucket",
      ],
      gradient: "from-teal-400 to-blue-500",
    },
    {
      title: "AgileMVPs",
      description:
        "A custom WordPress marketing site for an MVP development agency, with fully bespoke layouts, service pages, case studies, and lead capture forms optimized for startup clients.",
      image: "/agilemvps.png",
      link: "https://agilemvps.com/",
      tags: [
        "PHP",
        "WordPress",
        "MySQL",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],
      gradient: "from-indigo-400 to-sky-500",
    },
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "projects-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "projects-fade-in projects-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isCardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component with animations
function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
    gradient: string;
  };
  index: number;
  isVisible: boolean;
}) {
  const [shouldAnimateTags, setShouldAnimateTags] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Start tag animations after card appears
      const timer = setTimeout(() => {
        setShouldAnimateTags(true);
      }, 400 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card border-0 overflow-hidden ${
        isVisible ? "projects-card-enter" : "opacity-0 translate-y-[60px] scale-90"
      }`}
      style={{
        animationDelay: isVisible ? `${0.2 + index * 0.12}s` : undefined,
      }}
    >
      <div
        className={`aspect-video bg-gradient-to-br ${project.gradient} overflow-hidden relative`}
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-110 transition-transform p-0 hover:bg-primary"
            asChild
          >
            <a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
            </a>
          </Button>
        </div>
        <CardDescription className="leading-relaxed mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tag}
              variant="outline"
              className={`text-xs hover:bg-primary hover:text-primary-foreground transition-colors ${
                shouldAnimateTags ? "projects-tag-enter" : "opacity-0 scale-80"
              }`}
              style={{
                animationDelay: shouldAnimateTags
                  ? `${0.5 + index * 0.12 + tagIndex * 0.04}s`
                  : undefined,
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}

// Services Section Component with animations
function ServicesSection() {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isCardsVisible, elementRef: cardsRef } = useScrollAnimation();

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using modern frameworks and best practices.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building secure, scalable, and high-performance backend systems with clean and efficient architecture.",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Full-stack web application development with modern technologies and cloud deployment.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: "API Integration",
      description:
        "Seamless integration with third-party APIs and building custom backend solutions.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, SEO, and exceptional performance across all devices.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "services-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "services-fade-in services-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            I offer comprehensive fullstack development services to help bring
            your vision to life
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isCardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card Component with animations
function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
  };
  index: number;
  isVisible: boolean;
}) {
  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card border-0 overflow-hidden ${
        isVisible ? "services-card-enter" : "opacity-0 translate-y-[50px] scale-90"
      }`}
      style={{
        animationDelay: isVisible ? `${0.2 + index * 0.15}s` : undefined,
      }}
    >
      <CardHeader className="relative">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

// Skills Section Component with animations
function SkillsSection() {
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isCardsVisible, elementRef: cardsRef } = useScrollAnimation();

  const skillGroups = [
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        "PHP",
        "WordPress",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "Nest.js",
        "MySQL",
        "PostgreSQL",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Frontend Development",
      icon: Monitor,
      skills: [
        "Next.js",
        "React.js",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      category: "DevOps & Tools",
      icon: Settings,
      skills: [
        "Docker",
        "CI/CD",
        "Jenkins",
        "AWS EC2",
        "AWS S3",
        "Git",
        "Linux",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Integrations",
      icon: Layers,
      skills: [
        "Stripe",
        "PayPal",
        "SendGrid",
        "ActiveCampaign",
        "REST APIs",
        "OLO",
        "GraphQL",
        "GHL",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Database Design",
        "Query Optimization",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "Architecture",
      icon: Cpu,
      skills: [
        "Microservices",
        "MVC",
        "RESTful APIs",
        "System Design",
        "Performance Optimization",
        "Security",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "skills-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "skills-fade-in skills-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Comprehensive expertise across the full development stack
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((skillGroup, index) => (
            <SkillCard
              key={index}
              skillGroup={skillGroup}
              index={index}
              isVisible={isCardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Skill Card Component with animations
function SkillCard({
  skillGroup,
  index,
  isVisible,
}: {
  skillGroup: {
    category: string;
    icon: LucideIcon;
    skills: string[];
    color: string;
  };
  index: number;
  isVisible: boolean;
}) {
  const [shouldAnimateBadges, setShouldAnimateBadges] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Start badge animations after card appears
      const timer = setTimeout(() => {
        setShouldAnimateBadges(true);
      }, 300 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-white/20 ${
        isVisible ? "skills-card-enter" : "opacity-0 translate-y-[40px] scale-95"
      }`}
      style={{
        animationDelay: isVisible ? `${0.2 + index * 0.1}s` : undefined,
      }}
    >
      <CardHeader>
        <div
          className={`w-16 h-16 bg-gradient-to-r ${skillGroup.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <skillGroup.icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {skillGroup.category}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillGroup.skills.map((skill, skillIndex) => (
            <Badge
              key={skill}
              variant="outline"
              className={`text-xs hover:bg-blue-50 hover:border-blue-200 transition-colors ${
                shouldAnimateBadges ? "skills-badge-enter" : "opacity-0 scale-80"
              }`}
              style={{
                animationDelay: shouldAnimateBadges
                  ? `${0.4 + index * 0.1 + skillIndex * 0.05}s`
                  : undefined,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// About Me Section Component with animations
function AboutMeSection() {
  const { isVisible: isSectionVisible, elementRef: sectionRef } = useScrollAnimation();
  const { isVisible: isHeadingVisible, elementRef: headingRef } = useScrollAnimation();
  const { isVisible: isLeftVisible, elementRef: leftRef } = useScrollAnimation();
  const { isVisible: isRightVisible, elementRef: rightRef } = useScrollAnimation();

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isHeadingVisible ? "about-fade-in" : "opacity-0 translate-y-[30px]"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${
              isHeadingVisible ? "about-fade-in about-stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            Passionate about creating scalable solutions that drive business
            growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef}>
            <p
              className={`text-slate-600 mb-6 leading-relaxed text-lg ${
                isLeftVisible ? "about-fade-in-left about-stagger-1" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              I'm a <strong>Senior Software Engineer</strong> with 5+ years of
              experience designing and building web applications, APIs, and
              database-driven systems. My main focus is backend engineering
              with Laravel/PHP and JavaScript (Node.js, NestJS), combined with
              modern frontends in Vue.js and React.
            </p>

            <p
              className={`text-slate-600 mb-6 leading-relaxed text-lg ${
                isLeftVisible ? "about-fade-in-left about-stagger-2" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              I've worked across logistics, healthcare, fintech, POS, and SaaS
              platforms—designing architectures, optimising performance with
              Redis caching and query tuning, and implementing secure payment
              and wallet flows. I'm comfortable owning features end-to-end:
              from requirements and system design to implementation, testing,
              deployment, and production troubleshooting.
            </p>

            <p
              className={`text-slate-600 mb-8 leading-relaxed text-lg ${
                isLeftVisible ? "about-fade-in-left about-stagger-3" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              I enjoy leading and mentoring within small teams, reviewing code
              for quality, and collaborating closely with product, QA, and
              stakeholders to ship reliable software that solves real business
              problems.
            </p>

            <div
              className={`mb-8 ${
                isLeftVisible ? "about-fade-in-left about-stagger-4" : "opacity-0 translate-x-[-30px]"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "PHP",
                  "WordPress",
                  "Laravel",
                  "CodeIgniter",
                  "JavaScript",
                  "Node.js",
                  "Nest.js",
                  "Next.js",
                  "React.js",
                  "Vue.js",
                  "Livewire",
                  "Bootstrap",
                  "Tailwind",
                  "Docker",
                  "AWS",
                  "MySQL",
                  "Postgress",
                ].map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition-colors bg-blue-50 text-blue-700 border-blue-200 ${
                      isLeftVisible ? "about-scale-in" : "opacity-0 scale-75"
                    }`}
                    style={{
                      animationDelay: isLeftVisible
                        ? `${0.7 + index * 0.15}s`
                        : undefined,
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div
              className={isLeftVisible ? "about-fade-in-left about-stagger-5" : "opacity-0 translate-x-[-30px]"}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg"
                asChild
              >
                <a href="/Zeeshan Haider.pdf" download>
                  Download Resume
                  <Download className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div ref={rightRef} className="grid grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                label: "Workflow Efficiency",
                value: "40%",
              },
              { icon: Shield, label: "Security Focus", value: "100%" },
              { icon: Rocket, label: "Project Success", value: "98%" },
              { icon: Heart, label: "Client Reviews", value: "5★" },
            ].map((metric, index) => (
              <AboutMetricCard
                key={index}
                icon={metric.icon}
                label={metric.label}
                value={metric.value}
                index={index}
                isVisible={isRightVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ZeeshanPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    // Clear the error for the field being edited
    if (errors[id as keyof typeof errors]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      isValid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Zeeshan Haider
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Services",
                "Skills",
                "Projects",
                "Experience",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-blue-600 hover:text-white transition-all duration-300 border-blue-200 text-blue-600 bg-transparent"
                asChild
              >
                <a href="/Zeeshan Haider.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                <a href="#contact" className="flex items-center">
                  Let's Connect
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200/50">
              <div className="flex flex-col space-y-4">
                {[
                  "About",
                  "Services",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    asChild
                  >
                    <a href="/Zeeshan Haider.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Zeeshan Haider
                </span>
              </h1>

              <p className="text-2xl text-slate-600 mb-4 font-medium">
                Senior Software Engineer (PHP / JavaScript)
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
               
                I build scalable web applications, APIs, and platforms using
                Laravel, Node.js, React.js, and PostgreSQL. Experience across
                POS, marketplaces, logistics, and SaaS products.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg"
                >
                  <a href="#projects" className="flex items-center">
                    View My Work
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-600 hover:text-white border-blue-200 text-blue-600 bg-transparent"
                >
                  <a href="#contact" className="flex items-center">
                    Let's Connect
                  </a>
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/iamzeeshanhaider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/zeeshan-haider73/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative fade-in-up">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src="/software-engineer-headshot.png"
                      alt="Zeeshan Haider - Senior Software Engineer - Laravel Developer - Api Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20 float-1">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-xs text-slate-600">Years Exp</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20 float-2">
                  <div className="text-2xl font-bold text-indigo-600">30+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20 float-3">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-xs text-slate-600">Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                value: "5+",
                label: "Years Experience",
                color: "text-blue-600",
              },
              {
                icon: Code2,
                value: "30+",
                label: "Projects Completed",
                color: "text-indigo-600",
              },
              {
                icon: Users,
                value: "25+",
                label: "Happy Clients",
                color: "text-green-600",
              },
              {
                icon: Award,
                value: "98%",
                label: "Client Satisfaction",
                color: "text-purple-600",
              },
            ].map((stat, index) => {
              // Parse value to extract number and suffix
              const match = stat.value.match(/(\d+)(.*)/);
              const number = match ? parseInt(match[1], 10) : 0;
              const suffix = match ? match[2] : "";
              
              return (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={number}
                  suffix={suffix}
                  label={stat.label}
                  color={stat.color}
                  delay={index * 0.15}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMeSection />

      <SkillsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />
      <TestimonialsSection />

      <ContactSection
        form={form}
        errors={errors}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Zeeshan Haider
                </h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Passionate Senior Software Engineer crafting scalable web
                applications and meaningful digital experiences.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a
                    href="https://github.com/iamzeeshanhaider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/zeeshan-haider73/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                {["About", "Services", "Skills", "Projects", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Full-Stack Development</li>
                <li>Laravel Applications</li>
                <li>Enterprise Solutions</li>
                <li>API Integrations</li>
                <li>System Architecture</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>
              &copy; 2025 Zeeshan Haider. All rights reserved. Built with
              passion and expertise.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
