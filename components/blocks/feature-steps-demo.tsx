import { FeatureSteps } from "@/components/blocks/feature-section"

const features = [
  { 
    step: 'Kasb 1', 
    title: 'IT mutaxassisi',
    content: 'Zamonaviy O\'zbekistonda eng rivojlanayotgan sohalardan biri IT bo\'lib, dasturchilar, web-dizaynerlar va IT-menejerlar mehnat bozorida yuqori talabga ega.', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Kasb 2',
    title: 'Tadbirkorlik va biznes',
    content: 'Kichik va o\'rta biznesni rivojlantirish, marketing strategiyalarini yaratish va biznes loyihalarni boshqarish bugungi O\'zbekistonda eng istiqbolli yo\'nalishlardan biri.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Kasb 3',
    title: 'Turizm va mehmonxona biznesi',
    content: 'O\'zbekistonda sayyohlik infratuzilmasining rivojlanishi bilan birga, turizm mutaxassislari, mehmonxona menejerlari va sayohat agentlari kabi sohalarda malakali kadrlar zarur.',
    image: 'https://images.unsplash.com/photo-1629220608817-0802c373e110?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="O'zbekistonda Top Kasblar"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        className="bg-white"
      />
  )
} 