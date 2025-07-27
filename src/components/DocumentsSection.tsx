import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F41] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Документы
          </h2>
          <p className="text-xl text-gray-600">
            Все необходимые документы готовы к передаче
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Icon name="FileText" size={48} className="text-[#D4AF37] mx-auto mb-4" />
            <h3 className="font-semibold text-[#2C5F41] mb-2">ЕГРН</h3>
            <p className="text-gray-600 text-sm mb-4">Выписка из Единого государственного реестра недвижимости</p>
            <Button variant="outline" className="w-full" onClick={() => {
              const link = document.createElement('a');
              link.href = '/documents/ownership.pdf';
              link.download = 'ownership.pdf';
              link.click();
            }}>
              <Icon name="Download" className="mr-2" size={16} />
              Скачать
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Icon name="Map" size={48} className="text-[#D4AF37] mx-auto mb-4" />
            <h3 className="font-semibold text-[#2C5F41] mb-2">ГПЗУ</h3>
            <p className="text-gray-600 text-sm mb-4">Градостроительный план земельного участка</p>
            <Button variant="outline" className="w-full" onClick={() => {
              const link = document.createElement('a');
              link.href = '/documents/cadastral.pdf';
              link.download = 'cadastral.pdf';
              link.click();
            }}>
              <Icon name="Download" className="mr-2" size={16} />
              Скачать
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Icon name="Building" size={48} className="text-[#D4AF37] mx-auto mb-4" />
            <h3 className="font-semibold text-[#2C5F41] mb-2">Краткие данные о 6 сотках</h3>
            <p className="text-gray-600 text-sm mb-4">Подробная информация об участке и его характеристиках</p>
            <Button variant="outline" className="w-full" onClick={() => {
              const link = document.createElement('a');
              link.href = '/documents/building-permit.pdf';
              link.download = 'building-permit.pdf';
              link.click();
            }}>
              <Icon name="Download" className="mr-2" size={16} />
              Скачать
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}