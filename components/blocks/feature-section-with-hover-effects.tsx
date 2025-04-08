import { cn } from "@/lib/utils";
import {
  IconBriefcase,
  IconBuildingBank,
  IconBrush,
  IconCode,
  IconDeviceLaptop,
  IconHeartHandshake,
  IconSchool,
  IconWorldWww,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "IT dasturchi",
      description:
        "Web va mobil ilovalar uchun dasturlar yaratish bo'yicha mutaxassis. O'zbekistonda o'rtacha oylik maosh: 10-25 million so'm.",
      icon: <IconCode size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/itdasturchi",
    },
    {
      title: "Marketing mutaxassisi",
      description:
        "Raqamli marketing va ijtimoiy tarmoq strategiyasini ishlab chiqish, mahsulotlarni targ'ib qilish uchun mutaxassis.",
      icon: <IconWorldWww size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/marketingmutaxassisi",
    },
    {
      title: "Moliya va bank ishi",
      description:
        "Moliyaviy tahlil, investitsiya loyihalarini boshqarish va yuqori daromadli bank xodimlari ishi.",
      icon: <IconBuildingBank size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/moliya-va-bank-ish",
    },
    {
      title: "Ta'lim sohasi",
      description:
        "O'qituvchi, o'quv dasturlarini ishlab chiqish va pedagogika sohasidagi kasblar.",
      icon: <IconSchool size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/ta-lim-sohasi",
    },
    {
      title: "Dizayn sohasida",
      description:
        "Grafik dizayn, UX/UI dizayn, mahsulot dizayni va brendlash bo'yicha mutaxassislar.",
      icon: <IconBrush size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/dizayn-sohasida",
    },
    {
      title: "Tibbiyot sohasida",
      description:
        "Shifokorlar, hamshiralar va boshqa tibbiyot mutaxassislari. Xususiy klinikalarda yuqori maosh.",
      icon: <IconHeartHandshake size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/tibbiyot-sohasida",
    },
    {
      title: "IT menejment",
      description:
        "IT loyihalarni boshqarish, jamoani rivojlantirish va texnologik strategiyalar ishlab chiqish.",
      icon: <IconDeviceLaptop size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/it-menejment",
    },
    {
      title: "Biznes maslahatchi",
      description:
        "Biznes strategiyalar bo'yicha maslahat berish, kompaniyalar uchun tahlillar o'tkazish va biznes rivojlantirish.",
      icon: <IconBriefcase size={24} />,
      buttonText: "Batafsil ma'lumot",
      buttonLink: "/biznes-maslahatchi",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  buttonText,
  buttonLink,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200",
        (index === 0 || index === 4) && "lg:border-l border-neutral-200",
        index < 4 && "lg:border-b border-neutral-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10 mb-4">
        {description}
      </p>
      <div className="mt-auto px-10 relative z-10">
        <a 
          href={buttonLink} 
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center group/button"
        >
          {buttonText}
          <svg 
            className="ml-1 w-4 h-4 group-hover/button:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}; 