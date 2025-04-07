import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023-2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            O'zbekistonda IT sohasining jadal rivojlanishi va yangi texnologik imkoniyatlar. Bu davr mamlakatimizning raqamli transformatsiyasida muhim bosqich bo'ldi.
          </p>
          <div className="mb-8">
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-center mb-2">
                ✅ <span className="font-medium">IT sohasi rivoji:</span> O'zbekiston iqtisodiyotining eng tez rivojlanayotgan segmentlaridan biri bo'lib, milliy dasturchilarning mahalliy va xalqaro loyihalardagi ishtiroki sezilarli darajada oshdi.
              </span>
              <span className="flex gap-2 items-center mb-2 pl-6">
                ✅ <span className="font-medium">IT Park o'sishi:</span> IT Park rezidentlari soni 2023-yilda 500 dan oshdi, bu esa 2020-yilga nisbatan 300% o'sishni ko'rsatadi.
              </span>
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-center mb-2">
                ✅ <span className="font-medium">Xalqaro hamkorlik:</span> 2024-yilga kelib, O'zbekistonda ko'plab xalqaro texnologiya kompaniyalari o'z markazlarini ocha boshladi.
              </span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Texnoparklar:</span> Toshkentda innovatsion texnoparklar soni 5 taga yetdi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Investitsiyalar:</span> IT sohasiga investitsiyalar hajmi 200 million dollardan oshdi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Mutaxassislar:</span> Dasturchilar soni 30,000 dan ko'proq mutaxassisni tashkil etdi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Ta'lim:</span> IT ta'lim markazlari va bootcamp'lar soni 50 dan oshdi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Eksport:</span> O'zbekiston IT eksporti 100 million dollardan oshib ketdi
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop"
              alt="IT Development in Uzbekistan"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              alt="Digital Transformation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
              alt="Tech Education"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              alt="Tech Workspace"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020-2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            <span className="flex gap-2 items-start">
              ✅ <span className="font-medium">Biznes rivojlanishi:</span> O'zbekistonda tadbirkorlik va biznes ekotizimining rivojlanishi, xalqaro hamkorlikning kuchayishi. Bu yillar davomida mamlakatimiz iqtisodiyoti yangi bosqichga ko'tarildi.
            </span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            <span className="flex gap-2 items-start">
              ✅ <span className="font-medium">Davlat yordami:</span> Bu yillarda O'zbekistonda yangi bizneslarga subsidiyalar va soliq imtiyozlari taqdim etildi, bu esa iqtisodiyotning barqaror o'sishiga va yangi ish o'rinlari yaratilishiga olib keldi.
            </span>
          </p>
          <div className="mb-8">
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-start">
                ✅ <span className="font-medium">Muhim o'zgarishlar:</span> Ushbu davrda tadbirkorlik sohasida quyidagi muhim o'zgarishlar amalga oshirildi:
              </span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Raqamlashtirish:</span> Biznesni ro'yxatdan o'tkazish jarayoni soddalashtirildi va onlayn platformalarga o'tkazildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Moliyaviy yordam:</span> Kichik va o'rta biznesga 20 trilliоn so'mdan оrtiq imtiyozli kreditlar ajratildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Eksport qo'llab-quvvatlash:</span> Eksportchi kompaniyalar uchun bojxona to'lovlarida qo'shimcha imtiyozlar berildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Investitsiya siyosati:</span> Xorijiy investоrlar uchun maxsus investitsiya vizalari jоriy etildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✅ <span className="font-medium">Iqtisodiy zonalar:</span> Erkin iqtisоdiy zоnalar sоni 24 taga yetdi
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-start">
                ✅ <span className="font-medium">Natijalar:</span> 2022-yilga kelib O'zbekistonda 500 mingdan ortiq yangi biznes sub'ektlari ro'yxatdan o'tkazildi, bu esa 2019-yilga nisbatan 45% ko'p. Shu bilan birga, xorijiy investitsiyalar hajmi 2021-yilda 7.6 milliard dollarni tashkil etdi.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187&auto=format&fit=crop"
              alt="Business Development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Business Meeting"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Uzbekistan Finance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="Business Analysis"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017-2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            <span className="flex gap-2 items-start">
              ✅ <span className="font-medium">Turizm rivoji:</span> O'zbekistonda turizm sohasining yangi bosqichi, infratuzilma va xizmat ko'rsatish sifatining oshishi. Bu davrda mamlakat turizm salohiyatini to'liq namoyon qilish uchun muhim islohotlar amalga oshirildi.
            </span>
          </p>
          <div className="mb-8">
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-start">
                ✅ <span className="font-medium">Davlat dasturi:</span> 2017-2021 yillarga mo'ljallangan "O'zbekiston Respublikasida turizmni rivojlantirish bo'yicha kompleks chora-tadbirlar dasturi" doirasida quyidagi muhim o'zgarishlar amalga oshirildi:
              </span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Turizmni rivojlantirish bo'yicha Davlat dasturi:</span> 2019-2025 yillarda turizm sohasini rivojlantirish uchun strategik hujjat qabul qilindi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Viza tartibining soddalashtirishi:</span> 86 dan ortiq davlat fuqarolari uchun vizasiz rejim joriy etildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Zamonaviy mehmonxonalar qurilishi:</span> 2019-yilda 270 dan ortiq yangi mehmonxonalar qurildi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <span className="font-medium">Samarqand va Buxoroda turistik infratuzilmani kengaytirish:</span> Tarixiy shaharlarda transport va mehmonxona infratuzilmasi modernizatsiya qilindi
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✅ <span className="font-medium">Xalqaro turistlar sonining sezilarli o'sishi:</span> 2019-yilda O'zbekistonga 6.7 million sayyoh tashrif buyurdi, bu 2016-yilga nisbatan 3 baravar ko'p
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-start">
                ✅ <span className="font-medium">Xalqaro e'tirof:</span> Bu islohotlar natijasida O'zbekiston Jahon turizm tashkiloti (UNWTO) tomonidan 2019-yilda eng tez rivojlanayotgan turizm yo'nalishlaridan biri sifatida tan olindi.
              </span>
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <span className="flex gap-2 items-start">
                ✅ <span className="font-medium">Media e'tirof:</span> Nufuzli sayyohlik nashrlari "Lonely Planet" va "National Geographic" O'zbekistonni 2019-yilda tashrif buyurish uchun eng yaxshi mamlakatlar ro'yxatiga kiritdi.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1629220608817-0802c373e110?q=80&w=2070&auto=format&fit=crop"
              alt="Uzbekistan Tourism"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1629220608817-0802c373e110?q=80&w=2070&auto=format&fit=crop"
              alt="Uzbekistan Architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1629220608817-0802c373e110?q=80&w=2070&auto=format&fit=crop"
              alt="Uzbekistan Culture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1629220608817-0802c373e110?q=80&w=2070&auto=format&fit=crop"
              alt="Uzbekistan Hospitality"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
} 