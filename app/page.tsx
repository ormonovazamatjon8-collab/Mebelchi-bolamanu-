import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-tight text-brand-dark">
              Mebelchi Bolamanu
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/catalog" className="hover:text-brand-oak transition-colors">
              Mebellar katalogi
            </Link>
            <Link href="/configurator" className="hover:text-brand-oak transition-colors">
              O'z mebelingizni yarating
            </Link>
            <Link href="/contacts" className="hover:text-brand-oak transition-colors">
              Biz bilan bog'lanish
            </Link>
          </nav>
          <div>
            <Link 
              href="/configurator" 
              className="bg-brand-oak text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-brand-wood transition-all"
            >
              Buyurtma berish
            </Link>
          </div>
        </div>
      </header>

      <section className="relative py-20 lg:py-32 bg-brand-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-cream text-brand-wood text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            O'zbekistonda maxsus mebel ishlab chiqarish
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight">
            Maxsus o'lcham va dizayn asosida mukammal mebellar
          </h1>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
            Tabiiy yog'och, MDF va LDSP materiallaridan uyingiz va ofisingiz uchun zamonaviy mebellar yasash xizmati. 3D formatda loyihalashtiring va narxini darhol aniqlang.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/configurator" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-dark text-white font-medium hover:bg-black transition-all shadow-lg"
            >
              O'z mebelingizni yarating
            </Link>
            <Link 
              href="/catalog" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-dark border border-brand-cream font-medium hover:bg-brand-cream transition-all shadow-sm"
            >
              Katalog bilan tanishish
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
