import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-[#2C5F41] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              SEA LAND
            </div>
            <p className="text-gray-300">
              Премиальная недвижимость у моря в Крыму. 
              Инвестиции в будущее вашего бизнеса.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Главная</a></li>
              <li><a href="#property" className="hover:text-[#D4AF37] transition-colors">Участок</a></li>
              <li><a href="#business" className="hover:text-[#D4AF37] transition-colors">Бизнес</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Галерея</a></li>
              <li><a href="#contacts" className="hover:text-[#D4AF37] transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>+7 (931) 350-75-48</p>
              <p>il.shinemaria@gmail.com</p>
              <p>Крым, бухта Булганак</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-600" />
        
        <div className="text-center text-gray-300">
          <p>&copy; 2024 SEA LAND. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}