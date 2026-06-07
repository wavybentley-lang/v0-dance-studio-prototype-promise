import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Steps Dance School",
  shortName: "Steps",
  tagline: "Unisciti a noi per scoprire il tuo talento nascosto!",
  logo: "",
  phone: "+39 393 514 4234",
  phoneHref: "tel:+393935144234",
  whatsappHref: "https://wa.me/393935144234",
  email: "stepsdance2005@gmail.com",
  emailHref: "mailto:stepsdance2005@gmail.com",
  instagramHref: "https://www.instagram.com/steps_dance_school/",
  facebookHref: "https://www.facebook.com/stepsdanceschool/photos",
  mapsHref: "https://maps.google.com/?q=STEPS+DANCE+SCHOOL+Via+Emilio+Reverberi+28+00043+Ciampino+RM",
  primaryLocation: "Via Emilio Reverberi, 28",
  secondaryLocation: "00043 Ciampino RM",
  cityLine: "Italy",
  hours:
    "Monday: 9:30 AM - 9:30 PM\n" +
    "Tuesday: 9:30 AM - 9:30 PM\n" +
    "Wednesday: 9:30 AM - 9:30 PM\n" +
    "Thursday: 9:30 AM - 9:30 PM\n" +
    "Friday: 9:30 AM - 9:30 PM\n" +
    "Saturday: Closed\n" +
    "Sunday: Closed",
  copyright: "2026 Steps Dance School",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "10+", label: "DISCIPLINE" },
  { number: "DAI 3 ANNI", label: "BAMBINI, RAGAZZI E ADULTI" },
  { number: "2", label: "SPETTACOLI ALLANNO" },
  { number: "CORSI", label: "BASE E AVANZATI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Steps",
    courses: [
      {
        title: "Danza",
        age: "Percorsi formativi",
        description: "Lezioni pensate per sviluppare tecnica, musicalita e presenza scenica in un percorso strutturato.",
        image: "/sunriseforever-bounce-5277075.jpg",
        Icon: Zap,
      },
      {
        title: "Tecnica accademica e danza moderna",
        age: "Formazione tecnica",
        description: "Studio della base accademica e della danza moderna per costruire precisione, controllo ed espressivita.",
        image: "/karenbond-ballet-1409894.jpg",
        Icon: Flame,
      },
      {
        title: "Crossfit",
        age: "Esperienze artistiche",
        description: "Gestualita corporea, recitazione, saggi, spettacoli e stage per completare la crescita scenica dell'allievo.",
        image: "/pilates.jpg",
        Icon: Wind,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/nostrimomenti1.jpg", alt: "Steps momento 1" },
  { src: "/nostrimomenti2.jpg", alt: "Steps momento 2" },
  { src: "/nostrimomenti3.jpg", alt: "Steps momento 3" },
  { src: "/nostrimomenti4.jpg", alt: "Steps momento 4" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNEDI",
    classes: [
      { time: "10:00-11:00", name: "Danza Classica" },
      { time: "11:00-12:00", name: "Danza Aerea" },
      { time: "14:00-15:00", name: "Gioco Danza" },
      { time: "17:00-18:00", name: "Danza Moderna" },
      { time: "19:00-20:00", name: "Danza Contemporanea" },
      { time: "20:30-21:30", name: "Hip Hop" },
      { time: "21:30-22:30", name: "Latino Americano" },
      { time: "22:30-23:30", name: "Latin Kids" },
    ],
  },
  {
    day: "MARTEDI",
    classes: [
      { time: "12:00-13:00", name: "Tessuto Aereo" },
      { time: "14:00-15:00", name: "Preparazione Esami Danza Aerea" },
      { time: "17:00-18:00", name: "Gioco Danza" },
      { time: "18:00-19:00", name: "Hip Hop" },
      { time: "19:30-20:30", name: "Danza Classica" },
      { time: "20:30-21:30", name: "Latino Americano" },
      { time: "21:30-22:30", name: "Danza Moderna" },
      { time: "22:30-23:30", name: "Danza Contemporanea" },
    ],
  },
  {
    day: "MERCOLEDI",
    classes: [
      { time: "11:30-12:30", name: "Gioco Danza" },
      { time: "14:00-15:00", name: "Danza Aerea" },
      { time: "16:00-17:00", name: "Danza Moderna" },
      { time: "18:00-19:00", name: "Hip Hop" },
      { time: "19:00-20:00", name: "Tessuto Aereo" },
      { time: "20:30-21:30", name: "Latin Kids" },
      { time: "21:30-22:30", name: "Preparazione Esami Danza Aerea" },
    ],
  },
  {
    day: "GIOVEDI",
    classes: [
      { time: "10:00-11:00", name: "Danza Classica" },
      { time: "11:00-12:00", name: "Danza Contemporanea" },
      { time: "14:00-15:00", name: "Danza Aerea" },
      { time: "17:00-18:00", name: "Gioco Danza" },
      { time: "18:30-19:30", name: "Hip Hop" },
      { time: "19:30-20:30", name: "Danza Moderna" },
      { time: "20:30-21:30", name: "Latino Americano" },
      { time: "21:30-22:30", name: "Latin Kids" },
      { time: "22:30-23:30", name: "Tessuto Aereo" },
    ],
  },
  {
    day: "VENERDI",
    classes: [
      { time: "14:00-15:00", name: "Preparazione Esami Danza Aerea" },
      { time: "18:00-19:00", name: "Danza Classica" },
      { time: "19:00-20:00", name: "Gioco Danza" },
      { time: "20:00-21:00", name: "Danza Aerea" },
      { time: "21:00-22:00", name: "Danza Moderna" },
      { time: "22:00-23:00", name: "Danza Contemporanea" },
    ],
  },
  {
    day: "SABATO",
    classes: [
      { time: "11:00-12:00", name: "Latino Americano" },
      { time: "15:30-16:30", name: "Latin Kids" },
      { time: "17:00-18:00", name: "Tessuto Aereo" },
    ],
  },
  {
    day: "DOMENICA",
    classes: [{ time: "10:00-12:30", name: "Preparazione Esami Danza Aerea" }],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Saggi e spettacoli",
  "Stage e approfondimenti artistici",
  "Percorsi di formazione coreutica",
]

export const scheduleContactInfo = {
  address: "Via Emilio Reverberi, 28, 00043 Ciampino RM, Italy",
  phone: "+39 393 514 4234",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilita." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione piu flessibile per chi vuole ballare con regolarita ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuita al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'eta dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]
