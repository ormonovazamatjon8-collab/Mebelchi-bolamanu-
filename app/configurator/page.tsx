'html, 'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfiguratorPage() {
  const [furnitureType, setFurnitureType] = useState('Kupe shkaf');
  const [width, setWidth] = useState(120); // sm
  const [height, setHeight] = useState(200); // sm
  const [depth, setDepth] = useState(60); // sm
  const [material, setMaterial] = useState('MDF (Premium)');
  const [materialMultiplier, setMaterialMultiplier] = useState(1.5);
  const [color, setColor] = useState('Tabiiy eman');
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Dinamik narxni hisoblash mexanizmi
  const calculatePrice = () => {
    const base = 1200000; // Boshlang'ich narx (so'm)
    const area = (width * height) / 10000; // kvadrat metr
    const total = base + (area * 400000 * materialMultiplier);
    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Iltimos, ism va telefon raqamingizni kiriting!');
      return;
    }
    const orderNo = Math.floor(10000 + Math.random() * 90000);
    setSuccessMessage(`Buyurtmangiz muvaffaqiyatli qabul qilindi! Buyurtma raqami: #MB-${orderNo}`);
  };

  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark pb-20">
      {/* Navigatsiya bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-dark">
            Mebelchi Bolamanu
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-brand-oak transition-colors">Bosh sahifa</Link>
            <Link href="/catalog" className="hover:text-brand-oak transition-colors">Mebellar katalogi</Link>
            <Link href="/configurator" className="text-brand-oak font-semibold">O'z mebelingizni yarating</Link>
            <Link href="/contacts" className="hover:text-brand-oak transition-colors">Biz bilan bog'lanish</Link>
          </nav>
        </div>
      </header>

      {/* Asosiy kontent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-cream text-brand-wood text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            Interaktiv 3D va Parametrik Konfigurator
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-3">O'z Mebelingizni Loyihalashtiring</h1>
          <p className="text-neutral-600">O'lchamlarni, material va rangni o'zgartiring. Narx real vaqt rejimida avtomatik ravishda hisoblanadi.</p>
        </div>

        {successMessage ? (
          <div className="max-w-xl mx-auto bg-green-50 border border-green-200 p-8 rounded-3xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Tabriklaymiz! 🎉</h3>
            <p className="text-green-700 mb-6">{successMessage}</p>
            <p className="text-sm text-neutral-600 mb-6">Menejerlarimiz qisqa fursatda siz bilan bog'lanib, shartnoma shartlarini kelishishadi.</p>
            <Link href="/" className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-xl font-medium shadow-md hover:bg-black transition-all">
              Bosh sahifaga qaytish
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chap tomon: Sozlamalar va Parametrlar */}
            <div className="lg:col-span-2 space-y-8 bg-brand-beige p-6 sm:p-10 rounded-3xl border border-brand-cream shadow-sm">
              
              {/* 1. Mebel turi */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">1. Mebel turini tanlang</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Kupe shkaf', 'Oshxona', 'Ish stoli', 'Komod'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFurnitureType(type)}
                      className={`py-3.5 px-4 rounded-2xl font-medium text-sm transition-all border ${
                        furnitureType === type 
                          ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                          : 'bg-white text-brand-dark border-brand-cream hover:bg-neutral-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. O'lchamlar */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">2. O'lchamlarni belgilang (santimetr)</h3>
                <div className="space-y-5 bg-white p-6 rounded-2xl border border-brand-cream">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Eni (Width):</span>
                      <span className="font-bold text-brand-oak">{width} sm</span>
                    </div>
                    <input 
                      type="range" min="60" max="350" value={width} 
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full accent-brand-oak cursor-pointer" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Balandligi (Height):</span>
                      <span className="font-bold text-brand-oak">{height} sm</span>
                    </div>
                    <input 
                      type="range" min="120" max="300" value={height} 
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full accent-brand-oak cursor-pointer" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Chuqurligi (Depth):</span>
                      <span className="font-bold text-brand-oak">{depth} sm</span>
                    </div>
                    <input 
                      type="range" min="35" max="90" value={depth} 
                      onChange={(e) => setDepth(Number(e.target.value))}
                      className="w-full accent-brand-oak cursor-pointer" 
                    />
                  </div>
                </div>
              </div>

              {/* 3. Material va qoplamalar */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">3. Material va tekstura</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'LDSP (Standard)', mult: 1, desc: 'Klassik va hamyonbop' },
                    { name: 'MDF (Premium)', mult: 1.5, desc: 'Mustahkam va tekis' },
                    { name: 'Tabiiy Yog\'och', mult: 2.2, desc: 'Ekologik va qimmatbaho' },
                  ].map((mat) => (
                    <button
                      key={mat.name}
                      type="button"
                      onClick={() => { setMaterial(mat.name); setMaterialMultiplier(mat.mult); }}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        material === mat.name 
                          ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                          : 'bg-white text-brand-dark border-brand-cream hover:bg-neutral-50'
                      }`}
                    >
                      <div className="font-semibold text-sm">{mat.name}</div>
                      <div className={`text-xs mt-1 ${material === mat.name ? 'text-neutral-300' : 'text-neutral-500'}`}>{mat.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* O'ng tomon: Narx hisoboti va buyurtma formasi */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-cream shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-6">Buyurtma xulosasi</h3>
                
                <div className="space-y-4 text-sm text-neutral-600 mb-8 border-b border-neutral-100 pb-6">
                  <div className="flex justify-between">
                    <span>Mebel turi:</span>
                    <span className="font-semibold text-brand-dark">{furnitureType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>O'lchamlari:</span>
                    <span className="font-semibold text-brand-dark">{width} × {height} × {depth} sm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tanlangan material:</span>
                    <span className="font-semibold text-brand-dark">{material}</span>
                  </div>
                </div>

                <div className="mb-8 bg-brand-beige p-5 rounded-2xl">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Hisoblangan narx:</span>
                  <div className="text-3xl font-extrabold text-brand-dark mt-1">
                    {totalPrice.toLocaleString()} <span className="text-base font-medium text-neutral-600">UZS</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">* Yetkazib berish va o'rnatish alohida kelishiladi.</p>
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">Ismingiz</label>
                    <input 
                      type="text" 
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-oak text-sm bg-neutral-50" 
                      placeholder="Masalan: Azamatjon" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">Telefon raqamingiz</label>
                    <input 
                      type="text" 
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-oak text-sm bg-neutral-50" 
                      placeholder="+998 90 123 45 67" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">Yetkazish manzili (shahar/tuman)</label>
                    <input 
                      type="text" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-oak text-sm bg-neutral-50" 
                      placeholder="Farg'ona sh., ..." 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-brand-oak text-white font-medium hover:bg-brand-wood transition-all shadow-lg text-base mt-2"
                  >
                    Buyurtmanirasmiylashtirish
                  </button>
                </form>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
