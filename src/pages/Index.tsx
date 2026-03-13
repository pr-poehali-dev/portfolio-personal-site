import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/90 backdrop-blur-sm border-b border-border">
        <span className="font-display text-xl font-light tracking-widest uppercase text-foreground/40 animate-fade-in delay-100">
          Портфолио
        </span>
        <div className="flex gap-8">
          <a
            href="#about"
            className="font-body text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 animate-fade-in delay-200"
          >
            О мне
          </a>
          <a
            href="#contacts"
            className="font-body text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 animate-fade-in delay-300"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-6 animate-fade-up delay-200">
            Добро пожаловать
          </p>
          <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.9] tracking-tight text-foreground animate-fade-up delay-300">
            Я —<br />
            <em className="italic text-foreground/40">Захар</em>
          </h1>
          <div className="h-px bg-foreground animate-line-grow origin-left mt-10 delay-600" />
          <p className="font-body text-base font-light text-foreground/50 mt-6 max-w-md leading-relaxed animate-fade-up delay-700">
            Краткое описание — кто вы, чем занимаетесь, ваша специализация.
          </p>
        </div>
        <div className="mt-16 animate-fade-up delay-800">
          <a
            href="#about"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-foreground/40 hover:text-foreground transition-colors duration-300 group"
          >
            <span>Листайте вниз</span>
            <Icon name="ArrowDown" size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-16 py-24 md:py-36 border-t border-border">
        <div className="max-w-5xl grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-foreground/30">
              01 / О мне
            </span>
          </div>
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-tight text-foreground mb-10">
              Немного<br />
              <em className="italic text-foreground/40">о себе</em>
            </h2>
            <div className="space-y-6 font-body text-base font-light text-foreground/60 leading-relaxed max-w-xl">
              <p>
                Здесь вы можете рассказать о себе — ваш профессиональный путь,
                увлечения, ценности и подход к работе.
              </p>
              <p>
                Несколько предложений о том, что вас вдохновляет и что отличает
                вас от других.
              </p>
            </div>
            <div className="h-px bg-border mt-12 mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { label: "Направление", value: "Ваша сфера" },
                { label: "Местоположение", value: "Ваш город" },
                { label: "Опыт", value: "N лет" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground/30 mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-foreground/70 font-light">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="px-8 md:px-16 py-24 md:py-36 border-t border-border">
        <div className="max-w-5xl grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-foreground/30">
              02 / Контакты
            </span>
          </div>
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-tight text-foreground mb-10">
              Свяжитесь<br />
              <em className="italic text-foreground/40">со мной</em>
            </h2>
            <div className="space-y-0">
              {[
                { icon: "Mail", label: "Почта", value: "your@email.com", href: "mailto:your@email.com" },
                { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00", href: "tel:+70000000000" },
                { icon: "Send", label: "Telegram", value: "@username", href: "https://t.me/username" },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-5 group py-5 border-b border-border hover:border-foreground/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-foreground/30 group-hover:text-foreground/60 transition-colors duration-300">
                    <Icon name={contact.icon} size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground/30 mb-0.5">
                      {contact.label}
                    </p>
                    <p className="font-body text-sm text-foreground/70 font-light group-hover:text-foreground transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <Icon
                    name="ArrowUpRight"
                    size={14}
                    className="text-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body text-xs text-foreground/25 tracking-widest uppercase">
          © 2026
        </span>
        <span className="font-display text-sm italic text-foreground/25">
          Захар
        </span>
      </footer>
    </div>
  );
}