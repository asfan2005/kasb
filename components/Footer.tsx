import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">O'zbekiston</h3>
            <p className="text-gray-600 mb-4 text-sm">
              O'zbekiston — qadimiy madaniyat va zamonaviy imkoniyatlar mamlakati. Bizning veb-saytimiz orqali eng so'nggi yangiliklar, rivojlanish haqida ma'lumotlar va ko'proq imkoniyatlar bilan tanishing.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Asosiy Bo'limlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Loyihalar
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Rezyume
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Kasblar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> IT dasturchi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Marketing mutaxassisi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Moliya va bank ishi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center">
                  <span className="mr-1">✅</span> Ta'lim sohasi
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Bog'lanish</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm flex items-start">
                <span className="mr-1 mt-1">✅</span> Manzil: Toshkent shahri, Amir Temur ko'chasi, 108-uy
              </li>
              <li className="text-gray-600 text-sm flex items-start">
                <span className="mr-1 mt-1">✅</span> Telefon: +998 90 123 45 67
              </li>
              <li className="text-gray-600 text-sm flex items-start">
                <span className="mr-1 mt-1">✅</span> Email: info@example.uz
              </li>
              <li className="text-gray-600 text-sm flex items-start">
                <span className="mr-1 mt-1">✅</span> Ish vaqti: 09:00 - 18:00, Dushanba - Juma
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} O'zbekiston. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
} 