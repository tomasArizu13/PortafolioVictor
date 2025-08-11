"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Instagram, Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

// Tipografías: serif para títulos (Playfair Display) y sans para texto (Inter)
import { Playfair_Display, Inter } from "next/font/google"
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function Page() {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans text-neutral-900 bg-white`}>
      <SiteHeader />

      <Hero />

      <section id="about" className="relative">
        <div className="absolute left-0 top-8 hidden md:block">
          <VerticalLabel text="PORTAFOLIO" />
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
              <Image
                src="images/Victor.jpg"
                alt="Composición editorial minimalista en escala de grises."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <Reveal>
              <div className="space-y-6">
                                <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">About {"me"}</h2>
                <p className="text-neutral-600 leading-relaxed">
                I am a multidisciplinary designer with a strong business-oriented perspective and expertise in interior and spatial design. I specialize in the creation, design, and execution of spaces. In addition, I craft visual identities, graphic assets, and digital experiences. Born and raised in Buenos Aires, Argentina, I bring a unique blend of creativity and strategy to every project.

                </p>
                <div className="grid grid-cols-3 divide-x divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200">
                  <Stat value="5+" label="Years" />
                  <Stat value="30+" label="Projects" />
                  <Stat value="10" label="Awards" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Educación: debajo de Sobre mí */}
      <EducationSection />

      <Separator className="bg-neutral-200" />

      {/* Experiencia profesional */}
      <ExperienceSection />

      <Separator className="bg-neutral-200" />

      <section id="works" className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <HeaderWithKicker kicker="Selection" title="Featured Works" />
        <PortfolioGrid />
      </section>

      <Separator className="bg-neutral-200" />

      {/* <section id="services" className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <HeaderWithKicker kicker="Servicios" title="Qué puedo hacer por ti" />
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard title="Branding" description="Estrategia, naming, identidad visual y sistemas escalables." />
          <ServiceCard
            title="Editorial"
            description="Diseño de catálogos, libros, lookbooks y memorias con cuidado tipográfico."
          />
          <ServiceCard title="Packaging" description="Empaques con enfoque sensorial y materiales responsables." />
        </div>
      </section> */}

      {/* Skills con animaciones elegantes */}
      <SkillsSection />

      <CTASection />

      <Footer />
    </main>
  )
}

/* ---------- Components ---------- */

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#top" className="font-display text-xl tracking-tight">
          {`va - studio`}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <a href="#about" className="hover:text-neutral-950 transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-neutral-950 transition-colors">
            Education
          </a>
          <a href="#experience" className="hover:text-neutral-950 transition-colors">
            Experience
          </a>
          <a href="#works" className="hover:text-neutral-950 transition-colors">
            Works
          </a>
          {/* <a href="#services" className="hover:text-neutral-950 transition-colors">
            Services
          </a> */}
          <a href="#skills" className="hover:text-neutral-950 transition-colors">
            Skills
          </a>
        </nav>
        
        {/* Desktop CTA Button */}
        <a href="#contact" className="ml-4 hidden md:block">
          <Button variant="outline" className="rounded-full border-neutral-300 text-neutral-900 bg-transparent">
            Contact
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1 p-2 md:hidden"
          aria-label="Toggle mobile menu"
        >
          <span className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-neutral-200 bg-white/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a 
              href="#about" 
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#experience" 
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#works" 
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Works
            </a>
            <a 
              href="#skills" 
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <div className="pt-2 border-t border-neutral-200">
              <a href="#contact">
                <Button variant="outline" className="w-full rounded-full border-neutral-300 text-neutral-900 bg-transparent">
                  Contact
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[90vh] min-h-[550px] w-full overflow-hidden">
        <Image
          src="/images/portada victor.jpg"
          alt="Imagen hero monocromática, detalle macro minimalista."
          fill
          className="object-cover object-right md:object-center"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
        <div className="container mx-auto flex h-full max-w-6xl items-end px-4 pb-12 md:items-center md:pb-0">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-700">Design — Branding — Editorial</p>
            <h1 className="font-display text-3xl leading-[1.1] tracking-tight text-neutral-900 md:text-4xl lg:text-6xl">
              Design Portfolio
              <span className="block font-sans text-neutral-700 mt-2 text-base md:text-xl">
                Neutral aesthetics, precise typography, conscious composition.
              </span>
            </h1>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#works">
                <Button className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
                  View Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="rounded-full border-neutral-300 text-neutral-900 bg-transparent">
                  About Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Microtipografía inspirada en la referencia */}
        <div className="pointer-events-none absolute left-6 top-6 hidden select-none text-[10px] tracking-[0.35em] text-white/90 drop-shadow md:block">
          {"BASED IN BUENOS AIRES"}
        </div>
        <div className="pointer-events-none absolute right-6 top-6 hidden select-none text-[10px] tracking-[0.35em] text-white/90 drop-shadow md:block">
          {"MULTIDICIPLINARY DESIGNER"}
        </div>
        
        {/* Mobile microtypography */}
        <div className="pointer-events-none absolute right-4 top-4 select-none text-[8px] tracking-[0.25em] text-white/90 drop-shadow md:hidden">
          {"MULTIDISCIPLINARY DESIGNER"}
        </div>

        {/* Flecha de scroll sutil */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-pulse">
          <a href="#about" className="block transition-transform hover:scale-110">
            <ChevronDown className="h-6 w-6 text-white/90 animate-bounce cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  )
}

function VerticalLabel({ text = "PORTAFOLIO" }) {
  return (
    <div
      aria-hidden="true"
      className="select-none px-2 py-6 text-xs tracking-[0.5em] text-neutral-400"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      {text}
    </div>
  )
}

function Stat({ value = "0", label = "Label" }: { value?: string; label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6">
      <div className="font-display text-2xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{label}</div>
    </div>
  )
}

function HeaderWithKicker({ kicker = "Kicker", title = "Título" }: { kicker?: string; title?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">{kicker}</span>
      <h3 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h3>
    </div>
  )
}

function PortfolioGrid() {
  // Reemplaza los placeholders por tus imágenes reales cuando las tengas.
  const items = [
    { id: 1, title: "Skin Formula", tag: "Branding", img: "/placeholder-7ac3n.png" },
    { id: 2, title: "Mármol", tag: "Packaging", img: "/neutral-stone-packaging.png" },
    { id: 3, title: "Editorial — Nº1", tag: "Editorial", img: "/editorial-cover-bw.png" },
    { id: 4, title: "Atelier", tag: "Dirección de arte", img: "/placeholder-jrks9.png" },
    { id: 5, title: "Café Grano", tag: "Identidad", img: "/placeholder-nfqhg.png" },
    { id: 6, title: "Arquitectura", tag: "Fotografía", img: "/abstract-monochrome-architecture.png" },
  ]
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProjectCard key={item.id} title={item.title} tag={item.tag} imageSrc={item.img} />
      ))}
    </div>
  )
}

function ProjectCard({
  title = "Proyecto",
  tag = "Categoría",
  imageSrc = "/portfolio-placeholder.png",
}: {
  title?: string
  tag?: string
  imageSrc?: string
}) {
  return (
    <Card className="group overflow-hidden border-neutral-200">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
        {/* Nota: reemplaza el src con tu imagen final */}
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Vista previa del proyecto: ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardContent className="flex items-center justify-between gap-3 p-4">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">{tag}</div>
        </div>
        <Button variant="ghost" size="icon" className="text-neutral-700 hover:text-neutral-900">
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Ver proyecto</span>
        </Button>
      </CardContent>
    </Card>
  )
}

function ServiceCard({
  title = "Servicio",
  description = "Descripción del servicio.",
}: { title?: string; description?: string }) {
  return (
    <Card className="border-neutral-200">
      <CardContent className="p-6">
        <h4 className="font-display text-xl">{title}</h4>
        <p className="mt-2 text-neutral-600">{description}</p>
      </CardContent>
    </Card>
  )
}

/* ---------- Educación ---------- */

type EduItem = {
  school: string
  location?: string
  degree: string
  years: string
}

function EducationSection() {
  const allItems: EduItem[] = [
    {
      school: "Insenia Design School of Madrid · Udima University of Madrid",
      degree: "Master's in Interior Design and Architecture",
      years: "2024 — 2025",
    },
    {
      school: "Vytautas Magnus University",
      location: "Kaunas, Lithuania",
      degree: "Exchange Program — Innovation Design & Business Management",
      years: "2021 — 2022",
    },
    {
      school: "Universidad Torcuato Di Tella",
      location: "Buenos Aires, Argentina",
      degree: "Bachelor's Degree in Design",
      years: "2019 — 2022",
    },
    {
      school: "Michael Ham Memorial College",
      location: "Buenos Aires, Argentina",
      degree: "Primary & Secondary education • AS Cambridge Programme • Cambridge IGCSE • Prefect Girl",
      years: "2007 — 2018",
    },
  ]

  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? allItems : allItems.slice(0, 2)

  return (
          <section id="education" className="container mx-auto max-w-6xl px-4 pb-4 pt-2 md:pb-10 md:pt-0">
      <div className="py-16 md:py-24">
        <HeaderWithKicker kicker="Formation" title="Education" />
        <div className="relative">
          {/* Línea vertical estilo timeline */}
          <div aria-hidden className="absolute left-3 top-0 h-full w-px bg-neutral-200 md:left-4" />
          <ul className="space-y-8">
            {visible.map((item, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <li className="relative pl-10 md:pl-12">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-300 bg-white md:left-1"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm uppercase tracking-widest text-neutral-500">{item.years}</div>
                    <h4 className="font-display text-xl leading-snug">{item.school}</h4>
                    <div className="text-neutral-600">{item.degree}</div>
                    {item.location && <div className="text-sm text-neutral-500">{item.location}</div>}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* Mostrar/ocultar */}
          <div className="mt-8">
                      <Button
            onClick={() => setExpanded((v) => !v)}
            variant="outline"
            className="rounded-full border-neutral-300 text-neutral-900 bg-transparent"
            aria-expanded={expanded}
            aria-controls="education-list"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Experiencia ---------- */

type ExperienceItem = {
  company: string
  location?: string
  position: string
  years: string
  details: string[]
}

function ExperienceSection() {
  const allItems: ExperienceItem[] = [
    {
      company: "Handel Architectural Products",
      location: "Beccar, Buenos Aires",
      position: "Commercial Architect & Stylist",
      years: "Feb 2025 — Present",
      details: [
        "Commercial architecture and high-end product sales",
        "Brand development and styling for architectural and interior design brands",
        "Curation and specification of materials for architectural applications",
        "Technical advising on product use and integration in design projects",
        "Commercial consulting for both residential and large-scale developments",
        "Coordination with developers, architects, and designers for product fit and technical feasibility"
      ]
    },
    {
      company: "Private Residential Project",
      location: "Patagonia, Argentina",
      position: "Interior & Architectural Designer",
      years: "Feb 2025 — Present",
      details: [
        "Integral interior and architectural design",
        "Spatial design and layout distribution",
        "Technical plan decision-making and development",
        "Lighting plan design and technical implementation",
        "Complete kitchen design, from concept to execution",
        "3D industrial design of furniture and carpentry elements",
        "Object curation and styling",
        "Selection of materials and finishes from beginning to end",
        "Ambient design and home storytelling",
        "Full visual identity and styling of the house",
        "Collaboration with architects and construction teams"
      ]
    },
    {
      company: "Conection Pro",
      location: "Santiago, Chile",
      position: "Social Media Content Creator & Graphic Designer",
      years: "2024",
      details: [
        "Social media content creation and graphic design for multiple brands",
        "Digital marketing and brand identity development",
        "Copywriting and strategic planning",
        "Community management using Meta Business Suite and Google tools",
        "Performance metrics tracking and analysis",
        "Content creator across multiple platforms"
      ]
    },
    {
      company: "Ginebra – Agmma – Pampa Nuestra",
      location: "Buenos Aires, Argentina",
      position: "Graphic & Fashion Design",
      years: "2020 — 2023",
      details: [
        "Vendor and client coordination for fashion productions and events",
        "Logistics management for photo shoots and event planning",
        "Post-production supervision",
        "Marketing strategy development and campaign execution",
        "Community management (Instagram, TikTok, Email)",
        "Graphic design and 3D design for visual assets and campaigns"
      ]
    }
  ]

  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? allItems : allItems.slice(0, 2)

  return (
          <section id="experience" className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
      <HeaderWithKicker kicker="Experience" title="Professional Experience" />
      <div className="relative">
        {/* Línea vertical estilo timeline */}
        <div aria-hidden className="absolute left-3 top-0 h-full w-px bg-neutral-200 md:left-4" />
        <ul className="space-y-12">
          {visible.map((item, idx) => (
            <Reveal key={idx} delay={idx * 70}>
              <li className="relative pl-10 md:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-neutral-300 bg-white md:left-1"
                />
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-sm uppercase tracking-widest text-neutral-500">{item.years}</div>
                    <h4 className="font-display text-xl leading-snug">{item.position}</h4>
                    <div className="font-medium text-neutral-700">{item.company}</div>
                    {item.location && <div className="text-sm text-neutral-500">{item.location}</div>}
                  </div>
                  
                  {/* Botón See details */}
                  <Button
                    onClick={() => setExpandedItems(prev => 
                      prev.includes(idx) 
                        ? prev.filter(i => i !== idx)
                        : [...prev, idx]
                    )}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-neutral-300 text-neutral-900 bg-transparent text-xs"
                    aria-expanded={expandedItems.includes(idx)}
                  >
                    {expandedItems.includes(idx) ? (
                      <>
                        Hide details
                        <ChevronUp className="ml-2 h-3 w-3" />
                      </>
                    ) : (
                      <>
                        See details
                        <ChevronDown className="ml-2 h-3 w-3" />
                      </>
                    )}
                  </Button>
                  
                  {/* Detalles expandibles */}
                  {expandedItems.includes(idx) && (
                    <div className="space-y-2 pt-2">
                      {item.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300" />
                          <p className="text-sm text-neutral-600 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Mostrar/ocultar todas las experiencias */}
        <div className="mt-8">
          <Button
            onClick={() => setShowAll((v) => !v)}
            variant="outline"
            className="rounded-full border-neutral-300 text-neutral-900 bg-transparent"
            aria-expanded={showAll}
            aria-controls="experience-list"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ---------- Skills ---------- */

function SkillsSection() {
  const skills = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Enscape",
    "Rhinoceros",
    "V-Ray",
    "Figma",
    "Twinmotion",
    "Visual Studio Code",
    "Adobe After Effects",
    "SketchUp",
    "AutoCAD",
    "Blender",
    "Microsoft",
    "Tango and Action Sales",
  ]

  return (
          <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.025),transparent_60%)]" />
      <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <HeaderWithKicker kicker="Skills" title="Tools and Capabilities" />
        <Reveal>
          <p className="max-w-3xl text-neutral-600">
            As a designer, I transform ideas into visual and functional solutions using these tools.
          </p>
        </Reveal>

        {/* Chips animados */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((s, i) => (
                          <Reveal key={s} delay={i * 30}>
                <div
                  className="group relative overflow-hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800 transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                  role="listitem"
                >
                  {/* Línea de brillo suave */}
                  <span className="pointer-events-none absolute -left-10 top-0 h-full w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[220%] group-hover:opacity-100" />
                  <span className="relative z-10">{s}</span>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA ---------- */

function CTASection() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Portfolio Inquiry')
    const body = encodeURIComponent(`Hi Victoria,

I saw your portfolio and I really like what you do. I would like to contact you to discuss a potential project.

Looking forward to hearing from you!

Best regards,
[Your name]`)

    window.location.href = `mailto:vickyarizu@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_60%)]" />
      <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <HeaderWithKicker kicker="Contact" title="Let's talk about your next project" />
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-neutral-200">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl">Ready to start your project?</h3>
                  <p className="text-neutral-600 max-w-md mx-auto">
                    Let's discuss your ideas and bring your vision to life. I'm here to help you create something amazing.
                  </p>
                </div>
                
                <Button 
                  onClick={handleEmailClick}
                  className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-3 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </Button>
                
                <p className="text-sm text-neutral-500">
                  I typically respond within 24–48 hours
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <p className="text-neutral-600">You can also write to me directly or follow my work on social media:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neutral-500" />
                <a className="hover:underline" href="mailto:vickyarizu@gmail.com">
                  vickyarizu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-neutral-500" />
                <a className="hover:underline" href="#" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-neutral-500" />
                <a className="hover:underline" href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 text-sm text-neutral-600 md:flex-row md:gap-4">
        <div>© {new Date().getFullYear()} Studio. All rights reserved.</div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link className="hover:text-neutral-900" href="#about">
            About
          </Link>
          <Link className="hover:text-neutral-900" href="#education">
            Education
          </Link>
          <Link className="hover:text-neutral-900" href="#experience">
            Experience
          </Link>
          <Link className="hover:text-neutral-900" href="#works">
            Works
          </Link>
          {/* <Link className="hover:text-neutral-900" href="#services">
            Services
          </Link> */}
          <Link className="hover:text-neutral-900" href="#skills">
            Skills
          </Link>
          <Link className="hover:text-neutral-900" href="#contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Util: Reveal on view ---------- */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShow(true), delay)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
