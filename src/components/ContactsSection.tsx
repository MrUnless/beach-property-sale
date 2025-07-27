import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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

export default function ContactsSection() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date: selectedDate });
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
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
                <span>+7 (931) 350-75-48</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-3 text-[#D4AF37]" size={20} />
                <span>il.shinemaria@gmail.com</span>
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
  );
}