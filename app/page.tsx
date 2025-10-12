"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  Twitter,
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
} from "lucide-react"
import { useState, useEffect } from "react"

export default function ZeeshanPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
              {["About", "Services", "Skills", "Projects", "Experience", "Testimonials", "Contact"].map((item) => (
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
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200/50">
              <div className="flex flex-col space-y-4">
                {["About", "Services", "Skills", "Projects", "Experience", "Testimonials", "Contact"].map((item) => (
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
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600">
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
                Available for opportunities in UAE
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Zeeshan Haider
                </span>
              </h1>

              <p className="text-2xl text-slate-600 mb-4 font-medium">Senior Software Engineer</p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                5+ years of experience building scalable web applications and enterprise solutions across healthcare,
                e-commerce, and SaaS industries. Specialized in PHP, Laravel, Next.js, and modern full-stack
                development.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-600 hover:text-white border-blue-200 text-blue-600 bg-transparent"
                >
                  Let's Connect
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/zeeshan-haider" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/zeeshan-haider73/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative fade-in-up">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src="/software-engineer-headshot.png"
                      alt="Zeeshan Haider - Senior Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-xs text-slate-600">Years Exp</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-indigo-600">100+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-xl border border-white/20">
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
              { icon: Briefcase, value: "5+", label: "Years Experience", color: "text-blue-600" },
              { icon: Code2, value: "100+", label: "Projects Completed", color: "text-indigo-600" },
              { icon: Users, value: "50+", label: "Happy Clients", color: "text-green-600" },
              { icon: Award, value: "98%", label: "Client Satisfaction", color: "text-purple-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating scalable solutions that drive business growth and deliver exceptional user
              experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                I'm a <strong>Senior Software Engineer</strong> with 5+ years of experience building scalable web
                applications and enterprise solutions across industries including healthcare, e-commerce, and SaaS.
                Currently relocating to the UAE and seeking new opportunities to contribute my technical expertise.
              </p>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Throughout my career, I've designed and delivered CRM and support portal systems that streamlined
                workflows and reduced manual effort by up to 40%. I specialize in integrating payment solutions (Stripe,
                PayPal) and marketing platforms into enterprise applications.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "PHP",
                    "Laravel",
                    "CodeIgniter",
                    "Node.js",
                    "Next.js",
                    "React",
                    "JavaScript",
                    "Bootstrap",
                    "Tailwind",
                    "Docker",
                    "AWS",
                    "MySQL",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition-colors bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg">
                Download Resume
                <Download className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, label: "Workflow Efficiency", value: "40%" },
                { icon: Shield, label: "Security Focus", value: "100%" },
                { icon: Rocket, label: "Project Success", value: "98%" },
                { icon: Heart, label: "Client Reviews", value: "5★" },
              ].map((metric, index) => (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <metric.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                    <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-600">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Backend Development",
                icon: Server,
                skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "MySQL", "PostgreSQL"],
                color: "from-blue-500 to-blue-600",
              },
              {
                category: "Frontend Development",
                icon: Monitor,
                skills: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"],
                color: "from-indigo-500 to-indigo-600",
              },
              {
                category: "DevOps & Tools",
                icon: Settings,
                skills: ["Docker", "CI/CD", "Jenkins", "AWS S3", "Git", "Linux"],
                color: "from-purple-500 to-purple-600",
              },
              {
                category: "Integrations",
                icon: Layers,
                skills: ["Stripe", "PayPal", "SendGrid", "ActiveCampaign", "REST APIs", "GraphQL"],
                color: "from-green-500 to-green-600",
              },
              {
                category: "Databases",
                icon: Database,
                skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
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
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-white/20"
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
                    {skillGroup.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs hover:bg-blue-50 hover:border-blue-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Services & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I offer comprehensive frontend development services to help bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                description:
                  "Building responsive and interactive web applications using modern frameworks and best practices.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description:
                  "Developing cross-platform mobile applications with React Native and progressive web apps.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Globe,
                title: "Web Applications",
                description: "Full-stack web application development with modern technologies and cloud deployment.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Database,
                title: "API Integration",
                description: "Seamless integration with third-party APIs and building custom backend solutions.",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Optimizing applications for speed, SEO, and exceptional performance across all devices.",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card border-0 overflow-hidden"
              >
                <CardHeader className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "A full-featured e-commerce platform built with Next.js, Stripe, and Tailwind CSS.",
                image: "/modern-ecommerce-dashboard.png",
                tags: ["Next.js", "TypeScript", "Stripe"],
                gradient: "from-red-400 to-pink-500",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates and team features.",
                image: "/dark-task-management-app-interface.jpg",
                tags: ["React", "Socket.io", "MongoDB"],
                gradient: "from-gray-800 to-gray-900",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
                image: "/analytics-dashboard.png",
                tags: ["Vue.js", "D3.js", "Node.js"],
                gradient: "from-teal-400 to-blue-500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card border-0 overflow-hidden"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} overflow-hidden relative`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardDescription className="leading-relaxed mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground group bg-transparent"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey and educational background
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Experience
              </h3>

              <div className="space-y-8">
                {[
                  {
                    title: "Senior Frontend Engineer",
                    company: "TechCorp Inc.",
                    period: "2022 - Present",
                    description:
                      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern development practices.",
                    skills: ["React", "TypeScript", "Team Lead"],
                  },
                  {
                    title: "Frontend Developer",
                    company: "StartupXYZ",
                    period: "2020 - 2022",
                    description:
                      "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
                    skills: ["Vue.js", "JavaScript", "SCSS"],
                  },
                  {
                    title: "Junior Developer",
                    company: "WebAgency Pro",
                    period: "2019 - 2020",
                    description:
                      "Started my professional journey building websites and learning modern web development technologies.",
                    skills: ["HTML/CSS", "jQuery", "WordPress"],
                  },
                ].map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                          <p className="text-primary font-medium">{job.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.period}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-secondary" />
                Education
              </h3>

              <div className="space-y-8">
                {[
                  {
                    degree: "Master of Computer Science",
                    school: "Stanford University",
                    period: "2017 - 2019",
                    description:
                      "Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors (GPA: 3.8/4.0).",
                    achievements: ["HCI", "Software Engineering", "Honors"],
                  },
                  {
                    degree: "Bachelor of Computer Science",
                    school: "UC Berkeley",
                    period: "2013 - 2017",
                    description:
                      "Foundation in computer science fundamentals, algorithms, and data structures. Active member of the Computer Science Society.",
                    achievements: ["Algorithms", "Data Structures", "CS Society"],
                  },
                ].map((education, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-secondary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                    <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground">{education.degree}</h4>
                          <p className="text-secondary font-medium">{education.school}</p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {education.period}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{education.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {education.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Let's work together</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                I'm currently relocating to the UAE and actively seeking opportunities as a Senior Laravel Developer,
                Full-Stack Developer, or Software Engineer. Whether you're looking to build enterprise solutions,
                modernize legacy applications, or integrate complex systems, I'd love to discuss your project.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Mail, label: "Email", value: "zeeshan.haider@example.com" },
                  { icon: Phone, label: "Phone", value: "+971 XX XXX XXXX" },
                  { icon: MapPin, label: "Location", value: "Dubai, UAE (Relocating)" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <contact.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{contact.label}</p>
                      <p className="text-slate-600">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-medium text-slate-800 mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border-blue-200 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/zeeshan-haider" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border-blue-200 bg-transparent"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/zeeshan-haider73/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border-blue-200 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" className="bg-white/50 border-slate-200" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" className="bg-white/50 border-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/50 border-slate-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-800 mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Discussion" className="bg-white/50 border-slate-200" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px] bg-white/50 border-slate-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group shadow-lg"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                Senior Software Engineer with 5+ years of experience building scalable web applications and enterprise
                solutions. Currently relocating to UAE and seeking new opportunities to create impactful digital
                solutions.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href="https://github.com/zeeshan-haider" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/zeeshan-haider73/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                {["About", "Services", "Skills", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
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
            <p>&copy; 2024 Zeeshan Haider. All rights reserved. Built with passion and expertise.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
