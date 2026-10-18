import Link from 'next/link';

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark pb-20">
      {/* Navigatsiya */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-dark">
            Mebelchi Bolamanu
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/catalog" className="hover:text-brand-oak transition-colors">Mebellar katalogi</Link>
            <Link href="/configurator" className="hover:text-brand-oak transition-colors">O'z mebelingizni yarating</Link>
            <Link href="/contacts" className="text-brand-oak font-semibold">Biz bilan bog'lanish</Link>
          </nav>
          <Link href="/configurator" className="bg-brand-oak text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-brand-wood transition-all">
            Buyurtma berish
          </Link>
        </div>
      </header>

      {/* Bog'lanish tarkibi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">Biz bilan bog'lanish</h1>
          <p className="text-neutral-600">Savollaringiz bormi yoki maxsus buyurtma bermqchimisiz? Biz bilan aloqaga chiqing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-brand-beige p-8 rounded-2xl border border-brand-cream">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Ishlab chiqarish ustaxonasi va Showroom</h3>
            <p className="text-neutral-600 mb-6">Maxsus mebel buyurtmalari bo'yicha ustaxonamizga tashrif buyurishingiz mumkin.</p>
            <div className="space-y-4 text-sm">
              <p><strong>Telefon:</strong> +998 (90) 000-00-00</p>
              <p><strong>Telegram:</strong> @mebelchi_bolamanu</p>
              <p><strong>Ish vaqti:</strong> Dushanba - Shanba: 09:00 - 19:00</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-brand-cream shadow-sm">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Tezkor murojaat</h3>
            <form className="space-y-4">
              <div>
                Ismingiz
                <input type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-oak" placeholder="Ismingizni kiriting" />
              </div>
              <div>
                Telefon raqamingiz
                <input type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-oak" placeholder="+998 -- --- -- --" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-brand-oak text-white font-medium hover:bg-brand-wood transition-all">
                Xabar yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}. 
