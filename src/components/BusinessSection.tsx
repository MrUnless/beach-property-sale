import Icon from '@/components/ui/icon';

export default function BusinessSection() {
  return (
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
  );
}