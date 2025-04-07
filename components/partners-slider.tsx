'use client';
import React from 'react';
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function PartnersSlider() {
  return (
    <div className="w-full py-10">
      <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Iqtisodiy Taraqqiyot Vazirligi"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">Iqtisodiy Taraqqiyot Vazirligi</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Bandlik va Mehnat Munosabatlari Vazirligi"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">Bandlik va Mehnat Vazirligi</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="O'zbekiston IT Park"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">O'zbekiston IT Park</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Toshkent Davlat Iqtisodiyot Universiteti"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">Toshkent Davlat Iqtisodiyot Universiteti</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="O'zbekiston Savdo-Sanoat Palatasi"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">O'zbekiston Savdo-Sanoat Palatasi</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Yoshlar Ishlari Agentligi"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">Yoshlar Ishlari Agentligi</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="UNDP O'zbekiston"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">UNDP O'zbekiston</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-64 h-36">
          <div className="flex flex-col items-center">
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="GIZ O'zbekiston"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">GIZ O'zbekiston</p>
          </div>
        </div>
      </InfiniteSlider>
    </div>
  );
} 