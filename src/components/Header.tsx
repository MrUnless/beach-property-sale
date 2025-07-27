import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#2C5F41]" style={{ fontFamily: 'Playfair Display, serif' }}>
          SEA LAND
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Главная</a>
          <a href="#property" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Участок</a>
          <a href="#business" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Бизнес</a>
          <a href="#gallery" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Галерея</a>
          <a href="#documents" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Документы</a>
          <a href="#contacts" className="text-gray-700 hover:text-[#2C5F41] transition-colors">Контакты</a>
        </div>
        <Button 
          className="bg-[#D4AF37] hover:bg-[#B8941F] text-white"
          onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Связаться
        </Button>
      </nav>
    </header>
  );
}