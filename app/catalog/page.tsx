import Link from 'next/link';

export default function CatalogPage() {
  const categories = [
    { id: 1, name: "Oshxona mebellari", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80", count: "12 ta model" },
    { id: 2, name: "Kupe shkaflar", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80", count: "8 ta model" },
    { id: 3, name: "Yotoq xona mebellari", image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=600&q=80", count: "10 ta model" },
    { id: 4, name: "Yumshoq mebellar", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", count: "15 ta model" },
    { id: 5, name: "Ofis mebellari", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80", count: "6 ta model" },
    { id: 6, name: "Stol va stullar", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80", count: "9 ta model" },
  ];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark pb-20">
      {/* Navigatsiya */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-dark">
            Mebelchi Bolamanu
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/catalog" className="text-brand-oak font-semibold">Mebellar katalogi</Link>
            <Link href="/configurator" className="hover:text-brand-oak transition-colors">O'z mebelingizni yarating</Link>
            <Link href="/contacts" className="hover:text-brand-oak transition-colors">Biz bilan bog'lanish</Link>
          </nav>
          <Link href="/configurator" className="bg-brand-oak text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-brand-wood transition-all">
            Buyurtma berish
          </Link>
        </div>
      </header>

      {/* Katalog Seksiyasi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">Mebellar Katalogi</h1>
          <p className="text-neutral-600">Uyingiz va ofisingiz uchun eng zamonaviy, sifatli va maxsus o'lchamdagi mebel turlarini tanlang.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-brand-beige rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-brand-cream group">
              <div className="h-64 overflow-hidden relative">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-wood">{cat.count}</span>
                <h3 className="text-xl font-bold text-brand-dark mt-1 mb-4">{cat.name}</h3>
                <Link href="/configurator" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-brand-dark text-white font-medium hover:bg-black transition-all">
                  Buyurtma berish va o'lcham tanlash
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
      }
