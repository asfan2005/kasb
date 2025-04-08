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
    title: "Marketing mutaxassisi",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Marketing mutaxassisi - kompaniyaning brendi, mahsuloti yoki xizmatlarini targ'ib qilish va sotishga yordam berish uchun mas'ul bo'lgan mutaxassis. Ular bozor tadqiqotlarini o'tkazish, marketing strategiyalarini ishlab chiqish va amalga oshirish, reklama kampaniyalarini boshqarish va mijozlar bilan munosabatlarni rivojlantirish kabi vazifalarni bajaradi.

O'zbekistonda o'rtacha oylik maosh: Junior: $400-600, Middle: $800-1500, Senior: $1800-3000.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=V95gOO7ainU",
    roadmapVideo: "https://www.youtube.com/watch?v=iDucQliRjAo",
    learningPath: [
      "Marketing asoslari va nazariyasi (1-2 oy)",
      "Bozor tadqiqotlari va tahlil usullari (1-2 oy)",
      "Raqamli marketing (SMM, SEO, SEM) (2-3 oy)",
      "Kontent yaratish va kontent-marketing (1-2 oy)",
      "Email marketing va mijozlar bilan aloqa (1 oy)",
      "Reklama kampaniyalari va byudjetni rejalashtirish (1-2 oy)",
      "Analytics va KPI monitoring (1 oy)",
      "Brend strategiyasi va boshqaruvi (1-2 oy)",
      "Marketing loyihalarini boshqarish (1-2 oy)",
      "Amaliy loyihalar va portfolio (2-3 oy)"
    ],
    necessaryTools: [
      "Google Analytics va Google Ads",
      "CRM tizimlari (HubSpot, Salesforce)",
      "SMM vositalari (Buffer, Hootsuite)",
      "SEO vositalari (SEMrush, Ahrefs)",
      "Grafik dizayn vositalari (Canva, Adobe Creative Suite)",
      "Email marketing platformalari (Mailchimp, SendPulse)",
      "Kontent boshqaruv tizimlari (CMS)",
      "Loyiha boshqaruv vositalari (Trello, Asana)",
      "Tadqiqot va tahlil vositalari (SurveyMonkey, Google Forms)",
      "Taqdimot vositalari (PowerPoint, Google Slides)"
    ],
    skills: [
      "Bozor tadqiqotlari va tahlili",
      "Raqamli marketing (SMM, SEO, SEM)",
      "Kontent yaratish va marketing",
      "Brend strategiyasi va boshqaruvi",
      "Reklama kampaniyalarini rejalashtirish va amalga oshirish",
      "Analitika va ma'lumotlar bilan ishlash",
      "Loyihalarni boshqarish",
      "Kommunikatsiya va taqdimot qilish qobiliyati",
      "Budjetni rejalashtirish va ROI hisoblash"
    ],
    dailyActivities: [
      "Marketing kampaniyalari ustida ishlash",
      "Ijtimoiy tarmoqlarda kontent yaratish va joylashtirish",
      "Analitika ma'lumotlarini tahlil qilish",
      "Mijozlar va hamkorlar bilan aloqa",
      "Jamoada g'oyalar ustida ishlash (brainstorming)",
      "Marketing materiallarini yaratish va tekshirish",
      "Bozor tendentsiyalari va raqobatchilarni o'rganish",
      "Hisobotlarni tayyorlash va taqdim etish",
      "Reklama kampaniyalarini optimallashtirish"
    ],
    importancePoints: [
      "Biznesning o'sishi va rivojlanishi uchun zarur",
      "Kompaniya va mijozlar o'rtasidagi bog'lovchi",
      "Brand qiymati va obro'sini oshirish",
      "Yangi mijozlarni jalb qilish va mavjudlarini saqlab qolish",
      "Bozor o'zgarishlariga moslashishga yordam berish"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar o'z mahsulot va xizmatlarini to'g'ri targ'ib qila olmasdi",
      "Mijozlar mahsulotlar haqida kam ma'lumotga ega bo'lardi",
      "Biznes o'sishi sekinlashib, bozordagi ulush kamayib ketardi",
      "Yangi mahsulotlar bozorga chiqishi qiyinlashardi",
      "Kompaniyalar mijozlar ehtiyojlarini yaxshi tushunmasdi"
    ],
    demandData: {
      percentage: 85,
      jobCount: "O'zbekistonda 800+ ish o'rni",
      growthRate: "Yillik 25% o'sish"
    },
    salaryRanges: {
      junior: "$400-600",
      middle: "$800-1500",
      senior: "$1800-3000",
      teamLead: "$3500-5000",
      director: "$5000-8000"
    },
    programmingLanguages: [
      {
        name: "Marketing Research Tools",
        usagePercentage: 45,
        description: "Bozor tadqiqotlari va mijozlar xulq-atvorini o'rganish uchun maxsus dasturlar va vositalar."
      },
      {
        name: "Marketing Analytics Tools",
        usagePercentage: 30,
        description: "Kampaniyalar samaradorligini baholash va mijozlar ma'lumotlarini tahlil qilish vositalari."
      },
      {
        name: "Content Creation Tools",
        usagePercentage: 25,
        description: "Marketing materiallarini tayyorlash va kontentni boshqarish uchun platformalar."
      }
    ],
    frameworks: [
      {
        name: "Marketing Automation",
        type: "Marketing",
        popularity: "Eng mashhur",
        companies: "Deyarli barcha o'rta va katta kompaniyalar"
      },
      {
        name: "CRM Systems",
        type: "Marketing & Sales",
        popularity: "Ko'p ishlatiladigan",
        companies: "Ko'plab B2B va B2C kompaniyalar"
      },
      {
        name: "Email Marketing Platforms",
        type: "Marketing",
        popularity: "Keng tarqalgan",
        companies: "Startaplar, o'rta biznes, yirik kompaniyalar"
      },
      {
        name: "Analytics Platforms",
        type: "Marketing Analytics",
        popularity: "Top marketing analitika vositasi",
        companies: "Digital agentliklar, marketing bo'limlari"
      },
      {
        name: "Social Media Management",
        type: "Marketing",
        popularity: "Asosiy SMM vositasi",
        companies: "Barcha ijtimoiy tarmoq bilan ishlaydigan kompaniyalar"
      }
    ],
    certifications: [
      "Google Analytics Certification",
      "HubSpot Marketing Software Certification",
      "Facebook Blueprint Certification",
      "SEMrush SEO Certification",
      "Content Marketing Institute Certification",
      "American Marketing Association Professional Certified Marketer",
      "Digital Marketing Institute Certification"
    ],
    educationOptions: [
      "Marketing, reklama yoki PR bo'yicha universitet ta'limi",
      "Digital marketing kurslar va bootcamplar",
      "Online kurslar (Coursera, Udemy, SkillShare)",
      "Professional sertifikatlar (Google, Facebook)",
      "Marketing konferentsiyalari va seminarlar",
      "Mentorlik dasturlari va amaliyot"
    ],
    futureProspects: [
      "Senior Marketing Manager",
      "Marketing Director",
      "Brand Manager",
      "Digital Marketing Specialist",
      "Content Marketing Manager",
      "Chief Marketing Officer (CMO)",
      "Marketing Consultant",
      "O'z marketing agentligini ochish"
    ],
    internationalCompanies: [
      "Procter & Gamble",
      "Unilever",
      "Coca-Cola",
      "PepsiCo",
      "Google",
      "Meta (Facebook)",
      "Amazon",
      "Nestlé"
    ],
    localCompanies: [
      "Artel",
      "UzCard",
      "Beeline Uzbekistan",
      "Ucell",
      "Korzinka",
      "National Bank of Uzbekistan",
      "MyTaxi (Yandex)"
    ],
    requiredSoftSkills: [
      "Kreativlik va innovatsion fikrlash",
      "Kommunikatsiya va taqdimot mahorati",
      "Analitik va tanqidiy fikrlash",
      "Muammolarni hal qilish qobiliyati",
      "Jamoada ishlash va hamkorlik",
      "Vaqtni boshqarish va ko'p vazifani bajarish",
      "Adaptatsiya va o'zgarishlarga moslashish",
      "Mijozlarga yo'naltirilgan fikrlash"
    ],
    specializations: [
      "Digital Marketing",
      "Content Marketing",
      "Brand Management",
      "Product Marketing",
      "Market Research",
      "Social Media Marketing",
      "Email Marketing",
      "SEO/SEM",
      "Influencer Marketing"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "60% soha vakillari",
        benefits: "Jamoa bilan yaqin aloqa, tezkor qayta aloqa, korporativ madaniyat",
        challenges: "Vaqt cheklovlari, transport, ofis siyosati"
      },
      {
        format: "Remote (masofadan)",
        percentage: "25% soha vakillari",
        benefits: "Moslashuvchan ish vaqti, geografik erkinlik, yaxshi ish-hayot balansi",
        challenges: "Kommunikatsiya qiyinchiliklari, jamoadan ajralish hissi"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Ofis va masofadan ishlashning eng yaxshi jihatlari, moslashuvchanlik",
        challenges: "Rejalashtirish murakkabligi, ikki turdagi ish muhitiga moslashish"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"This is Marketing\" - Seth Godin",
          "\"Building a StoryBrand\" - Donald Miller",
          "\"Digital Marketing For Dummies\" - Ryan Deiss",
          "\"Marketing 4.0\" - Philip Kotler",
          "\"Contagious: How to Build Word of Mouth in the Digital Age\" - Jonah Berger"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "HubSpot Academy - bepul marketing kurslari",
          "Google Digital Garage - digital marketing asoslari",
          "Coursera - jiddiy sertifikatlangan kurslar",
          "Udemy - amaliy marketing kurslari",
          "LinkedIn Learning - professional taraqqiyot"
        ]
      },
      {
        type: "YouTube kanallar",
        resources: [
          "Neil Patel",
          "HubSpot",
          "Marketing School",
          "Think with Google",
          "Ahrefs"
        ]
      }
    ],
    successStories: [
      {
        name: "Aziza Karimova",
        startedAs: "Marketing Assistant",
        currentPosition: "Marketing Director at Artel",
        story: "Aziza universitetni tugatgandan so'ng kichik kompaniyada marketing yordamchisi sifatida ishlay boshladi. U ijtimoiy tarmoqlarda brendni rivojlantirish bo'yicha innovatsion strategiyani amalga oshirdi, bu kompaniyaning onlayn mavjudligini 200% oshirdi.\n\nBu tajribadan so'ng, u Artelga o'rta darajadagi marketing menejeri sifatida ishga kirdi. U kontent marketing strategiyasi va mahalliy influencerlar bilan hamkorlikni boshladi. 3 yil ichida u marketing bo'limining direktori lavozimiga ko'tarildi, endi u 15 kishilik jamoani boshqaradi va kompaniyaning barcha marketing strategiyalariga rahbarlik qiladi."
      },
      {
        name: "Bobur Alimov",
        startedAs: "SMM Specialist",
        currentPosition: "Digital Marketing Agency Founder",
        story: "Bobur universitetda o'qish davrida freelance SMM mutaxassisi sifatida ish boshlagan. U mahalliy restoranlar va do'konlar uchun ijtimoiy tarmoq sahifalarini yuritgan.\n\nUniversitetni tugatgach, u Beeline Uzbekistonda digital marketing mutaxassisi bo'lib ishlay boshladi. 2 yil davomida u kompaniyaning digital strategiyasini rivojlantirishga yordam berdi va Instagram sahifasi obunachilari sonini 3 barobar oshirdi.\n\nTajriba orttirganidan so'ng, u o'zining digital marketing agentligini tashkil etdi. Hozirda uning agentligi 20 ta mijozga xizmat ko'rsatadi va 10 ta xodimni ishga olgan."
      }
    ],
    workExamples: [
      "Brand identity yaratish",
      "Raqamli marketing kampaniyalari",
      "Email marketing strategiyasi",
      "SEO optimizatsiyasi",
      "Content marketing rejasi",
      "Ijtimoiy tarmoq strategiyasi",
      "Reklama ROI tahlili",
      "Landing page optimizatsiyasi",
      "Influencer marketing kampaniyasi"
    ],
    careerTimeline: [
      {
        position: "Marketing Assistant/Junior Specialist",
        yearsExperience: "0-1",
        responsibilities: "Ijtimoiy tarmoqlarni boshqarish, marketing materiallarini tayyorlash, tadqiqotlarda yordam berish, analitika ma'lumotlarini yig'ish.",
        salary: "$400-600 oylik"
      },
      {
        position: "Marketing Specialist",
        yearsExperience: "1-3",
        responsibilities: "Marketing kampaniyalarni rejalashtirish va amalga oshirish, kontent yaratish, SEO va SEM taktikalarini qo'llash, analitika va hisobot.",
        salary: "$800-1200 oylik"
      },
      {
        position: "Senior Marketing Specialist",
        yearsExperience: "3-5",
        responsibilities: "Marketing strategiyalarini ishlab chiqish, budjetni boshqarish, jamoaga yo'l-yo'riq ko'rsatish, natijalarni tahlil qilish, kampaniyalarni optimallashtirish.",
        salary: "$1500-2500 oylik"
      },
      {
        position: "Marketing Manager",
        yearsExperience: "5-7",
        responsibilities: "Marketing bo'limiga rahbarlik qilish, strategik rejalashtirish, budjet va KPI ma'sul, hamkorlar bilan munosabatlar, rahbariyatga hisobot.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "Marketing Director/CMO",
        yearsExperience: "8+",
        responsibilities: "Kompaniya marketing strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$4500-8000+ oylik"
      }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Digital Marketing mutaxassisi - kompaniyaning onlayn mavjudligini va raqamli platformalardagi marketing strategiyalarini boshqaruvchi mutaxassis. Bu yangi avlod marketologlar SEO, SEM, SMM, kontent marketing va web analitika kabi zamonaviy texnikalarni qo'llab, brendlarni internet orqali ilgari surishadi.

O'zbekistonda o'rtacha oylik maosh: Junior: $500-800, Middle: $1000-1800, Senior: $2000-3500.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=KnfJUpwF1Gk",
    roadmapVideo: "https://www.youtube.com/watch?v=KnfJUpwF1Gk",
    learningPath: [
      "Digital marketing asoslari va ekotizimi (1 oy)",
      "SEO texnikalari va strategiyalari (2 oy)",
      "Google Ads va PPC marketing (1.5 oy)",
      "Social media marketing va community management (2 oy)",
      "Kontent marketing va kontent yaratish (1.5 oy)",
      "Email marketing va avtomatizatsiya (1 oy)",
      "Web analitika va ma'lumotlar tahlili (1.5 oy)",
      "Mobile marketing strategiyalari (1 oy)",
      "Conversion rate optimization (CRO) (1 oy)",
      "Digital marketing kampaniyalarini optimallashtirish (2 oy)"
    ],
    necessaryTools: [
      "Google Analytics va Google Search Console",
      "SEMrush, Ahrefs, Moz (SEO tools)",
      "Google Ads, Facebook Ads Manager",
      "Hootsuite, Buffer (SMM vositalari)",
      "Mailchimp, ActiveCampaign (email marketing)",
      "WordPress, Shopify (CMS platforms)",
      "Canva, Adobe Spark (vizual kontent yaratish)",
      "Google Tag Manager",
      "Hotjar, Crazy Egg (user behavior tools)",
      "Slack, Asana (jamoa aloqasi va loyiha boshqaruvi)"
    ],
    skills: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) kampaniyalari",
      "Social Media Marketing (SMM)",
      "Kontent strategiyasi va yaratish",
      "Email marketing kampaniyalari",
      "Web analitika va ma'lumotlar tahlili",
      "Conversion Rate Optimization (CRO)",
      "A/B testing va user experience",
      "Mobile marketing",
      "Digital reklama formatlari va platformalari"
    ],
    dailyActivities: [
      "SEO va SEM kampaniyalarini monitoring qilish",
      "Ijtimoiy tarmoq sahifalarini boshqarish",
      "Kontent rejasini ishlab chiqish va nazorat qilish",
      "Analytics platformalarida ma'lumotlarni tahlil qilish",
      "Digital kampaniyalarni optimallashtirish",
      "Veb-sayt trafik ma'lumotlarini tahlil qilish",
      "Raqamli reklama byudjetlarini boshqarish",
      "Mijozlar va hamkorlar bilan onlayn aloqa qilish",
      "Raqobatchilarning digital strategiyalarini o'rganish",
      "Yangi raqamli platformalar va vositalarni o'rganish"
    ],
    importancePoints: [
      "Zamonaviy brendlar uchun onlayn mavjudlik hayotiy muhim",
      "Kompaniyaning raqamli transformatsiyasida asosiy rol o'ynaydi",
      "Cost-effective va o'lchanadigan marketing natijalarini ta'minlaydi",
      "Aniq targetlangan auditoriyaga yetib borish imkoniyati",
      "Ma'lumotlarga asoslangan qarorlar qabul qilishga yordam beradi"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar internet davridagi raqobatda ortda qolardi",
      "Onlayn bozordan foydalanish imkoniyati cheklanardi",
      "Mijozlar bilan zamonaviy aloqa kanallari yo'qolardi",
      "Brend va mahsulotlar haqida ma'lumot tarqatish qiyinlashardi",
      "Marketing kampaniyalarining samaradorligini aniq o'lchab bo'lmasdi"
    ],
    demandData: {
      percentage: 92,
      jobCount: "O'zbekistonda 1000+ ish o'rni",
      growthRate: "Yillik 40% o'sish"
    },
    salaryRanges: {
      junior: "$500-800",
      middle: "$1000-1800",
      senior: "$2000-3500",
      teamLead: "$3500-5000",
      director: "$5000-8000"
    },
    programmingLanguages: [
      {
        name: "Digital Marketing Tools",
        usagePercentage: 80,
        description: "Raqamli marketing strategiyalarini amalga oshirish uchun zarur bo'lgan asosiy vositalar."
      },
      {
        name: "Interactive Marketing Platforms",
        usagePercentage: 60,
        description: "Mijozlar bilan interaktiv aloqa o'rnatish va marketing kampaniyalarini boshqarish uchun platformalar."
      },
      {
        name: "Marketing Analytics Systems",
        usagePercentage: 40,
        description: "Marketing ma'lumotlarini tahlil qilish, avtomatlashtirish va natijalarini vizualizatsiya qilish uchun tizimlar."
      }
    ],
    frameworks: [
      {
        name: "Digital Analytics",
        type: "Marketing Analytics",
        popularity: "Asosiy analitika vositasi",
        companies: "Deyarli barcha online biznes"
      },
      {
        name: "Social Media Management",
        type: "Digital Marketing",
        popularity: "Eng mashhur tarmoq",
        companies: "Barcha o'lchamdagi kompaniyalar"
      },
      {
        name: "SEO Management",
        type: "Digital Marketing",
        popularity: "SEO monitoring uchun asosiy",
        companies: "Veb-saytga ega barcha bizneslar"
      },
      {
        name: "Digital Advertising",
        type: "Digital Marketing",
        popularity: "Eng keng qamrovli",
        companies: "Har qanday online biznes"
      },
      {
        name: "Marketing Automation",
        type: "Digital Marketing",
        popularity: "Bozor yetakchisi",
        companies: "B2B kompaniyalar va digital agentliklar"
      }
    ],
    certifications: [
      "Google Digital Marketing Certification",
      "Facebook Blueprint Certification",
      "Google Analytics Individual Qualification",
      "HubSpot Content Marketing Certification",
      "SEMrush SEO Certification",
      "Microsoft Advertising Certified Professional",
      "YouTube Content Certification"
    ],
    educationOptions: [
      "Digital Marketing bo'yicha magistratura/sertifikat dasturlari",
      "Google Digital Garage kurslari",
      "Online akademiyalar (Coursera, Udemy, Skillshare)",
      "Digital marketing bootcamplar",
      "Mashxur agentliklarning o'quv dasturlari",
      "Sohaga oid konferentsiyalar va webinarlar"
    ],
    futureProspects: [
      "SEO/SEM Specialist",
      "Social Media Manager",
      "Content Marketing Strategist",
      "Digital Marketing Director",
      "eCommerce Marketing Manager",
      "Growth Hacker",
      "Conversion Rate Optimization (CRO) Specialist",
      "Digital Marketing Consultant"
    ],
    internationalCompanies: [
      "Google",
      "Facebook (Meta)",
      "Amazon",
      "HubSpot",
      "Shopify",
      "Twitter",
      "Salesforce",
      "Mailchimp"
    ],
    localCompanies: [
      "MyTaxi (Yandex)",
      "Uzcard",
      "Beeline Uzbekistan",
      "Ucell",
      "Digital agentliklar",
      "E-commerce loyihalar",
      "Media kompaniyalar"
    ],
    requiredSoftSkills: [
      "Analitik fikrlash",
      "Kreativlik va innovatsiya",
      "Ma'lumotlarga asoslangan qaror qabul qilish",
      "Moslashuvchanlik va yangi texnologiyalarni o'zlashtirish qobiliyati",
      "Vaqt boshqaruvi va ko'p vazifani bir vaqtda bajarish",
      "Mijozlar va hamkorlar bilan samarali muloqot",
      "Trend va yangi tendensiyalarni kuzatish qobiliyati",
      "O'z-o'zini rivojlantirish va doimiy o'rganish"
    ],
    specializations: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Affiliate Marketing",
      "Influencer Marketing",
      "Mobile Marketing",
      "E-commerce Marketing"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "50% soha vakillari",
        benefits: "Jamoa bilan yaqin hamkorlik, brand'ni yaxshiroq his qilish, resurslardan to'liq foydalanish",
        challenges: "Qat'iy ish vaqti, transport xarajatlari, geografik cheklovlar"
      },
      {
        format: "Remote (masofadan)",
        percentage: "35% soha vakillari",
        benefits: "Global mijozlar bilan ishlash imkoniyati, erkin ish jadvali, ish-hayot muvozanati",
        challenges: "Jamoa bilan aloqa cheklanganligi, texnik muammolar"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Moslashuvchanlik, ishni optimal rejalashtirish, jamoa va mustaqil ishlash balansi",
        challenges: "Ikki xil ish muhitiga moslashish, texnik jihozlarning ikkala joyda ham bo'lishi"
      }
    ],
    learningResources: [
      {
        type: "Online kurslar",
        resources: [
          "Google Digital Garage - bepul digital marketing kurslari",
          "Coursera - Nufuzli universitetlarning digital marketing kurslari",
          "HubSpot Academy - marketing avtomatizatsiyasi va kontent strategiyasi",
          "SEMrush Academy - SEO va kontent marketing bo'yicha chuqur kurslar",
          "Facebook Blueprint - Facebook va Instagram reklamalari bo'yicha kurslar"
        ]
      },
      {
        type: "YouTube kanallar",
        resources: [
          "Neil Patel - SEO va digital marketing maslahatlar",
          "Ahrefs - SEO bo'yicha to'liq qo'llanmalar",
          "Hootsuite - SMM strategiyalari va yangiliklar",
          "HubSpot - inbound marketing usullari",
          "Google - rasmiy Google Analytics va Google Ads bo'yicha qo'llanmalar"
        ]
      },
      {
        type: "Foydali saytlar",
        resources: [
          "Moz Blog - SEO bo'yicha eng yangi ma'lumotlar",
          "Search Engine Journal - qidiruv tizimlari yangiliklari",
          "Content Marketing Institute - kontent marketing strategiyalari",
          "Social Media Examiner - SMM trendlari va usullari",
          "MarketingProfs - marketing resurslari va tadqiqotlari"
        ]
      }
    ],
    successStories: [
      {
        name: "Dilshod Rahimov",
        startedAs: "Junior SMM Manager",
        currentPosition: "Digital Marketing Director at Beeline Uzbekistan",
        story: "Dilshod universitetni tugatgandan so'ng kichik bir agentlikda social media mutaxassisi sifatida ish boshladi. U koronaviruz pandemiyasi davrida bir kompaniyaning Instagram sahifasini boshqarib, qiyin davrda online savdoni 300% ga oshirdi.\n\nBu natijalardan so'ng, u Beeline kompaniyasiga Digital Marketing Specialist sifatida ishga kirdi. U kompaniyaning barcha digital platformalarini optimallashtirdi va raqamli kampaniyalar ROI ni 150% ga oshirdi. 3 yil ichida u Digital Marketing jamoasiga rahbar bo'ldi va endi 12 kishilik digital komandani boshqaradi."
      },
      {
        name: "Madina Karimova",
        startedAs: "Content Writer",
        currentPosition: "Founder of Digital Marketing Agency",
        story: "Madina jurnalistlik fakultetini tugatganidan so'ng mahalliy yangiliklar saytida kontent yaratuvchi bo'lib ishladi. U digital marketing sohasiga qiziqib, Google va Facebook sertifikatlarini oldi.\n\nKeyinchalik u marketfing agentligida kontent strategisti sifatida ishladi. Agentlikda 2 yil ishlagach, u o'zining digital agency'sini ochishga qaror qildi. Hozirda uning \"DigitalWave\" nomli agentligi 25+ mijozlarga xizmat ko'rsatadi va 15 nafar xodimni ishga olgan. Madina mahalliy startaplar uchun digital marketing bo'yicha bepul vorkshoplar o'tkazib, yoshlarni sohaga jalb qilmoqda."
      }
    ],
    workExamples: [
      "E-commerce sayt uchun SEO strategiyasi",
      "Instagram va Facebook reklamalari",
      "Email marketing kampaniyasi",
      "Kompaniya blogi va kontent kalendari",
      "Google Ads kampaniyasi",
      "Conversion optimization (CRO) loyihasi",
      "Social media community management",
      "Analitik dashboard va hisobotlar",
      "Mobile app marketing strategiya",
      "Influencer marketing kampaniyasi"
    ],
    careerTimeline: [
      {
        position: "Digital Marketing Intern/Assistant",
        yearsExperience: "0-1",
        responsibilities: "Asosiy digital platformalarda kontent joylashtirish, analytics ma'lumotlarini yig'ish, social media postlarini tayyorlash, email kampaniyalarda yordam berish.",
        salary: "$300-500 oylik"
      },
      {
        position: "Digital Marketing Specialist",
        yearsExperience: "1-2",
        responsibilities: "SEO, SEM strategiyalarini amalga oshirish, social media sahifalarni boshqarish, kontent rejalarini ishlab chiqish, ma'lumotlarni tahlil qilish.",
        salary: "$600-1000 oylik"
      },
      {
        position: "Senior Digital Marketing Specialist",
        yearsExperience: "2-4",
        responsibilities: "Digital marketing kampaniyalarni rejalashtirish va boshqarish, budjetni nazorat qilish, SEO/SEM/SMM strategiyalarini ishlab chiqish, ROI tahlil.",
        salary: "$1200-2000 oylik"
      },
      {
        position: "Digital Marketing Manager",
        yearsExperience: "4-6",
        responsibilities: "Digital strategiyani ishlab chiqish, komandani boshqarish, kampaniyalarni analiz qilish, ROI optimizatsiyasi, yangi digital kanallarni o'zlashtirish.",
        salary: "$2200-3500 oylik"
      },
      {
        position: "Digital Marketing Director",
        yearsExperience: "6+",
        responsibilities: "Umumiy digital marketing strategiyasini ishlab chiqish va boshqarish, digital transformatsiya, marketing texnologiyalarini innovatsiya qilish.",
        salary: "$4000-7000+ oylik"
      }
    ]
  },
  {
    id: 3,
    title: "Brand Manager",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: `Brand Manager - kompaniyaning brend strategiyasini ishlab chiqish va amalga oshirish uchun mas'ul bo'lgan mutaxassis. Ular brend identifikatsiyasi, pozitsiyalash, brend qadriyatlari va mijozlar tajribasini boshqaradi. Brand menejerlari mahsulot, narx, reklama va distribusiya orqali kuchli brend qiymati yaratadi.

O'zbekistonda o'rtacha oylik maosh: Junior: $600-1000, Middle: $1200-2000, Senior: $2500-4000.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=AamFr1nj4w0",
    roadmapVideo: "https://www.youtube.com/watch?v=b4YVHTqQPk8",
    learningPath: [
      "Marketing asoslari va nazariyasi (1-2 oy)",
      "Brending asoslari va brend arxitekturasi (2 oy)",
      "Consumer behavior va mijozlar psixologiyasi (1-2 oy)",
      "Vizual identifikatsiya va dizayn prinsiplari (1-2 oy)",
      "Brend strategiyasi va pozitsiyalash (2 oy)",
      "Brend kommunikatsiya kanallari (1 oy)",
      "Marketing kampaniyalari va brend aktivatsiyasi (1-2 oy)",
      "Brend metrikalari va KPI (1 oy)",
      "Portfolio loyihalari va amaliy tajriba (2-3 oy)"
    ],
    necessaryTools: [
      "Adobe Creative Cloud (Photoshop, Illustrator)",
      "Canva, Figma (dizayn uchun)",
      "Brand management platformalari (Frontify, Bynder)",
      "Tadqiqot va analitika vositalari (SurveyMonkey, Google Analytics)",
      "Social listening tools (Brandwatch, Sprout Social)",
      "CRM tizimlari (Salesforce, HubSpot)",
      "Loyiha boshqaruv vositalari (Asana, Monday.com)",
      "Taqdimot vositalari (PowerPoint, Keynote)",
      "Marketing automation (Marketo, Mailchimp)",
      "Brend tracking vositalari (BrandTracker, YouGov BrandIndex)"
    ],
    skills: [
      "Brend strategiyasi va pozitsiyalash",
      "Brend identifikatsiyasi va dizayn yo'nalishi",
      "Bozor tadqiqotlari va mijozlar tushunishi",
      "Brend qiymati va ROI o'lchash",
      "Brend kommunikatsiyalarini rejalashtirish",
      "Ijodiy ishlanmalarni boshqarish",
      "Mahsulot marketing va narxlash strategiyasi",
      "Brend xarita va arxitekturasini yaratish",
      "Hamkorlik va sponsorlik strategiyalari",
      "Mijozlar tajribasi (CX) boshqaruvi"
    ],
    dailyActivities: [
      "Brend ko'rsatkichlarini kuzatish va tahlil qilish",
      "Brend qo'llanmalari va standartlarini nazorat qilish",
      "Marketing va reklama kampaniyalarini ko'rib chiqish",
      "Mahsulot va xizmatlar uchun brend strategiyasini qo'llash",
      "Jamoa, ijodiy agentliklar va stakeholderlar bilan ishlash",
      "Mijozlar tadqiqotlari va brend auditoriyasini o'rganish",
      "Brend pozitsiyalashini raqobatchilar bilan taqqoslash",
      "Yangi brend imkoniyatlarini aniqlash",
      "Brend kommunikatsiyalarini rejalashtirish",
      "Brend aktivlari va resurslarini boshqarish"
    ],
    importancePoints: [
      "Kompaniyaning bozor pozitsiyasini belgilashda hal qiluvchi rol o'ynaydi",
      "Mahsulot va xizmatlarning raqobatchilardan ajralib turishini ta'minlaydi",
      "Mijozlar bilan uzoq muddatli aloqalar va sodiqlikni yaratadi",
      "Kompaniya qiymatini oshiradi (30-40% kompaniya qiymatini brend tashkil qiladi)",
      "Narx munosabatini yaxshilaydi va premium pozitsiyalash imkonini beradi"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar va mahsulotlar bir-biridan ajralib turmasdi",
      "Mijozlar sodiqligini qo'llab bo'lmasdi",
      "Narx raqobatida yutqazish ehtimoli yuqori bo'lardi",
      "Kompaniya qiymati sezilarli darajada past bo'lardi",
      "Marketing kampaniyalar maqsadsiz va samarasiz bo'lardi"
    ],
    demandData: {
      percentage: 80,
      jobCount: "O'zbekistonda 500+ ish o'rni",
      growthRate: "Yillik 20% o'sish"
    },
    salaryRanges: {
      junior: "$600-1000",
      middle: "$1200-2000",
      senior: "$2500-4000",
      teamLead: "$4000-6000",
      director: "$6000-9000"
    },
    programmingLanguages: [
      {
        name: "Branding Tools",
        usagePercentage: 75,
        description: "Brend identifikatsiyasi va dizayn elementlarini yaratish uchun maxsus dasturlar."
      },
      {
        name: "Brand Management Systems",
        usagePercentage: 60,
        description: "Brend aktivlarini saqlash, boshqarish va ulardan foydalanishni nazorat qilish uchun platformalar."
      },
      {
        name: "Brand Analytics Tools",
        usagePercentage: 50,
        description: "Brend samaradorligini o'lchash va tahlil qilish uchun maxsus vositalar."
      }
    ],
    frameworks: [
      {
        name: "Branding Strategy",
        type: "Marketing",
        popularity: "Asosiy brending metodologiyasi",
        companies: "Barcha o'lchamdagi kompaniyalar"
      },
      {
        name: "Brand Identity Systems",
        type: "Marketing",
        popularity: "Keng qo'llaniladigan",
        companies: "O'rta va yirik kompaniyalar"
      },
      {
        name: "Brand Value Assessment",
        type: "Marketing Analytics",
        popularity: "Muhim strategik vosita",
        companies: "Yirik korporatsiyalar va global brendlar"
      },
      {
        name: "Brand Experience Management",
        type: "Marketing",
        popularity: "Zamonaviy yondashuv",
        companies: "Mijozlar tajribasiga e'tibor qaratuvchi kompaniyalar"
      },
      {
        name: "Brand Monitoring Systems",
        type: "Marketing Analytics",
        popularity: "Tez rivojlanayotgan soha",
        companies: "Raqamli transformatsiyani amalga oshirayotgan kompaniyalar"
      }
    ],
    certifications: [
      "Chartered Institute of Marketing (CIM) - Brand Management",
      "American Marketing Association - Professional Certified Marketer",
      "Brand Management Certificate - Cornell University",
      "Brand Strategy & Management - IESEG School of Management",
      "Level 7 Diploma in Brand Management - ABP"
    ],
    educationOptions: [
      "Marketing yoki Brand Management bo'yicha universitet darajasi",
      "Brending bo'yicha magistratura dasturi",
      "Professional sertifikatlar (CIM, AMA)",
      "Brand management kurslari va bootcamplar",
      "Brend agentliklaridagi amaliyot dasturlari"
    ],
    futureProspects: [
      "Senior Brand Manager",
      "Brand Director",
      "Marketing Director",
      "Chief Marketing Officer (CMO)",
      "Chief Brand Officer (CBO)",
      "Brand Consultant",
      "Creative Director",
      "O'z brending agentligini ochish"
    ],
    internationalCompanies: [
      "Procter & Gamble",
      "Unilever",
      "Coca-Cola",
      "Apple",
      "Nike",
      "L'Oreal",
      "Samsung",
      "Nestlé"
    ],
    localCompanies: [
      "Artel",
      "Korzinka",
      "Nestle O'zbekiston",
      "Beeline O'zbekiston",
      "Ucell",
      "Coca-Cola Bottlers Uzbekistan",
      "UzAuto Motors"
    ],
    requiredSoftSkills: [
      "Kreativ fikrlash va dizayn tushunish",
      "Strategik fikrlash va rejalashtirish",
      "Prezentatsiya va ishontirish qobiliyati",
      "Empatiya va mijozlar ehtiyojlarini tushunish",
      "Hamkorlik va jamoa ishini boshqarish",
      "Analitik va tanqidiy fikrlash",
      "Loyihalarni samarali boshqarish",
      "Moslashuvchanlik va innovatsion fikrlash"
    ],
    specializations: [
      "Consumer Brands",
      "Corporate Branding",
      "Brand Architecture",
      "Rebranding Projects",
      "Luxury Brand Management",
      "B2B Brand Management",
      "Retail Branding",
      "Employer Branding",
      "Personal Branding"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "70% soha vakillari",
        benefits: "Jamoa bilan yaqin hamkorlik, brend madaniyatini his qilish, stakeholderlar bilan bevosita aloqa",
        challenges: "Qat'iy ish jadvali, turli bo'limlar o'rtasida vaqtni taqsimlash"
      },
      {
        format: "Remote (masofadan)",
        percentage: "15% soha vakillari",
        benefits: "Ish va hayot muvozanati, ijodiy vaqtni taqsimlash erkinligi",
        challenges: "Brend madaniyatidan uzoqlashish, jamoa bilan hamkorlikda qiyinchiliklar"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Strategik va ijodiy ish uchun qulay muhit tanlash",
        challenges: "Brending loyihalarini ikki muhitda boshqarish"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"Building Strong Brands\" - David Aaker",
          "\"Brand Thinking and Other Noble Pursuits\" - Debbie Millman",
          "\"Positioning: The Battle for Your Mind\" - Al Ries & Jack Trout",
          "\"Brand Gap\" - Marty Neumeier",
          "\"This Is Marketing\" - Seth Godin"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "Coursera - Brand Management Specialization",
          "LinkedIn Learning - Brand Management kurslari",
          "Brandingmag - brending yangiliklari va trendlari",
          "Canva Design School - brend dizayn kurslari",
          "Brand Master Academy - professional brend kurslari"
        ]
      },
      {
        type: "Konferentsiyalar",
        resources: [
          "Brandweek Summit",
          "The Dieline Conference",
          "Transform Conference",
          "Brand Strategy Innovation Summit",
          "Brand Marketing Summit"
        ]
      }
    ],
    successStories: [
      {
        name: "Kamola Muminova",
        startedAs: "Marketing Assistant",
        currentPosition: "Brand Director at Artel",
        story: "Kamola marketing bo'limida oddiy assistant sifatida ish boshladi. U kompaniyaning yangi mahsulot liniyasi uchun innovatsion brending strategiyasini taklif qildi, bu loyiha shunday muvaffaqiyat qozondiki, bozorga chiqishdan 6 oy o'tib sotuvlar 45% ga oshdi.\n\nBu yutuqdan so'ng, u brend koordinatori, keyin esa brend menejeri lavozimiga ko'tarildi. U Artel brendini zamonaviylashtirish va uni global standartlarga moslashtirishda muhim rol o'ynadi. 6 yil ichida u kompaniyaning Brand Director lavozimiga ko'tarildi va hozir Artelning barcha mahsulot liniyalari uchun brend strategiyasini boshqaradi."
      },
      {
        name: "Rustam Ahmedov",
        startedAs: "Graphic Designer",
        currentPosition: "Co-founder of Branding Agency",
        story: "Rustam kariyerasini kichik dizayn studiyasida grafik dizayner sifatida boshladi. U brend identifikatsiyasi va dizayn tizimlariga qiziqib, bu sohada o'z bilimlarini chuqurlashtirdi.\n\nBir necha yil davomida u turli kompaniyalarda ishladi, jumladan yirik telekommunikatsiya kompaniyasida brend menejeri sifatida. U kompaniyaning to'liq rebranding jarayonida qatnashdi va bu tajriba unga brending sohasida keng ko'nikmalar berdi.\n\nKeyinchalik u o'zining hamkasbi bilan birgalikda 'BrandWorks' nomli brending agentligini ochdi. Hozirda ularning agentligi O'zbekistonning eng innovatsion va kreativ brending agentliklaridan biri hisoblanadi va 30 dan ortiq mijozlar bilan ishlaydi."
      }
    ],
    workExamples: [
      "Brend strategiyasi va pozitsiyalash",
      "Vizual identifikatsiya va logotip dizayni",
      "Brend qadriyatlari va missiyasini ishlab chiqish",
      "Brend kommunikatsiya strategiyasi",
      "Brend aktivatsiya kampaniyalari",
      "Rebranding loyihalari",
      "Brend arxitekturasi",
      "Brend auditi",
      "Brend qo'llanmasi yaratish"
    ],
    careerTimeline: [
      {
        position: "Assistant Brand Manager",
        yearsExperience: "0-2",
        responsibilities: "Brend menejerlariga kundalik vazifalarida yordam berish, brend materiallarini tayyorlash, brend metrikalarini kuzatish, kichik brend loyihalarida ishtirok etish.",
        salary: "$500-800 oylik"
      },
      {
        position: "Brand Manager",
        yearsExperience: "2-4",
        responsibilities: "Brend strategiyasini amalga oshirish, brend kommunikatsiyalarini boshqarish, marketing kampaniyalarida brend standartlarini nazorat qilish, brend samaradorligini tahlil qilish.",
        salary: "$1000-1800 oylik"
      },
      {
        position: "Senior Brand Manager",
        yearsExperience: "4-6",
        responsibilities: "Brend strategiyasini ishlab chiqish, mahsulot liniyasi uchun brend yo'nalishini belgilash, katta brend loyihalarini boshqarish, jamoa a'zolariga yo'l-yo'riq ko'rsatish.",
        salary: "$2000-3000 oylik"
      },
      {
        position: "Brand Director",
        yearsExperience: "6-8",
        responsibilities: "Kompaniyaning umumiy brend strategiyasini ishlab chiqish, brend komandasi rahbarligi, stakeholderlar bilan ishlash, brend portfoliosini boshqarish.",
        salary: "$3500-5000 oylik"
      },
      {
        position: "Chief Brand Officer (CBO)",
        yearsExperience: "8+",
        responsibilities: "Kompaniyaning global brend strategiyasini belgilash, brend qiymatini maksimal darajada oshirish, brend investitsiyalari bo'yicha qaror qabul qilish.",
        salary: "$5000-8000+ oylik"
      }
    ]
  },
  {
    id: 4,
    title: "Email Marketing Specialist",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Email Marketing Specialist - mutaxassis, ularning vazifasi email marketing strategiyalarini ishlab chiqish, mijozlar bilan aloqa, va reklama kampaniyalarini boshqarish.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=SBqkDc1eulM",
    roadmapVideo: "https://www.youtube.com/watch?v=SBqkDc1eulM",
    learningPath: [
      "Email Marketing Fundamentals (1-2 oy)",
      "Email Campaign Management (1-2 oy)",
      "Email Marketing Strategy Development (1-2 oy)",
      "Email Marketing Analytics (1-2 oy)",
      "Email Marketing Automation (1-2 oy)",
      "Email Marketing Campaign Execution (1-2 oy)",
      "Email Marketing Analytics and Reporting (1-2 oy)",
      "Email Marketing Strategy Execution (1-2 oy)",
      "Email Marketing Campaign Analysis (1-2 oy)",
      "Email Marketing Automation Implementation (1-2 oy)"
    ],
    necessaryTools: [
      "Email Marketing Platforms (Mailchimp, SendPulse, etc.)",
      "CRM Systems (HubSpot, Salesforce, etc.)",
      "Email Marketing Automation Platforms (HubSpot, Klaviyo, etc.)",
      "Email Marketing Analytics Tools (Google Analytics, SEMrush, etc.)",
      "Email Marketing Campaign Management Tools (HubSpot, SendPulse, etc.)",
      "Email Marketing Automation Tools (Klaviyo, ActiveCampaign, etc.)",
      "Email Marketing Analytics and Reporting Tools (Google Analytics, SEMrush, etc.)",
      "Email Marketing Strategy Development Tools (HubSpot, SEMrush, etc.)",
      "Email Marketing Campaign Analysis Tools (Google Analytics, SEMrush, etc.)",
      "Email Marketing Automation Implementation Tools (Klaviyo, ActiveCampaign, etc.)"
    ],
    skills: [
      "Email Marketing Strategy",
      "Email Campaign Management",
      "Email Marketing Automation",
      "Email Marketing Analytics",
      "Email Marketing Campaign Execution",
      "Email Marketing Analytics and Reporting",
      "Email Marketing Strategy Execution",
      "Email Marketing Campaign Analysis",
      "Email Marketing Automation Implementation",
      "Email Marketing Analytics and Reporting"
    ],
    dailyActivities: [
      "Email Marketing Strategy Development",
      "Email Campaign Management",
      "Email Marketing Automation",
      "Email Marketing Analytics",
      "Email Marketing Campaign Execution",
      "Email Marketing Analytics and Reporting",
      "Email Marketing Strategy Execution",
      "Email Marketing Campaign Analysis",
      "Email Marketing Automation Implementation",
      "Email Marketing Analytics and Reporting"
    ],
    importancePoints: [
      "Email Marketing is crucial for businesses in the digital age",
      "Email Marketing Specialists are key to achieving business goals",
      "Email Marketing is measurable and trackable",
      "Email Marketing is cost-effective",
      "Email Marketing is constantly evolving"
    ],
    consequencesIfNotExisted: [
      "Businesses may miss out on email marketing opportunities",
      "Customers may not find the business online",
      "Businesses may not achieve their marketing goals",
      "Businesses may not compete effectively in the email marketing market",
      "Businesses may not reach their target audience"
    ],
    demandData: {
      percentage: 70,
      jobCount: "O'zbekistonda 300+ ish o'rni",
      growthRate: "Yillik 20% o'sish"
    },
    salaryRanges: {
      junior: "$400-600",
      middle: "$800-1500",
      senior: "$1800-3000",
      teamLead: "$3500-5000",
      director: "$5000-8000"
    },
    programmingLanguages: [
      {
        name: "HTML/CSS",
        usagePercentage: 45,
        description: "Veb-saytlar va landing sahifalarni tushunish uchun asosiy bilimlar, marketing materiallarini yaratishda foydali."
      },
      {
        name: "SQL",
        usagePercentage: 30,
        description: "Ma'lumotlar bazalaridan mijoz ma'lumotlarini olish va tahlil qilish uchun."
      },
      {
        name: "Python/R",
        usagePercentage: 25,
        description: "Bozor ma'lumotlarini tahlil qilish, avtomatlashtirish va ma'lumotlar vizualizatsiyasi uchun."
      }
    ],
    frameworks: [
      {
        name: "HubSpot",
        type: "CRM & Marketing",
        popularity: "Ko'p ishlatiladigan",
        companies: "Ko'plab B2B va B2C kompaniyalar"
      },
      {
        name: "Mailchimp",
        type: "Email Marketing",
        popularity: "Keng tarqalgan",
        companies: "Startaplar, o'rta biznes, yirik kompaniyalar"
      },
      {
        name: "Klaviyo",
        type: "Email Marketing Automation",
        popularity: "Keng tarqalgan",
        companies: "Startaplar, o'rta biznes, yirik kompaniyalar"
      },
      {
        name: "ActiveCampaign",
        type: "Email Marketing Automation",
        popularity: "Keng tarqalgan",
        companies: "Startaplar, o'rta biznes, yirik kompaniyalar"
      },
      {
        name: "SendPulse",
        type: "Email Marketing",
        popularity: "Keng tarqalgan",
        companies: "Startaplar, o'rta biznes, yirik kompaniyalar"
      }
    ],
    certifications: [
      "HubSpot Marketing Software Certification",
      "Mailchimp Email Marketing Certification",
      "Klaviyo Email Marketing Certification",
      "ActiveCampaign Email Marketing Certification",
      "SendPulse Email Marketing Certification",
      "Email Marketing Institute Certification",
      "Email Marketing Strategy Certification"
    ],
    educationOptions: [
      "Email Marketing Degree",
      "Email Marketing Certificate",
      "Online Email Marketing Courses",
      "Professional Email Marketing Training",
      "Email Marketing Workshops",
      "Email Marketing Mentorship"
    ],
    futureProspects: [
      "Senior Email Marketing Manager",
      "Email Marketing Director",
      "Brand Manager",
      "Email Marketing Consultant",
      "Content Marketing Manager",
      "Chief Email Marketing Officer (CEMO)",
      "Email Marketing Specialist",
      "O'z email marketing agentligini ochish"
    ],
    internationalCompanies: [
      "Procter & Gamble",
      "Unilever",
      "Coca-Cola",
      "PepsiCo",
      "Google",
      "Meta (Facebook)",
      "Amazon",
      "Nestlé"
    ],
    localCompanies: [
      "Artel",
      "UzCard",
      "Beeline Uzbekistan",
      "Ucell",
      "Korzinka",
      "National Bank of Uzbekistan",
      "MyTaxi (Yandex)"
    ],
    requiredSoftSkills: [
      "Kreativlik va innovatsion fikrlash",
      "Kommunikatsiya va taqdimot mahorati",
      "Analitik va tanqidiy fikrlash",
      "Muammolarni hal qilish qobiliyati",
      "Jamoada ishlash va hamkorlik",
      "Vaqtni boshqarish va ko'p vazifani bajarish",
      "Adaptatsiya va o'zgarishlarga moslashish",
      "Mijozlarga yo'naltirilgan fikrlash"
    ],
    specializations: [
      "Email Campaign Management",
      "Email Marketing Automation",
      "Email Marketing Analytics",
      "Email Marketing Strategy",
      "Email Marketing Campaign Execution",
      "Email Marketing Analytics and Reporting",
      "Email Marketing Strategy Execution",
      "Email Marketing Campaign Analysis",
      "Email Marketing Automation Implementation",
      "Email Marketing Analytics and Reporting"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "60% soha vakillari",
        benefits: "Jamoa bilan yaqin aloqa, tezkor qayta aloqa, korporativ madaniyat",
        challenges: "Vaqt cheklovlari, transport, ofis siyosati"
      },
      {
        format: "Remote (masofadan)",
        percentage: "25% soha vakillari",
        benefits: "Moslashuvchan ish vaqti, geografik erkinlik, yaxshi ish-hayot balansi",
        challenges: "Kommunikatsiya qiyinchiliklari, jamoadan ajralish hissi"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Ofis va masofadan ishlashning eng yaxshi jihatlari, moslashuvchanlik",
        challenges: "Rejalashtirish murakkabligi, ikki turdagi ish muhitiga moslashish"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"Email Marketing For Dummies\" - John Arnold",
          "\"Marketing to the Middle of Nowhere: How to Market Your Business in Rural America\" - John Jantsch",
          "\"The New Rules of Marketing & PR: How to Use Social Media, Blogs, News Releases, Videos, PR Stunts, and Events to Reach Buyers Directly\" - David Meerman Scott",
          "\"Content Inc.: You Don't Need a Big Budget to Build a Big Brand\" - Joe Pulizzi",
          "\"Marketing in the Age of Digital Transformation\" - Brian Solis"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "HubSpot Academy - bepul marketing kurslari",
          "Google Digital Garage - digital marketing asoslari",
          "Coursera - jiddiy sertifikatlangan kurslar",
          "Udemy - amaliy marketing kurslari",
          "LinkedIn Learning - professional taraqqiyot"
        ]
      },
      {
        type: "YouTube kanallar",
        resources: [
          "Neil Patel",
          "HubSpot",
          "Marketing School",
          "Think with Google",
          "Ahrefs"
        ]
      }
    ],
    successStories: [
      {
        name: "Aziza Karimova",
        startedAs: "Marketing Assistant",
        currentPosition: "Marketing Director at Artel",
        story: "Aziza universitetni tugatgandan so'ng kichik kompaniyada marketing yordamchisi sifatida ishlay boshladi. U ijtimoiy tarmoqlarda brendni rivojlantirish bo'yicha innovatsion strategiyani amalga oshirdi, bu kompaniyaning onlayn mavjudligini 200% oshirdi.\n\nBu tajribadan so'ng, u Artelga o'rta darajadagi marketing menejeri sifatida ishga kirdi. U kontent marketing strategiyasi va mahalliy influencerlar bilan hamkorlikni boshladi. 3 yil ichida u marketing bo'limining direktori lavozimiga ko'tarildi, endi u 15 kishilik jamoani boshqaradi va kompaniyaning barcha marketing strategiyalariga rahbarlik qiladi."
      }
    ],
    workExamples: [
      "Brand identity yaratish",
      "Raqamli marketing kampaniyalari",
      "Email marketing strategiyasi",
      "SEO optimizatsiyasi",
      "Content marketing rejasi",
      "Ijtimoiy tarmoq strategiyasi",
      "Reklama ROI tahlili",
      "Landing page optimizatsiyasi",
      "Influencer marketing kampaniyasi"
    ],
    careerTimeline: [
      {
        position: "Email Marketing Specialist",
        yearsExperience: "0-1",
        responsibilities: "Email marketing strategiyalarini ishlab chiqish, mijozlar bilan aloqa, va reklama kampaniyalarini boshqarish.",
        salary: "$400-600 oylik"
      },
      {
        position: "Senior Email Marketing Specialist",
        yearsExperience: "1-3",
        responsibilities: "Marketing bo'limiga rahbarlik qilish, strategik rejalashtirish, budjet va KPI ma'sul, hamkorlar bilan munosabatlar, rahbariyatga hisobot.",
        salary: "$800-1200 oylik"
      },
      {
        position: "Email Marketing Manager",
        yearsExperience: "3-5",
        responsibilities: "Kompaniya email marketing strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$1500-2500 oylik"
      },
      {
        position: "Email Marketing Director",
        yearsExperience: "5-7",
        responsibilities: "Kompaniya email marketing strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "Chief Email Marketing Officer (CEMO)",
        yearsExperience: "8+",
        responsibilities: "Kompaniya email marketing strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$4500-8000+ oylik"
      }
    ]
  },
  {
    id: 5,
    title: "Marketing Analyst",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Marketing Analyst - mutaxassis, ularning vazifasi bozor tadqiqotlarini o'tkazish, marketing strategiyalarini ishlab chiqish va amalga oshirish, reklama kampaniyalarini boshqarish va mijozlar bilan munosabatlarni rivojlantirish.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=n3Vv_zs01IY",
    roadmapVideo: "https://www.youtube.com/watch?v=n3Vv_zs01IY",
    learningPath: [
      "Marketing Analytics Fundamentals (1-2 oy)",
      "Marketing Analytics Strategy Development (1-2 oy)",
      "Marketing Analytics Campaign Management (1-2 oy)",
      "Marketing Analytics Analytics and Reporting (1-2 oy)",
      "Marketing Analytics Automation (1-2 oy)",
      "Marketing Analytics Campaign Execution (1-2 oy)",
      "Marketing Analytics Analytics and Reporting (1-2 oy)",
      "Marketing Analytics Strategy Execution (1-2 oy)",
      "Marketing Analytics Campaign Analysis (1-2 oy)",
      "Marketing Analytics Automation Implementation (1-2 oy)"
    ],
    necessaryTools: [
      "Google Analytics",
      "Google Ads",
      "HubSpot",
      "SEMrush",
      "Excel",
      "SQL",
      "Python",
      "R",
      "Marketing Analytics Tools",
      "Marketing Analytics Platforms"
    ],
    skills: [
      "Marketing Analytics",
      "Marketing Strategy",
      "Marketing Campaign Management",
      "Marketing Analytics and Reporting",
      "Marketing Analytics Automation",
      "Marketing Analytics Campaign Execution",
      "Marketing Analytics Analytics and Reporting",
      "Marketing Analytics Strategy Execution",
      "Marketing Analytics Campaign Analysis",
      "Marketing Analytics Automation Implementation"
    ],
    dailyActivities: [
      "Marketing Analytics Strategy Development",
      "Marketing Analytics Campaign Management",
      "Marketing Analytics Analytics and Reporting",
      "Marketing Analytics Automation",
      "Marketing Analytics Campaign Execution",
      "Marketing Analytics Analytics and Reporting",
      "Marketing Analytics Strategy Execution",
      "Marketing Analytics Campaign Analysis",
      "Marketing Analytics Automation Implementation",
      "Marketing Analytics Analytics and Reporting"
    ],
    importancePoints: [
      "Marketing Analytics is crucial for businesses in the digital age",
      "Marketing Analysts are key to achieving business goals",
      "Marketing Analytics is measurable and trackable",
      "Marketing Analytics is cost-effective",
      "Marketing Analytics is constantly evolving"
    ],
    consequencesIfNotExisted: [
      "Businesses may miss out on marketing analytics opportunities",
      "Customers may not find the business online",
      "Businesses may not achieve their marketing goals",
      "Businesses may not compete effectively in the marketing analytics market",
      "Businesses may not reach their target audience"
    ],
    demandData: {
      percentage: 65,
      jobCount: "O'zbekistonda 200+ ish o'rni",
      growthRate: "Yillik 20% o'sish"
    },
    salaryRanges: {
      junior: "$400-600",
      middle: "$800-1500",
      senior: "$1800-3000",
      teamLead: "$3500-5000",
      director: "$5000-8000"
    },
    programmingLanguages: [
      {
        name: "Python",
        usagePercentage: 45,
        description: "Bozor ma'lumotlarini tahlil qilish, avtomatlashtirish va ma'lumotlar vizualizatsiyasi uchun."
      },
      {
        name: "R",
        usagePercentage: 30,
        description: "Bozor ma'lumotlarini tahlil qilish, avtomatlashtirish va ma'lumotlar vizualizatsiyasi uchun."
      },
      {
        name: "SQL",
        usagePercentage: 25,
        description: "Ma'lumotlar bazalaridan mijoz ma'lumotlarini olish va tahlil qilish uchun."
      }
    ],
    frameworks: [
      {
        name: "Google Analytics",
        type: "Analytics",
        popularity: "Eng mashhur",
        companies: "Deyarli barcha o'rta va katta kompaniyalar"
      },
      {
        name: "HubSpot",
        type: "CRM & Marketing",
        popularity: "Ko'p ishlatiladigan",
        companies: "Ko'plab B2B va B2C kompaniyalar"
      },
      {
        name: "SEMrush",
        type: "SEO & Analytics",
        popularity: "Top SEO vositasi",
        companies: "Digital agentliklar, marketing bo'limlari"
      },
      {
        name: "Excel",
        type: "Analytics",
        popularity: "Ko'p ishlatiladigan",
        companies: "Barcha o'rta va katta kompaniyalar"
      },
      {
        name: "SQL",
        type: "Analytics",
        popularity: "Ko'p ishlatiladigan",
        companies: "Barcha o'rta va katta kompaniyalar"
      }
    ],
    certifications: [
      "Google Analytics Certification",
      "HubSpot Marketing Software Certification",
      "SEMrush SEO Certification",
      "Excel Certification",
      "SQL Certification",
      "Marketing Analytics Institute Certification",
      "Marketing Analytics Strategy Certification"
    ],
    educationOptions: [
      "Marketing Analytics Degree",
      "Marketing Analytics Certificate",
      "Online Marketing Analytics Courses",
      "Professional Marketing Analytics Training",
      "Marketing Analytics Workshops",
      "Marketing Analytics Mentorship"
    ],
    futureProspects: [
      "Senior Marketing Analyst",
      "Marketing Analytics Director",
      "Brand Manager",
      "Marketing Analytics Consultant",
      "Content Marketing Manager",
      "Chief Marketing Analytics Officer (CMAO)",
      "Marketing Analyst",
      "O'z marketing analytics agentligini ochish"
    ],
    internationalCompanies: [
      "Procter & Gamble",
      "Unilever",
      "Coca-Cola",
      "PepsiCo",
      "Google",
      "Meta (Facebook)",
      "Amazon",
      "Nestlé"
    ],
    localCompanies: [
      "Artel",
      "UzCard",
      "Beeline Uzbekistan",
      "Ucell",
      "Korzinka",
      "National Bank of Uzbekistan",
      "MyTaxi (Yandex)"
    ],
    requiredSoftSkills: [
      "Kreativlik va innovatsion fikrlash",
      "Kommunikatsiya va taqdimot mahorati",
      "Analitik va tanqidiy fikrlash",
      "Muammolarni hal qilish qobiliyati",
      "Jamoada ishlash va hamkorlik",
      "Vaqtni boshqarish va ko'p vazifani bajarish",
      "Adaptatsiya va o'zgarishlarga moslashish",
      "Mijozlarga yo'naltirilgan fikrlash"
    ],
    specializations: [
      "Marketing Analytics",
      "Marketing Strategy",
      "Marketing Campaign Management",
      "Marketing Analytics and Reporting",
      "Marketing Analytics Automation",
      "Marketing Analytics Campaign Execution",
      "Marketing Analytics Analytics and Reporting",
      "Marketing Analytics Strategy Execution",
      "Marketing Analytics Campaign Analysis",
      "Marketing Analytics Automation Implementation"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "60% soha vakillari",
        benefits: "Jamoa bilan yaqin aloqa, tezkor qayta aloqa, korporativ madaniyat",
        challenges: "Vaqt cheklovlari, transport, ofis siyosati"
      },
      {
        format: "Remote (masofadan)",
        percentage: "25% soha vakillari",
        benefits: "Moslashuvchan ish vaqti, geografik erkinlik, yaxshi ish-hayot balansi",
        challenges: "Kommunikatsiya qiyinchiliklari, jamoadan ajralish hissi"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Ofis va masofadan ishlashning eng yaxshi jihatlari, moslashuvchanlik",
        challenges: "Rejalashtirish murakkabligi, ikki turdagi ish muhitiga moslashish"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"Marketing Analytics for Dummies\" - Mark R. Jensen",
          "\"Marketing Analytics: A Beginner's Guide\" - Greg Stasevich",
          "\"Marketing Analytics: A Strategic Approach\" - John Deighton",
          "\"Marketing Analytics: A Practical Guide\" - John Arnold",
          "\"Marketing Analytics: A Guide for Marketers\" - Mark R. Jensen"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "Google Digital Garage - digital marketing asoslari",
          "Coursera - jiddiy sertifikatlangan kurslar",
          "Udemy - amaliy marketing kurslari",
          "LinkedIn Learning - professional taraqqiyot"
        ]
      },
      {
        type: "YouTube kanallar",
        resources: [
          "Neil Patel",
          "HubSpot",
          "Marketing School",
          "Think with Google",
          "Ahrefs"
        ]
      }
    ],
    successStories: [
      {
        name: "Aziza Karimova",
        startedAs: "Marketing Assistant",
        currentPosition: "Marketing Director at Artel",
        story: "Aziza universitetni tugatgandan so'ng kichik kompaniyada marketing yordamchisi sifatida ishlay boshladi. U ijtimoiy tarmoqlarda brendni rivojlantirish bo'yicha innovatsion strategiyani amalga oshirdi, bu kompaniyaning onlayn mavjudligini 200% oshirdi.\n\nBu tajribadan so'ng, u Artelga o'rta darajadagi marketing menejeri sifatida ishga kirdi. U kontent marketing strategiyasi va mahalliy influencerlar bilan hamkorlikni boshladi. 3 yil ichida u marketing bo'limining direktori lavozimiga ko'tarildi, endi u 15 kishilik jamoani boshqaradi va kompaniyaning barcha marketing strategiyalariga rahbarlik qiladi."
      }
    ],
    workExamples: [
      "Brand identity yaratish",
      "Raqamli marketing kampaniyalari",
      "Email marketing strategiyasi",
      "SEO optimizatsiyasi",
      "Content marketing rejasi",
      "Ijtimoiy tarmoq strategiyasi",
      "Reklama ROI tahlili",
      "Landing page optimizatsiyasi",
      "Influencer marketing kampaniyasi"
    ],
    careerTimeline: [
      {
        position: "Marketing Analyst",
        yearsExperience: "0-1",
        responsibilities: "Marketing analytics strategiyalarini ishlab chiqish, mijozlar bilan aloqa, va reklama kampaniyalarini boshqarish.",
        salary: "$400-600 oylik"
      },
      {
        position: "Senior Marketing Analyst",
        yearsExperience: "1-3",
        responsibilities: "Marketing bo'limiga rahbarlik qilish, strategik rejalashtirish, budjet va KPI ma'sul, hamkorlar bilan munosabatlar, rahbariyatga hisobot.",
        salary: "$800-1200 oylik"
      },
      {
        position: "Marketing Analytics Manager",
        yearsExperience: "3-5",
        responsibilities: "Kompaniya marketing analytics strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$1500-2500 oylik"
      },
      {
        position: "Marketing Analytics Director",
        yearsExperience: "5-7",
        responsibilities: "Kompaniya marketing analytics strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$2500-4000 oylik"
      },
      {
        position: "Chief Marketing Analytics Officer (CMAO)",
        yearsExperience: "8+",
        responsibilities: "Kompaniya marketing analytics strategiyasini belgilash, bozor pozitsiyasini rivojlantirish, yuqori darajadagi loyihalarni boshqarish, departament rahbarligi.",
        salary: "$4500-8000+ oylik"
      }
    ]
  },
  {
    id: 4,
    title: "Market Research Analyst",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Market Research Analyst - bozor tadqiqotlari orqali mijozlar ehtiyojlari, istak-xohishlari va xarid qilish odatlarini o'rganadigan mutaxassis. Ular so'rovnomalar, fokus-gruppalar va boshqa tadqiqot metodlarini qo'llagan holda ma'lumotlarni to'playdi, tahlil qiladi va marketing strategiyasini shakllantirish uchun xulosalar chiqaradi.

O'zbekistonda o'rtacha oylik maosh: Junior: $500-800, Middle: $900-1500, Senior: $1800-2500.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=kFM72UJhW8s",
    roadmapVideo: "https://www.youtube.com/watch?v=kFM72UJhW8s",
    learningPath: [
      "Marketing asoslari va nazariyasi (1 oy)",
      "Tadqiqot metodologiyasi va statistika (2 oy)",
      "Kvantitatif va kvalitatif tadqiqot usullari (2 oy)",
      "Ma'lumotlarni to'plash va tahlil qilish (1-2 oy)",
      "SPSS, R, Python kabi tahlil vositalarini o'rganish (2-3 oy)",
      "Bozor segmentatsiyasi va mijozlar xulq-atvori (1 oy)",
      "Tadqiqot natijalarini taqdim etish va hisobot tayyorlash (1 oy)",
      "CRM tizimlari va tadqiqot platformalari (1 oy)",
      "Analytics dashboard yaratish (1 oy)",
      "Amaliy loyihalar (2-3 oy)"
    ],
    necessaryTools: [
      "SPSS, R, Python (statistik tahlil uchun)",
      "Qualtrics, SurveyMonkey (so'rovnomalar)",
      "Google Analytics, Adobe Analytics",
      "Tableau, Power BI (ma'lumotlarni vizualizatsiya qilish)",
      "Excel va Google Sheets (ma'lumotlarni tahlil qilish)",
      "Statista, Euromonitor (bozor ma'lumotlari)",
      "Focus Group tools (Zoom, Miro)",
      "Social media listening tools (Brandwatch, Sprout Social)",
      "Microsoft Office (hisobotlar va taqdimotlar)",
      "CRM tizimlari (Salesforce, HubSpot)"
    ],
    skills: [
      "Statistik tahlil va ma'lumotlar interpretatsiyasi",
      "Kvalitatif va kvantitatif tadqiqot metodlari",
      "Bozor trendalari va raqobatchilar tahlili",
      "Mijozlar segmentatsiyasi",
      "Ma'lumotlarni vizualizatsiya qilish",
      "So'rovnoma va anketa dizayni",
      "Fokus-gruppalarni o'tkazish",
      "Tahliliy va kritik fikrlash",
      "Hisobot tayyorlash va taqdimot qilish",
      "Prognozlash va trendarni aniqlash"
    ],
    dailyActivities: [
      "Bozor ma'lumotlarini to'plash va tahlil qilish",
      "So'rovnomalar va focus-grouplar uchun metodologiya ishlab chiqish",
      "Raqobatchilar tahlilini o'tkazish",
      "Mijozlar segmentlari bo'yicha hisobotlar tayyorlash",
      "Bozor trendlarini kuzatish va bashorat qilish",
      "Marketing va mahsulot jamoalari bilan ma'lumotlarni taqdim etish",
      "CRM va analytics platformalarni boshqarish",
      "Ma'lumotlarni vizualizatsiya qilish va dashboard yaratish",
      "Tadqiqot natijalarini tahlil qilish va tavsiyalar tayyorlash",
      "Bozor tadqiqotlari metodologiyasini doimiy takomillashtirish"
    ],
    importancePoints: [
      "Kompaniyalarga asoslangan qarorlar qabul qilishda yordam beradi",
      "Yangi bozor imkoniyatlarini aniqlaydi va tavakkallarni kamaytiradi",
      "Mijozlar ehtiyojlarini chuqur tushunishga imkon beradi",
      "Mahsulot innovatsiyasi va rivojlantirishga hissa qo'shadi",
      "Marketing kampaniyalar ROI (return on investment) ni oshiradi"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar mijozlar ehtiyojlari haqida aniq ma'lumotga ega bo'lmasdi",
      "Marketing va mahsulot strategiyalari taxminga asoslangan bo'lardi",
      "Kompaniyalar bozordagi o'zgarishlarni sezmay qolardi",
      "Mahsulotlar mijozlar ehtiyojlariga mos kelmasdi",
      "Marketing xarajatlari samarasiz bo'lardi"
    ],
    demandData: {
      percentage: 75,
      jobCount: "O'zbekistonda 300+ ish o'rni",
      growthRate: "Yillik 15% o'sish"
    },
    salaryRanges: {
      junior: "$500-800",
      middle: "$900-1500",
      senior: "$1800-2500",
      teamLead: "$2500-3500",
      director: "$3500-5000"
    },
    programmingLanguages: [
      {
        name: "Python",
        usagePercentage: 60,
        description: "Ma'lumotlarni tahlil qilish va vizualizatsiya qilish uchun eng ko'p ishlatiladigan til."
      },
      {
        name: "R",
        usagePercentage: 45,
        description: "Statistik tahlil uchun maxsus dasturlash tili."
      },
      {
        name: "SQL",
        usagePercentage: 50,
        description: "Ma'lumotlar bazasidan ma'lumotlarni so'rash va tahlil qilish uchun."
      }
    ],
    frameworks: [
      {
        name: "Pandas",
        type: "Data Analysis",
        popularity: "Market Research Analystlar orasida eng mashhur",
        companies: "Barcha o'rta va katta marketing kompaniyalar"
      },
      {
        name: "Tableau",
        type: "Data Visualization",
        popularity: "Ma'lumotlarni vizualizatsiya qilish uchun eng ko'p ishlatiladigan platforma",
        companies: "Enterprise kompaniyalar, marketing agentliklar"
      },
      {
        name: "SPSS",
        type: "Statistical Analysis",
        popularity: "Professional tadqiqot kompaniyalarida keng qo'llaniladi",
        companies: "Tadqiqot kompaniyalari, universitet va ilmiy markazlar"
      }
    ],
    certifications: [
      "Market Research Society (MRS) - Professional Certificate",
      "ESOMAR - Market Research certification",
      "Google Analytics Certification",
      "Insights Association - Professional Researcher Certification",
      "Coursera - Data Analysis Specialization",
      "Tableau Desktop Certified Associate"
    ],
    educationOptions: [
      "Marketing, Statistika yoki Biznes Analytics bo'yicha universitet darajasi",
      "Data Science yoki Biznes Intelligence bo'yicha magistratura",
      "Professional research sertifikatlar (MRS, ESOMAR)",
      "Tadqiqot metodologiyasi kurslari",
      "Data analysis va vizualizatsiya bootcamplari"
    ],
    futureProspects: [
      "Senior Market Research Analyst",
      "Market Research Manager",
      "Consumer Insights Manager",
      "Market Intelligence Director",
      "Chief Research Officer",
      "Data Analytics Consultant",
      "Business Intelligence Manager",
      "O'z tadqiqot konsalting agentligini ochish"
    ],
    internationalCompanies: [
      "Nielsen",
      "Kantar",
      "Ipsos",
      "McKinsey & Company",
      "GfK",
      "Euromonitor International",
      "PwC",
      "Deloitte"
    ],
    localCompanies: [
      "IMKON Survey",
      "Tahlil Markazi",
      "Ekspert Fikri",
      "Brif Analytics",
      "O'zbekiston Marketing Assosiatsiyasi",
      "Yandex Uzbekistan",
      "SIAR Research Group"
    ],
    requiredSoftSkills: [
      "Analitik va kritik fikrlash",
      "Matematik va statistik qobiliyatlar",
      "Savollar berish va tinglash ko'nikmalari",
      "Taqdimot va kommunikatsiya qobiliyati",
      "Detallarni sezish va aniqlik",
      "To'liq va obyektiv bo'lish qobiliyati",
      "Muammolarni hal qilish va qaror qabul qilish",
      "Vaqtni samarali boshqarish",
      "Loyihalarni boshqarish va tashkil etish",
      "Diplomatiya va empatiya"
    ],
    specializations: [
      "Consumer Insights",
      "Competitive Intelligence",
      "Product Research",
      "User Experience (UX) Research",
      "Pricing Research",
      "Brand Tracking",
      "B2B Research",
      "International Market Research",
      "Industry-specific Research (retail, FMCG, pharma)"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "60% soha vakillari",
        benefits: "Jamoa bilan hamkorlik, so'rovnoma va focus-gruppalarni bevosita o'tkazish",
        challenges: "Qat'iy ish jadvali, bir joyda o'tirib ishlash"
      },
      {
        format: "Remote (masofadan)",
        percentage: "25% soha vakillari",
        benefits: "Analitika va hisobotlar uchun tinch muhit, ma'lumotlar bilan ishlashda moslashuvchanlik",
        challenges: "Jamoa bilan hamkorlik qilishda qiyinchiliklar, fokus-gruppalarni masofadan o'tkazish"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Ma'lumotlarni tahlil qilish uchun masofaviy ishlash, muhim uchrashuvlar uchun ofisga borish",
        challenges: "Ikki xil muhitni boshqarish, ish tabiati o'zgarishiga moslashish"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"Marketing Research\" - Naresh K. Malhotra",
          "\"Storytelling with Data\" - Cole Nussbaumer Knaflic",
          "\"Qualitative Research Methods\" - Monique Hennink, Inge Hutter, Ajay Bailey",
          "\"Predictive Analytics\" - Eric Siegel",
          "\"Consumer Behavior\" - Leon G. Schiffman & Leslie Lazar Kanuk"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "Coursera - Data Analysis Specialization",
          "edX - Market Research and Consumer Behavior courses",
          "LinkedIn Learning - Market Research fundamentals",
          "DataCamp - Python for Market Research",
          "Khan Academy - Statistics and Probability"
        ]
      },
      {
        type: "Konferentsiyalar",
        resources: [
          "ESOMAR Congress",
          "Market Research Summit",
          "Quirk's Events",
          "Insights Association Annual Conference",
          "Big Data & AI World"
        ]
      }
    ],
    successStories: [
      {
        name: "Aziza Karimova",
        startedAs: "Research Assistant",
        currentPosition: "Head of Consumer Insights at Coca-Cola Uzbekistan",
        story: "Aziza marketing sohasiga o'rganayotganida tadqiqot assistenti sifatida kichik marketing agentligida ishlashni boshladi. U ilk kunlaridan boshlab ma'lumotlarni tahlil qilishga qobiliyati bilan ajralib turdi.\n\nUning birinchi katta loyihasi mahalliy oziq-ovqat brendi uchun bozor tadqiqoti edi. Aziza innovatsion usullardan foydalanib, mijozlarning yashirin ehtiyojlarini aniqladi, bu esa kompaniyaga yangi mahsulot liniyasini yaratishga turtki bo'ldi.\n\nBu muvaffaqiyatdan so'ng, u Ipsos kabi xalqaro tadqiqot kompaniyasiga ishga kirdi va u yerda xalqaro metodologiyalar va tadqiqot standartlarini o'rgandi. 5 yil davomida u turli loyihalarni boshqardi va FMCG segmentida ekspert bo'lib yetishdi.\n\nHozirda u Coca-Cola Uzbekistonda Consumer Insights bo'limini boshqaradi, brend va mahsulot strategiyalari uchun muhim qarorlar qabul qilishda hal qiluvchi rol o'ynaydi."
      },
      {
        name: "Temur Rasulov",
        startedAs: "Marketing Intern",
        currentPosition: "Founder of Tadqiqot.uz Research Agency",
        story: "Temur universitet paytida marketing internshipini o'tab, ma'lumotlarning strategik qarorlar qabul qilishdagi ahamiyatiga qiziqib qoldi. U statistika va data analytics bo'yicha qo'shimcha kurslarni o'qidi.\n\nO'qishni tugatgach, u Nielsen kompaniyasida Market Research Analyst sifatida ishlay boshladi. 3 yil davomida u mahalliy bozorlarni tadqiq qilish metodologiyasini mukammal o'rgandi. U O'zbekiston bozori uchun maxsus iste'molchi indeksini ishlab chiqdi, bu uning martabasini oshirdi.\n\nKeyinchalik u O'zbekistonda raqamli tadqiqot usullari bo'yicha bo'shliqni ko'rib, o'z kompaniyasi - Tadqiqot.uz ni ochishga qaror qildi. Uning agentligi raqamli platformalarda ma'lumotlarni to'plash va tahlil qilishga ixtisoslashdi. Hozirda kompaniya 20 dan ortiq xodimga ega va O'zbekistonning ko'plab yirik brendlari bilan hamkorlik qiladi."
      }
    ],
    workExamples: [
      "Bozor imkoniyatlari va trendlarini aniqlash",
      "Mijozlar segmentatsiyasi va target profillari",
      "Raqobatchilar tahlili",
      "Mahsulot narxlarini o'rganish va tavsiyalar",
      "Brend sog'liği va mijozlar sadoqati tadqiqotlari",
      "Yangi mahsulot kontseptsiyalari testlari",
      "Reklama va marketing kampaniyalari samaradorligi tahlili",
      "Mijozlar ehtiyojlari va afzalliklarini aniqlash",
      "Distribusiya kanallari strategiyasi uchun tavsiyalar"
    ],
    careerTimeline: [
      {
        position: "Research Assistant/Junior Analyst",
        yearsExperience: "0-1",
        responsibilities: "Ma'lumotlarni to'plash, so'rovnomalarni tayyorlash, boshqa analitiklar uchun ma'lumotlarni tizimlashtirish, asosiy statistik tahlillarni o'tkazish.",
        salary: "$400-600 oylik"
      },
      {
        position: "Market Research Analyst",
        yearsExperience: "1-3",
        responsibilities: "Tadqiqot loyihalarini boshqarish, ma'lumotlarni tahlil qilish va interpretatsiya qilish, hisobotlar tayyorlash, metodologiyani ishlab chiqish.",
        salary: "$700-1200 oylik"
      },
      {
        position: "Senior Market Research Analyst",
        yearsExperience: "3-5",
        responsibilities: "Murakkab tadqiqot loyihalarini boshqarish, mijozlar uchun tavsiyalar tayyorlash, analitiklar jamoasiga mentorlik qilish, yangi tadqiqot usullarini joriy etish.",
        salary: "$1300-1800 oylik"
      },
      {
        position: "Research Manager",
        yearsExperience: "5-7",
        responsibilities: "Tadqiqot strategiyasini ishlab chiqish, analitiklar jamoasini boshqarish, katta budjetli loyihalarni nazorat qilish, loyiha ROI ni ta'minlash.",
        salary: "$1800-2500 oylik"
      },
      {
        position: "Research Director/Head of Insights",
        yearsExperience: "7+",
        responsibilities: "Kompaniyaning umumiy tadqiqot strategiyasini belgilash, bozor tendentsiyalarini bashorat qilish, tadqiqot ma'lumotlari asosida biznes strategiyasini shakllantirish.",
        salary: "$2500-4000+ oylik"
      }
    ]
  },
  {
    id: 5,
    title: "Content Marketing Specialist",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Content Marketing Specialist - mijozlar uchun qiziqarli va qimmatli kontent yaratish orqali brend qiymatini oshirish va mijozlarni jalb qilishga ixtisoslashgan mutaxassis. Ular blog postlar, ijtimoiy media kontenti, infografika, video, elektron kitoblar va boshqa turdagi kontentlarni yaratish va strategiyasini ishlab chiqish bilan shug'ullanadi.

O'zbekistonda o'rtacha oylik maosh: Junior: $400-700, Middle: $800-1300, Senior: $1400-2200.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=0R_3iarc8IA",
    roadmapVideo: "https://www.youtube.com/watch?v=0R_3iarc8IA",
    learningPath: [
      "Kontent marketing asoslari va nazariyasi (1 oy)",
      "Kontent strategiyasi ishlab chiqish (1-2 oy)",
      "Blogging va soy'rovchi maqolalar yozish (1-2 oy)",
      "SEO-optimizatsiyalangan kontent yaratish (1-2 oy)",
      "Sotsial media kontent yaratish (1 oy)",
      "Vizual kontent (infografika, rasmlash) asoslari (1-2 oy)",
      "Video kontent ishlab chiqish (1-2 oy)",
      "Kontent analitikasi va ROI o'lchash (1 oy)",
      "Kontent taqvimini rejalashtirish (1 oy)",
      "Amaliy loyihalar va portfolio (2-3 oy)"
    ],
    necessaryTools: [
      "WordPress, CMS platformalar",
      "Google Docs, Microsoft Word (matn yaratish)",
      "Canva, Adobe Creative Suite (vizual kontent)",
      "Grammarly, Hemingway (matn tahriri)",
      "SEMrush, Ahrefs (SEO analitika)",
      "Google Analytics, HubSpot (kontent analitikasi)",
      "Trello, Asana (kontent rejalashtirish)",
      "Hootsuite, Buffer (kontent joylashtirish)",
      "BuzzSumo (kontent tadqiqoti)",
      "MailChimp, ConvertKit (email marketing)"
    ],
    skills: [
      "Matn yozish va tahrirlash",
      "Storytelling va kreativ yozish",
      "SEO bilimi va kalit so'zlar tadqiqoti",
      "Mijozlar persona va auditoriyani tushunish",
      "Vizual kontent yaratish asoslari",
      "Kontent strategiyasini ishlab chiqish",
      "Kontent marketing KPI va analitikasi",
      "Tadqiqot va faktlar tekshirish",
      "Loyihalarni rejalashtirish va belgilangan muddatlarga rioya qilish",
      "Ijtimoiy media platformalari xususiyatlarini bilish"
    ],
    dailyActivities: [
      "Blog postlar va maqolalar yozish",
      "Ijtimoiy media kontentini yaratish",
      "Kontent taqvimini yangilash va nazorat qilish",
      "SEO uchun kalit so'zlar tadqiqoti",
      "Kontent samaradorligini tahlil qilish",
      "Audiotiryani o'rganish va yangi kontent g'oyalarini ishlab chiqish",
      "Dizaynerlar bilan vizual kontent bo'yicha hamkorlik qilish",
      "Email marketing uchun matn tayyorlash",
      "Kontent loyihalari uchun tadqiqot o'tkazish",
      "Kontent strategiyasini muntazam yangilab borish"
    ],
    importancePoints: [
      "Mijozlarni jalb qilish va maqsadli auditoriyani kengaytirish",
      "Brendni obro'sini oshirish va ekspertlik mavqeini mustahkamlash",
      "Mijozlarning ishonchini qozonish va munosabatlar o'rnatish",
      "SEO orqali organik trafikni oshirish",
      "Sotuv voronkasining turli bosqichlarida mijozlarni qo'llab-quvvatlash"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalarning onlayn mavjudligi zaif bo'lardi",
      "Mijozlar mahsulotlar va xizmatlar haqida ma'lumot olishi qiyinlashardi",
      "SEO samaradorligi past bo'lardi va qidiruv tizimlaridan trafik kamayrdi",
      "Brendlar o'zlarining bilim va tajribalarini namoyish eta olmasdi",
      "Mijozlar bilan uzoq muddatli munosabatlarni shakllantirish qiyinlashardi"
    ],
    demandData: {
      percentage: 78,
      jobCount: "O'zbekistonda 350+ ish o'rni",
      growthRate: "Yillik 25% o'sish"
    },
    salaryRanges: {
      junior: "$400-700",
      middle: "$800-1300",
      senior: "$1400-2200",
      teamLead: "$2300-3000",
      director: "$3000-4500"
    },
    programmingLanguages: [
      {
        name: "HTML/CSS",
        usagePercentage: 50,
        description: "Blog platformalari va CMS larni sozlash uchun asosiy bilimlar, kontentni formatlash va vizual moslash."
      },
      {
        name: "JavaScript",
        usagePercentage: 20,
        description: "Interaktiv kontent elementlari yaratish uchun asosiy tushuncha."
      }
    ],
    frameworks: [
      {
        name: "WordPress",
        type: "CMS",
        popularity: "Eng keng tarqalgan kontent boshqaruv tizimi",
        companies: "Barcha o'lchamdagi kompaniyalar"
      },
      {
        name: "HubSpot",
        type: "Content Marketing Platform",
        popularity: "Enterprise darajasidagi kontent platformasi",
        companies: "O'rta va yirik kompaniyalar"
      },
      {
        name: "Contentful",
        type: "Headless CMS",
        popularity: "Zamonaviy kontent platformasi",
        companies: "Texnologiya kompaniyalari va startaplar"
      }
    ],
    certifications: [
      "HubSpot Content Marketing Certification",
      "Content Marketing Institute - Content Marketing University",
      "Copyblogger Certified Content Marketer",
      "SEMrush Content Marketing Toolkit Course",
      "Google Analytics Certification",
      "Academy of Digital Marketing - Content Marketing Certification"
    ],
    educationOptions: [
      "Marketing, jurnalistika yoki kommunikatsiya bo'yicha universitet darajasi",
      "Kontent marketing kurslari va sertifikatlar",
      "Copywriting va kreativ yozish kurslari",
      "Digital marketing bo'yicha keng qamrovli ta'lim",
      "SEO va kontent optimizatsiyasi kurslari"
    ],
    futureProspects: [
      "Senior Content Marketing Specialist",
      "Content Marketing Manager",
      "Content Strategy Director",
      "Brand Content Director",
      "Chief Content Officer",
      "Content Marketing Consultant",
      "Copywriter",
      "O'z kontent marketing agentligini ochish"
    ],
    internationalCompanies: [
      "HubSpot",
      "Contently",
      "NewsCred",
      "Skyword",
      "ContentlyOne",
      "Convince & Convert",
      "Content Marketing Institute",
      "BuzzSumo"
    ],
    localCompanies: [
      "Qalampir.uz",
      "Daryo.uz",
      "MyTaxi (Yandex)",
      "Beeline Uzbekistan",
      "Agrobank",
      "Enter Engineering",
      "Digital marketing agentliklar"
    ],
    requiredSoftSkills: [
      "Kreativlik va original fikrlash",
      "Vaqtni boshqarish va belgilangan muddatlarga rioya qilish",
      "Mukammallikka e'tibor va detallarni sezish",
      "Kommunikatsiya va taqdimot mahorati",
      "Tanqidiy fikrlash va analitik qobiliyatlar",
      "Moslashuvchanlik va o'zgarishlarga moslashish",
      "O'z-o'zini motivatsiya qilish va mustaqil ishlash",
      "Auditoriyani tushunish va empatiya"
    ],
    specializations: [
      "B2B Content Marketing",
      "Technical Content Creation",
      "Video Content Marketing",
      "Social Media Content",
      "Storytelling va Brend Narrativi",
      "Infografika va Vizual Kontent",
      "Korporativ Blogging",
      "SEO-optimizatsiyalangan Kontent",
      "Email Marketing Kontent"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "40% soha vakillari",
        benefits: "Jamoa bilan yaqin hamkorlik, kompaniya mahsulotlari va xizmatlari bilan bevosita tanishish",
        challenges: "Kreativ fikrlash uchun tinch muhit topa olmaslik"
      },
      {
        format: "Remote (masofadan)",
        percentage: "45% soha vakillari",
        benefits: "Kreativ fikrlash uchun qulay muhit, moslashuvchan ish jadvali, chuqur fokuslanish",
        challenges: "Kompaniya madaniyatidan ajralish, jamoa bilan kam aloqa"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Kreativ ishlash uchun moslashuvchanlik, jamoa bilan ham aloqada bo'lish imkoniyati",
        challenges: "Ish va shaxsiy hayot chegaralarini belgilash qiyinligi"
      }
    ],
    learningResources: [
      {
        type: "Kitoblar",
        resources: [
          "\"Content Inc.\" - Joe Pulizzi",
          "\"They Ask, You Answer\" - Marcus Sheridan",
          "\"Epic Content Marketing\" - Joe Pulizzi",
          "\"Everybody Writes\" - Ann Handley",
          "\"On Writing Well\" - William Zinsser"
        ]
      },
      {
        type: "Online platformalar",
        resources: [
          "Content Marketing Institute Blog",
          "HubSpot Academy",
          "Copyblogger",
          "Contently Blog",
          "Coursera - Content Strategy Specialization"
        ]
      },
      {
        type: "Podcast va YouTube kanallar",
        resources: [
          "Content Marketing Institute Podcast",
          "The Content Strategy Podcast",
          "Content Matters",
          "Neil Patel YouTube kanali",
          "Marketing School podcast"
        ]
      }
    ],
    successStories: [
      {
        name: "Nigora Akbarova",
        startedAs: "Jr. Copywriter",
        currentPosition: "Head of Content at Digital Agency",
        story: "Nigora universitetni tugatgandan so'ng kichik reklama agentligida junior copywriter sifatida ishlay boshladi. U tez orada matn yozish va mijozlar bilan ishlash qobiliyati tufayli kompaniyaning eng samarali kontent yaratuvchilaridan biriga aylandi.\n\nUning salohiyatini ko'rgan rahbariyat Nigoraga ijtimoiy tarmoqlar uchun kontent strategiyasini ishlab chiqishni topshirdi. Uning innovatsion yondashuvi mijozning Instagram sahifasidagi engagement darajasini 200% ga oshirdi va kompaniyaga yangi mijozlarni jalb qildi.\n\n3 yil ichida u kontent bo'yicha loyihalar menejeriga, so'ng esa 2 yildan keyin Head of Content lavozimiga ko'tarildi. Hozirda u 8 kishilik kontent jamoasini boshqaradi va O'zbekistondagi eng yirik brendlar uchun kontent strategiyalarini ishlab chiqmoqda."
      },
      {
        name: "Farrukh Karimov",
        startedAs: "Blogging Enthusiast",
        currentPosition: "Founder of Content Marketing Agency",
        story: "Farrukh o'z karerasi boshida IT sohasida ishlasa-da, doimo yozishga qiziqardi va bo'sh vaqtida texnologiyalar haqida blog yuritardi. Uning blogi asta-sekin mashhurlashib, mustaqil yozuvchi sifatida freelance loyihalarni qabul qila boshladi.\n\nUning yozish mahorati va texnologik bilimi tufayli ko'plab IT kompaniyalari uchun texnik kontent tayyorlashga takliflar ola boshladi. Mijozlar soni ko'payib borishi bilan, u o'z kontent agentligini ochishga qaror qildi.\n\nBugun Farrukhning \"ContentHub\" nomli agentligi 15 dan ortiq kontent yaratuvchilarni birlashtirgan va O'zbekistondagi IT, fintech va telekommunikatsiya sohalaridagi yetakchi kompaniyalar bilan hamkorlik qilmoqda. Uning agentligi nafaqat matn, balki video va audio kontent yaratish yo'nalishlarini ham o'z ichiga oladi."
      }
    ],
    workExamples: [
      "Kompaniya blogi uchun SEO-optimizatsiyalangan maqolalar",
      "Sotsial media platformalari uchun kontent rejasi",
      "White paper va e-kitoblar",
      "Case studies va success stories",
      "Soha tadqiqotlari va hisobotlari",
      "Email marketing kampaniyasi uchun matnlar",
      "Korporativ veb-sayt uchun kontent",
      "Video skriptlar va storyboardlar",
      "Infografika va vizual kontent konseptsiyalari"
    ],
    careerTimeline: [
      {
        position: "Junior Content Specialist/Copywriter",
        yearsExperience: "0-1",
        responsibilities: "Blog postlar, ijtimoiy media kontenti yozish, matn tahrirlash, oddiy tadqiqotlar o'tkazish, kontent joylashtirish.",
        salary: "$400-600 oylik"
      },
      {
        position: "Content Marketing Specialist",
        yearsExperience: "1-3",
        responsibilities: "Kontent strategiyasi ishlab chiqish, turli format va platformalar uchun kontent yaratish, SEO optimizatsiya, analitika va hisobotlar tayyorlash.",
        salary: "$700-1000 oylik"
      },
      {
        position: "Senior Content Marketing Specialist",
        yearsExperience: "3-5",
        responsibilities: "Keng ko'lamli kontent loyihalarini boshqarish, jamoaga yo'l-yo'riq ko'rsatish, kontent strategiyasini takomillashtirish, mijozlar bilan ishlash.",
        salary: "$1200-1800 oylik"
      },
      {
        position: "Content Marketing Manager",
        yearsExperience: "5-7",
        responsibilities: "Kontent jamoasi rahbarligi, strategik rejalashtirish, budjet boshqaruvi, kreativ yo'nalishni belgilash, natijalar uchun mas'ullik.",
        salary: "$1800-2500 oylik"
      },
      {
        position: "Content Director/Head of Content",
        yearsExperience: "7+",
        responsibilities: "Kompaniyaning umumiy kontent strategiyasini ishlab chiqish, ko'p kanalli kontent yondashuvi, yuqori darajadagi manfaatdor tomonlar bilan ishlash.",
        salary: "$2500-4000+ oylik"
      }
    ]
  },
  {
    id: 6,
    title: "Social Media Marketing Manager",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: `Social Media Marketing Manager - ijtimoiy tarmoqlar (Facebook, Instagram, Telegram, YouTube, TikTok, va boshqalar) orqali brend mavjudligini boshqarish, auditoriya bilan aloqa o'rnatish va marketing maqsadlariga erishishga mas'ul mutaxassis. Ular kontent strategiyasi, ijtimoiy media kampaniyalari, to'lov reklama va community management bilan shug'ullanadi.

O'zbekistonda o'rtacha oylik maosh: Junior: $400-600, Middle: $800-1200, Senior: $1500-2500.`,
    dailyActivityVideo: "https://www.youtube.com/watch?v=y-n1RUbYq6Q",
    roadmapVideo: "https://www.youtube.com/watch?v=y-n1RUbYq6Qs",
    learningPath: [
      "Ijtimoiy media platformalari asoslari (1 oy)",
      "Kontent yaratish va rejalashtirish (1 oy)",
      "Community management va mijozlar bilan muloqot (1 oy)",
      "Ijtimoiy media analitikasi va hisobotlar (1-2 oy)",
      "To'lov reklama kampaniyalari (Facebook Ads, Instagram Ads) (1-2 oy)",
      "Influencer marketing (1 oy)",
      "Ijtimoiy media strategiyasi ishlab chiqish (1-2 oy)",
      "Krizis menejment va reputatsiya boshqaruvi (1 oy)",
      "Vizual kontent yaratish (Canva, Adobe) (1-2 oy)",
      "Amaliy loyihalar va portfolio (2-3 oy)"
    ],
    necessaryTools: [
      "Facebook Business Suite",
      "Instagram Professional Dashboard",
      "Telegram va Telegram Analytics",
      "TikTok for Business",
      "Hootsuite yoki Buffer (platforma boshqaruvi)",
      "Canva, Adobe (vizual kontent)",
      "Facebook Ads Manager",
      "Sprout Social (analytics)",
      "BuzzSumo (content research)",
      "Later, Planoly (post rejalashtirish)"
    ],
    skills: [
      "Ijtimoiy tarmoqlar xususiyatlarini chuqur tushunish",
      "Kontent strategiyasini ishlab chiqish",
      "Community management",
      "Copywriting va vizual kontent yaratish",
      "Reklama kampaniyalari boshqarish",
      "Analitika va KPI monitoring",
      "Trend va yangiliklar kuzatuvi",
      "Influencer marketing",
      "Krizis kommunikatsiyasi",
      "Audience targeting va segmentatsiya"
    ],
    dailyActivities: [
      "Ijtimoiy tarmoqlardagi postlarni rejalashtirish va joylashtirish",
      "Auditoriya bilan aloqa va commenting",
      "Reklama kampaniyalarini kuzatish va optimallashtirish",
      "Analitika va hisobotlarni tahlil qilish",
      "Kontent yaratish va adaptatsiya qilish",
      "Yangi trend va imkoniyatlarni o'rganish",
      "Influencerlar bilan muzokaralar",
      "Kontent kalendari va strategiyani yangilash",
      "Ijtimoiy media aktivligi bo'yicha stakeholderlar bilan muloqot",
      "Raqobatchilar monitoringi"
    ],
    importancePoints: [
      "Brend va mahsulotlar uchun mijozlar bilan to'g'ridan-to'g'ri aloqa kanali",
      "Brend mavjudligi va tanilishi uchun muhim platforma",
      "Ko'p tomonlama marketing maqsadlarini amalga oshirish (trafik, sotuv, brend tanilishi)",
      "Mijozlar sadoqati va jamoa qurishda muhim rol o'ynaydi",
      "Real-time marketing imkoniyatlaridan foydalanish"
    ],
    consequencesIfNotExisted: [
      "Kompaniyalar auditoriya bilan to'g'ridan-to'g'ri aloqa qila olmasdi",
      "O'zaro muloqot va feedback olish imkoniyati cheklangan bo'lardi",
      "Brend aktivliklar va yangiliklar haqida xabardor qilish qiyinlashardi",
      "Maqsadli auditoriyaga aniq targetlangan tarzda yetib borish qiyinlashardi",
      "Tezkor marketing reaktsiyalar va real-time marketing imkoniyatlari yo'qolardi"
    ],
    demandData: {
      percentage: 85,
      jobCount: "O'zbekistonda 600+ ish o'rni",
      growthRate: "Yillik 35% o'sish"
    },
    salaryRanges: {
      junior: "$400-600",
      middle: "$800-1200",
      senior: "$1500-2500",
      teamLead: "$2500-3500",
      director: "$3500-5000"
    },
    programmingLanguages: [
      {
        name: "Social Media Management Tools",
        usagePercentage: 95,
        description: "Ijtimoiy tarmoqlar kontentini rejalashtirish, joylashtirish va boshqarish uchun maxsus dasturlar."
      },
      {
        name: "Social Media Analytics Platforms",
        usagePercentage: 80,
        description: "Ijtimoiy tarmoqlar samaradorligini o'lchash va auditoriyani tahlil qilish vositalari."
      },
      {
        name: "Social Media Advertising Tools",
        usagePercentage: 85,
        description: "Ijtimoiy tarmoqlarda reklama kampaniyalarini yaratish va boshqarish platformalari."
      }
    ],
    frameworks: [
      {
        name: "Social Media Strategy",
        type: "Digital Marketing",
        popularity: "Asosiy SMM metodologiyasi",
        companies: "Barcha ijtimoiy media marketingdan foydalanuvchi kompaniyalar"
      },
      {
        name: "Community Management",
        type: "Social Marketing",
        popularity: "Zamonaviy ijtimoiy media yondashuvi",
        companies: "O'rta va yirik kompaniyalar"
      },
      {
        name: "Social Media Analytics",
        type: "Marketing Analytics",
        popularity: "SMM samaradorligini o'lchash uchun zarur",
        companies: "Ma'lumotlarga asoslangan marketing strategiyasiga ega kompaniyalar"
      }
    ],
    certifications: [
      "Facebook Blueprint Certification",
      "Hootsuite Social Marketing Certification",
      "Google Analytics for Social Media",
      "Twitter Flight School",
      "LinkedIn Marketing Labs Certification",
      "HubSpot Social Media Marketing Certification"
    ],
    educationOptions: [
      "Marketing, kommunikatsiya yoki PR bo'yicha universitet darajasi",
      "Digital marketing kurslar bilan social media yo'nalishi",
      "Social media marketing bootcamp'lari",
      "Plaftormalarning rasmiy treninglari (Facebook Blueprint)",
      "Online kurslar (Coursera, Udemy) ijtimoiy media marketing bo'yicha"
    ],
    futureProspects: [
      "Senior Social Media Manager",
      "Digital Marketing Manager",
      "Social Media Director",
      "Brand Communications Manager",
      "Community Director",
      "Digital Strategy Director",
      "Social Media Consultant",
      "O'z SMM agentligini ochish"
    ],
    internationalCompanies: [
      "Facebook (Meta)",
      "TikTok",
      "Twitter",
      "Hootsuite",
      "Buffer",
      "Sprout Social",
      "Later",
      "Brandwatch"
    ],
    localCompanies: [
      "MyTaxi (Yandex)",
      "Beeline Uzbekistan",
      "Ucell",
      "Humans.uz",
      "Korzinka",
      "OLX O'zbekiston",
      "Hamkor Bank",
      "Digital marketing agentliklar"
    ],
    requiredSoftSkills: [
      "Kreativlik va trend sensitivligi",
      "Kommunikatsiya va muzokaralar mahorati",
      "Adaptatsiya va tez o'rganish qobiliyati",
      "Mijozlar psixologiyasini tushunish",
      "Ko'p vazifalarni bir vaqtda boshqarish",
      "Vaqtni samarali boshqarish",
      "Krizisni boshqarish va stress bardoshliligi",
      "Hamkorlik va jamoada ishlash",
      "Tahliliy fikrlash"
    ],
    specializations: [
      "Facebook/Instagram Marketing",
      "TikTok Marketing",
      "YouTube Channel Management",
      "Twitter Marketing",
      "Telegram Marketing",
      "LinkedIn B2B Marketing",
      "Influencer Marketing",
      "Community Management",
      "Social Media Analytics"
    ],
    workFormats: [
      {
        format: "Office (korxonada)",
        percentage: "50% soha vakillari",
        benefits: "Jamoa bilan bevosita muloqot, kompaniya qadriyatlarini yaxshiroq his qilish, tezkor qarorlar",
        challenges: "Kreativlik uchun distraksiyalar, qat'iy ish jadvali"
      },
      {
        format: "Remote (masofadan)",
        percentage: "35% soha vakillari",
        benefits: "24/7 ijtimoiy media monitoringi imkoniyati, moslashuvchan jadval, fokuslanish",
        challenges: "Jamoa bilan aloqa sustligi, kompaniya hayotidan uzoqlik"
      },
      {
        format: "Hybrid (aralash)",
        percentage: "15% soha vakillari",
        benefits: "Eng yaxshi ikki format kombinatsiyasi, muvozanatli ish uslubi",
        challenges: "Ish va shaxsiy hayot chegaralarini belgilash"
      }
    ],
    learningResources: [
      {
        type: "Platformalar rasmiy resurslari",
        resources: [
          "Facebook Blueprint - Facebook va Instagram marketing",
          "TikTok Business Learning Center",
          "Twitter Flight School",
          "LinkedIn Marketing Labs",
          "YouTube Creator Academy"
        ]
      },
      {
        type: "Online kurslar",
        resources: [
          "Hootsuite Academy",
          "Social Media Examiner - Social Media Marketing Industry Report",
          "Coursera - Social Media Marketing Specialization",
          "HubSpot Academy - Social Media Marketing Course",
          "Udemy - Top SMM kurslari"
        ]
      },
      {
        type: "Blog va professional jamoalar",
        resources: [
          "Social Media Today",
          "Buffer Blog",
          "Sprout Social Blog",
          "Socialbakers Blog",
          "Jon Loomer Blog (Facebook marketing)"
        ]
      }
    ],
    successStories: [
      {
        name: "Madina Solieva",
        startedAs: "Community Manager",
        currentPosition: "Head of Social Media at Ucell",
        story: "Madina universitetni tugatgandan so'ng mahalliy kiyim-kechak brendida community manager sifatida ish boshladi. U Instagram orqali brendni tanilishini 150% ga oshirishga erishdi va buni o'zining kreativ post serieslari va followerlar bilan aktiv muloqoti orqali amalga oshirdi.\n\nKeyinroq u O'zbekistondagi mashhur digital agentlikka ishga kirdi va 2 yil davomida 5 ta yirik mijoz uchun social media strategiyalarini ishlab chiqdi. Uning eng muvaffaqiyatli loyihasi mahalliy restoran zanjiriga 3 oy ichida 50,000 dan ortiq yangi followerlar jalb qilish bo'ldi.\n\nUning yutuqlari Ucell kompaniyasining e'tiborini tortdi va u social media jamosida ish taklif qilindi. Bir yil ichida u katta natijalar ko'rsatib, Head of Social Media lavozimiga ko'tarildi. Hozirda u 10 kishilik jamoni boshqaradi va kompaniyaning barcha sotsial media strategiyalari uchun javobgar."
      },
      {
        name: "Timur Saidov",
        startedAs: "Freelance SMM Specialist",
        currentPosition: "Founder of SocialBoost Agency",
        story: "Timur o'z faoliyatini 19 yoshida, talaba vaqtida mahalliy kafelar uchun Instagram profillarini boshqarishdan boshladi. Uning kreativ kontent va targetlangan reklamalardan foydalanish mahorati tufayli mijozlar soni tez orada o'sib bordi.\n\nO'qishni tugatgach, u to'liq stavkada freelance specialist sifatida ishlashga o'tdi va o'zini O'zbekistonda Facebook va Instagram reklamalari bo'yicha ekspert sifatida o'rnatdi. U YouTube orqali bepul SMM darslari bera boshladi, bu unga yanada ko'proq mijozlarni jalb qildi.\n\nIkkita hamkasbi bilan birgalikda, Timur \"SocialBoost\" nomli ijtimoiy media agentligini tashkil etdi. 3 yil ichida agentlik 25 ta xodimga ega bo'ldi va O'zbekistonda 30 dan ortiq brendlarga xizmat ko'rsatmoqda. Agentlik asosan retail, restoran biznes va texnologiya sohasidagi kompaniyalarga ixtisoslashgan."
      }
    ],
    workExamples: [
      "Ijtimoiy media profillari va sahifalarini boshqarish",
      "Ijtimoiy tarmoqlar uchun kontent strategiyasini ishlab chiqish",
      "Pullik reklama kampaniyalarini boshqarish",
      "Influencer marketing kampaniyalari",
      "Community management va mijozlar munosabatlari",
      "Ijtimoiy media analitikasi va hisobotlari",
      "Ijtimoiy media orqali krizis kommunikatsiyasi",
      "Social media contest va aktivatsiyalar",
      "Video va vizual kontent strategiyasi"
    ],
    careerTimeline: [
      {
        position: "Social Media Specialist/Community Manager",
        yearsExperience: "0-1",
        responsibilities: "Kontent yaratish va joylashtirish, auditoriya bilan aloqa, asosiy analitikani kuzatib borish, brendning kundalik ijtimoiy media aktivliklarini amalga oshirish.",
        salary: "$300-500 oylik"
      },
      {
        position: "Social Media Marketing Specialist",
        yearsExperience: "1-2",
        responsibilities: "Ijtimoiy media strategiyasini ishlab chiqish, kontent rejalashtirish, reklama kampaniyalarini boshqarish, influencerlar bilan ishlash, analitikani tahlil qilish.",
        salary: "$500-800 oylik"
      },
      {
        position: "Senior Social Media Manager",
        yearsExperience: "2-4",
        responsibilities: "Turli platformalar uchun keng qamrovli strategiyalarni ishlab chiqish, SMM jamoasiga rahbarlik, kampaniyalar ROI ni optimizatsiya qilish, krizis kommunikatsiyasi.",
        salary: "$900-1500 oylik"
      },
      {
        position: "Social Media Team Lead/Supervisor",
        yearsExperience: "4-6",
        responsibilities: "Ijtimoiy media jamoasini boshqarish, strategik rejalashtirish, yuqori darajadagi stakeholderlar bilan muloqot, umumiy social media yo'nalishini belgilash.",
        salary: "$1500-2500 oylik"
      },
      {
        position: "Head of Social Media/Director",
        yearsExperience: "6+",
        responsibilities: "Kompaniyaning social media strategiyasini ishlab chiqish va innovatsiyalarni joriy etish, budjet taqsimlash, tegishli bo'limlar bilan integratsiyalarni ta'minlash.",
        salary: "$2500-4000+ oylik"
      }
    ]
  }
];

export default function MarketingMutaxassisi() {
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
      <div className="w-full bg-green-800 bg-opacity-90 py-6 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Marketing kasblar va ularning istiqbollari
          </h1>
          <p className="text-lg md:text-xl text-green-100 text-center mt-2">
            Zamonaviy marketing mutaxassislari, ularning ko'nikmalari, vazifalari va karyera imkoniyatlari
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Marketing sohasidagi zamonaviy kasblar</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quyida eng istiqbolli marketing kasblar haqida batafsil ma'lumot olishingiz mumkin. 
                Har bir kasb bo'yicha ko'nikmalar, kundalik faoliyat, raqamli marketing strategiyalari va 
                brend rivojlantirish istiqbollari haqida bilib oling.
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