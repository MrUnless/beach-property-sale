import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function PropertyDetails() {
  return (
    <section id="property" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F41] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Характеристики участка
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уникальная возможность для запуска туристического проекта на первой линии Азовского моря
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Home" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Назначение</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Для туристического бизнеса</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Square" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Площадь</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">6 соток с пятном застройки 70%</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Building" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Глэмпинги</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Можно разместить до 6 глэмпингов</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Mountain" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Рельеф</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Трёхуровневый — каскадная застройка</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Eye" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Вид</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Панорамный вид на море из каждого домика</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F41]/10 rounded-full flex items-center justify-center">
                <Icon name="Road" size={28} className="text-[#2C5F41]" />
              </div>
              <CardTitle className="text-[#2C5F41]">Подъезд</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Асфальт с тыльной стороны</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Badge className="bg-[#D4AF37] text-white px-6 py-2 text-lg">
            Террасы уже укреплены бетонными подпорными стенами
          </Badge>
        </div>
      </div>
    </section>
  );
}