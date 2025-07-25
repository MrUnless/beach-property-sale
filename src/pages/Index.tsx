import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка формы
    console.log('Form submitted:', { ...formData, date: selectedDate });
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Property Details */}
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

      {/* Business Opportunities */}
      <section id="business" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F41] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Возможности для бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Идеальное место для создания премиального туристического проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/6fac0488-18f5-445e-928c-2e7a186ae5bc.jpg" 
                alt="Глэмпинг проект"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Tent" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C5F41] mb-2">Эко-глэмпинг</h3>
                  <p className="text-gray-600">Панорамные домики с видом на море и полной приватностью</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C5F41] mb-2">Мини-отель</h3>
                  <p className="text-gray-600">Бутик-отель с эксклюзивным расположением у моря</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Waves" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C5F41] mb-2">Зона отдыха</h3>
                  <p className="text-gray-600">Общий бассейн, кафе, СПА-зона для гостей</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C5F41] mb-2">Высокая доходность</h3>
                  <p className="text-gray-600">Повышенная доходность за счёт каскадной структуры и уникального расположения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F41] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Галерея и расположение
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите на красоту участка и его выгодное расположение
            </p>
          </div>

          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="gallery" className="text-lg py-3">Галерея</TabsTrigger>
              <TabsTrigger value="location" className="text-lg py-3">Расположение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gallery" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group cursor-pointer">
                  <img 
                    src="/img/66dc12e5-c415-4729-9241-82077217b8dc.jpg" 
                    alt="Вид участка сверху"
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">Вид участка сверху</p>
                  </div>
                </div>
                
                <div className="relative group cursor-pointer">
                  <img 
                    src="/img/3ae350f6-6937-4625-8cc7-bde5c5db3671.jpg" 
                    alt="Береговая линия"
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">Береговая линия</p>
                  </div>
                </div>
                
                <div className="relative group cursor-pointer">
                  <img 
                    src="/img/6fac0488-18f5-445e-928c-2e7a186ae5bc.jpg" 
                    alt="Проект застройки"
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">Проект застройки</p>
                  </div>
                </div>
                
                <div className="relative group cursor-pointer">
                  <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-gray-400" />
                  </div>
                </div>
                
                <div className="relative group cursor-pointer">
                  <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-gray-400" />
                  </div>
                </div>
                
                <div className="relative group cursor-pointer">
                  <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-[#2C5F41] mb-4">Видео-презентация участка</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Play" size={64} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Место для встроенного видео с Rutube, Dzen или YouTube</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="/img/3ae350f6-6937-4625-8cc7-bde5c5db3671.jpg" 
                    alt="Расположение участка"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#2C5F41]">Уникальное расположение</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Icon name="MapPin" className="mr-2 text-[#D4AF37]" size={16} />
                      Первая линия у моря
                    </li>
                    <li className="flex items-center">
                      <Icon name="Waves" className="mr-2 text-[#D4AF37]" size={16} />
                      Песчаный пляж, пологий вход
                    </li>
                    <li className="flex items-center">
                      <Icon name="Thermometer" className="mr-2 text-[#D4AF37]" size={16} />
                      Бухта Булганак — вода прогревается раньше
                    </li>
                    <li className="flex items-center">
                      <Icon name="Zap" className="mr-2 text-[#D4AF37]" size={16} />
                      Электричество, вода, интернет по границе
                    </li>
                    <li className="flex items-center">
                      <Icon name="Car" className="mr-2 text-[#D4AF37]" size={16} />
                      25 км до Крымского моста
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-[#2C5F41] mb-4">Интерактивная карта</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Здесь будет Яндекс.Карта с точным расположением участка</p>
                    <p className="text-sm text-gray-400 mt-2">Координаты будут добавлены после настройки</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documents */}
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
              <h3 className="font-semibold text-[#2C5F41] mb-2">Свидетельство о собственности</h3>
              <p className="text-gray-600 text-sm mb-4">Документ, подтверждающий право собственности</p>
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
              <h3 className="font-semibold text-[#2C5F41] mb-2">Кадастровый план</h3>
              <p className="text-gray-600 text-sm mb-4">Точные границы и характеристики участка</p>
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
              <h3 className="font-semibold text-[#2C5F41] mb-2">Разрешение на строительство</h3>
              <p className="text-gray-600 text-sm mb-4">Возможности застройки участка</p>
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

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5F41] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-[#2C5F41] mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3 text-[#D4AF37]" size={20} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3 text-[#D4AF37]" size={20} />
                  <span>info@sealand-crimea.ru</span>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" className="mr-3 text-[#D4AF37] mt-1" size={20} />
                  <span>Крым, бухта Булганак<br />25 км от Крымского моста</span>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h4 className="text-lg font-semibold text-[#2C5F41] mb-4">Условия продажи</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Прямая продажа от собственника
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Все документы готовы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-green-500" size={16} />
                    Возможен торг при быстрой сделке
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-[#2C5F41] mb-6">Записаться на просмотр</h3>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Выбрать дату просмотра
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Запись на просмотр участка</DialogTitle>
                    <DialogDescription>
                      Выберите удобную дату и оставьте контакты
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="date">Дата просмотра</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Icon name="Calendar" className="mr-2" size={16} />
                            {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: ru }) : "Выберите дату"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (XXX) XXX-XX-XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email (необязательно)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea
                        id="message"
                        placeholder="Дополнительная информация..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F]">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <Icon name="Info" className="mr-2 text-blue-500 mt-1" size={16} />
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-1">Как проходит просмотр:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Встреча на участке в удобное время</li>
                      <li>Подробный рассказ о возможностях</li>
                      <li>Осмотр всех террас и подходов к морю</li>
                      <li>Ответы на все ваши вопросы</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>info@sealand-crimea.ru</p>
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
    </div>
  );
}