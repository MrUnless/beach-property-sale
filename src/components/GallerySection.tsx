import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function GallerySection() {
  return (
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
                <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                  <img 
                    src="/img/7d5d728d-cb71-4d3d-8a80-9abfafc750fe.jpg" 
                    alt="Превью видео участка"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={48} className="text-[#2C5F41] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      onClick={() => window.open('https://rutube.ru/video/9f8f1b0aed16cc84e34db7e8d65ef80e/?r=plwd', '_blank')}
                      className="w-full bg-[#2C5F41] hover:bg-[#1a3d2b] text-white"
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Смотреть на Rutube
                    </Button>
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
  );
}