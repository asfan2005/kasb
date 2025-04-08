"use client";

import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

// TypeScript interfaces for structured data
interface ImportancePoint {
  title: string;
  description: string;
}

interface WorkFormat {
  format: string;
  percentage: string;
  benefits: string;
  challenges: string;
}

interface ProgrammingLanguage {
  name: string;
  usagePercentage: number;
  description: string;
}

interface Framework {
  name: string;
  type: string;
  popularity: string;
  companies: string;
}

interface LearningResource {
  type: string;
  resources: string[];
}

interface SuccessStory {
  name: string;
  startedAs: string;
  currentPosition: string;
  story: string;
}

interface CareerStage {
  position: string;
  yearsExperience: string;
  responsibilities: string;
  salary: string;
}

interface DemandData {
  percentage: number;
  jobCount: string;
  growthRate: string;
}

interface SalaryRanges {
  junior: string;
  middle: string;
  senior: string;
  teamLead: string;
  director: string;
  architect?: string; // Added optional architect property
}

// Profession interface
interface Profession {
  id: number;
  title: string;
  image: string;
  description: string;
  dailyActivityVideo: string;
  roadmapVideo?: string; // Yangi qo'shilgan
  learningPath?: string[]; // Yangi qo'shilgan
  necessaryTools?: string[]; // Yangi qo'shilgan
  whyNeededAudio?: string; // Made optional with ?
  whatIfNotVideo?: string; // Made optional with ?
  skills: string[];
  dailyActivities: string[];
  importancePoints: (string | ImportancePoint)[];
  consequencesIfNotExisted?: string[];
  ifNotExisted?: string[];
  educationOptions: string[];
  futureProspects: string[];
  demandData?: DemandData;
  salaryRanges?: SalaryRanges;
  programmingLanguages?: ProgrammingLanguage[];
  frameworks?: Framework[];
  certifications?: string[];
  internationalCompanies?: string[];
  localCompanies?: string[];
  requiredSoftSkills?: string[];
  specializations?: string[];
  workFormats?: WorkFormat[];
  learningResources?: LearningResource[];
  successStories?: SuccessStory[];
  workExamples?: string[];
  careerTimeline?: CareerStage[];
}

