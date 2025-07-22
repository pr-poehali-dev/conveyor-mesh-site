import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [meshType, setMeshType] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const meshTypes = [
    { id: 'steel-1', name: 'Сталь 1мм', price: 120, specs: '10×10мм' },
    { id: 'steel-2', name: 'Сталь 2мм', price: 180, specs: '15×15мм' },
    { id: 'steel-3', name: 'Сталь 3мм', price: 250, specs: '20×20мм' },
    { id: 'galvanized-1', name: 'Оцинкованная 1мм', price: 150, specs: '10×10мм' },
    { id: 'galvanized-2', name: 'Оцинкованная 2мм', price: 220, specs: '15×15мм' },
    { id: 'stainless', name: 'Нержавейка 2мм', price: 380, specs: '12×12мм' }
  ];

  const calculatePrice = () => {
    const selectedMesh = meshTypes.find(m => m.id === meshType);
    if (selectedMesh && width && length) {
      const area = parseFloat(width) * parseFloat(length);
      const price = area * selectedMesh.price;
      setCalculatedPrice(price);
    }
  };

  return (
    <div className="min-h-screen bg-clean-white">
      {/* Minimal Header */}
      <header className="bg-clean-white border-b border-light-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-blue rounded"></div>
              <h1 className="text-xl font-medium text-gray-900">ConveyorMesh</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#product" className="text-soft-gray hover:text-gray-900 transition-colors text-sm">Продукт</a>
              <a href="#calculator" className="text-soft-gray hover:text-gray-900 transition-colors text-sm">Расчет</a>
              <a href="#specs" className="text-soft-gray hover:text-gray-900 transition-colors text-sm">Характеристики</a>
              <a href="#contact" className="text-soft-gray hover:text-gray-900 transition-colors text-sm">Контакт</a>
            </nav>
            <Button className="bg-accent-blue hover:bg-blue-600 text-sm">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero - Focus on Product */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Конвейерная
                <span className="block font-normal">сетка</span>
              </h2>
              <p className="text-lg text-soft-gray mb-8 leading-relaxed max-w-md">
                Промышленная сетка для транспортировки. 
                Точные размеры, надежные материалы.
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent-blue hover:bg-blue-600 px-6">
                  Каталог
                </Button>
                <Button variant="outline" className="border-light-border text-soft-gray hover:bg-minimal-gray px-6">
                  Рассчитать
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-minimal-gray rounded-lg overflow-hidden">
                <img 
                  src="/img/f7deb5ec-e11e-4681-bf9a-4200756688ae.jpg" 
                  alt="Конвейерная сетка"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-clean-white rounded-lg p-4 shadow-sm border border-light-border">
                <div className="text-sm text-soft-gray">Точность</div>
                <div className="text-2xl font-light text-gray-900">±0.1мм</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-minimal-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Быстрая поставка</h3>
              <p className="text-soft-gray text-sm">Доставка в течение 2-5 рабочих дней</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Под заказ</h3>
              <p className="text-soft-gray text-sm">Любые размеры и спецификации</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-soft-gray text-sm">Сертификаты соответствия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-soft-gray">Рассчитайте точную стоимость для вашего проекта</p>
          </div>
          
          <Card className="border border-light-border shadow-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-gray-900 text-sm mb-2 block">Тип сетки</Label>
                    <Select value={meshType} onValueChange={setMeshType}>
                      <SelectTrigger className="border-light-border">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        {meshTypes.map(mesh => (
                          <SelectItem key={mesh.id} value={mesh.id}>
                            <div className="flex justify-between w-full">
                              <span>{mesh.name}</span>
                              <span className="text-soft-gray ml-4">{mesh.price}₽/м²</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-900 text-sm mb-2 block">Ширина, м</Label>
                      <Input 
                        type="number" 
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="border-light-border"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-900 text-sm mb-2 block">Длина, м</Label>
                      <Input 
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="border-light-border"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={calculatePrice}
                    className="w-full bg-accent-blue hover:bg-blue-600"
                  >
                    Рассчитать
                  </Button>
                </div>
                
                <div className="bg-minimal-gray rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Расчет</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-soft-gray">
                      <span>Площадь:</span>
                      <span>{width && length ? (parseFloat(width) * parseFloat(length)).toFixed(2) : '0'} м²</span>
                    </div>
                    {meshType && (
                      <div className="flex justify-between text-soft-gray">
                        <span>Ячейка:</span>
                        <span>{meshTypes.find(m => m.id === meshType)?.specs}</span>
                      </div>
                    )}
                    <Separator className="bg-light-border" />
                    <div className="flex justify-between text-gray-900 text-xl font-light">
                      <span>Итого:</span>
                      <span className="text-accent-blue font-medium">{calculatedPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-clean-white">
                    Заказать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product" className="py-20 bg-minimal-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Продукция</h2>
            <p className="text-soft-gray">Полный ассортимент конвейерной сетки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meshTypes.map(mesh => (
              <Card key={mesh.id} className="border border-light-border hover:shadow-md transition-shadow">
                <div className="aspect-square bg-clean-white overflow-hidden">
                  <img 
                    src="/img/f7deb5ec-e11e-4681-bf9a-4200756688ae.jpg" 
                    alt={mesh.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">{mesh.name}</h3>
                      <p className="text-sm text-soft-gray">{mesh.specs}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium text-gray-900">{mesh.price} ₽</div>
                      <div className="text-sm text-soft-gray">за м²</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-light-border text-soft-gray hover:bg-minimal-gray">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Технические характеристики</h2>
              <div className="space-y-6">
                <div className="flex justify-between py-3 border-b border-light-border">
                  <span className="text-soft-gray">Материал</span>
                  <span className="text-gray-900">Сталь, нержавейка, оцинковка</span>
                </div>
                <div className="flex justify-between py-3 border-b border-light-border">
                  <span className="text-soft-gray">Толщина проволоки</span>
                  <span className="text-gray-900">1-3 мм</span>
                </div>
                <div className="flex justify-between py-3 border-b border-light-border">
                  <span className="text-soft-gray">Размер ячейки</span>
                  <span className="text-gray-900">10×10 — 20×20 мм</span>
                </div>
                <div className="flex justify-between py-3 border-b border-light-border">
                  <span className="text-soft-gray">Максимальная ширина</span>
                  <span className="text-gray-900">2000 мм</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-soft-gray">Температурный режим</span>
                  <span className="text-gray-900">-40°C до +120°C</span>
                </div>
              </div>
            </div>
            
            <div className="bg-minimal-gray rounded-lg p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Применение</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Пищевая промышленность</div>
                    <div className="text-sm text-soft-gray">Транспортировка продуктов</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Химическая отрасль</div>
                    <div className="text-sm text-soft-gray">Устойчивость к агрессивным средам</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Строительство</div>
                    <div className="text-sm text-soft-gray">Армирование и фильтрация</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Горнодобыча</div>
                    <div className="text-sm text-soft-gray">Сортировка материалов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-minimal-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Связаться</h2>
          <p className="text-soft-gray mb-8">Поможем подобрать решение для вашей задачи</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-soft-gray mb-1">Телефон</div>
              <div className="font-medium text-gray-900">+7 (495) 123-45-67</div>
            </div>
            <div>
              <div className="text-sm text-soft-gray mb-1">Email</div>
              <div className="font-medium text-gray-900">info@conveyormesh.ru</div>
            </div>
            <div>
              <div className="text-sm text-soft-gray mb-1">Время работы</div>
              <div className="font-medium text-gray-900">Пн-Пт: 9:00-18:00</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-blue hover:bg-blue-600 px-8">
              Заказать звонок
            </Button>
            <Button variant="outline" className="border-light-border text-soft-gray hover:bg-clean-white px-8">
              Написать email
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-light-border py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-accent-blue rounded"></div>
              <span className="text-gray-900 font-medium">ConveyorMesh</span>
            </div>
            <div className="text-soft-gray text-sm text-center md:text-right">
              <p>© 2024 ConveyorMesh. Промышленная сетка.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;