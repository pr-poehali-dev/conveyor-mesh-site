import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [meshType, setMeshType] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const meshTypes = [
    { id: 'steel-1', name: 'Стальная сетка 1мм', price: 120 },
    { id: 'steel-2', name: 'Стальная сетка 2мм', price: 180 },
    { id: 'steel-3', name: 'Стальная сетка 3мм', price: 250 },
    { id: 'galvanized-1', name: 'Оцинкованная 1мм', price: 150 },
    { id: 'galvanized-2', name: 'Оцинкованная 2мм', price: 220 },
    { id: 'stainless', name: 'Нержавеющая сталь', price: 380 }
  ];

  const calculatePrice = () => {
    const selectedMesh = meshTypes.find(m => m.id === meshType);
    if (selectedMesh && width && length) {
      const area = parseFloat(width) * parseFloat(length);
      const price = area * selectedMesh.price;
      setCalculatedPrice(price);
    }
  };

  const applications = [
    {
      title: 'Пищевая промышленность',
      description: 'Транспортировка продуктов питания',
      icon: 'Factory'
    },
    {
      title: 'Горнодобывающая',
      description: 'Сортировка и транспортировка материалов',
      icon: 'Mountain'
    },
    {
      title: 'Химическая промышленность',
      description: 'Устойчивость к агрессивным средам',
      icon: 'FlaskConical'
    },
    {
      title: 'Строительство',
      description: 'Армирование и фильтрация',
      icon: 'Building2'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <header className="bg-dark-metal/90 backdrop-blur-sm border-b border-steel-gray/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Factory" className="text-industrial-orange" size={32} />
              <h1 className="text-2xl font-bold text-white">МеталлСетка</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-300 hover:text-white transition-colors">Каталог</a>
              <a href="#specs" className="text-gray-300 hover:text-white transition-colors">Характеристики</a>
              <a href="#calculator" className="text-gray-300 hover:text-white transition-colors">Калькулятор</a>
              <a href="#delivery" className="text-gray-300 hover:text-white transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            </nav>
            <Button className="bg-industrial-orange hover:bg-industrial-orange/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/efd2ee09-4711-4449-bccf-18f89f59fabf.jpg)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Промышленная
            <span className="block text-industrial-orange">Конвейерная Сетка</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Высококачественная конвейерная сетка для промышленных применений. 
            Прочность, надежность и точность в каждом метре.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-industrial-orange hover:bg-industrial-orange/90 text-lg px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-steel-gray text-white hover:bg-steel-gray/20 text-lg px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-light-steel/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-dark-metal/80 border-steel-gray/30 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={48} className="text-industrial-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Высокая прочность</h3>
                <p className="text-gray-300">Выдерживает экстремальные нагрузки и температуры</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-metal/80 border-steel-gray/30 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={48} className="text-industrial-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-300">Доставка по всей России в кратчайшие сроки</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-metal/80 border-steel-gray/30 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Settings" size={48} className="text-industrial-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Под заказ</h3>
                <p className="text-gray-300">Изготовление по индивидуальным размерам</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-400">Рассчитайте точную стоимость сетки для вашего проекта</p>
          </div>
          
          <Card className="bg-dark-metal/90 border-steel-gray/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <Label className="text-white mb-2 block">Тип сетки</Label>
                    <Select value={meshType} onValueChange={setMeshType}>
                      <SelectTrigger className="bg-light-steel border-steel-gray text-white">
                        <SelectValue placeholder="Выберите тип сетки" />
                      </SelectTrigger>
                      <SelectContent>
                        {meshTypes.map(mesh => (
                          <SelectItem key={mesh.id} value={mesh.id}>
                            {mesh.name} - {mesh.price}₽/м²
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white mb-2 block">Ширина (м)</Label>
                      <Input 
                        type="number" 
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="bg-light-steel border-steel-gray text-white"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className="text-white mb-2 block">Длина (м)</Label>
                      <Input 
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="bg-light-steel border-steel-gray text-white"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={calculatePrice}
                    className="w-full bg-industrial-orange hover:bg-industrial-orange/90"
                    size="lg"
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
                
                <div className="bg-light-steel/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Результат расчета</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Площадь:</span>
                      <span>{width && length ? (parseFloat(width) * parseFloat(length)).toFixed(2) : '0'} м²</span>
                    </div>
                    <Separator className="bg-steel-gray/30" />
                    <div className="flex justify-between text-white text-2xl font-bold">
                      <span>Итого:</span>
                      <span className="text-industrial-orange">{calculatedPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-steel-gray hover:bg-steel-gray/80">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-gradient-to-b from-slate-900 to-light-steel">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-400">Широкий ассортимент конвейерной сетки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meshTypes.map(mesh => (
              <Card key={mesh.id} className="bg-dark-metal/80 border-steel-gray/30 hover:border-industrial-orange/50 transition-colors">
                <CardHeader>
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg mb-4"
                    style={{
                      backgroundImage: 'url(/img/f7deb5ec-e11e-4681-bf9a-4200756688ae.jpg)'
                    }}
                  ></div>
                  <CardTitle className="text-white">{mesh.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Материал:</span>
                      <span>Сталь</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Прочность:</span>
                      <span>Высокая</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-industrial-orange">
                      <span>Цена:</span>
                      <span>{mesh.price} ₽/м²</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-industrial-orange hover:bg-industrial-orange/90">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="specs" className="py-20 bg-dark-metal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Применение</h2>
            <p className="text-xl text-gray-400">Где используется наша конвейерная сетка</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="bg-light-steel/80 border-steel-gray/30 text-center group hover:bg-light-steel transition-colors">
                <CardContent className="p-6">
                  <Icon 
                    name={app.icon as any} 
                    size={64} 
                    className="text-industrial-orange mx-auto mb-4 group-hover:scale-110 transition-transform" 
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Contacts */}
      <section id="delivery" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-dark-metal">
              <TabsTrigger value="delivery" className="text-white data-[state=active]:bg-industrial-orange">
                <Icon name="Truck" size={20} className="mr-2" />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="contacts" className="text-white data-[state=active]:bg-industrial-orange">
                <Icon name="MapPin" size={20} className="mr-2" />
                Контакты
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="delivery" className="mt-8">
              <Card className="bg-dark-metal/80 border-steel-gray/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Доставка по России</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Icon name="Clock" size={48} className="text-industrial-orange mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">Сроки</h3>
                      <p className="text-gray-300">От 1 до 5 дней</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Package" size={48} className="text-industrial-orange mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">Упаковка</h3>
                      <p className="text-gray-300">Надежная защита груза</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Shield" size={48} className="text-industrial-orange mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">Страховка</h3>
                      <p className="text-gray-300">Полное страхование</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="contacts" className="mt-8">
              <Card className="bg-dark-metal/80 border-steel-gray/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="text-industrial-orange" />
                        <span className="text-white">+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="text-industrial-orange" />
                        <span className="text-white">info@metallsetka.ru</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" className="text-industrial-orange" />
                        <span className="text-white">Москва, ул. Промышленная, 15</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" className="text-industrial-orange" />
                        <span className="text-white">Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full bg-industrial-orange hover:bg-industrial-orange/90">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Заказать звонок
                      </Button>
                      <Button variant="outline" className="w-full border-steel-gray text-white hover:bg-steel-gray/20">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Написать в Telegram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-metal border-t border-steel-gray/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Factory" className="text-industrial-orange" size={32} />
              <span className="text-white text-xl font-bold">МеталлСетка</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 МеталлСетка. Все права защищены.</p>
              <p className="text-sm mt-1">Промышленная конвейерная сетка высшего качества</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;