import React from 'react'
import {Header} from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FeatureStepsDemo } from '@/components/blocks/feature-steps-demo'
import { FeaturesSectionWithHoverEffectsDemo } from '@/components/blocks/features-section-with-hover-effects-demo'
import { TimelineDemo } from '@/components/blocks/timeline-demo'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <section className="py-8">
          <FeatureStepsDemo />
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              O'zbekistonda Eng Ko'p Talab Qilinadigan Kasblar
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Quyida O'zbekiston mehnat bozorida eng ko'p talab qilinadigan va yuqori daromad keltiradigan 
              kasblar ro'yxati bilan tanishing. Har bir kasb haqida batafsil ma'lumot olish uchun 
              "Batafsil ma'lumot" tugmasini bosing.
            </p>
            <FeaturesSectionWithHoverEffectsDemo />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Rivojlanish Tarixi
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              O'zbekistonda so'nggi yillarda sodir bo'lgan eng muhim iqtisodiy va ijtimoiy o'zgarishlar 
              bilan tanishing. Bu tarixiy ma'lumotlar mamlakatimizning qanday rivojlanganini ko'rsatadi.
            </p>
          </div>
          <TimelineDemo />
        </section>
        
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Kelajakdagi imkoniyatlardan xabardor bo'ling</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Eng so'nggi yangiliklar, kasblar bo'yicha maslahatlar va O'zbekistondagi imkoniyatlar haqida birinchilardan bo'lib bilib turing.
            </p>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email manzilingiz" 
                className="px-4 py-3 flex-grow rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 