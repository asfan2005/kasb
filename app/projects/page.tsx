"use client";

import React, { useState, useEffect } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full uppercase font-semibold tracking-wider mb-4">Innovatsion loyihalar</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Bizning Loyihalar
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                O'zbekistonda kasblar va ta'lim sohasida innovatsion yechimlar va imkoniyatlar. Biz O'zbekiston yoshlari uchun zamonaviy kasblarni o'rganish va rivojlanish imkoniyatlarini yaratamiz.
              </p>
              <div className="flex justify-center mb-10">
                <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-white rounded-full shadow-sm font-medium text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Kasblar bo'yicha ma'lumotlar
                </span>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm font-medium text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Online ta'lim
                </span>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm font-medium text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Karyera rivojlantirish
                </span>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm font-medium text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  IT ko'nikmalar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <StatCounter 
                  finalValue={100} 
                  suffix="+" 
                  title="Kasblar katalogda" 
                  color="text-blue-600" 
                />
                <StatCounter 
                  finalValue={50000} 
                  suffix="+" 
                  title="Foydalanuvchilar" 
                  color="text-green-600" 
                  formatter={true}
                />
                <StatCounter 
                  finalValue={250} 
                  suffix="+" 
                  title="Online kurslar" 
                  color="text-purple-600" 
                />
                <StatCounter 
                  finalValue={12} 
                  suffix="+" 
                  title="Hamkor tashkilotlar" 
                  color="text-red-600" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Project 1 */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                      alt="Kasblar katalogi" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">Asosiy loyiha</span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Kasblar katalogi</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      O'zbekistonda eng ko'p talab qilinadigan kasblar bo'yicha batafsil ma'lumotlar bazasi. 
                      Ushbu loyiha har bir kasb bo'yicha kerakli ko'nikmalar, o'rtacha ish haqi, kerakli 
                      ta'lim darajasi va karyera istiqbollari haqida to'liq ma'lumot beradi.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">100+ kasb bo'yicha batafsil ma'lumotlar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Har bir kasb uchun zarur ko'nikmalar ro'yxati</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">O'qish mumkin bo'lgan universitetlar va kurslar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Maxsus intervyularda muvaffaqiyatli mutaxassislar bilan suhbatlar</span>
                      </div>
                    </div>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center">
                      Batafsil ma'lumot
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                  <div className="md:order-2 rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71" 
                      alt="Online ta'lim platformasi" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="md:order-1">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">Ta'lim</span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Online ta'lim platformasi</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      O'zbekistondagi turli kasblar uchun maxsus yaratilgan online kurslar platformasi. 
                      Bepul va pullik kurslar orqali mehnat bozorida talab yuqori bo'lgan ko'nikmalarni 
                      rivojlantirish imkoniyati.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">50+ bepul va 200+ premium kurslar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Soha mutaxassislari tomonidan tayyorlangan darslar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Interaktiv topshiriqlar va imtihonlar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Yakuniy sertifikatlar va ish beruvchilar bilan bog'lanish</span>
                      </div>
                    </div>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center">
                      Kurslarga kirish
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                      alt="Karyera rivojlantirish" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">Karyera</span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Karyera rivojlantirish markazi</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      O'zbekistonda karyerangizni rivojlantirish uchun kerakli barcha resurslar va 
                      maslahatlar. CV tayyorlash, intervyuga tayyorgarlik va karyera rejalashtirish 
                      bo'yicha bepul yordam.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">CV va rezyume tayyorlash bo'yicha qo'llanmalar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Mock intervyular va maslahatlar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Karyera rejasini tuzish xizmati</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Muvaffaqiyatli mutaxassislar bilan mentorlik dasturi</span>
                      </div>
                    </div>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center">
                      Markaz xizmatlari
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                  <div className="md:order-2 rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521" 
                      alt="IT sohasi imkoniyatlari" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="md:order-1">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">IT</span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">IT sohasidagi imkoniyatlar</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      O'zbekistonda IT sohasidagi kasblar, imkoniyatlar va o'qish joylari haqida to'liq 
                      ma'lumot. Dasturlash tillari, yo'nalishlar va IT sohasi tendensiyalarini o'z ichiga 
                      olgan to'liq yo'riqnoma.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">20+ IT kasblar bo'yicha batafsil ma'lumotlar</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">O'zbekistondagi IT kompaniyalari katalogi</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">Boshlang'ich IT mutaxassislari uchun yo'l xaritasi</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✅</span>
                        <span className="text-gray-700">IT Park bilan hamkorlikdagi imkoniyatlar va imtiyozlar</span>
                      </div>
                    </div>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center">
                      IT kasblarni o'rganish
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Rejalashtirilgan loyihalar</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Yaqin kelajakda ishga tushirilishi rejalashtirilgan loyihalarimiz bilan tanishing. 
                  Ushbu loyihalar O'zbekistonda kasbiy ta'lim, ish topish va karyera rivojlantirishni 
                  yanada osonlashtirish uchun yaratilmoqda.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Mintaqaviy imkoniyatlar xaritasi</h3>
                  <p className="text-gray-600 mb-4">
                    O'zbekistonning har bir mintaqasidagi ish imkoniyatlari, kasblar va iqtisodiy 
                    ko'rsatkichlarni interaktiv xarita shaklida taqdim etish.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Q3 2024</span>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Rejada</span>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tadbirkorlik akademiyasi</h3>
                  <p className="text-gray-600 mb-4">
                    O'z biznesini boshlash istagida bo'lgan yoshlar uchun to'liq ta'lim platformasi. 
                    Biznes rejadan tortib investorlar bilan ishlashgacha bo'lgan barcha bosqichlar.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Q4 2024</span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Ishlab chiqilmoqda</span>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Kasbiy ta'lim AR/VR loyihasi</h3>
                  <p className="text-gray-600 mb-4">
                    Augmented Reality va Virtual Reality texnologiyalari yordamida kasbiy ko'nikmalarni 
                    o'rgatish. Real sharoitlarga yaqin muhitda amaliy mashg'ulotlar.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Q2 2025</span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Konseptual bosqichda</span>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">AI orqali ish tanlash</h3>
                  <p className="text-gray-600 mb-4">
                    Sun'iy intellekt asosida ishlaydigan tizim orqali har bir inson uchun optimal kasbni 
                    tanlash. Shaxsiy xususiyatlar, qiziqishlar va ko'nikmalarni hisobga olgan holda.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Q1 2025</span>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Tadqiqot bosqichda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Development Roadmap */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Loyihalar rivojlanish xaritasi</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Loyihalarimiz rivojlanishining asosiy bosqichlari va muhim sanalari. Quyidagi xarita 
                  biz amalga oshirgan va rejalashtirayotgan ishlarni ko'rsatadi.
                </p>
              </div>
              
              <div className="relative">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                
                {/* Roadmap items */}
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">2022-Q2</span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Loyiha boshlandi</h3>
                      <p className="text-gray-600">
                        Kasblar katalogi loyihasi boshlandi. O'zbekistonda mehnat bozori tahlili va 
                        eng ko'p talab qilinadigan kasblar bo'yicha ma'lumotlar to'planishi boshlandi.
                      </p>
                    </div>
                    <div className="md:w-8 relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="h-8 w-8 rounded-full border-4 border-blue-600 bg-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-16 hidden md:block order-1"></div>
                    <div className="md:w-8 relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="h-8 w-8 rounded-full border-4 border-green-600 bg-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 order-2 md:order-3 md:text-left">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">2023-Q1</span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Kurslar ishga tushdi</h3>
                      <p className="text-gray-600">
                        Online ta'lim platformasi ishga tushirildi. Dastlabki 50 ta kurs ishlab chiqildi 
                        va platformada joylashtirildi. Foydalanuvchilar ro'yxatdan o'tishi boshlandi.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">2023-Q3</span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Karyera markazi</h3>
                      <p className="text-gray-600">
                        Karyera rivojlantirish markazi ishga tushirildi. CV tayyorlash, intervyuga 
                        tayyorgarlik ko'rish va karyera maslahatlarini berish xizmatlari yo'lga qo'yildi.
                      </p>
                    </div>
                    <div className="md:w-8 relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="h-8 w-8 rounded-full border-4 border-purple-600 bg-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
                  </div>
                  
                  {/* Item 4 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-16 hidden md:block order-1"></div>
                    <div className="md:w-8 relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="h-8 w-8 rounded-full border-4 border-red-600 bg-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 order-2 md:order-3 md:text-left">
                      <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">2024-Q1</span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">IT kasblar loyihasi</h3>
                      <p className="text-gray-600">
                        IT sohasidagi kasblar bo'yicha maxsus loyiha ishga tushirildi. O'zbekiston IT Park 
                        bilan hamkorlikda IT sohasidagi kasblar va imkoniyatlar katalogi yaratildi.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 5 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider mb-2">2024-Q3</span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Mintaqaviy xarita</h3>
                      <p className="text-gray-600">
                        Mintaqaviy imkoniyatlar xaritasi loyihasining ishga tushirilishi rejalashtirilgan. 
                        Hozirda loyiha ustida tayyorgarlik ishlari olib borilmoqda.
                      </p>
                    </div>
                    <div className="md:w-8 relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="h-8 w-8 rounded-full border-4 border-yellow-600 bg-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Foydalanuvchilar fikrlari</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Bizning loyihalardan foydalangan insonlarning fikrlari va ularning muvaffaqiyat hikoyalari.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-8 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    "
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "Kasblar katalogi mening karyeramni o'zgartirdi. Men IT sohasiga qiziqardim, lekin aniq 
                    qaysi yo'nalishni tanlashni bilmasdim. Katalogdagi ma'lumotlar orqali UI/UX dizayn sohasi 
                    men uchun eng mos ekanligini tushundim va bugun muvaffaqiyatli dizayner sifatida ishlamoqdaman."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Kamola Mahmudova</h4>
                      <p className="text-sm text-gray-600">UI/UX Dizayner, MyTaxi</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white p-8 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
                    "
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "Men online ta'lim platformasi orqali Frontend dasturlashni o'rgandim. Ta'lim sifati 
                    juda yuqori, real loyihalar bilan ishlash imkoniyati berildi. Kursni tugatganimdan 
                    so'ng bir oy ichida ishga kirdim. Bu men uchun hayotni o'zgartiruvchi tajriba bo'ldi."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sardor Aliyev</h4>
                      <p className="text-sm text-gray-600">Frontend dasturchi, IT Park Rezidenti</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="bg-white p-8 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                    "
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "Karyera rivojlantirish markazidagi mutaxassislar yordamida CV va portfoliomni 
                    yangiladim. Ular bergan maslahatlar tufayli intervyularga yaxshi tayyorlandim va 
                    oxir-oqibat 3 ta taklifdan eng yaxshisini tanladim. Ularning xizmatlarini barcha do'stlarimga tavsiya qilaman."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Aziza Karimova</h4>
                      <p className="text-sm text-gray-600">Marketing menejeri, Najot Ta'lim</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 4 */}
                <div className="bg-white p-8 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                    "
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "IT sohasidagi kasblar katalogi juda foydali resurs. Men avval Data Science sohasiga 
                    qiziqardim, lekin loyihadagi ma'lumotlarni o'rgangach, O'zbekistonda Backend dasturlashga 
                    talab yuqoriroq ekanligini bilib oldim. Bu men uchun muhim qaror qabul qilishimga yordam berdi."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Bobur Rustamov</h4>
                      <p className="text-sm text-gray-600">Backend dasturchi, UzCard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Bizning loyihalarimizda ishtirok eting</h2>
              <p className="text-xl text-blue-100 mb-8">
                Agar sizda g'oyalar bo'lsa yoki bizning jamoa bilan hamkorlik qilmoqchi bo'lsangiz, 
                biz bilan bog'laning. Birgalikda O'zbekiston uchun yanada ko'proq imkoniyatlar yaratamiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-6 py-3 rounded-md transition-colors">
                  Hamkorlik taklif qilish
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-colors">
                  Loyihalar haqida so'rash
                </button>
              </div>
            </div>
          </div>
        </section>

      

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ko'p so'raladigan savollar</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Loyihalarimiz haqida eng ko'p beriladigan savollarga javoblar bilan tanishing.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full" defaultValue="1">
                <AccordionItem value="1" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Loyihalardan foydalanish bepulmi?</span>
                      <span className="text-sm font-normal text-gray-600">Qaysi xizmatlar bepul, qaysilari pullik</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Kasblar katalogi va asosiy ma'lumotlar bazasi bepul foydalanish uchun ochiq. Premium kurslar va 
                    individual konsultatsiyalar uchun to'lov talab qilinadi. Biroq, biz ko'plab bepul kurslar va 
                    resurslarni ham taqdim etamiz.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="2" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Karyera markazi xizmatlaridan qanday foydalanish mumkin?</span>
                      <span className="text-sm font-normal text-gray-600">Ro'yxatdan o'tish va xizmatlardan foydalanish</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Karyera markazi xizmatlaridan foydalanish uchun saytimizda ro'yxatdan o'tib, "Karyera markazi" 
                    bo'limiga kirishingiz kerak. U yerda CV tekshirish, intervyuga tayyorgarlik va karyera maslahatlarini 
                    olish imkoniyatlari mavjud. Har bir xizmat uchun alohida ro'yxatdan o'tish talab qilinadi.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="3" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Kurslarni tugatgandan so'ng sertifikat beriladimi?</span>
                      <span className="text-sm font-normal text-gray-600">Sertifikatlar va ularning tan olinishi haqida</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Ha, barcha kurslarni muvaffaqiyatli tugatganingizdan so'ng elektron sertifikat beriladi. 
                    Premium kurslar uchun siz Uzbekistan IT Park tomonidan tan olingan sertifikatlarni olasiz, 
                    bu ish topishda qo'shimcha afzallik beradi.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="4" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Loyihalaringiz bo'yicha hamkorlik qilish mumkinmi?</span>
                      <span className="text-sm font-normal text-gray-600">Hamkorlik va takliflar uchun</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Albatta, biz yangi hamkorliklar va takliflarga doimo ochiqmiz. Saytimizning "Hamkorlik" bo'limiga 
                    o'tib, o'z taklifingizni yuborishingiz mumkin yoki to'g'ridan-to'g'ri info@example.uz elektron 
                    pochta manziliga xabar yuborishingiz mumkin.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="5" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Online kurslarni mobil qurilmalarda o'rganish mumkinmi?</span>
                      <span className="text-sm font-normal text-gray-600">Mobil qurilmalar uchun imkoniyatlar</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Ha, barcha kurslarimiz mobil qurilmalar uchun moslashtirilgan. Siz telefon yoki planshetda ham 
                    bemalol o'rganishingiz mumkin. Android va iOS qurilmalar uchun maxsus mobil ilovamiz ham mavjud, 
                    uni Google Play yoki App Store orqali yuklab olishingiz mumkin.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="6" className="py-2 border-b border-gray-200">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left text-[15px] font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      <span>Qanday to'lov usullari qabul qilinadi?</span>
                      <span className="text-sm font-normal text-gray-600">To'lov turlari va xavfsizlik</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-gray-600">
                    Biz turli xil to'lov usullarini qabul qilamiz, jumladan: bank kartalari (Visa, Mastercard, UzCard, Humo), 
                    PayMe, Click, Apelsin va boshqa mobil to'lov tizimlari. Barcha to'lovlar xavfsiz shifrlangan kanal orqali 
                    amalga oshiriladi va sizning ma'lumotlaringiz to'liq himoyalangan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// StatCounter komponenti
