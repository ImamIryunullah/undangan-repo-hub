import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Calendar, Smartphone, Check, Heart, Sparkles, Eye } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const portfolioImages = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1594736797933-d0401ba09793?w=400&h=600&fit=crop&crop=center"
  ];

  const features = [
    { icon: Smartphone, title: "Responsive Design", desc: "Tampil sempurna di semua perangkat" },
    { icon: Heart, title: "Desain Romantis", desc: "Template yang menyentuh hati" },
    { icon: Calendar, title: "RSVP System", desc: "Kelola konfirmasi tamu dengan mudah" },
    { icon: Users, title: "Guest Management", desc: "Atur daftar undangan secara digital" },
    { icon: Sparkles, title: "Animasi Menarik", desc: "Efek visual yang memukau" },
    { icon: Eye, title: "Live Preview", desc: "Lihat hasil secara real-time" }
  ];

  const testimonials = [
    { name: "Sarah & Ahmad", rating: 5, text: "Undangan kami jadi viral! Design-nya amazing banget dan super mudah digunakan." },
    { name: "Dina & Rizky", rating: 5, text: "Pelayanannya excellent, tim sangat helpful dan hasilnya beyond expectation!" },
    { name: "Maya & Andi", rating: 5, text: "Budget-friendly tapi hasilnya premium quality. Highly recommended!" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "149K",
      features: ["5 Template Premium", "RSVP System", "Gallery Foto", "Music Background", "Support 24/7"]
    },
    {
      name: "Premium",
      price: "249K",
      features: ["15 Template Premium", "Custom Domain", "Advanced RSVP", "Video Background", "Live Chat", "Analytics"],
      popular: true
    },
    {
      name: "Exclusive",
      price: "349K",
      features: ["Unlimited Template", "Custom Design", "Priority Support", "Advanced Features", "White Label", "API Access"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              LoveInvite
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-400 transition-colors">Beranda</a>
            <a href="#features" className="hover:text-pink-400 transition-colors">Fitur</a>
            <a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-pink-400 transition-colors">Harga</a>
          </nav>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
            Mulai Sekarang
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm">Trusted by 10,000+ couples</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Undangan Digital
              <br />
              <span className="text-white">Yang Memukau</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ciptakan undangan pernikahan digital yang tak terlupakan dengan desain modern, 
              interactive features, dan pengalaman yang luar biasa untuk tamu Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
                Buat Undangan Sekarang
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dilengkapi dengan teknologi terdepan untuk pengalaman undangan yang sempurna
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Gallery */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lihat karya-karya terbaik yang telah kami ciptakan untuk pasangan bahagia
            </p>
          </div>
          
          {/* Interactive Hover Gallery */}
          <div className={`flex justify-center transition-all duration-1000 ${isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-6xl h-96 flex justify-center gap-4 overflow-hidden group">
              {portfolioImages.map((src, index) => (
                <div key={index} className="relative flex-1 h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out group-hover:flex-[0.8] hover:!flex-[2] hover:!scale-110">
                  <img 
                    src={src} 
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:shadow-2xl hover:shadow-pink-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold text-lg mb-1">Wedding Theme {index + 1}</h4>
                      <p className="text-gray-200 text-sm">Elegant & Modern Design</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Kata Mereka
            </h2>
            <p className="text-xl text-gray-300">Testimoni dari pasangan yang sudah merasakan layanan kami</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-pink-400">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Paket Harga
            </h2>
            <p className="text-xl text-gray-300">Pilih paket yang sesuai dengan kebutuhan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-pink-500 ring-opacity-50' : ''} ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Rp {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/25' : 'border border-white/20 hover:bg-white/10'}`}>
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Siap Membuat Undangan Impian?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pasangan yang telah mempercayai kami untuk hari bahagia mereka
            </p>
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              Mulai Gratis Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                LoveInvite
              </span>
            </div>
            <p className="text-gray-400 mb-6">Wujudkan undangan impian Anda bersama kami</p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 mt-6">© 2024 LoveInvite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}