"use client";

import React from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full uppercase font-semibold tracking-wider mb-4">Karyera qurish</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Professional Rezyume Yaratish
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                O'zbekiston mehnat bozorida muvaffaqiyatga erishish uchun rezyume tayyorlash, suhbatga tayyorgarlik ko'rish va kasbiy portfoliongizni rivojlantirish bo'yicha professional maslahatlar
              </p>
              <div className="flex justify-center mb-10">
                <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Guidelines */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Yaxshi rezyume yaratish asoslari</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Professional rezyume - bu sizning shaxsiy marketing vositangiz. U ish beruvchilarga qisqa vaqt ichida siz haqingizda to'liq ma'lumot berishi kerak. Quyidagi asosiy tamoyillarga amal qilish sizning rezyumengizni ajralib turishiga yordam beradi.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span className="text-gray-700 font-medium">Qisqa va aniq bo'ling</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span className="text-gray-700 font-medium">Kasbiy tajribangizni ta'kidlang</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span className="text-gray-700 font-medium">Yutuqlaringizni miqdoriy ko'rsatkichlar bilan ifodalang</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span className="text-gray-700 font-medium">Ishga mos kalit so'zlardan foydalaning</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span className="text-gray-700 font-medium">Professional dizayn va formatdan foydalaning</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4" 
                    alt="Professional resume" 
                    width={600} 
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Resume Sections */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Rezyume asosiy qismlari</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Section 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Shaxsiy ma'lumotlar</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>To'liq ism-familiya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Aloqa ma'lumotlari (telefon, email)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>LinkedIn profili</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Portfolio yoki shaxsiy veb-sayt (agar mavjud bo'lsa)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ta'lim va malaka</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Oliy ta'lim (universitet, yo'nalish, yillar)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Qo'shimcha kurslar va sertifikatlar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Kasbiy malakalar va ko'nikmalar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Chet tillari darajasi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ish tajribasi</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Kompaniya nomi va lavozim</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Ishlagan yillar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Asosiy vazifalar va mas'uliyatlar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✅</span>
                        <span>Erishgan natijalar va yutuqlar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resume Templates */}
              <div className="mb-20">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Rezyume namunalari</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Template 1 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-60">
                      <Image 
                        src="https://images.unsplash.com/photo-1517842645767-c639042777db" 
                        alt="IT sohasi rezyume namunasi" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold text-xl p-4">IT sohasi uchun</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">Dasturchilar, UX/UI dizaynerlar, IT menejerlari uchun maxsus tayyorlangan rezyume namunalari</p>
                      <a href="/downloads/it-resume-template.pdf" className="text-blue-600 font-medium hover:underline">Yuklab olish</a>
                    </div>
                  </div>

                  {/* Template 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-60">
                      <Image 
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" 
                        alt="Biznes sohasi rezyume namunasi" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold text-xl p-4">Biznes sohasi uchun</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">Marketing, moliya, buxgalteriya va boshqaruv sohasidagi mutaxassislar uchun rezyume namunalari</p>
                      <a href="/downloads/business-resume-template.pdf" className="text-blue-600 font-medium hover:underline">Yuklab olish</a>
                    </div>
                  </div>

                  {/* Template 3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-60">
                      <Image 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
                        alt="Kreativ soha rezyume namunasi" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold text-xl p-4">Kreativ soha uchun</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">Dizaynerlar, media mutaxassislari, ijodiy kasb egalari uchun ajralib turadigan rezyume namunalari</p>
                      <a href="/downloads/creative-resume-template.pdf" className="text-blue-600 font-medium hover:underline">Yuklab olish</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Tips */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Intervyuga tayyorgarlik ko'rish</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Intervyu jarayonida muvaffaqiyatli ishtirok etish uchun tavsiyalar va maslahatlar. Bu bosqich ishga qabul qilish jarayonining eng muhim qismi hisoblanadi.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
                  <Image 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21" 
                    alt="Interview preparation" 
                    width={600} 
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Intervyuga tayyorlanish bosqichlari</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-center mr-3">1</span>
                        <span>Kompaniya haqida tadqiqot</span>
                      </h4>
                      <p className="text-gray-600 pl-11">
                        Kompaniyaning faoliyati, qadriyatlari, mahsulotlari yoki xizmatlari haqida ma'lumot to'plang
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-center mr-3">2</span>
                        <span>Lavozim talablarini o'rganing</span>
                      </h4>
                      <p className="text-gray-600 pl-11">
                        Lavozim tavsifi bilan tanishing va ish uchun zarur bo'lgan ko'nikmalaringizni tahlil qiling
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-center mr-3">3</span>
                        <span>Savollar va javoblarni tayyorlang</span>
                      </h4>
                      <p className="text-gray-600 pl-11">
                        Ko'p so'raladigan savollar ro'yxatini tuzing va ularga javoblarni tayyorlang
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-center mr-3">4</span>
                        <span>Mock intervyu o'tkazing</span>
                      </h4>
                      <p className="text-gray-600 pl-11">
                        Do'stingiz yoki oila a'zolaringiz bilan amaliy intervyu mashg'ulotini o'tkazing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ko'p so'raladigan savollar</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Rezyume tayyorlash va intervyu jarayoni haqida eng ko'p beriladigan savollarga javoblar
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full" defaultValue="1">
                <AccordionItem value="1" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Rezyume qancha uzun bo'lishi kerak?</span>
                      <span className="text-sm font-normal text-gray-600">Rezyume hajmi haqida maslahatlar</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Ko'p hollarda, 1-2 sahifali rezyume yetarli hisoblanadi. Ish tajribasi kam bo'lgan yoshlar uchun 1 sahifa tavsiya etiladi. 
                    10 yildan ortiq tajribaga ega bo'lganlar uchun 2 sahifa maqbul. Qisqa va aniq bo'lish muhim - ish beruvchilar ko'p vaqt 
                    sarflamaydilar. Eng muhim ma'lumotlarni rezyumening yuqori qismida joylashtiring.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="2" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Rezyumeni har bir ish uchun moslashtirish kerakmi?</span>
                      <span className="text-sm font-normal text-gray-600">Rezyumeni moslashtirishning ahamiyati</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Ha, rezyumeni har bir ish o'rniga moslashtirish juda muhim. Ish e'lonidagi kalit so'zlarni rezyumega kiritish, 
                    kerakli ko'nikmalar va tajribani ta'kidlash, shuningdek, lavozimga mos yutuqlaringizni ajratib ko'rsatish kerak. 
                    Bunday yondashuv ATS (Application Tracking System) tizimlaridan muvaffaqiyatli o'tish imkoniyatini oshiradi.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="3" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Rezyumeda rasm qo'yish kerakmi?</span>
                      <span className="text-sm font-normal text-gray-600">Shaxsiy rasm qo'yish masalasi</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    O'zbekistonda rezyumega rasm qo'yish amaliyoti keng tarqalgan, ammo bu majburiy emas. Rasm qo'yishni istasangiz, 
                    professional ko'rinishdagi, ochiq fonda, rasmiy kiyimdagi suratni tanlang. Ba'zi xalqaro kompaniyalar diskriminatsiyadan 
                    qochish uchun rasmsiz rezyumelarni afzal ko'rishi mumkin, shuning uchun kompaniya talablariga e'tibor bering.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="4" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Intervyuda eng ko'p so'raladigan savollar qanday?</span>
                      <span className="text-sm font-normal text-gray-600">Ko'p uchraydigan intervyu savollari</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Intervyuda ko'p uchraydigan savollar: "O'zingiz haqingizda gapirib bering", "Nima uchun aynan shu kompaniyada ishlashni 
                    xohlaysiz?", "Kuchli va zaif tomonlaringiz nima?", "5 yildan keyin o'zingizni qayerda ko'rasiz?", "Stressli vaziyatlarda 
                    qanday harakat qilasiz?", "Nima uchun aynan sizni ishga olishimiz kerak?". Bu savollarga oldindan tayyorlanib borish 
                    muhim ahamiyatga ega.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="5" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Tajriba bo'lmasa, rezyumega nima yozish kerak?</span>
                      <span className="text-sm font-normal text-gray-600">Yosh mutaxassislar uchun maslahatlar</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Tajriba bo'lmasa, ta'lim, ko'ngillilik ishlari, o'quv davridagi loyihalar, universitet faoliyati, o'quv amaliyoti, 
                    shaxsiy loyihalar va hobbilaringizni ko'rsating. Shuningdek, kuchli tomonlaringiz, texnik va yumshoq ko'nikmalaringizni 
                    ta'kidlang. Motivatsion xat yozish ham muhim - unda nima uchun aynan shu soha va lavozimga qiziqishingizni tushuntiring.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="6" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Intervyuda ish haqi haqida qanday so'rash kerak?</span>
                      <span className="text-sm font-normal text-gray-600">Maosh muhokamasi bo'yicha maslahatlar</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Ish haqi haqida birinchi intervyuda emas, balki keyingi bosqichlarda so'rash tavsiya etiladi. Savol berishdan oldin, 
                    shu lavozim uchun o'rtacha ish haqini o'rganing. "Bu lavozimning maosh diapazoni qanday?" deb so'rash mumkin. 
                    Agar ish beruvchi sizning kutganingizni so'rasa, o'rtacha bozor narxiga asoslangan diapazonni ayting. Aniq raqamlardan ko'ra, 
                    diapazon aytish yaxshiroq.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Karyerangizni rivojlantiring</h2>
              <p className="text-xl text-blue-100 mb-8">
                Professional rezyume tayyorlash, intervyularga tayyorgarlik ko'rish va karyerangizni rivojlantirish uchun bizning 
                mutaxassislar bilan bog'laning. Individuallashtiririlgan xizmatlarimiz orqali orzuingizdagi ishni topishga yordam beramiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/consultation" className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-6 py-3 rounded-md transition-colors text-center">
                  Maslahat olish
                </a>
                <a href="/resume-templates" className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-colors text-center">
                  Rezyume shablonlarini ko'rish
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 