interface StatCounterProps {
  finalValue: number;
  suffix?: string;
  title: string;
  color: string;
  formatter?: boolean;
}

function StatCounter({ finalValue, suffix = "", title, color, formatter = false }: StatCounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Boshlang'ich qiymat
    let startValue = 0;
    // Animatsiya davomiyligi (ms)
    const duration = 2000;
    // Qadamlar soni
    const steps = 50;
    // Har bir qadam uchun vaqt (ms)
    const stepTime = duration / steps;
    // Har bir qadam qiymati
    const valueStep = finalValue / steps;
    
    let timer: NodeJS.Timeout;
    let currentStep = 0;
    
    const updateCounter = () => {
      currentStep += 1;
      // Animatsiyani tezroq ko'rinishi uchun kubik funktsiya
      const progress = Math.min(currentStep / steps, 1);
      const easedProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const nextValue = Math.ceil(easedProgress * finalValue);
      
      setCount(nextValue);
      
      if (currentStep < steps) {
        timer = setTimeout(updateCounter, stepTime);
      } else {
        setCount(finalValue);
      }
    };
    
    timer = setTimeout(updateCounter, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [finalValue]);
  
  const formattedCount = formatter 
    ? new Intl.NumberFormat().format(count).replace(',', ' ') 
    : count;
  
  return (
    <div className="p-6">
      <p className={`text-4xl font-bold ${color} mb-2`}>
        {formattedCount}{suffix}
      </p>
      <p className="text-gray-600">{title}</p>
    </div>
  );
} 