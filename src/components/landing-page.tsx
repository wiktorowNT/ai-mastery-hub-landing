import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, TrendingUp, CheckCircle, Brain, Zap, Target, Star } from "lucide-react"

export default function AIMasteryHubLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">AI Mastery Hub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#kursy" className="text-slate-600 hover:text-blue-600 transition-colors">
                Kursy
              </a>
              <a href="#o-nas" className="text-slate-600 hover:text-blue-600 transition-colors">
                O nas
              </a>
              <a href="#opinie" className="text-slate-600 hover:text-blue-600 transition-colors">
                Opinie
              </a>
              <a href="#kontakt" className="text-slate-600 hover:text-blue-600 transition-colors">
                Kontakt
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Rozpocznij naukę</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 Nowa era edukacji AI</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  AI Mastery Hub: <span className="text-blue-600">Opanuj Sztuczną Inteligencję</span> i Zmień Swoją
                  Przyszłość
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Twoja brama do świata AI – kompleksowe kursy, praktyczne warsztaty i wsparcie społeczności dla
                  każdego, kto chce wykorzystać potencjał sztucznej inteligencji.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Rozpocznij swoją przygodę z AI już dziś!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                >
                  Zobacz kursy
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">2000+ uczniów</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-600 ml-1">5.0/5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder-kkjf1.png"
                  alt="AI Education Platform"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="kursy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Dlaczego AI Mastery Hub?</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Wszystko czego potrzebujesz do <span className="text-purple-600">sukcesu w AI</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferujemy kompleksowe rozwiązanie edukacyjne, które przeprowadzi Cię przez całą podróż nauki sztucznej
              inteligencji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Kompleksowe Kursy",
                description: "Od podstaw po zaawansowane techniki, dostosowane do różnych poziomów zaawansowania.",
                color: "blue",
              },
              {
                icon: Zap,
                title: "Praktyczne Warsztaty",
                description: "Ucz się poprzez działanie, realizując projekty z wykorzystaniem najnowszych narzędzi AI.",
                color: "purple",
              },
              {
                icon: Users,
                title: "Wsparcie Społeczności",
                description: "Dołącz do aktywnej społeczności pasjonatów AI, wymieniaj się wiedzą i doświadczeniem.",
                color: "green",
              },
              {
                icon: TrendingUp,
                title: "Aktualna Wiedza",
                description: "Treści na bieżąco aktualizowane, abyś zawsze był na bieżąco z dynamicznym rynkiem AI.",
                color: "orange",
              },
              {
                icon: Award,
                title: "Certyfikaty Ukończenia",
                description: "Potwierdź swoje umiejętności i zwiększ swoją wartość na rynku pracy.",
                color: "red",
              },
              {
                icon: Target,
                title: "Indywidualne Ścieżki",
                description: "Personalizowane programy nauki dostosowane do Twoich celów i tempa uczenia się.",
                color: "indigo",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2000+", label: "Aktywnych uczniów" },
              { number: "50+", label: "Ekspertów AI" },
              { number: "100+", label: "Praktycznych projektów" },
              { number: "95%", label: "Wskaźnik ukończenia" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="opinie" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Opinie uczniów</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Co mówią o nas <span className="text-green-600">nasi uczniowie</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Anna Kowalska",
                role: "Data Scientist",
                content:
                  "Dzięki AI Mastery Hub zdobyłam umiejętności, które pozwoliły mi awansować na stanowisko Senior Data Scientist. Kursy są praktyczne i aktualne.",
                rating: 5,
              },
              {
                name: "Michał Nowak",
                role: "Przedsiębiorca",
                content:
                  "Jako właściciel małej firmy, nauczyłem się implementować rozwiązania AI w moim biznesie. ROI był widoczny już po miesiącu!",
                rating: 5,
              },
              {
                name: "Katarzyna Wiśniewska",
                role: "Studentka Informatyki",
                content:
                  "Społeczność AI Mastery Hub to niesamowite wsparcie. Zawsze znajdę pomoc i inspirację do dalszego rozwoju.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Gotowy na <span className="text-blue-400">transformację swojej kariery</span>?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Dołącz do tysięcy profesjonalistów, którzy już zmieniają swoją przyszłość dzięki AI. Rozpocznij swoją
              podróż już dziś i odkryj nieograniczone możliwości sztucznej inteligencji.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Zapisz się na kurs i odblokuj swój potencjał AI!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                Bezpłatna konsultacja
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-slate-300">30 dni gwarancji zwrotu pieniędzy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">AI Mastery Hub</span>
              </div>
              <p className="text-slate-400">
                Twoja brama do świata sztucznej inteligencji. Ucz się, rozwijaj i osiągaj sukces z AI.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Kursy</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Podstawy AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Deep Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    AI w biznesie
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Firma</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Kariera
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Wsparcie</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Centrum pomocy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Społeczność
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Regulamin
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 AI Mastery Hub. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