// Kasblar ma'lumotlari
const professions: Profession[] = [
  {
    id: 1,
    title: "Full Stack dasturchi",
    image: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    description: `Full Stack dasturchi - bu veb-saytning ham old qism (front-end), ham orqa qism (back-end) qismlarini ishlab chiqadigan universal mutaxassis. U mijoz tomonidagi interfeys va foydalanuvchi tajribasidan tortib server, ma'lumotlar bazasi va API-larga qadar bo'lgan barcha qatlamlar bilan ishlash qobiliyatiga ega. 

O'zbekistonda o'rtacha oylik maosh: Junior: $500-800, Middle: $1000-1800, Senior: $2000-3500.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=vgEVfaDmfTk",
    roadmapVideo: "https://www.youtube.com/watch?v=GxmfcnU3feo",
    learningPath: [
      "HTML/CSS asoslari (2-4 hafta)",
      "JavaScript asoslari (4-6 hafta)",
      "Frontend freymorklari (React/Angular/Vue) (8-12 hafta)",
      "Node.js va Express.js asoslari (4-6 hafta)",
      "Ma'lumotlar bazasi (MongoDB, MySQL) (4-6 hafta)",
      "RESTful API yaratish (2-4 hafta)",
      "Authentication va Authorization (2-3 hafta)",
      "Frontend va Backend integratsiyasi (4 hafta)",
      "Deployment va Hosting (2 hafta)",
      "Amaliy loyihalar yaratish (8-12 hafta)"
    ],
    necessaryTools: [
      "Code Editor (VS Code, WebStorm)",
      "Git va GitHub",
      "Postman (API uchun)",
      "MongoDB Compass / MySQL Workbench",
      "Terminal (Bash/PowerShell)",
      "npm yoki yarn (paket menejer)",
      "Chrome DevTools",
      "Docker (konteyner uchun)",
      "CI/CD vositalari (GitHub Actions, Jenkins)",
      "Figma yoki Sketch (UI dizayn uchun)"
    ],
    skills: [
      "JavaScript, TypeScript, HTML/CSS",
      "React, Angular yoki Vue",
      "Node.js, Express.js",
      "Ma'lumotlar bazasi bilan ishlash (MongoDB, MySQL)",
      "API yaratish va ulash",
      "Kod versiyalarni boshqarish (Git)",
      "Serverlar bilan ishlash",
      "Ta'minot va xavfsizlik"
    ],
    dailyActivities: [
      "Yangi funksionallikni yaratish",
      "Kod tekshiruvi (code review)",
      "Xatolarni tuzatish (debugging)",
      "Jamoa bilan muloqot",
      "Texnik hujjatlarni yozish",
      "Tizimni optimallashtirish",
      "Xavfsizlik tekshiruvi",
      "Mijozlar bilan aloqa"
    ],
    importancePoints: [
      "Zamonaviy veb ilovalarning asosiy ishlab chiqaruvchisi",
      "Bir kishi ko'proq ish qila oladi (tejamkorlik)",
      "Muammolarni kengroq nuqtai nazardan ko'ra oladi",
      "Tizimning barcha qismlarini tushunadi va optimallashtirishga qodir",
      "Katta va kichik loyihalarda ham qimmatli mutaxassis"
    ],
    consequencesIfNotExisted: [
      "Ko'p loyihalarning ishlab chiqarish vaqti ortib ketadi",
      "IT jamoalarda muloqot qiyinlashadi",
      "Ishlab chiqarish xarajatlari ortadi",
      "Kichik startaplar uchun rivojlanish qiyinlashadi",
      "Tizimli muammolarni hal qilish murakkablashadi"
    ],
    demandData: {
      percentage: 95,
      jobCount: "O'zbekistonda 1000+ ish o'rni",
      growthRate: "Yillik 35% o'sish"
    },
    salaryRanges: {
      junior: "$600-900",
      middle: "$1200-2000",
      senior: "$2500-4000",
      teamLead: "$4500-6000",
      architect: "$6000-8000",
      director: "$8000+"
    },
    programmingLanguages: [
      {
        name: "JavaScript",
        usagePercentage: 95,
        description: "Veb-dasturlash uchun eng ko'p ishlatiladigan til. Front-end va back-end ishlab chiqishda qo'llaniladi."
      },
      {
        name: "TypeScript",
        usagePercentage: 75,
        description: "JavaScript-ning tipli kengaytmasi, katta loyihalarda xatolarni kamaytiradi va kod sifatini oshiradi."
      },
      {
        name: "Python",
        usagePercentage: 65,
        description: "Back-end, ma'lumotlar tahlili va AI uchun ko'p qirrali til. Django va Flask freymvorklari mashhur."
      },
      {
        name: "PHP",
        usagePercentage: 50,
        description: "Ko'plab veb-saytlar (WordPress, Joomla) asoslangan. O'zbekistonda hali ham keng qo'llaniladi."
      },
      {
        name: "Java",
        usagePercentage: 40,
        description: "Korporativ ilovalar va Android ishlab chiqish uchun ishlatiladi. Spring freymvorki mashhur."
      }
    ],
    frameworks: [
      {
        name: "React.js",
        type: "Front-end",
        popularity: "Eng mashhur",
        companies: "Meta, Instagram, Netflix"
      },
      {
        name: "Vue.js",
        type: "Front-end",
        popularity: "Tez o'smoqda",
        companies: "Alibaba, GitLab, Xiaomi"
      },
      {
        name: "Angular",
        type: "Front-end",
        popularity: "Korporativ loyihalar",
        companies: "Google, Microsoft Office"
      },
      {
        name: "Node.js/Express",
        type: "Back-end",
        popularity: "JavaScript ekotizimida #1",
        companies: "LinkedIn, Uber, PayPal"
      },
      {
        name: "Laravel",
        type: "Back-end",
        popularity: "PHP da #1",
        companies: "BBC, 9GAG, Pfizer"
      },
      {
        name: "Django",
        type: "Back-end",
        popularity: "Python da #1",
        companies: "Instagram, YouTube, Spotify"
      }
    ],
    certifications: [
      "AWS Certified Developer",
      "MongoDB Certified Developer",
      "JavaScript Certification (Meta)",
      "Google Professional Cloud Developer",
      "Oracle Certified Professional, Java SE"
    ],
    educationOptions: [
      "Universitet dasturlash yo'nalishlari (kompyuter injenerligi, dasturiy ta'minot)",
      "Bootcamp kurslar (Najot Ta'lim, PDP Academy, IT Park akademiyasi)",
      "Online platformalar (Udemy, Codecademy, Coursera)",
      "O'z-o'zini o'rgatish va amaliy loyihalar",
      "Mentorlik dasturlari"
    ],
    futureProspects: [
      "Senior Full Stack Developer",
      "Tizim arxitektori",
      "DevOps muhandisi",
      "IT loyiha rahbari",
      "Startap asoschisi",
      "Texnik direktor (CTO)"
    ],
    internationalCompanies: [
      "EPAM Systems",
      "Google",
      "Amazon",
      "Microsoft",
      "IBM",
      "Oracle"
    ],
    localCompanies: [
      "IT Park rezidentlari",
      "MyTaxi (Yandex)",
      "Uzcard",
      "Alif Bank",
      "Davlat xizmatlari agentligi",
      "Texnopos",
      "Udevs"
    ],
    requiredSoftSkills: [
      "Muammolarni hal qilish qobiliyati",
      "Tanqidiy fikrlash",
      "Vaqtni boshqarish",
      "Jamoada ishlash",
      "Kommunikatsiya mahorati",
      "Adaptivlik va o'zgarishlarga tayyor bo'lish",
      "Ta'lim olishni davom ettirish istagi",
      "Mijoz bilan muloqot qilish mahorati"
    ],
    specializations: [
      "Front-end fokusli Full Stack",
      "Back-end fokusli Full Stack",
      "E-commerce platformalar",
      "Ijtimoiy tarmoq loyihalari",
      "FinTech ilovalar",
      "O'yin veb-saytlari"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "40% kompaniyalarda",
        benefits: "Jamoa bilan bevosita muloqot, tez o'rganish",
        challenges: "Vaqt yo'qotish (yo'lda), qat'iy ish vaqti"
      },
      {
        format: "Masofaviy ish",
        percentage: "35% kompaniyalarda",
        benefits: "Moslashuvchan jadval, geografik erkinlik",
        challenges: "Ijtimoiy ajralish, motivatsiya masalalari"
      },
      {
        format: "Gibrid ish",
        percentage: "25% kompaniyalarda",
        benefits: "Muvozanat, har ikki formatning afzalliklari",
        challenges: "Rejalashtirish murakkabligi"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "Najot Ta'lim - Full Stack kurslari",
          "IT Park akademiyasi - web dasturlash",
          "Mohirdev.uz - video kurslar",
          "UzGeeks community",
          "IT Park YouTube kanali",
          "infinity-school.uz"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "The Odin Project - bepul Full Stack dasturi",
          "freeCodeCamp - interaktiv mashqlar",
          "Udemy - JavaScript va MERN/MEAN stack kurslari",
          "YouTube kanallari: Traversy Media, Web Dev Simplified",
          "MDN Web Docs - rasmiy qo'llanma"
        ]
      }
    ],
    successStories: [
      {
        name: "Sherzod Ruzmetov",
        startedAs: "Bir yillik computer science talabasi",
        currentPosition: "Amazon kompaniyasida Full Stack Developer",
        story: "Universitet o'qishi paytida o'z loyihasini boshlagan va IT Park startup dasturi orqali investitsiya jalb qilgan."
      },
      {
        name: "Dildora Alimova",
        startedAs: "Marketing mutaxassisi",
        currentPosition: "EPAM da Senior Full Stack Developer",
        story: "Bootcamp kursini tugatib, 2 yil ichida senior darajasiga ko'tarilgan. Ayollar uchun IT yo'nalishida mentor sifatida ham faoliyat olib boradi."
      },
      {
        name: "Bobur Akmalov",
        startedAs: "O'qituvchi",
        currentPosition: "Udevs kompaniyasi asoschisi",
        story: "O'z-o'zini o'rgatib, mahalliy startapni boshlagan va hozir 50+ xodimli IT kompaniya rahbari."
      }
    ],
    workExamples: [
      "E-commerce platformasi",
      "Aqlli uy boshqaruv paneli",
      "Ta'lim platformasi",
      "Transport ilovasi",
      "CRM/ERP tizimlar",
      "Ijtimoiy tarmoq loyihasi"
    ],
    careerTimeline: [
      {
        position: "Junior Full Stack Developer",
        yearsExperience: "0-1",
        responsibilities: "Oddiy funksiyalar ishlab chiqish, xatoliklarni tuzatish, jamoaga ko'maklashish.",
        salary: "$600-900 oylik"
      },
      {
        position: "Middle Full Stack Developer",
        yearsExperience: "1-3",
        responsibilities: "Murakkab funksiyalarni mustaqil ishlab chiqish, kamroq nazorat talab qilish.",
        salary: "$1200-2000 oylik"
      },
      {
        position: "Senior Full Stack Developer",
        yearsExperience: "3-5",
        responsibilities: "Arxitektura qarorlarini qabul qilish, juniorlarni yo'naltirish, muhim texnik qarorlar.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "Team Lead / Tech Lead",
        yearsExperience: "5+",
        responsibilities: "Jamoa boshqaruvi, loyiha rejalashtirish, texnik yo'nalishni belgilash.",
        salary: "$4500-6000 oylik"
      },
      {
        position: "Architect / CTO",
        yearsExperience: "8+",
        responsibilities: "Strategik texnik qarorlar, katta tizimlar arxitekturasi, kompaniya texnik yo'nalishi.",
        salary: "$6000-8000 oylik"
      }
    ]
  },
  {
    id: 2,
    title: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Mobile Developer mobil qurilmalar (smartfonlar, planshetlar) uchun ilovalarni ishlab chiquvchi dasturchi. Bu mutaxassis Android (Java, Kotlin) yoki iOS (Swift, Objective-C) platformalari uchun, yoki Flutter yoki React Native kabi cross-platform freymvorklardan foydalanib dasturlarni yaratadi va rivojlantiradi.\n\nO'zbekistonda o'rtacha oylik maosh: Junior: $500-700, Middle: $800-1500, Senior: $1800-3000+.",
    dailyActivityVideo: "https://www.youtube.com/watch?v=NMb4RDpbRXs",
    roadmapVideo: "https://www.youtube.com/watch?v=yye7rSsiV6k",
    learningPath: [
      "Dasturlash asoslarini o'rganish (Java, Swift yoki Dart)",
      "Tanlangan platforma uchun SDK bilan tanishish",
      "UI/UX asoslarini o'rganish",
      "Dastur komponentlari bilan ishlashni o'rganish",
      "Ma'lumotlar bazasi integratsiyasini o'rganish",
      "Kichik loyiha yaratish va tajriba orttirish",
      "API integratsiyasi va tarmoq so'rovlari bilan ishlash",
      "Ko'proq murakkab xususiyatlarni qo'shish",
      "App Store/Google Play ga chiqarish jarayonini o'rganish"
    ],
    necessaryTools: [
      "Android Studio/Xcode IDE",
      "Flutter/React Native (cross-platform)",
      "Git version control",
      "Firebase/AWS/Backend service",
      "Figma/Sketch (dizayn uchun)",
      "Emulatorlar va simulyatorlar",
      "Postman (API test)",
      "Firebase Test Lab/TestFlight",
      "Jira/Trello (task management)"
    ],
    skills: [
      "Kotlin/Java (Android), Swift/Objective-C (iOS)",
      "Flutter, React Native, Xamarin (crossplatform)",
      "UX/UI dizayn prinsiplari va Material Design",
      "REST API bilan ishlash, offline rejim",
      "Mobile database (SQLite, Realm, CoreData)",
      "Xotira optimizatsiyasi va battery usage",
      "Firebase va boshqa backend xizmatlar",
      "App Store va Google Play publication"
    ],
    dailyActivities: [
      "Mobil ilovalarni loyihalash va dasturlash",
      "UI komponentlarini yaratish va moslash",
      "API integratsiyalari va ma'lumotlarni sinxronizatsiya qilish",
      "Performance va battareya sarfini optimallashtirish",
      "Xatoliklarni tuzatish va nosozliklarni bartaraf etish",
      "Kod tekshiruvi (code review) va refactoring",
      "Turli qurilmalarda testlash va debug qilish",
      "Yangi versiyalarni chiqarish va qo'llab-quvvatlash"
    ],
    importancePoints: [
      "Mobil qurilmalar orqali xizmatlarga tezkor kirish",
      "Biznesning mobil bozorda mavjudligi va raqobatbardoshligi",
      "Foydalanuvchilar bilan doimiy aloqa (push notifications)",
      "Qurilma imkoniyatlaridan to'liq foydalanish (kamera, GPS, sensorlar)",
      "Offline rejimda ishlash imkoniyati"
    ],
    consequencesIfNotExisted: [
      "Smartfonlardan foydalanish cheklangan bo'lardi",
      "Mobile banking, navigatsiya va boshqa muhim xizmatlar mavjud bo'lmasdi",
      "Telefon faqat qo'ng'iroq va xabarlar uchun ishlatilardi",
      "Mobil qurilmalar to'liq salohiyatidan foydalana olmasdik",
      "Kundalik hayotimizda ko'p vazifalarni tezkor bajara olmasdik",
      "Bizneslar mijozlar bilan bevosita aloqani yo'qotgan bo'lardi"
    ],
    demandData: {
      percentage: 90,
      jobCount: "O'zbekistonda 800+ ish o'rni",
      growthRate: "Yillik 30% o'sish"
    },
    salaryRanges: {
      junior: "$550-850",
      middle: "$1000-1800",
      senior: "$2000-3500",
      teamLead: "$3800-5500",
      architect: "$5500-7500",
      director: "$7500+"
    },
    programmingLanguages: [
      {
        name: "Kotlin",
        usagePercentage: 85,
        description: "Android uchun zamonaviy va rasmiy dasturlash tili. Javaʼga nisbatan xavfsizroq va qisqaroq kod yozish imkonini beradi."
      },
      {
        name: "Swift",
        usagePercentage: 80,
        description: "iOS ilovalar uchun Apple tomonidan yaratilgan zamonaviy til. Objective-C o'rnini deyarli to'liq egallagan."
      },
      {
        name: "Dart",
        usagePercentage: 70,
        description: "Flutter kross-platform freymvorki uchun ishlatiladi. Bir kod yozib, barcha platformalarga ilova chiqarish imkonini beradi."
      },
      {
        name: "JavaScript",
        usagePercentage: 65,
        description: "React Native kross-platform freymvorki uchun asosiy til. Veb dasturchilar uchun mobil dasturlashga o'tish oson."
      },
      {
        name: "Java",
        usagePercentage: 50,
        description: "Android uchun an'anaviy til. Hozirgi kunda Kotlin uni o'rnini olayotgan bo'lsa ham, ko'p loyihalarda hali ishlatiladi."
      }
    ],
    frameworks: [
      {
        name: "Flutter",
        type: "Kross-platform",
        popularity: "Tez o'smoqda",
        companies: "Google, Alibaba, BMW"
      },
      {
        name: "React Native",
        type: "Kross-platform",
        popularity: "Keng tarqalgan",
        companies: "Facebook, Instagram, Shopify"
      },
      {
        name: "Android SDK/Jetpack",
        type: "Android",
        popularity: "Rasmiy SDK",
        companies: "Google, Samsung, Yandex"
      },
      {
        name: "UIKit/SwiftUI",
        type: "iOS",
        popularity: "Rasmiy framework",
        companies: "Apple, Twitter, Uber"
      },
      {
        name: "Xamarin",
        type: "Kross-platform",
        popularity: "Microsoft ekotizimi",
        companies: "Microsoft, UPS, Alaska Airlines"
      }
    ],
    certifications: [
      "Google Associate Android Developer",
      "Apple Certified iOS Developer",
      "Flutter Certified Developer",
      "React Native Professional",
      "AWS Mobile Developer"
    ],
    educationOptions: [
      "Mobile Development bo'yicha universitet kurslari (kompyuter injenerligi yo'nalishi)",
      "Bootcamp kurslar (Najot Ta'lim, PDP Academy, IT Park akademiyasi)",
      "Online platformalar (Udemy, Coursera, Udacity)",
      "Amaliy loyihalar va portfolio yaratish",
      "Open source loyihalarda ishtirok etish"
    ],
    futureProspects: [
      "Senior Mobile Developer",
      "Mobile Team Lead",
      "Mobile Architecture Expert",
      "Cross-platform framework mutaxassisi",
      "O'z mobil startup/studiyasini ochish",
      "Mobile SDK/Framework yaratuvchisi"
    ],
    internationalCompanies: [
      "Google",
      "Apple",
      "Facebook",
      "Bolt",
      "Upwork/Fiverr",
      "Yandex"
    ],
    localCompanies: [
      "MyTaxi",
      "Uzcard/Humo",
      "Alif Bank",
      "Humans",
      "OLX O'zbekiston",
      "Payme/Click",
      "Napa Automotive"
    ],
    requiredSoftSkills: [
      "Foydalanuvchi tajribasini (UX) tushunish",
      "Jamoada ishlash qobiliyati",
      "Muntazam o'rganish va yangilanish",
      "Muammolarni samarali hal qilish",
      "Texnik va texnik bo'lmagan hamkorlar bilan muloqot",
      "Vaqt boshqaruvi",
      "Aniq va tushunarli kod yozish"
    ],
    specializations: [
      "Android mutaxassisi",
      "iOS mutaxassisi",
      "Cross-platform mutaxassisi",
      "Mobile game developer",
      "AR/VR mobile applications",
      "IoT va mobile integratsiyasi",
      "Mobile security specialist"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "45% kompaniyalarda",
        benefits: "Jamoa bilan yaqin muloqot, tezroq o'rganish",
        challenges: "Yo'l vaqti, qat'iy ish jadvali"
      },
      {
        format: "Masofaviy ish",
        percentage: "30% kompaniyalarda",
        benefits: "Moslashuvchan jadval, global mijozlar bilan ishlash",
        challenges: "Kommunikatsiya qiyinligi, vaqt mintaqalari farqi"
      },
      {
        format: "Gibrid ish",
        percentage: "25% kompaniyalarda",
        benefits: "Ofis va uydan ishlash afzalliklarini birlashtirish",
        challenges: "Ikki turdagi ish joylarini tashkil qilish zaruriyati"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "Najot Ta'lim - Android va iOS kurslari",
          "IT Park akademiyasi - Mobile development",
          "YouTube: Alisher Khashimov, DevApp",
          "Telegram guruhlari: UzMobile, Flutter Uzbekistan",
          "Mobile Developers Uzbekistan community"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "Udemy - Angela Yu, Maximilian Schwarzmüller kurslari",
          "Google Developer Training Docs",
          "Apple Developer Documentation",
          "Flutter.dev rasmiy sayt va dokumentatsiya",
          "Ray Wenderlich (kodeco.com) mobile tutorials"
        ]
      }
    ],
    successStories: [
      {
        name: "Sardor Akhmedov",
        startedAs: "TUIT talabasi",
        currentPosition: "Google Zurich'da Android Developer",
        story: "Universitet davrida o'z aplikatsiyasini yaratib, Play Store'ga joylashtirgan. Keyin Yandex'da ishlab, so'ngra Google'ga ishga kirgan."
      },
      {
        name: "Kamola Yusupova",
        startedAs: "Fizika fakulteti bitiruvchisi",
        currentPosition: "iOS Tech Lead mahalliy kompaniyada",
        story: "Bootcamp kursidan so'ng kichik loyihalardan boshlab, 3 yil ichida team lead darajasiga ko'tarilgan. 5 dan ortiq muvaffaqiyatli ilovalar relizini boshqargan."
      },
      {
        name: "Rustam Karimov",
        startedAs: "Mustaqil o'rganuvchi dasturchi",
        currentPosition: "Flutter Consultancy biznes egasi",
        story: "Dastlab freelancer sifatida ishlagan, keyin o'z bilimlarini kengaytirgan va hozirda 10 dan ortiq dasturchidan iborat Flutter consultancy kompaniyasini boshqaradi."
      }
    ],
    workExamples: [
      "Banking va to'lov ilovasi",
      "Transport va lokatsiya xizmatlari",
      "E-commerce va savdo ilovasi",
      "Ijtimoiy tarmoq ilovasi",
      "O'quv va ta'lim platformasi",
      "Fitness va salomatlik ilovalari",
      "Oziq-ovqat yetkazib berish xizmati"
    ],
    careerTimeline: [
      {
        position: "Junior Mobile Developer",
        yearsExperience: "0-1",
        responsibilities: "Mavjud kodga oddiy o'zgartirishlar kiritish, UI elementlarini yaratish, sodda funksionallikni qo'shish.",
        salary: "$550-850 oylik"
      },
      {
        position: "Middle Mobile Developer",
        yearsExperience: "1-3",
        responsibilities: "To'liq funktsional modullarni ishlab chiqish, API bilan ishlash, murakkab UI elementlari, kichik jamoa bilan hamkorlik.",
        salary: "$1000-1800 oylik"
      },
      {
        position: "Senior Mobile Developer",
        yearsExperience: "3-5",
        responsibilities: "Murakkab arxitektura qarorlari, loyihani rejalashtirish, junior dasturchilarga ko'maklashish, tizimli muammolarni hal qilish.",
        salary: "$2000-3500 oylik"
      },
      {
        position: "Mobile Team Lead",
        yearsExperience: "5+",
        responsibilities: "Jamoa boshqaruvi, muhim arxitektura qarorlari, loyiha rejalashtirish, biznes talablarini texnik talablarga o'girish.",
        salary: "$3800-5500 oylik"
      },
      {
        position: "Mobile Architect / CTO",
        yearsExperience: "7+",
        responsibilities: "Kompaniya darajasidagi texnik qarorlar, bir nechta mobil loyihalar strategiyasini ishlab chiqish, yuqori darajadagi muammolarni hal qilish.",
        salary: "$5500-7500 oylik"
      }
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    image: "https://www.altexsoft.com/media/2018/08/devops-role-3.png",
    description: "DevOps Engineer dasturiy ta'minotni ishlab chiqish (Development) va IT operatsiyalari (Operations) o'rtasidagi bo'shliqni to'ldiruvchi mutaxassis. Ular avtomatlashtirish, CI/CD (doimiy integratsiya va doimiy yetkazib berish), monitoring va infrastructure-as-code yordamida dasturiy mahsulotlarni samarali va ishonchli ravishda yetkazib berishni ta'minlaydilar.\n\nO'zbekistonda o'rtacha oylik maosh: Junior: $600-900, Middle: $1200-2000, Senior: $2500-4000+.",
    dailyActivityVideo: "https://www.youtube.com/watch?v=Xrgk023l4lI",
    roadmapVideo: "https://www.youtube.com/watch?v=6GQRb4fGvtk",
    learningPath: [
      "Linux/Unix tizimlarini o'rganish",
      "Asosiy dasturlash ko'nikmalarini o'zlashtirish (Python, Bash)",
      "Version control systems (Git)",
      "Containerization (Docker)",
      "Container orchestration (Kubernetes)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipeline tools (Jenkins, GitLab CI)",
      "Cloud platforms (AWS, GCP, Azure)",
      "Monitoring and logging tools (Prometheus, ELK stack)",
      "Security best practices va DevSecOps"
    ],
    necessaryTools: [
      "Linux/Unix operatsion tizimlari",
      "Docker va Kubernetes",
      "Terraform",
      "Ansible/Chef/Puppet",
      "Jenkins/GitLab CI/GitHub Actions",
      "AWS/Azure/GCP cloud services",
      "Prometheus/Grafana",
      "ELK stack (Elasticsearch, Logstash, Kibana)",
      "Git",
      "Scripting languages (Bash, Python)"
    ],
    skills: [
      "Linux/Unix administrirovaniye va server boshqaruvi",
      "Docker, Kubernetes, konteynerizatsiya texnologiyalari",
      "CI/CD Pipeline yaratish (Jenkins, GitLab CI, GitHub Actions)",
      "Bulutli xizmatlar (AWS, Azure, GCP) bilan ishlash",
      "Infrastructure as Code (Terraform, Ansible, Chef)",
      "Monitoring va logging tizimlar (Prometheus, Grafana, ELK)",
      "Shell/Python scripting ko'nikmalari",
      "Network va xavfsizlik asoslari"
    ],
    dailyActivities: [
      "Deployment jarayonlarini avtomatlashtirish va takomillashtirish",
      "Xato va nosozliklarni bartaraf etish va monitoring qilish",
      "Infrastrukturani masshtablashtirish va optimallashtirish",
      "Xavfsizlik va performance optimallashtirish",
      "Serverlar va bulutli servislarni sozlash va monitoring qilish",
      "CI/CD pipeline'larni qo'llab-quvvatlash va yaxshilash",
      "Dasturchilar jamoasi bilan hamkorlik qilish",
      "Tizim hujjatlarini yuritish va yangilash"
    ],
    importancePoints: [
      "Mahsulotni bozorga chiqarish vaqtini qisqartirish (Time to Market)",
      "Tizimlar ishonchliligi va barqarorligini ta'minlash",
      "Resurslardan samarali foydalanish va xarajatlarni optimallashtirish",
      "Masshtablilik va moslashuvchanlikni ta'minlash",
      "Jarayonlarni standartlashtirish va avtomatlashtirish"
    ],
    consequencesIfNotExisted: [
      "Dasturiy mahsulotlarni yangilash murakkab va xavfli bo'lardi",
      "Tizimlar tez-tez ishdan chiqib turardi va tuzatish ko'p vaqt olardi",
      "Katta loyihalarni boshqarish deyarli imkonsiz bo'lardi",
      "IT infratuzilmalarni saqlash xarajatlari juda yuqori bo'lardi",
      "Mahsulotlarni bozorga chiqarish jarayoni sekin va noqulay bo'lardi",
      "Xato va nosozliklarni aniqlash va tuzatish jarayoni murakkablashardi"
    ],
    demandData: {
      percentage: 92,
      jobCount: "O'zbekistonda 500+ ish o'rni",
      growthRate: "Yillik 40% o'sish"
    },
    salaryRanges: {
      junior: "$600-900",
      middle: "$1200-2200",
      senior: "$2500-4000",
      teamLead: "$4000-5500",
      architect: "$5500-7000",
      director: "$7000+"
    },
    programmingLanguages: [
      {
        name: "Python",
        usagePercentage: 90,
        description: "DevOps avtomatlashtirish uchun eng ko'p ishlatilinadigan til. Scriptlash, ma'lumotlar tahlili va monitoring uchun qulay."
      },
      {
        name: "Bash/Shell",
        usagePercentage: 85,
        description: "Linux/Unix muhitida scriptlar yozish va avtomatlashtirish uchun asosiy til. Har bir DevOps mutaxassisi bilishi shart."
      },
      {
        name: "Go",
        usagePercentage: 70,
        description: "Cloud-native va container ilovalar uchun ommabop bo'lib borayotgan til. Kubernetes va Docker Go'da yozilgan."
      },
      {
        name: "JavaScript/Node.js",
        usagePercentage: 55,
        description: "Keng qo'llaniladigan tillar, ayniqsa maxsus veb instrumentlar va API yaratishda foydali."
      },
      {
        name: "Ruby",
        usagePercentage: 40,
        description: "Chef va ba'zi CI/CD toollar yaratilgan til, legacy DevOps tooling da ko'p ishlatiladi."
      }
    ],
    frameworks: [
      {
        name: "Kubernetes",
        type: "Container orchestration",
        popularity: "Hozirgi standart",
        companies: "Google, AWS, Microsoft, 90% Fortune 500"
      },
      {
        name: "Terraform",
        type: "Infrastructure as Code",
        popularity: "Top IaC tool",
        companies: "Hashicorp, AWS, GCP"
      },
      {
        name: "Ansible",
        type: "Configuration management",
        popularity: "Red Hat flagship product",
        companies: "Red Hat, NASA, CERN"
      },
      {
        name: "Jenkins",
        type: "CI/CD",
        popularity: "Eng ko'p ishlatilinadigan",
        companies: "CloudBees, Amazon, Red Hat"
      },
      {
        name: "Docker",
        type: "Containerization",
        popularity: "De-facto standard",
        companies: "Docker Inc., Microsoft, Amazon"
      }
    ],
    certifications: [
      "AWS Certified DevOps Engineer",
      "Certified Kubernetes Administrator (CKA)",
      "Red Hat Certified Engineer (RHCE)",
      "Microsoft Azure DevOps Engineer",
      "Docker Certified Associate",
      "Google Professional Cloud DevOps Engineer"
    ],
    educationOptions: [
      "Kompyuter injenerligi yoki tizim administratsiyasi bo'yicha universitet dasturlari",
      "DevOps va Cloud bootcamp kurslari (ACloudGuru, Linux Academy)",
      "Online platformalar (Coursera, Udemy, Pluralsight, KodeKloud)",
      "Amaliy loyihalar va homemade lab environment",
      "Community-driven workshops va hackathonlar"
    ],
    futureProspects: [
      "Site Reliability Engineer (SRE)",
      "DevOps Team Lead/DevOps Director",
      "Cloud Architect/Solutions Architect",
      "Platform Engineer",
      "DevSecOps Specialist",
      "Cloud Cost Optimization Specialist"
    ],
    internationalCompanies: [
      "Google Cloud",
      "AWS/Amazon",
      "Microsoft",
      "EPAM Systems",
      "IBM",
      "Red Hat",
      "GitLab"
    ],
    localCompanies: [
      "IT Park rezidentlari",
      "Uzcard/Humo texnik bo'limlari",
      "Alif Bank",
      "MyTaxi",
      "O'zbekiston bank sektoridagi texnologiya bo'limlari",
      "UzInfoCom",
      "Davlat xizmatlari agentligi"
    ],
    requiredSoftSkills: [
      "Muammolarni tez hal qilish qobiliyati va kritik fikrlash",
      "Jamoalar bilan samarali ishlash va kommunikatsiya",
      "Bosim ostida va krizis vaziyatlarida ishlash qobiliyati",
      "O'z-o'zini tashkil qilish va vaqtni boshqarish",
      "Yangi texnologiyalarni o'zlashtirish qobiliyati",
      "Tizimli fikrlash va keng qamrovli texnologik bilim",
      "Hujjatlashtirish va bilim uzatish ko'nikmalari"
    ],
    specializations: [
      "Cloud DevOps mutaxassisi",
      "Kubernetes va Container Orchestration",
      "CI/CD va avtomatlashtirish eksperti",
      "Infrastructure as Code mutaxassisi",
      "DevSecOps (Xavfsizlik DevOps)",
      "Site Reliability Engineering",
      "Database DevOps"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "30% kompaniyalarda",
        benefits: "Jamoa bilan to'g'ridan-to'g'ri muloqot, mahalliy infratuzilmaga kirish",
        challenges: "Vaqt cheklovlari, geografik cheklovlar"
      },
      {
        format: "Masofaviy ish",
        percentage: "50% kompaniyalarda",
        benefits: "Global komandalar bilan ishlash, 24/7 qo'llab-quvvatlash imkoniyati",
        challenges: "Vaqt mintaqalari farqi, remote access bilan bog'liq cheklovlar"
      },
      {
        format: "Gibrid ish",
        percentage: "20% kompaniyalarda",
        benefits: "Moslashuvchanlik, kerak paytda jismoniy infratuzilmaga kirish imkoniyati",
        challenges: "Ikki xil ish rejimini muvozanatlash"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "IT Park - DevOps foundation kurslari",
          "Bobir Akilkhanov DevOps blogi",
          "DigitalOcean hujjatlari (o'zbek tiliga tarjima qilingan)",
          "Telegram kanallari: DevOps Uzbekistan, Linux Admins UZ",
          "YouTube: Muhiddin DevOps, IT-Park tutorials"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "The DevOps Handbook (kitob)",
          "A Cloud Guru va Linux Academy video kurslar",
          "KodeKloud - amaliy mashg'ulotlar",
          "GitHub tutorials va dokumentatsiya",
          "Docker va Kubernetes rasmiy dokumentatsiyasi"
        ]
      }
    ],
    successStories: [
      {
        name: "Otabek Raimov",
        startedAs: "System Administrator",
        currentPosition: "AWS Solutions Architect EPAM Systems'da",
        story: "Traditional sysadmin sifatida boshlab, DevOps methodologiyasini o'rgangan va hozirda global mijozlarga xizmat ko'rsatuvchi bulutli arxitekturalar yaratmoqda."
      },
      {
        name: "Zarina Akbarova",
        startedAs: "Backend dasturchi",
        currentPosition: "DevOps Team Lead",
        story: "Dastlab Python developer bo'lgan, keyin CI/CD va avtomatlashtirish bilan qiziqqan va 3 yil ichida DevOps yo'nalishida jamoa rahbariga aylangan."
      },
      {
        name: "Javohir Rashidov",
        startedAs: "Tarmoq administratori",
        currentPosition: "Cloud DevOps Engineer",
        story: "On-premise infratuzilmalar ustida ishlashni boshlagan, so'ngra bulutli texnologiyalarni o'rgangan va endi xalqaro kompaniyaning Kubernetes klasterlarini boshqaradi."
      }
    ],
    workExamples: [
      "CI/CD pipeline yaratish va optimallashtirish",
      "Kubernetes klasterlarini sozlash va boshqarish",
      "Bulutli infratuzilmalarni Terraform orqali qurish",
      "Monitoring va alerting tizimlarini o'rnatish",
      "Database avtomatlashtirish va migratsiya tizimlar",
      "Mikroservislar arxitekturasini qo'llab-quvvatlash",
      "Xavfsizlik skanerlarini CI/CD ga integratsiyalash"
    ],
    careerTimeline: [
      {
        position: "Junior DevOps Engineer",
        yearsExperience: "0-1",
        responsibilities: "CI/CD pipeline'larni qo'llab-quvvatlash, mavjud avtomatlashtirish scriptlarini takomillashtirish, monitoring tizimlarini sozlash.",
        salary: "$600-900 oylik"
      },
      {
        position: "Middle DevOps Engineer",
        yearsExperience: "1-3",
        responsibilities: "Yangi avtomatlashtirish yechimlarini yaratish, cloud infratuzilmalarini loyihalash va qurish, xavfsizlikni ta'minlash.",
        salary: "$1200-2200 oylik"
      },
      {
        position: "Senior DevOps Engineer",
        yearsExperience: "3-5",
        responsibilities: "Murakkab infratuzilma muammolarini hal qilish, arxitekturaviy qarorlar qabul qilish, juniorlarni o'qitish, jamoalar bilan ishlash.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "DevOps Team Lead / Architect",
        yearsExperience: "5+",
        responsibilities: "Infratuzilma strategiyasini ishlab chiqish, bir nechta jamoalarni muvofiqlashirish, yirik masshtabdagi tizimlarni loyihalash.",
        salary: "$4000-5500 oylik"
      },
      {
        position: "DevOps Director / CTO",
        yearsExperience: "8+",
        responsibilities: "Kompaniya darajasidagi texnologik strategiyani boshqarish, innovatsiyalarni joriy etish, budjetni rejalashtirish.",
        salary: "$5500+ oylik"
      }
    ]
  },
  {
    id: 4,
    title: "Data Analyst",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Data Analyst biznes va boshqa sohalardagi ma'lumotlarni to'plash, tozalash, tahlil qilish va ulardan foydali insights (bilimlar) chiqarish bilan shug'ullanuvchi mutaxassis. Ular statistika va vizualizatsiya usullaridan foydalanib, qaror qabul qilish jarayonlarini yaxshilashga yordam beradilar.\n\nO'zbekistonda o'rtacha oylik maosh: Junior: $450-700, Middle: $800-1500, Senior: $1800-2800+.",
    dailyActivityVideo: "https://www.youtube.com/watch?v=uSTtLpstV-o",
    roadmapVideo: "https://www.youtube.com/watch?v=YRJbhFLLPyE",
    learningPath: [
      "Matematika va statistika asoslarini o'rganish",
      "SQL va ma'lumotlar bazalarini o'rganish",
      "Python/R dasturlash tillarini o'zlashtirish",
      "Pandas, NumPy kutubxonalarini o'rganish",
      "Ma'lumotlarni tozalash va preprocessing texnikalarini o'rganish",
      "Vizualizatsiya usullarini o'rganish (Matplotlib, Seaborn, Tableau)",
      "Statistik tahlil usullarini o'rganish",
      "Machine Learning asoslarini tushunish",
      "Business intelligence va reporting tools"
    ],
    necessaryTools: [
      "SQL (MySQL, PostgreSQL)",
      "Python/R",
      "Pandas va NumPy kutubxonalari",
      "Jupyter Notebook/RStudio",
      "BI tools (Tableau, Power BI)",
      "Excel/Google Sheets",
      "Git",
      "Data visualization libraries (Matplotlib, Seaborn)",
      "Statistical tools (SAS, SPSS)",
      "ETL tools"
    ],
    skills: [
      "SQL va ma'lumotlar bazalari bilan ishlash (MySQL, PostgreSQL, MS SQL)",
      "Python, R, SAS kabi statistik tahlil tillari",
      "Vizualizatsiya vositalari (Tableau, Power BI, Looker)",
      "Excel/Google Sheets professional darajada (Pivot, OLAP, VBA)",
      "ETL jarayonlari va ma'lumotlarni tozalash",
      "BI (Business Intelligence) platformalari",
      "Statistik usullar va matematik modellashtirish",
      "Marketing va mijoz ma'lumotlari tahlili"
    ],
    dailyActivities: [
      "Ma'lumotlarni yig'ish, tozalash va strukturalash",
      "SQL so'rovlari va ma'lumotnomalar yaratish",
      "Statistik tahlil va trendlarni aniqlash",
      "Vizual hisobotlar va dashboard'lar yaratish",
      "Biznes qarorlarini qabul qilish uchun tavsiyalar berish",
      "Manfaatdor tomonlar bilan muloqot va natijalarni taqdim etish",
      "Avtomatlashtirilgan hisobotlarni o'rnatish",
      "Yangi ma'lumotlar manbalarini aniqlash va integratsiyalash"
    ],
    importancePoints: [
      "Ma'lumotga asoslangan qarorlar qabul qilish (data-driven decision making)",
      "Biznes jarayonlarni optimallashtirishga yordam berish",
      "Trendlar va mijoz xulq-atvorini oldindan bashorat qilish",
      "Xarajatlarni kamaytirish va daromadlarni oshirish imkoniyatlarini aniqlash",
      "Raqobatchilar va bozor holati haqida chuqur tushunchaga ega bo'lish"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar ko'p qarorlarni intuitsiya asosida qabul qilishga majbur bo'lardi",
      "Mijozlarning ehtiyojlarini tushunish qiyin bo'lardi",
      "Biznes jarayonlarning samaradorligini o'lchash murakkablashardi",
      "Bozordagi o'zgarishlarni bashorat qilish deyarli imkonsiz bo'lardi",
      "Marketing kampaniyalarining ROI (rentabellik) darajasini aniq baholab bo'lmasdi",
      "Ko'p muhim biznes imkoniyatlar yaqqol ko'rinmasdan qolib ketardi"
    ],
    demandData: {
      percentage: 88,
      jobCount: "O'zbekistonda 700+ ish o'rni",
      growthRate: "Yillik 35% o'sish"
    },
    salaryRanges: {
      junior: "$500-800",
      middle: "$900-1500",
      senior: "$1800-3000",
      teamLead: "$3500-5000",
      architect: "$5000-7000",
      director: "$7000+"
    },
    programmingLanguages: [
      {
        name: "SQL",
        usagePercentage: 95,
        description: "Ma'lumotlar bazalariga so'rovlar yuborish uchun asosiy til. PostgreSQL, MySQL, Oracle va boshqa RDBMS bilan ishlashda zarur."
      },
      {
        name: "Python",
        usagePercentage: 85,
        description: "Data science ekotizimining asosiy tili. Pandas, NumPy, SciPy, Matplotlib kutubxonalari bilan keng qo'llaniladi."
      },
      {
        name: "R",
        usagePercentage: 60,
        description: "Statistik tahlil uchun maxsus ishlab chiqilgan til. Chuqur statistik tahlil va grafik vizualizatsiya uchun kuchli."
      },
      {
        name: "Excel/VBA",
        usagePercentage: 65,
        description: "Ko'plab kompaniyalarda asosiy tahlil vositasi, VBA orqali avtomatlashtirish imkoniyati mavjud."
      },
      {
        name: "JavaScript",
        usagePercentage: 40,
        description: "Interaktiv vizualizatsiyalar yaratish uchun (D3.js bilan) va veb-ga ma'lumotlarni integratsiya qilish uchun foydali."
      }
    ],
    frameworks: [
      {
        name: "Pandas",
        type: "Python library",
        popularity: "Eng ko'p ishlatiladigan",
        companies: "Barcha data-driven kompaniyalar"
      },
      {
        name: "Tableau",
        type: "Visualization",
        popularity: "Market leader",
        companies: "Google, Amazon, Coca-Cola"
      },
      {
        name: "Power BI",
        type: "Business Intelligence",
        popularity: "Korporativ muhitda lider",
        companies: "Microsoft ekotizimi, korporativ segment"
      },
      {
        name: "Apache Spark",
        type: "Big Data",
        popularity: "Katta hajmli ma'lumotlar uchun asosiy",
        companies: "Uber, Netflix, Airbnb"
      },
      {
        name: "Scikit-learn",
        type: "Machine Learning",
        popularity: "ML kiritish uchun eng oson",
        companies: "Spotify, JP Morgan, Airbnb"
      }
    ],
    certifications: [
      "Microsoft Certified: Data Analyst Associate",
      "Tableau Desktop Certified Associate",
      "Google Data Analytics Professional Certificate",
      "IBM Data Analyst Professional Certificate",
      "SAS Certified Data Scientist",
      "Oracle Business Intelligence Certificate"
    ],
    educationOptions: [
      "Matematika, statistika, iqtisod bo'yicha universitet ta'limi",
      "Data Analytics bootcamp kurslari (DataCamp, General Assembly)",
      "Online kurslar (Coursera, Udemy, edX, DataCamp)",
      "SQL va Python bo'yicha ixtisoslashgan kurslar",
      "Business Intelligence dasturlari bo'yicha sertifikatsiya"
    ],
    futureProspects: [
      "Senior Data Analyst",
      "Data Science sohasi (Machine Learning Engineer)",
      "Business Intelligence Manager",
      "Analytics Team Lead",
      "Chief Data Officer (CDO)",
      "Product Analytics Specialist"
    ],
    internationalCompanies: [
      "Google",
      "Microsoft",
      "IBM",
      "Ernst & Young (EY)",
      "Deloitte",
      "PwC",
      "McKinsey & Company"
    ],
    localCompanies: [
      "IT-Park kompaniyalari",
      "Soliq qo'mitasi va davlat statistika organlari",
      "MyTaxi va boshqa transport xizmatlari",
      "Online savdo platformalari (Uzum, Olx)",
      "Bank sektori (TBC, Ipak Yo'li, Kapitalbank)",
      "Marketing agentliklari",
      "Telekommunikatsiya kompaniyalari (Beeline, Ucell)"
    ],
    requiredSoftSkills: [
      "Analitik fikrlash va muammolarni hal qilish",
      "Ma'lumotlardan hikoya yaratish va taqdim etish qobiliyati",
      "Biznes jarayonlarni tushunish va strategik fikrlash",
      "Aniqlik va detallarga e'tibor berish",
      "Samarali kommunikatsiya va vizualizatsiya",
      "Tanqidiy fikrlash va ma'lumotlarga asoslangan qarorlar",
      "Jamoa bilan hamkorlik qilish va maqsadlarni tushunish"
    ],
    specializations: [
      "Marketing Analytics",
      "Financial Data Analysis",
      "E-commerce va Retail Analytics",
      "Healthcare Analytics",
      "HR Analytics",
      "Product Analytics",
      "Social Media va Web Analytics"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "50% kompaniyalarda",
        benefits: "Biznes manfaatdor tomonlar bilan yaqin muloqot, jamoa bilan hamkorlik",
        challenges: "Ofisga qatnash vaqti, qat'iy ish soatlari"
      },
      {
        format: "Masofaviy ish",
        percentage: "35% kompaniyalarda",
        benefits: "Vaqt va joyni moslashuvchan rejalashtirish, global mijozlar bilan ishlash",
        challenges: "Jamoadan ajralish, informal ma'lumotlar almashinuvi kamligi"
      },
      {
        format: "Gibrid ish",
        percentage: "15% kompaniyalarda",
        benefits: "Ikki formatning afzalliklari, moslashuvchanlik",
        challenges: "Ish/uy muvozanatini saqlash murakkabligi"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "IT Park akademiyasi - Data Science kurslari",
          "Najot Ta'lim va PDP Academy - SQL va tahlil kurslari",
          "Biznesmen.uz - Biznes tahlil maqolalari",
          "Telegram kanallari: Analytics UZ, Data Science Uzbekistan",
          "YouTube: IT Park video darslar"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "Coursera - Google Data Analytics Professional Certificate",
          "DataCamp - Interactive Data Science Courses",
          "Kaggle - Amaliy mashqlar va musobaqalar",
          "Towards Data Science - Sifatli maqolalar to'plami",
          "YouTube kanallari: Alex The Analyst, Luke Barousse"
        ]
      }
    ],
    successStories: [
      {
        name: "Dilshod Akramov",
        startedAs: "Iqtisodchi",
        currentPosition: "Data Insights Manager at Visa",
        story: "Bank tizimida analitik sifatida ishlay boshlagan, SQL va Python ni mustaqil o'rgangan. Keyinchalik tahlillarni vizualizatsiya qilish orqali rahbariyatga taqdim etish bilan shug'ullangan va 3 yilda xalqaro to'lov tizimiga ishga o'tgan."
      },
      {
        name: "Nodira Ismoilova",
        startedAs: "Marketing mutaxassisi",
        currentPosition: "Head of Analytics at Artel",
        story: "Marketing bo'limida ishlagan paytida Excel va dashboardlar bilan tanishgan. Keyinchalik sotuvlar prognozini yaxshilash uchun statistik modellar yaratgan va kompaniya rahbariyati tomonidan alohida bo'lim boshlig'i etib tayinlangan."
      },
      {
        name: "Jasur Olimov",
        startedAs: "Web dasturchi",
        currentPosition: "Data Scientist at IT-Park Accelerator",
        story: "Dasturchilikdan boshlagan, lekin veb-saytlar analitikasi bilan qiziqqan. Google Analytics va SQL o'rgangan, keyinchalik Python va vizualizatsiya vositalarini qo'shgan. Hozirda IT-Park akseleratoridagi startaplarga ma'lumotlar tahlili bo'yicha maslahatlar beradi."
      }
    ],
    workExamples: [
      "Marketing kampaniyalari samaradorligini tahlil qilish",
      "Mijozlarni segmentatsiya qilish va churn (mijozlar yo'qotilishi) bashorati",
      "Savdo va daromad bashoratlari",
      "A/B testlar natijalari tahlili",
      "Operatsion jarayonlar samaradorligini tahlil qilish",
      "Real-time monitoring dashboardlar yaratish",
      "Bozor trendu va raqobatchilar tahlili"
    ],
    careerTimeline: [
      {
        position: "Junior Data Analyst",
        yearsExperience: "0-1",
        responsibilities: "Mavjud hisobotlarni yangilash, oddiy SQL so'rovlari yozish, ma'lumotlarni tozalash, asosiy visualizatsiyalar yaratish.",
        salary: "$500-800 oylik"
      },
      {
        position: "Data Analyst",
        yearsExperience: "1-3",
        responsibilities: "Murakkab SQL so'rovlari, Python/R skriptlar yozish, dashboard'lar yaratish, biznes muammolarini mustaqil tahlil qilish.",
        salary: "$900-1500 oylik"
      },
      {
        position: "Senior Data Analyst",
        yearsExperience: "3-5",
        responsibilities: "Murakkab biznes muammolarni tahlil qilish, ma'lumotlarga asoslangan strategiya taklif qilish, dashboard arxitekturasini loyihalash, junior analitiklarga mentorlik.",
        salary: "$1800-3000 oylik"
      },
      {
        position: "Lead Data Analyst / Analytics Manager",
        yearsExperience: "5+",
        responsibilities: "Analitika strategiyasini ishlab chiqish, jamoa boshqaruvi, katta loyihalarni rejalashtirish, biznes rahbariyati bilan hamkorlik.",
        salary: "$3500-5000 oylik"
      },
      {
        position: "Head of Analytics / Director",
        yearsExperience: "8+",
        responsibilities: "Kompaniya ma'lumotlar strategiyasini yaratish, bir nechta analitika guruhlarini boshqarish, yuqori darajadagi qarorlar qabul qilish.",
        salary: "$7000+ oylik"
      }
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Specialist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaVA6m-6_Zfaj0VGNj1tukaK1OSIKUtJwJA&s",
    description: "Cybersecurity Specialist tashkilotning ma'lumotlari, tizimlari va tarmoqlarini turli xil kiberhujumlardan himoya qiluvchi mutaxassis. Ular xavfsizlik bo'shliqlarini aniqlash, xavfsizlik choralarini joriy qilish, xavfsizlik siyosatlarini ishlab chiqish va tashkilotni kibertahdidlardan himoya qilish uchun javobgardir.\n\nO'zbekistonda o'rtacha oylik maosh: Junior: $700-1000, Middle: $1200-2000, Senior: $2500-4000+.",
    dailyActivityVideo: "https://www.youtube.com/watch?v=MuSIys2AOzw",
    roadmapVideo: "https://www.youtube.com/watch?v=v7BNtpw53AA",
    learningPath: [
      "Kompyuter tarmoqlari asoslarini o'rganish",
      "Operatsion tizimlar (Windows, Linux) xavfsizlik jihatlari",
      "Kriptografiya asoslarini o'rganish",
      "Zaifliklarni aniqlash va buzish testlari",
      "Xavfsizlik siyosatlarini ishlab chiqish",
      "Incident response jarayonlari",
      "Cloud security principlarini o'rganish",
      "Security operations center (SOC) amaliyoti",
      "Malware tahlili va forensic investigation",
      "Security certifications (CompTIA Security+, CEH)"
    ],
    necessaryTools: [
      "Penetration testing tools (Metasploit, Burp Suite)",
      "SIEM (Security Information and Event Management) tools",
      "Vulnerability scanners (Nessus, OpenVAS)",
      "Firewall va IDS/IPS solutions",
      "Encryption tools",
      "Network monitoring tools",
      "Kali Linux",
      "Wireshark",
      "Sandbox environments",
      "Password management tools"
    ],
    skills: [
      "Tarmoq va tizim xavfsizligi",
      "Xavfsizlikni buzish va tajovuzlarni aniqlash",
      "Kriptografiya va ma'lumotlarni himoyalash",
      "Penetration testing (pentesting)",
      "Xavfsizlik auditi va risk tahlili",
      "Zararli dasturlar tahlili (malware analysis)",
      "Digital forensics",
      "Xavfsizlik siyosati va standartlarini ishlab chiqish",
      "Cloud xavfsizlik",
      "SIEM tizimlari bilan ishlash"
    ],
    dailyActivities: [
      "Tizim va tarmoqni monitoring qilish",
      "Xavfsizlik hodisalariga javob berish",
      "Zaifliklar va buzilishlarni tekshirish va tahlil qilish",
      "Tarmoqlar va tizimlarning xavfsizlik auditini o'tkazish",
      "Xavfsizlik siyosati va protseduralarini ishlab chiqish",
      "Penetration testlarini rejalashtirish va o'tkazish",
      "Zararli dasturlar va hujumlarni tahlil qilish",
      "Xavfsizlik bo'yicha treninglar o'tkazish",
      "Yangi xavf-xatarlar va zaifliklar haqida ma'lumot to'plash"
    ],
    importancePoints: [
      "Tashkilot ma'lumotlari va tizimlarini himoya qilish",
      "Moliyaviy yo'qotishlarning oldini olish",
      "Mijozlar ma'lumotlarini himoya qilish va ishonchni saqlash",
      "Qonuniy talablarga rioya qilishni ta'minlash",
      "Kiberjinoyatchilik va sanoat razvedkasidan himoyalanish"
    ],
    consequencesIfNotExisted: [
      "Kiber hujumlar soni va ularning ta'siri keskin ortardi",
      "Shaxsiy va moliyaviy ma'lumotlar himoyasiz qolardi",
      "Katta kompaniyalar va davlat tizimlari doimiy xavf ostida bo'lardi",
      "Raqamli dunyoda ishonch va xavfsizlik deyarli bo'lmasdi",
      "Har yili millionlab dollarlik yo'qotishlar bo'lardi",
      "Kiberjinoyatchilik global iqtisodiy rivojlanishga to'sqinlik qilardi"
    ],
    demandData: {
      percentage: 95,
      jobCount: "O'zbekistonda 300+ ish o'rni va global 3.5 million ochiq pozitsiya",
      growthRate: "Yillik 35% o'sish"
    },
    salaryRanges: {
      junior: "$700-1000",
      middle: "$1500-2500",
      senior: "$3000-5000",
      teamLead: "$5000-7000",
      director: "$7000+"
    },
    programmingLanguages: [
      {
        name: "Python",
        usagePercentage: 90,
        description: "Xavfsizlik skriptlari, tahlil va avtomatlashtirish uchun eng ko'p ishlatiladigan til. Penetration testing, malware analysis va forensic uchun keng qo'llaniladi."
      },
      {
        name: "Bash/Shell scripting",
        usagePercentage: 85,
        description: "Linux muhitida avtomatlashtirish va xavfsizlik vazifalarini bajarish uchun muhim. Tezkor tahlil va monitoring skriptlarini yaratish uchun zarur."
      },
      {
        name: "SQL",
        usagePercentage: 70,
        description: "Ma'lumotlar bazalari vulnerabilliklarini tekshirish va log fayllarini tahlil qilish uchun zarur. SQL injection hujumlarini tushunish uchun ham muhim."
      },
      {
        name: "PowerShell",
        usagePercentage: 65,
        description: "Windows muhitida audit va xavfsizlikni tekshirish uchun asosiy til. Microsoft tizimlarida avtomatlashtirishni qo'llash imkonini beradi."
      },
      {
        name: "C/C++",
        usagePercentage: 50,
        description: "Low-level xavfsizlik tahlili, exploit yaratish va tushunish, reverse engineering uchun foydali. Murakkab zaifliklarni chuqurroq tushunishga yordam beradi."
      }
    ],
    frameworks: [
      {
        name: "Metasploit",
        type: "Penetration Testing",
        popularity: "Eng mashhur",
        companies: "Barcha katta korporatsiyalar va xavfsizlik firmalari"
      },
      {
        name: "OWASP",
        type: "Security Framework",
        popularity: "Standart sifatida qabul qilingan",
        companies: "Microsoft, Oracle, IBM, Apple"
      },
      {
        name: "Wireshark",
        type: "Network Analysis",
        popularity: "Tarmoq monitoringi uchun standart",
        companies: "Cisco, Juniper Networks, IBM"
      },
      {
        name: "Kali Linux",
        type: "Security OS",
        popularity: "Penetration testing uchun eng mashhur platforma",
        companies: "Cybersecurity firmalari va korporativ security teamlar"
      },
      {
        name: "Splunk",
        type: "Security Information and Event Management (SIEM)",
        popularity: "Enterprise kompaniyalarda keng qo'llaniladi",
        companies: "Deloitte, Accenture, JPMorgan Chase"
      }
    ],
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "GIAC Security Essentials (GSEC)",
      "Offensive Security Certified Professional (OSCP)",
      "Certified Information Security Manager (CISM)",
      "Certified Cloud Security Professional (CCSP)"
    ],
    educationOptions: [
      "Universitet kompyuter xavfsizligi va tarmoq tizimlari yo'nalishlari",
      "Bootcamp kurslari (TryHackMe, HackTheBox, CyberDefenders)",
      "Professional sertifikatlashtirish kurslari (SANS, EC-Council)",
      "Online platformalar (Coursera, Udemy, LinkedIn Learning)",
      "Amaliy lab va Machine (Hack The Box, TryHackMe)"
    ],
    futureProspects: [
      "Senior Security Engineer/Analyst",
      "Security Architect",
      "Ethical Hacker/Penetration Tester",
      "CISO (Chief Information Security Officer)",
      "Security Consultant",
      "Digital Forensics Expert",
      "Security Trainer/Professor",
      "Independent Security Researcher"
    ],
    internationalCompanies: [
      "Google",
      "Microsoft",
      "Cisco",
      "IBM",
      "Kaspersky",
      "FireEye",
      "Crowdstrike",
      "Palo Alto Networks"
    ],
    localCompanies: [
      "UzInfoCom", 
      "IT Park rezidentlari",
      "BePro",
      "UZINFOCOM",
      "Tijorat banklari",
      "Davlat idoralari",
      "Telekommunikatsiya kompaniyalari"
    ],
    requiredSoftSkills: [
      "Analitik fikrlash va muammolarni hal qilish",
      "O'rganishga ishtiyoq va doimiy rivojlanish",
      "Yaxshi kommunikatsiya qobiliyati",
      "Texnik hujjatlarni yozish ko'nikmalari",
      "Etika va maxfiylikka e'tibor",
      "Stressga bardoshlilik",
      "Vaqt boshqaruvi va prioritetlashtirish",
      "Detallarga e'tiborlilik"
    ],
    specializations: [
      "Network Security",
      "Application Security",
      "Cloud Security",
      "Penetration Testing",
      "Incident Response",
      "Vulnerability Management",
      "Security Architecture",
      "Digital Forensics",
      "Malware Analysis",
      "Cryptography"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "50% kompaniyalarda",
        benefits: "Jamoa bilan yaqin hamkorlik, tezkor qarorlar",
        challenges: "Qattiq grafik, uzoq ish soatlari bo'lishi mumkin"
      },
      {
        format: "Masofaviy ish",
        percentage: "35% kompaniyalarda",
        benefits: "Moslashuvchan ish vaqti, global loyihalar imkoniyati",
        challenges: "SOC jamoalari bilan real vaqtda ishlash qiyinroq"
      },
      {
        format: "Gibrid ish",
        percentage: "15% kompaniyalarda",
        benefits: "Muhim paytlarda ofisda, qolgan vaqtda masofadan ishlash",
        challenges: "Ikki xil ish rejimini muvozanatlashtirish"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "Kiberhavfsizlik Akademiyasi",
          "Najot Ta'lim - Kiberhavfsizlik kurslari",
          "IT Park Security Boot Camp",
          "Telegram kanallari: Cybersecurity.uz, UzSecurity",
          "O'zbekiston hakerlari forumi"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "TryHackMe va HackTheBox platformalari",
          "SANS kurslar va materiallar",
          "Coursera & Udemy kiberhavfsizlik kurslari",
          "OWASP materiallari",
          "DEF CON va Black Hat konferentsiyalari"
        ]
      }
    ],
    successStories: [
      {
        name: "Otabek Saidov",
        startedAs: "Tarmoq administratori",
        currentPosition: "Penetration Tester at EPAM Systems",
        story: "Tarmoq administratori sifatida ishlash jarayonida kiberhavfsizlikka qiziqib qolgan. Mustaqil ravishda o'rganib, bug bounty dasturlarida ishtirok etgan. Katta xalqaro kompaniyalarga ishga o'tgan va hozirda yirik korporativ mijozlar tizimlarini tekshiradi."
      },
      {
        name: "Lola Karimova",
        startedAs: "Dasturchi",
        currentPosition: "Security Architect at Local Bank",
        story: "Dasturchilikdan boshlab, application security ga ixtisoslashgan. Milliy bankda xavfsizlik arxitektori lavozimiga ko'tarilgan va bank tizimlarini hujumlardan himoya qilish uchun kompleks xavfsizlik arxitekturasini ishlab chiqqan."
      },
      {
        name: "Farhod Raxmatov",
        startedAs: "IT talabasi",
        currentPosition: "Founder of Cybersecurity Startup",
        story: "Universitetda o'qish paytida kiberhavfsizlikka oid CTF musobaqalarida qatnashgan. O'zining kompaniyasini ochib, mahalliy bizneslar uchun xavfsizlik xizmatlarini taklif qilmoqda va 15+ kishidan iborat jamoa bilan ishlaydi."
      }
    ],
    workExamples: [
      "Penetration testing (tashkilot tizimlarini zaifliklarni topish uchun tekshirish)",
      "Xavfsizlik hodisalariga javob berish va tahlil qilish",
      "Zararli dasturiy ta'minotni aniqlash va yo'q qilish",
      "Xavfsizlik monitoringi va real vaqtda tahlil",
      "Xavfsizlik bo'yicha treninglar va mashg'ulotlar o'tkazish",
      "Xavfsizlik strategiyalari va siyosatlarini ishlab chiqish",
      "Bulut xavfsizligi auditini o'tkazish",
      "Xavfsizlik skanerlari va monitoring vositalarini o'rnatish va sozlash"
    ],
    careerTimeline: [
      {
        position: "Junior Security Analyst",
        yearsExperience: "0-2",
        responsibilities: "Xavfsizlik hodisalariga javob berish, monitoring, qoidalarning joriy etilishini tekshirish, tajribali mutaxassislar nazorati ostida ishlash.",
        salary: "$700-1000 oylik"
      },
      {
        position: "Security Engineer/Analyst",
        yearsExperience: "2-4",
        responsibilities: "Murakkab security hodisalarini tahlil qilish, xavfsizlik nazoratlarini amalga oshirish, penetration testing o'tkazish, xavfsizlik jarayonlarini takomillashtirish.",
        salary: "$1500-2500 oylik"
      },
      {
        position: "Senior Security Engineer/Analyst",
        yearsExperience: "4-6",
        responsibilities: "Murakkab xavfsizlik masalalarini hal qilish, xavfsizlik arxitekturasini loyihalash, jamoani yo'naltirish, strategik qarorlar qabul qilish.",
        salary: "$3000-5000 oylik"
      },
      {
        position: "Security Architect/Team Lead",
        yearsExperience: "6-8",
        responsibilities: "Xavfsizlik arxitekturasini ishlab chiqish, jamoani boshqarish, xavfsizlik strategiyalarini ishlab chiqish, yuqori rahbariyatga maslahat berish.",
        salary: "$5000-7000 oylik"
      },
      {
        position: "CISO (Chief Information Security Officer)",
        yearsExperience: "8+",
        responsibilities: "Tashkilotning umumiy xavfsizlik strategiyasini boshqarish, byudjetni rejalashtirish, xavfsizlik bo'limini boshqarish, C-level rahbariyat bilan hamkorlik.",
        salary: "$7000+ oylik"
      }
    ]
  },
  {
    id: 6,
    title: "IT Project Manager",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "IT Project Manager texnologik loyihalarni samarali rejalashtirish, amalga oshirish va yakunlash uchun mas'ul bo'lgan mutaxassis. Ular loyiha doirasini belgilash, vaqt va byudjetni boshqarish, resurslarni taqsimlash, risk-menejmenti va stakeholderlar bilan samarali muloqot qilishni ta'minlaydilar.\n\nO'zbekistonda o'rtacha oylik maosh: Junior: $600-900, Middle: $1000-2000, Senior: $2500-4000+.",
    dailyActivityVideo: "https://www.youtube.com/watch?v=AzQ3Xso7sLA",
    roadmapVideo: "https://www.youtube.com/watch?v=zzJVlxXsl_A",
    learningPath: [
      "Loyiha boshqaruvi asoslarini o'rganish",
      "IT sohasidagi SDLC (Software Development Life Cycle) ni tushunish",
      "Agile/Scrum metodologiyalarini o'rganish",
      "Waterfall metodologiyasini bilish",
      "Loyiha rejalashtirish va scheduling",
      "Risk management va issue tracking",
      "Budgeting va resource allocation",
      "Stakeholder management va kommunikatsiya",
      "Change management practices",
      "Loyiha boshqaruvi toollarini o'rganish",
      "Sertifikatsiyalarni olish (PMP, PRINCE2, Scrum)"
    ],
    necessaryTools: [
      "Project management tools (Jira, Microsoft Project)",
      "Collaboration tools (Slack, Microsoft Teams)",
      "Time tracking software",
      "Document management systems",
      "Risk management tools",
      "Gantt chart software",
      "Agile boards (physical or digital)",
      "Reporting va analytics tools",
      "Task management tools (Trello, Asana)",
      "Resource management tools"
    ],
    skills: [
      "Loyiha boshqaruvi metodologiyalari (Agile, Scrum, Waterfall, Kanban)",
      "Loyiha rejalashtirish va scheduling ko'nikmalari",
      "Risk boshqaruvi va muammolarni hal qilish",
      "Byudjet boshqaruvi va resurs rejalashtirish",
      "Samarali kommunikatsiya va taqdimot ko'nikmalari",
      "IT asoslari va texnik bilimlar",
      "Jamoani boshqarish va motivatsiya",
      "Shartnomalar va vendor munosabatlarini boshqarish",
      "Mijozlar bilan muloqot va stakeholder management"
    ],
    dailyActivities: [
      "Jamoa bilan standap va sprint yig'ilishlarini o'tkazish",
      "Loyiha holatini kuzatish va hisobotlar tayyorlash",
      "Loyiha vaqti, byudjeti va resurslarini nazorat qilish",
      "Manfaatdor tomonlar bilan muloqot va yangilanishlar berish",
      "Risk va muammolarni aniqlash va bartaraf etish",
      "Loyiha rejalarini yaratish va yangilash",
      "Jamoa a'zolari bilan individual uchrashuvlar o'tkazish",
      "Loyiha hujjatlarini tayyorlash va saqlash",
      "Texnik qarorlarni qabul qilishda jamoa bilan hamkorlik qilish"
    ],
    importancePoints: [
      "Loyiha maqsadlariga o'z vaqtida va byudjet doirasida erishishni ta'minlash",
      "Jamoaning samarali ishlashi va yaxshi muloqotni ta'minlash",
      "Risklarni oldindan ko'rish va bartaraf etish",
      "Loyiha sifati va talablarga muvofiqligini ta'minlash",
      "Manfaatdor tomonlar va mijozlar bilan munosabatlarni yaxshilash"
    ],
    consequencesIfNotExisted: [
      "Loyihalar muvaffaqiyatsiz bo'lish ehtimoli yuqori bo'lardi",
      "Byudjet va vaqt chegaralari muntazam buzilardi",
      "Jamoa a'zolari o'rtasida vazifalar va vazifalar noaniq bo'lardi",
      "Mijozlar va manfaatdor tomonlar loyiha holati to'g'risida xabardor bo'lmasdi",
      "Risklarni oldindan aniqlash va bartaraf etish qiyin bo'lardi",
      "Texnik va biznes jamoalari o'rtasida muloqot kamroq bo'lardi"
    ],
    demandData: {
      percentage: 80,
      jobCount: "O'zbekistonda 250+ ish o'rni",
      growthRate: "Yillik 25% o'sish"
    },
    salaryRanges: {
      junior: "$600-900",
      middle: "$1200-2000",
      senior: "$2500-4000",
      teamLead: "$4000-5500",
      director: "$5500+"
    },
    programmingLanguages: [
      {
        name: "SQL",
        usagePercentage: 40,
        description: "Asosiy bilim sifatida emas, balki loyiha talablarini muhokama qilish va texnik jamoani tushunish uchun foydali."
      },
      {
        name: "Python/JavaScript",
        usagePercentage: 30,
        description: "Asosiy bilimlar emas, lekin oddiy skriptlar yoki avtomatlashtirish ehtiyojlarini tushunish uchun foydali bo'lishi mumkin."
      },
      {
        name: "HTML/CSS",
        usagePercentage: 25,
        description: "Frontend loyihalarni boshqarishda asosiy tushunchalarni bilish jarayonni yaxshiroq tushunishga yordam beradi."
      }
    ],
    frameworks: [
      {
        name: "Jira",
        type: "Project Management",
        popularity: "Eng mashhur",
        companies: "Atlassian, IBM, Amazon"
      },
      {
        name: "Microsoft Project",
        type: "Project Management",
        popularity: "Enterprise kompaniyalarda keng tarqalgan",
        companies: "Microsoft, HP, Intel"
      },
      {
        name: "Trello",
        type: "Task Management",
        popularity: "Kichik va o'rta loyihalarda mashhur",
        companies: "Google, Adobe, Kickstarter"
      },
      {
        name: "Asana",
        type: "Project Tracking",
        popularity: "O'sib boruvchi",
        companies: "Uber, Airbnb, Pinterest"
      },
      {
        name: "Slack",
        type: "Communication",
        popularity: "IT sohasida standart",
        companies: "IBM, Oracle, Netflix"
      }
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "Certified ScrumMaster (CSM)",
      "PRINCE2 Foundation/Practitioner",
      "Professional Scrum Product Owner (PSPO)",
      "ITIL Foundation Certification",
      "Certified Associate in Project Management (CAPM)",
      "PMI Agile Certified Practitioner (PMI-ACP)"
    ],
    educationOptions: [
      "Universitet biznes boshqaruvi, IT boshqaruvi yo'nalishlari",
      "MBA dasturlari bilan IT yo'nalishiga ixtisoslashish",
      "Project Management Institute (PMI) kurslari",
      "Scrum.org va Scrum Alliance sertifikatlash dasturlari",
      "Onlayn platformalardagi loyiha boshqaruvi kurslari (Coursera, Udemy)"
    ],
    futureProspects: [
      "Senior Project Manager",
      "Program Manager (bir nechta loyihalarni boshqarish)",
      "Portfolio Manager",
      "PMO (Project Management Office) Director",
      "IT Director",
      "CTO (Chief Technology Officer)",
      "IT konsalting sohasida ishlash",
      "O'z loyiha boshqaruvi konsalting kompaniyasini ochish"
    ],
    internationalCompanies: [
      "Google",
      "Microsoft",
      "Amazon",
      "IBM",
      "Accenture",
      "EPAM Systems",
      "Deloitte",
      "McKinsey & Company"
    ],
    localCompanies: [
      "IT Park rezidentlari",
      "EPAM Systems O'zbekiston",
      "Tijorat banklari",
      "Uzcard, Humo",
      "Texnologik startaplar",
      "Davlat idoralari",
      "Telekommunikatsiya kompaniyalari (UzMobile, Beeline, Ucell)"
    ],
    requiredSoftSkills: [
      "Yetakchilik va komandani boshqarish ko'nikmalari",
      "Muzokaralar olib borish va nizolarni hal qilish",
      "Samarali kommunikatsiya va taqdimot ko'nikmalari",
      "Vaqt boshqaruvi va prioritetlashtirish",
      "Adaptivlik va moslashuvchanlik",
      "Analitik fikrlash va muammolarni hal qilish",
      "Diplomatiya va manfaatdor tomonlar bilan munosabatlar",
      "Stress sharoitida ishlash qobiliyati"
    ],
    specializations: [
      "Agile Project Management",
      "Software Development Project Management",
      "IT Infrastructure Project Management",
      "Digital Transformation",
      "ERP Implementation",
      "Mobile App Development Management",
      "Cloud Migration Projects",
      "Cybersecurity Projects"
    ],
    workFormats: [
      {
        format: "Ofisda ishlash",
        percentage: "55% kompaniyalarda",
        benefits: "Jamoalar bilan yuqori sifatli muloqot, ishonch qurish osonroq",
        challenges: "Geografik cheklovlar, ish-hayot muvozanatini saqlash qiyinroq"
      },
      {
        format: "Masofaviy ish",
        percentage: "25% kompaniyalarda",
        benefits: "Moslashuvchan ish vaqti, global loyihalar imkoniyati",
        challenges: "Jamoaning birligini saqlash qiyinroq, video-konferensiyalarga bog'liqlik"
      },
      {
        format: "Gibrid ish",
        percentage: "20% kompaniyalarda",
        benefits: "Ofis va masofaviy ishlashning afzalliklarini birlashtirish",
        challenges: "Ikki xil ish muhitini boshqarish murakkabligi"
      }
    ],
    learningResources: [
      {
        type: "O'zbek tilidagi resurslar",
        resources: [
          "Najot Ta'lim - Loyiha boshqaruvi kurslari",
          "IT Park Masterclass va seminarlar",
          "PMP sertifikatlash tayyorlov kurslari",
          "Mahalliy PM mutaxassislarining tajriba almashinuv uchrashuvlari",
          "IT menejment telegram kanallari va forumlar"
        ]
      },
      {
        type: "Ingliz tilidagi resurslar",
        resources: [
          "Project Management Institute (PMI) rasmiy materiallari",
          "Scrum Guide va Agile manifesto",
          "Coursera - IT Project Management kurslari",
          "LinkedIn Learning - loyiha boshqaruvi bo'yicha kurslar",
          "Harvard Business Review - loyiha boshqaruviga oid maqolalar"
        ]
      }
    ],
    successStories: [
      {
        name: "Alisher Turaev",
        startedAs: "Frontend dasturchi",
        currentPosition: "IT Program Manager at EPAM Systems",
        story: "Oldin dasturchi sifatida ishlagan, keyin texnik ko'nikmalaridan foydalanib, loyiha boshqaruviga o'tgan. Bugungi kunda xalqaro kompaniyada bir nechta yirik loyihalar portfoliosini boshqaradi."
      },
      {
        name: "Dilnoza Mirzayeva",
        startedAs: "Mijozlar bilan ishlash bo'yicha mutaxassis",
        currentPosition: "Senior Project Manager at IT Consulting Firm",
        story: "Mijozlar bilan muloqot qilish ko'nikmalaridan foydalanib, IT loyihalarni boshqarishga o'tgan. Hozirda yirik davlat va xususiy sektor mijozlari uchun murakkab loyihalarni boshqaradi."
      },
      {
        name: "Jahongir Umarov",
        startedAs: "QA Engineer",
        currentPosition: "PMO Director at Local IT Company",
        story: "Mahsulot sifati sohasidan boshlab, loyiha boshqaruviga qiziqib qolgan. Endi 20 kishilik loyiha boshqaruvi ofisini boshqaradi va kompaniyaning barcha loyihalarini nazorat qiladi."
      }
    ],
    workExamples: [
      "Veb va mobil ilovalarni ishlab chiqish loyihalarini boshqarish",
      "Legacy tizimlarni zamonaviy platformalarga ko'chirish",
      "Cloud-ga o'tish loyihalarini rejalashtirish va amalga oshirish",
      "IT infratuzilmasini modernizatsiya qilish loyihalari",
      "CRM va ERP tizimlarini joriy etish",
      "Fintech va to'lov tizimlari loyihalarini boshqarish",
      "IT strategiyasini ishlab chiqish va amalga oshirish",
      "Outsourcing jamoalari va loyihalarini boshqarish"
    ],
    careerTimeline: [
      {
        position: "Junior Project Manager/Project Coordinator",
        yearsExperience: "0-2",
        responsibilities: "Loyiha hujjatlarini yuritish, yig'ilishlarni tashkil etish, loyiha holati haqida hisobot berish, muammolarni kuzatish, kichikroq loyihalarda tajriba orttirish.",
        salary: "$600-900 oylik"
      },
      {
        position: "Project Manager",
        yearsExperience: "2-4",
        responsibilities: "O'rta hajmdagi loyihalarni mustaqil boshqarish, byudjet va vaqt jadvali uchun javobgarlik, risklarni boshqarish, stakeholderlar bilan ishlash.",
        salary: "$1200-2000 oylik"
      },
      {
        position: "Senior Project Manager",
        yearsExperience: "4-6",
        responsibilities: "Yirik loyihalarni boshqarish, murakkab stakeholderlar bilan ishlash, jamoani rivojlantirish, strategik qarorlar qabul qilish.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "Program Manager",
        yearsExperience: "6-8",
        responsibilities: "Bir-biriga bog'liq loyihalar portfoliosini boshqarish, resurslarni taqsimlash, standartlarni belgilash, junior PM larga mentorliq qilish.",
        salary: "$4000-5500 oylik"
      },
      {
        position: "PMO Director/IT Director",
        yearsExperience: "8+",
        responsibilities: "Loyiha boshqaruvi ofisini boshqarish, kompaniya miqyosidagi loyiha metodologiyalari va standartlarini belgilash, strategik IT qarorlarida ishtirok etish.",
        salary: "$5500+ oylik"
      }
    ]
  }
];

export default function ItDasturchi() {
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  const [activeTab, setActiveTab] = useState<string>("education");
  
  const handleSelectProfession = (profession: Profession) => {
    setSelectedProfession(profession);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBack = () => {
    setSelectedProfession(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Create a simple component for the back button
  const BackButton = () => (
    <button
      onClick={handleBack}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="Orqaga qaytish"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>
  );

  // CSS class for hiding scrollbars but keeping functionality
  const noScrollbarClass = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Add no-scrollbar CSS */}
      <style jsx global>{noScrollbarClass}</style>
      
      {/* Header section */}
      <div className="w-full bg-blue-900 bg-opacity-90 py-6 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            IT kasblar va ularning istiqbollari
          </h1>
          <p className="text-lg md:text-xl text-blue-100 text-center mt-2">
            Zamonaviy IT mutaxassislari, ularning ko'nikmalari, vazifalari va karyera imkoniyatlari
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {selectedProfession ? (
          <>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
              {/* Hero section with image and title */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                  src={selectedProfession.image} 
                  alt={selectedProfession.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 break-words">
                    {selectedProfession.title}
                  </h1>
                  <div className="flex flex-wrap items-center mb-4 gap-2">
                    <span className="bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                      ID: {selectedProfession.id}
                    </span>
                    {selectedProfession.demandData && (
                      <span className="bg-green-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Talab: {selectedProfession.demandData.percentage}%
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={handleBack} 
                    className="bg-white/20 backdrop-blur text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-white/30 transition-all flex items-center text-xs sm:text-sm w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Barcha kasblar ro'yxatiga qaytish
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
                {/* Left sidebar with key info */}
                <div className="md:col-span-1">
                  <div className="sticky top-6 space-y-4 sm:space-y-6">
                    {/* Key facts panel */}
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 shadow-sm">
                      <div className="flex justify-between items-center border-b border-blue-200 pb-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                          <span className="mr-2">📊</span> Asosiy ma'lumotlar
                        </h3>
                        <button 
                          onClick={handleBack}
                          className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          Orqaga
                        </button>
                      </div>
                      
                      {selectedProfession.demandData && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-700 text-sm font-medium">Talab darajasi:</span>
                            <span className="text-gray-900 font-bold">{selectedProfession.demandData.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${selectedProfession.demandData.percentage}%` }}></div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{selectedProfession.demandData.jobCount}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{selectedProfession.demandData.growthRate}</p>
                        </div>
                      )}
                      
                      {selectedProfession.salaryRanges && (
                        <div className="space-y-2">
                          <h4 className="text-sm sm:text-md font-medium text-gray-700">Maosh darajalari:</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <span className="text-gray-500 block">Junior</span>
                              <span className="text-blue-600 font-semibold">{selectedProfession.salaryRanges.junior}</span>
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <span className="text-gray-500 block">Middle</span>
                              <span className="text-blue-600 font-semibold">{selectedProfession.salaryRanges.middle}</span>
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <span className="text-gray-500 block">Senior</span>
                              <span className="text-blue-600 font-semibold">{selectedProfession.salaryRanges.senior}</span>
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <span className="text-gray-500 block">Team Lead</span>
                              <span className="text-blue-600 font-semibold">{selectedProfession.salaryRanges.teamLead}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Navigation panel */}
                    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-md font-semibold text-gray-700">
                          <span className="mr-2">🧭</span> Bo'limlar
                        </h3>
                        <button 
                          onClick={handleBack}
                          className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          Orqaga
                        </button>
                      </div>
                      <nav className="space-y-1">
                        <a href="#description" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          👨‍💻 Kasb haqida ma'lumot
                        </a>
                        <a href="#skills" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          🎯 Ko'nikmalar
                        </a>
                        <a href="#activities" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          📅 Kunlik faoliyat
                        </a>
                        <a href="#roadmap" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          🗺️ Roadmap
                        </a>
                        <a href="#importance" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          ⭐ Ahamiyati
                        </a>
                        <a href="#more-info" className="flex items-center px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                          📚 Qo'shimcha ma'lumotlar
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Main content area */}
                <div className="md:col-span-2 space-y-6 sm:space-y-8">
                  {/* Description section */}
                  <section id="description" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <span className="bg-blue-100 text-blue-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">📋</span>
                        Kasb haqida
                      </h2>
                      <button 
                        onClick={handleBack}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Orqaga
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line mb-4">{selectedProfession.description}</p>
                  </section>

                  {/* Skills section */}
                  <section id="skills" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <span className="bg-purple-100 text-purple-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">🔧</span>
                        Ko'nikmalar
                      </h2>
                      <button 
                        onClick={handleBack}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Orqaga
                      </button>
                    </div>
                    
                    {/* Skills list */}
                    <div className="space-y-3">
                      {selectedProfession.skills.map((skill, index) => (
                        <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                          <span className="text-green-500 mr-2 mt-0.5">✅</span>
                          <span className="text-gray-800 text-sm sm:text-base font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Daily Activities section */}
                  <section id="activities" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <span className="bg-green-100 text-green-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">📅</span>
                        Kunlik faoliyat
                      </h2>
                      <button 
                        onClick={handleBack}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Orqaga
                      </button>
                    </div>
                    
                    {/* Video */}
                    <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl">
                      <iframe 
                        className="w-full aspect-video rounded-xl"
                        src={selectedProfession.dailyActivityVideo.replace("watch?v=", "embed/")}
                        title="Daily Activity Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Activities list */}
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProfession.dailyActivities.map((activity, index) => (
                        <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                          <span className="text-green-500 mr-2 mt-0.5">✅</span>
                          <span className="text-gray-800 text-sm sm:text-base font-medium">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Roadmap section */}
                  {selectedProfession.roadmapVideo && (
                    <section id="roadmap" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                          <span className="bg-indigo-100 text-indigo-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">🗺️</span>
                          Roadmap va o'rganish yo'li
                        </h2>
                        <button 
                          onClick={handleBack}
                          className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          Orqaga
                        </button>
                      </div>
                      
                      {/* Roadmap Video */}
                      <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl">
                        <iframe 
                          className="w-full aspect-video rounded-xl"
                          src={selectedProfession.roadmapVideo.replace("watch?v=", "embed/")}
                          title="Roadmap Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* Learning Path */}
                      {selectedProfession.learningPath && (
                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">O'rganish yo'li</h3>
                          <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
                            
                            <div className="space-y-3 sm:space-y-4">
                              {selectedProfession.learningPath.map((step, index) => (
                                <div key={index} className="flex items-start relative">
                                  <div className="absolute left-4 sm:left-6 top-5 sm:top-6 w-5 sm:w-6 h-0.5 bg-indigo-200"></div>
                                  <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm sm:text-lg z-10">
                                    {index + 1}
                                  </div>
                                  <div className="ml-3 sm:ml-4 p-2 sm:p-4 bg-gray-50 rounded-lg flex-grow hover:bg-indigo-50 transition-colors">
                                    <p className="text-gray-800 text-sm sm:text-base font-medium">{step}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Necessary Tools */}
                      {selectedProfession.necessaryTools && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Zarur vositalar</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                            {selectedProfession.necessaryTools.map((tool, index) => (
                              <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                                <span className="text-indigo-500 mr-2">🔧</span>
                                <span className="text-gray-800 text-sm sm:text-base font-medium">{tool}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </section>
                  )}

                  {/* Importance section */}
                  <section id="importance" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <span className="bg-yellow-100 text-yellow-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">⭐</span>
                        Nima uchun kerak?
                      </h2>
                      <button 
                        onClick={handleBack}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Orqaga
                      </button>
                    </div>
                    
                    {/* Audio if available */}
                    {selectedProfession.whyNeededAudio && (
                      <div className="mb-4 sm:mb-6">
                        <audio controls className="w-full">
                          <source src={selectedProfession.whyNeededAudio} type="audio/mpeg" />
                          Audio taqdim etilmagan
                        </audio>
                      </div>
                    )}

                    {/* Importance points */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                      {selectedProfession.importancePoints.map((point, index) => (
                        <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                          <span className="text-green-500 mr-2 mt-0.5">✅</span>
                          <span className="text-gray-800 text-sm sm:text-base font-medium">
                            {typeof point === 'string' 
                              ? point 
                              : (
                                <>
                                  <strong>{(point as ImportancePoint).title}</strong>: {(point as ImportancePoint).description}
                                </>
                              )
                            }
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* What if not existed */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="bg-red-100 text-red-800 p-1 rounded-lg mr-2">🚫</span>
                        Bo'lmasa nima bo'lardi?
                      </h3>
                      
                      {/* Video if available */}
                      {selectedProfession.whatIfNotVideo && (
                        <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl">
                          <iframe 
                            className="w-full aspect-video rounded-xl"
                            src={selectedProfession.whatIfNotVideo.replace("watch?v=", "embed/")}
                            title="What If Not Existed Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}

                      {/* Consequences list */}
                      <div className="space-y-2 sm:space-y-3">
                        {(selectedProfession.consequencesIfNotExisted || selectedProfession.ifNotExisted || []).map((item, index) => (
                          <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                            <span className="text-green-500 mr-2 mt-0.5">✅</span>
                            <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Additional Info Section */}
                  <section id="more-info" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">📚</span>
                        Qo'shimcha ma'lumotlar
                      </h2>
                      <button 
                        onClick={handleBack}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Orqaga
                      </button>
                    </div>
                    
                    {/* Tabs Navigation */}
                    <div className="mb-4 sm:mb-6 border-b border-gray-200">
                      <nav className="-mb-px flex space-x-2 sm:space-x-4 overflow-x-auto pb-2 no-scrollbar" aria-label="Tabs">
                        <button 
                          onClick={() => setActiveTab("education")}
                          className={`whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2 border-b-2 ${
                            activeTab === "education" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-xs sm:text-sm`}
                        >
                          Ta'lim 🎓
                        </button>
                        <button 
                          onClick={() => setActiveTab("career")}
                          className={`whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2 border-b-2 ${
                            activeTab === "career" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-xs sm:text-sm`}
                        >
                          Karyera yo'li 📈
                        </button>
                        <button 
                          onClick={() => setActiveTab("technologies")}
                          className={`whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2 border-b-2 ${
                            activeTab === "technologies" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-xs sm:text-sm`}
                        >
                          Texnologiyalar 💻
                        </button>
                        <button 
                          onClick={() => setActiveTab("companies")}
                          className={`whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2 border-b-2 ${
                            activeTab === "companies" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-xs sm:text-sm`}
                        >
                          Kompaniyalar 🏢
                        </button>
                        <button 
                          onClick={() => setActiveTab("success")}
                          className={`whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2 border-b-2 ${
                            activeTab === "success" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-xs sm:text-sm`}
                        >
                          Muvaffaqiyat ⭐
                        </button>
                      </nav>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "education" && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Ta'lim imkoniyatlari</h3>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {selectedProfession.educationOptions.map((option, index) => (
                            <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                              <span className="text-green-500 mr-2 mt-0.5">✅</span>
                              <span className="text-gray-800 text-sm sm:text-base font-medium">{option}</span>
                            </div>
                          ))}
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Kelajak istiqbollari</h3>
                        <div className="space-y-2 sm:space-y-3">
                          {selectedProfession.futureProspects.map((prospect, index) => (
                            <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                              <span className="text-green-500 mr-2 mt-0.5">✅</span>
                              <span className="text-gray-800 text-sm sm:text-base font-medium">{prospect}</span>
                            </div>
                          ))}
                        </div>

                        {selectedProfession.learningResources && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">O'rganish resurslari</h3>
                            <div className="space-y-4 sm:space-y-6">
                              {selectedProfession.learningResources.map((resource, index) => (
                                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">{resource.type}</h4>
                                  <ul className="space-y-1 sm:space-y-2">
                                    {resource.resources.map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {selectedProfession.certifications && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Sertifikatlar</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                              {selectedProfession.certifications.map((cert, index) => (
                                <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                  <span className="text-blue-500 mr-2">🏆</span>
                                  <span className="text-gray-800 text-sm sm:text-base font-medium">{cert}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {activeTab === "career" && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Karyera yo'li</h3>
                        
                        {selectedProfession.careerTimeline && (
                          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            {selectedProfession.careerTimeline.map((stage, index) => (
                              <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg hover:bg-blue-50 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-0">{stage.position}</h4>
                                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full w-fit">
                                    {stage.yearsExperience} yil
                                  </span>
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base mb-2">{stage.responsibilities}</p>
                                <div className="text-green-600 font-semibold text-sm sm:text-base">{stage.salary}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {selectedProfession.specializations && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Ixtisoslashish yo'nalishlari</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                              {selectedProfession.specializations.map((spec, index) => (
                                <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                                  <span className="text-purple-500 mr-2">🔍</span>
                                  <span className="text-gray-800 text-sm sm:text-base font-medium">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {selectedProfession.workFormats && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Ish formatlari</h3>
                            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                              {selectedProfession.workFormats.map((format, index) => (
                                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                    <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-0">{format.format}</h4>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full w-fit">
                                      {format.percentage}
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                      <h5 className="text-green-600 font-medium text-sm sm:text-base mb-1">Afzalliklari</h5>
                                      <p className="text-gray-700 text-sm sm:text-base">{format.benefits}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-red-600 font-medium text-sm sm:text-base mb-1">Qiyinchiliklari</h5>
                                      <p className="text-gray-700 text-sm sm:text-base">{format.challenges}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {selectedProfession.requiredSoftSkills && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Zarur yumshoq ko'nikmalar</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                              {selectedProfession.requiredSoftSkills.map((skill, index) => (
                                <div key={index} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                                  <span className="text-yellow-500 mr-2">⭐</span>
                                  <span className="text-gray-800 text-sm sm:text-base font-medium">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {activeTab === "technologies" && (
                      <div>
                        {selectedProfession.programmingLanguages && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Dasturlash tillari</h3>
                            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                              {selectedProfession.programmingLanguages.map((lang, index) => (
                                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                    <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-0">{lang.name}</h4>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full w-fit">
                                      {lang.usagePercentage}% foydalaniladi
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div 
                                      className="bg-blue-600 h-2 rounded-full" 
                                      style={{ width: `${lang.usagePercentage}%` }}
                                    ></div>
                                  </div>
                                  <p className="text-gray-700 text-sm sm:text-base">{lang.description}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {selectedProfession.frameworks && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Freymvorklar va texnologiyalar</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                              {selectedProfession.frameworks.map((framework, index) => (
                                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg hover:bg-purple-50 transition-colors">
                                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1">{framework.name}</h4>
                                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                      {framework.type}
                                    </span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                      {framework.popularity}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 text-sm sm:text-base">
                                    <span className="font-medium">Ishlatadigan kompaniyalar:</span> {framework.companies}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {selectedProfession.workExamples && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Ish namunalari</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                              {selectedProfession.workExamples.map((example, index) => (
                                <div key={index} className="flex items-center justify-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                  <span className="text-gray-800 text-sm sm:text-base font-medium text-center">{example}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {activeTab === "companies" && (
                      <div>
                        {selectedProfession.internationalCompanies && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Xalqaro kompaniyalar</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                              {selectedProfession.internationalCompanies.map((company, index) => (
                                <div key={index} className="flex items-center justify-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                  <span className="text-gray-800 text-sm sm:text-base font-medium text-center">🌎 {company}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {selectedProfession.localCompanies && (
                          <>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-3 sm:mb-4">Mahalliy kompaniyalar</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                              {selectedProfession.localCompanies.map((company, index) => (
                                <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                                  <span className="text-gray-800 font-medium text-center">🏢 {company}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {activeTab === "success" && (
                      <div>
                        {selectedProfession.successStories && (
                          <>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Muvaffaqiyat hikoyalari</h3>
                            <div className="space-y-4">
                              {selectedProfession.successStories.map((story, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-yellow-50 transition-colors">
                                  <h4 className="font-bold text-lg text-gray-800 mb-2">{story.name}</h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                      Boshlagan: {story.startedAs}
                                    </span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                      Hozir: {story.currentPosition}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 whitespace-pre-line">{story.story}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </section>
                </div>
              </div>
            </div>
            <BackButton />
          </>
        ) : (
          <>
            {/* Introduction when no profession is selected */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">IT sohasidagi zamonaviy kasblar</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quyida eng istiqbolli IT kasblar haqida batafsil ma'lumot olishingiz mumkin. 
                Har bir kasb bo'yicha ko'nikmalar, kundalik faoliyat, ahamiyati va kelajak 
                istiqbollari haqida bilib oling.
              </p>
            </div>

            {/* Professions grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {professions.map((profession) => (
                <div 
                  key={profession.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => handleSelectProfession(profession)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={profession.image} 
                      alt={profession.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{profession.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        ID: {profession.id}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {profession.description.substring(0, 150)}...
                    </p>
                    
                    {/* Top skills preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Asosiy ko'nikmalar:</h4>
                      <div className="flex flex-wrap gap-2">
                        {profession.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full">
                            {skill.split(' ')[0]}...
                          </span>
                        ))}
                        {profession.skills.length > 3 && (
                          <span className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full">
                            +{profession.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <span>Batafsil ma'lumot</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}