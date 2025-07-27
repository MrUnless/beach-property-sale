import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/img/66dc12e5-c415-4729-9241-82077217b8dc.jpg" 
          alt="Участок у моря в Крыму"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F41]/70 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Участок у моря <br />под бизнес
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Продаётся участок на первой линии пляжа Азовского моря в Крыму. 
            Всего 1,5 метра от участка до береговой линии — с прямым выходом к морю.
          </p>
          
          <div className="mb-8">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
              7 000 000 ₽
            </div>
            <p className="text-lg opacity-80">Стоимость участка</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Возможности для бизнеса
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#2C5F41] px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="MapPin" className="mr-2" size={20} />
              Показать на карте
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">6</div>
              <div className="text-sm opacity-80">соток</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">1.5м</div>
              <div className="text-sm opacity-80">до моря</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">70%</div>
              <div className="text-sm opacity-80">застройки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">25км</div>
              <div className="text-sm opacity-80">до моста</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}