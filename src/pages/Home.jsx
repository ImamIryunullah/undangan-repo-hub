import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faMobileAlt,
  faMusic,
  faUsers,
  faChartBar,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  Star,
  Play,
  Check,
  ArrowRight,
  Heart,
  Calendar,
  Users,
  Smartphone,
  Globe,
  Shield,
  Headphones,
  Clock,
  Gift,
  Camera,
  Music,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function BikinUndangan() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const templates = [
    {
      id: 1,
      name: "Elegant Classic",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&h=400&fit=crop",
      category: "Classic",
    },
    {
      id: 2,
      name: "Modern Minimalist",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=400&fit=crop",
      category: "Modern",
    },
    {
      id: 3,
      name: "Floral Romance",
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      category: "Floral",
    },
    {
      id: 4,
      name: "Luxury Gold",
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop",
      category: "Luxury",
    },
    {
      id: 5,
      name: "Rustic Natural",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&h=400&fit=crop",
      category: "Rustic",
    },
    {
      id: 6,
      name: "Contemporary Art",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba09793?w=300&h=400&fit=crop",
      category: "Modern",
    },
    {
      id: 7,
      name: "Vintage Classic",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      category: "Vintage",
    },
    {
      id: 8,
      name: "Botanical Green",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=400&fit=crop",
      category: "Nature",
    },
  ];

  const features = [
    {
      icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
      title: "Hemat RSVP Cetak Fisik",
      description:
        "Kami memberikan solusi hemat biaya untuk RSVP dan cetak fisik",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      title: "Limit RSVP Sesuai Tempat",
      description: "Atur batas tamu sesuai kapasitas venue dengan mudah",
    },
    {
      icon: <FontAwesomeIcon icon={faMusic} />,
      title: "Buku Tamu Digital & QR Code Check In",
      description:
        "Sistem buku tamu digital dengan QR code untuk check-in otomatis",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      title: "Guest Table Management",
      description:
        "Kelola pengaturan tempat duduk tamu dengan sistem yang terintegrasi",
    },
    {
      icon: <FontAwesomeIcon icon={faChartBar} />,
      title: "Statistic Analytic Terintegrasi",
      description: "Dashboard analytics lengkap untuk monitoring undangan",
    },
    {
      icon: <FontAwesomeIcon icon={faSyncAlt} />,
      title: "Update Jadwal Wedding Terpusat",
      description: "Update informasi acara secara real-time ke semua tamu",
    },
  ];
  

  const testimonials = [
    {
      name: "Sarah & Ahmad",
      rating: 5,
      text: "Pelayanan sangat memuaskan, template yang disediakan sangat bagus dan mudah digunakan. Tim support juga sangat responsif membantu kami.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c5e93dd7?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Dina & Rizky",
      rating: 5,
      text: "Undangan digital kami jadi sangat elegant dan banyak tamu yang compliment. Fitur RSVP nya juga sangat memudahkan untuk tracking kehadiran.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Maya & Andi",
      rating: 5,
      text: "Harga terjangkau dengan kualitas premium. Dashboard analytics nya sangat membantu kami dalam mengatur acara pernikahan.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  const pricingPlans = [
    {
      name: "Paket",
      price: "Rp150.000",
      originalPrice: "Rp200.000",
      features: [
        "1 Website Undangan",
        "Unlimited Tamu",
        "RSVP Management",
        "Gallery Foto & Video",
        "Background Music",
        "Custom Domain",
        "Analytics Dashboard",
        "24/7 Support",
      ],
      isPopular: false,
      bgColor: "bg-white",
    },
    {
      name: "Paket Premium",
      price: "Rp250.000",
      originalPrice: "Rp350.000",
      features: [
        "Semua Fitur Paket Basic",
        "Premium Template",
        "Custom Design Request",
        "Live Streaming Integration",
        "Guest Table Management",
        "QR Code Check-in",
        "Multiple Event Support",
        "Priority Support",
      ],
      isPopular: true,
      bgColor: "bg-gradient-to-br from-teal-400 to-blue-500",
    },
    {
      name: "Paket Professional",
      price: "Rp350.000",
      originalPrice: "Rp500.000",
      features: [
        "Semua Fitur Premium",
        "White Label Solution",
        "API Integration",
        "Advanced Analytics",
        "Custom Branding",
        "Unlimited Revisions",
        "SEO Optimization",
        "Dedicated Account Manager",
      ],
      isPopular: false,
      bgColor: "bg-white",
    },
    {
      name: "Paket Enterprise",
      price: "Rp500.000",
      originalPrice: "Rp750.000",
      features: [
        "Semua Fitur Professional",
        "Multi-language Support",
        "Advanced Security",
        "Custom Development",
        "Training & Consultation",
        "99.9% Uptime SLA",
        "Backup & Recovery",
        "Enterprise Support",
      ],
      isPopular: false,
      bgColor: "bg-white",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara membuat undangan digital?",
      answer:
        "Sangat mudah! Anda tinggal pilih template, isi data acara, upload foto, dan undangan siap dibagikan.",
    },
    {
      question: "Apakah bisa custom design?",
      answer:
        "Ya, kami menyediakan layanan custom design sesuai dengan keinginan Anda dengan tambahan biaya.",
    },
    {
      question: "Bagaimana dengan sistem RSVP?",
      answer:
        "Sistem RSVP terintegrasi otomatis, tamu bisa konfirm kehadiran langsung dari undangan digital.",
    },
    {
      question: "Apakah ada garansi?",
      answer:
        "Ya, kami memberikan garansi 30 hari uang kembali jika tidak puas dengan layanan kami.",
    },
    {
      question: "Berapa lama proses pembuatan?",
      answer:
        "Proses pembuatan hanya 1-2 hari kerja setelah data lengkap diterima.",
    },
    {
      question: "Apakah undangan bisa diakses selamanya?",
      answer:
        "Ya, undangan akan aktif selama 1 tahun penuh tanpa biaya tambahan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12   h-12  flex items-center justify-center">
              <img
                src="/src/assets/icon/greenPLNCWKS.png"
                alt="Logo"
                className="w-5 h-5 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">BikinUndangan</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#templates"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Template
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Fitur
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Harga
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontak
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Masuk
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg text-white font-semibold transition-colors">
              Daftar Gratis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Bikin Undangan</span>
                <br />
                <span className="text-teal-400">Online Digital</span>
                <br />
                <span className="text-white">Pernikahan Cepat</span>
                <br />
                <span className="text-white">dan Mudah</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Kami hadir untuk membuat undangan pernikahan digital anda yang menawan dengan mudah.
                Template premium, fitur lengkap, dan harga terjangkau.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors flex items-center justify-center group">
                  Mulai Buat Undangan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Lihat Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop"
                alt="Happy couple creating digital wedding invitation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Cek Fresh Design Undangan Online Digital
              <br />
              Yang Siap Pakai Untuk Pernikahan Yang
              <br />
              Berkesan
            </h2>
            <p className="text-gray-400 text-lg">
              Pilihan template premium yang dapat disesuaikan dengan tema
              pernikahan Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div key={template.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-700 aspect-[3/4]">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">
                        {template.name}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {template.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
              Lihat Semua Template
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              4 Fitur Unggulan Yang Bikin Website
              <br />
              Undangan Pernikahan Online Makin Powerful
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-orange-100 p-8 rounded-xl text-gray-900">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Sistem Undangan Sendiri Aja QR Code
                  </h3>
                </div>
                <p className="text-gray-700">
                  Dengan QR code, tamu bisa langsung akses undangan digital dan
                  melakukan RSVP dengan mudah melalui smartphone mereka.
                </p>
              </div>

              <div className="bg-orange-100 p-8 rounded-xl text-gray-900">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Guest Table Management</h3>
                </div>
                <p className="text-gray-700">
                  Atur dan kelola tempat duduk tamu dengan sistem manajemen meja
                  yang terintegrasi dan mudah digunakan.
                </p>
              </div>

              <div className="bg-orange-100 p-8 rounded-xl text-gray-900">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Akses Check-in QR Code Is to Secure Attendance Online di
                    Venue Event
                  </h3>
                </div>
                <p className="text-gray-700">
                  Sistem check-in otomatis dengan QR code untuk memastikan
                  keamanan dan kemudahan absensi tamu di venue acara.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-100 p-8 rounded-xl text-gray-900">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Unlimited Website Notification
                  </h3>
                </div>
                <p className="text-gray-700">
                  Kirim notifikasi unlimited ke semua tamu mengenai update
                  acara, perubahan jadwal, atau informasi penting lainnya.
                </p>
              </div>

              <div className="bg-orange-100 p-8 rounded-xl text-gray-900">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Customer Support</h3>
                </div>
                <p className="text-gray-700">
                  Tim customer support yang siap membantu Anda 24/7 untuk
                  memastikan undangan digital Anda berjalan sempurna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Semua Yang Kamu Butuhkan Untuk Wujudkan
              <br />
              Undangan Digital Impian
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-400 text-sm">
                Tampilan sempurna di semua perangkat mobile, tablet, dan desktop
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Love Story Section</h3>
              <p className="text-gray-400 text-sm">
                Bagian khusus untuk menceritakan perjalanan cinta Anda
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Event Details</h3>
              <p className="text-gray-400 text-sm">
                Informasi lengkap acara dengan countdown timer otomatis
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Photo Gallery</h3>
              <p className="text-gray-400 text-sm">
                Galeri foto dengan tampilan yang elegan dan mudah dinavigasi
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Background Music</h3>
              <p className="text-gray-400 text-sm">
                Musik latar yang dapat disesuaikan untuk suasana romantis
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location Maps</h3>
              <p className="text-gray-400 text-sm">
                Integrasi peta lokasi acara untuk memudahkan tamu
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">RSVP Management</h3>
              <p className="text-gray-400 text-sm">
                Sistem konfirmasi kehadiran dengan dashboard admin
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Digital Gift</h3>
              <p className="text-gray-400 text-sm">
                Fitur hadiah digital dengan QR code dan transfer otomatis
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guest Book</h3>
              <p className="text-gray-400 text-sm">
                Buku tamu digital untuk ucapan selamat dari tamu undangan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Harga Promo Pre-Launching
            </h2>
            <p className="text-gray-400 text-lg">
              Dapatkan harga spesial untuk early bird customer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 relative ${plan.bgColor} ${
                  plan.isPopular ? "text-white" : "text-gray-900"
                } ${plan.isPopular ? "transform scale-105" : ""}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      TERPOPULER
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg line-through opacity-60 ml-2">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      plan.isPopular ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    Per undangan
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.isPopular
                      ? "bg-white text-teal-600 hover:bg-gray-100"
                      : "bg-teal-500 text-white hover:bg-teal-600"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hal Yang Sering Ditanyakan
            </h2>
            <p className="text-gray-400 text-lg">
              Pertanyaan yang paling sering diajukan oleh calon pengantin
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
            <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
              Hubungi Tim Support
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-gray-400 text-lg">
              Testimoni dari pasangan yang telah mempercayai layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
              Lihat Semua Testimoni
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Siap Membuat Undangan Digital Impian Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pasangan yang telah mempercayai kami
            untuk hari spesial mereka
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-colors flex items-center">
              Mulai Buat Undangan
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors">
              Konsultasi Gratis
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Setup dalam 5 menit</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Garansi uang kembali</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  BikinUndangan
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Platform terpercaya untuk membuat undangan digital pernikahan
                yang menawan. Bergabunglah dengan ribuan pasangan bahagia yang
                telah menggunakan layanan kami.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-white font-bold">i</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-white font-bold">w</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Produk</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Template Undangan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    RSVP Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Guest Table
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    QR Code Check-in
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 BikinUndangan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors group">
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
