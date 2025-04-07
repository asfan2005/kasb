import React from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import { PartnersSlider } from "@/components/partners-slider"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Biz haqimizda
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                O'zbekiston yoshlari va mutaxassislari uchun kelajak kasblarini kashf etish va ularning 
                kasbiy rivojlanishiga ko'maklashish – bizning asosiy maqsadimiz
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Bizning vazifamiz</h2>
                  <p className="text-gray-600 mb-4">
                    Bizning vazifamiz O'zbekistonda kasblar, ta'lim va ishga joylashish imkoniyatlari
                    haqida eng ishonchli va foydali ma'lumotlarni taqdim etish orqali yoshlarga va 
                    mutaxassislarga kasbiy yo'l tanlashda ko'maklashishdir.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Biz O'zbekistondagi mehnat bozori tendensiyalarini muntazam o'rganamiz, eng 
                    istiqbolli sohalarni aniqlaymiz va kasblar bo'yicha batafsil ma'lumotlarni 
                    to'playlik. Buning natijasida esa ta'lim, kasb tanlash va kasbiy rivojlanish 
                    bo'yicha sifatli materiallarni yaratamiz.
                  </p>
                  <ul className="space-y-2 mt-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span>Mehnat bozori tadqiqotlari va statistikasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span>Kasblar haqida batafsil va aniq ma'lumotlar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span>Ta'lim imkoniyatlari va kasbiy tayyorgarlik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <span>Rezyume va intervyuga tayyorgarlik ko'rish bo'yicha maslahatlar</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                    alt="Team Meeting" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Bizning jamoa</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Bizning jamoa ta'lim, mehnat bozori tadqiqotlari, HR va kasbiy rivojlanish sohasidagi 
                  tajribali mutaxassislardan tashkil topgan. Biz O'zbekistonda yoshlar va mutaxassislar 
                  uchun kasbiy imkoniyatlarni kengaytirish va ularga kelajak kasblarini o'zlashtirishda 
                  yordam berish uchun birlashganmiz.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                      alt="Rustam Karimov" 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Rustam Karimov</h3>
                    <p className="text-blue-600 mb-4">Loyiha rahbari</p>
                    <p className="text-gray-600 mb-4">
                      10+ yillik HR va ta'lim sohasida tajribaga ega. Oldin yirik xalqaro kompaniyalarda HR direktor lavozimida ishlab, kadrlar tayyorlash dasturlarini boshqargan.
                    </p>
                  </div>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                      alt="Nilufar Rahimova" 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Nilufar Rahimova</h3>
                    <p className="text-blue-600 mb-4">Mehnat bozori tadqiqotchisi</p>
                    <p className="text-gray-600 mb-4">
                      Iqtisodchi va mehnat bozori tahlilchisi. O'zbekiston va Markaziy Osiyo mintaqasidagi mehnat bozori tendensiyalari bo'yicha ko'plab ilmiy ishlar muallifi.
                    </p>
                  </div>
                </div>
                
                {/* Team Member 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                      alt="Aziz Tursunov" 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Aziz Tursunov</h3>
                    <p className="text-blue-600 mb-4">IT va raqamli ta'lim bo'yicha mutaxassis</p>
                    <p className="text-gray-600 mb-4">
                      IT sohasida 8 yillik tajribaga ega bo'lib, raqamli ta'lim platformalarini yaratish va rivojlantirish bilan shug'ullangan. Karyera rivojlantirish bo'yicha trener.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Bizning metodologiyamiz</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Biz taqdim etayotgan ma'lumotlarning aniq va ishonchli bo'lishi uchun quyidagi 
                  manbalarga asoslanamiz va kompleks metodologiyani qo'llaymiz:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Ma'lumotlar manbalari</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <div>
                        <span className="font-medium">Davlat statistikasi va hisobotlari</span> - 
                        O'zbekiston Respublikasi Davlat statistika qo'mitasi, Bandlik va mehnat 
                        munosabatlari vazirligi ma'lumotlari
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <div>
                        <span className="font-medium">Xalqaro tashkilotlar ma'lumotlari</span> - 
                        Jahon banki, XMT, BMT va boshqa tashkilotlarning O'zbekiston bo'yicha 
                        hisobotlari
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <div>
                        <span className="font-medium">Ish beruvchilar so'rovlari</span> - 
                        Mahalliy va xalqaro kompaniyalar orasida o'tkazilgan so'rovlar natijalariga 
                        asoslangan tahlillar
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✅</span>
                      <div>
                        <span className="font-medium">Oliy ta'lim muassasalari</span> - 
                        Universitetlar va ta'lim markazlarining bitiruvchilar bo'yicha ma'lumotlari 
                        va karyera markazi hisobotlari
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Tadqiqot jarayonimiz</h3>
                  <ol className="space-y-5 relative border-l border-gray-200 pl-6 ml-6">
                    <li className="mb-10">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                      <h4 className="font-bold text-lg mb-1">Ma'lumotlarni to'plash</h4>
                      <p className="text-gray-600">Kasblar va mehnat bozori haqida barcha mumkin bo'lgan 
                      va ishonchli manbalardagi ma'lumotlarni to'plash</p>
                    </li>
                    <li className="mb-10">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                      <h4 className="font-bold text-lg mb-1">Tahlil va tekshirish</h4>
                      <p className="text-gray-600">To'plangan ma'lumotlarni tahlil qilish, ularni turli manbalar 
                      bilan solishtirish va tekshirish</p>
                    </li>
                    <li className="mb-10">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                      <h4 className="font-bold text-lg mb-1">Tizimlashtirish</h4>
                      <p className="text-gray-600">Ma'lumotlarni kasb kategoriyalari, sohalar va talablarga 
                      qarab tizimlashtirish</p>
                    </li>
                    <li>
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                      <h4 className="font-bold text-lg mb-1">Yangilash va taqdim etish</h4>
                      <p className="text-gray-600">Yakuniy ma'lumotlarni qulay formatda taqdim etish va 
                      ularni muntazam yangilab borish</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hamkorlarimiz</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Biz O'zbekistondagi va xalqaro tashkilotlar bilan hamkorlik qilamiz. Ushbu 
                  hamkorlik bizga aniq va sifatli ma'lumotlar bilan ishlash imkonini beradi.
                </p>
              </div>
              
              <PartnersSlider />
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Biz bilan bog'laning</h2>
                  <p className="text-gray-600 mb-6">
                    Agar sizda savollar, takliflar yoki hamkorlik g'oyalari bo'lsa, biz bilan bog'lanishingiz mumkin. 
                    Biz doimo yangi g'oyalar va hamkorlikka ochiqmiz!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Manzil</h3>
                        <p className="text-gray-600">Toshkent shahri, Amir Temur ko'chasi, 108-uy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@example.uz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Telefon</h3>
                        <p className="text-gray-600">+998 90 123 45 67</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Xabar yuborish</h3>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Ismingiz</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Xabar matni</label>
                      <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Yuborish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 