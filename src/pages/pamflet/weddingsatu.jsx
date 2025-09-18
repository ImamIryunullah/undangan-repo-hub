import React, { useState, useEffect, useRef } from 'react';

// --- ICONS ---
const Heart = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>);
const Calendar = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);
const MapPin = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const Clock = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const Music = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>);
const Gift = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>);
const ChevronLeft = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>);
const ChevronRight = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>);
const Play = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>);
const Pause = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>);

export default function WeddingInvitationBook() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [rsvpForm, setRsvpForm] = useState({ name: '', attendance: '', message: '' });

    const weddingDate = new Date('2024-12-25T14:00:00');
    const audioRef = useRef(null);

    const handleOpenBook = () => {
        setIsOpen(true);
    };

    const totalPages = 4;

    const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages));
    const goToPrevPage = () => setCurrentPage((page) => Math.max(page - 1, 0));

    // Countdown Timer
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate.getTime() - now;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    // Handle autoplay restrictions
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const galleryImages = [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=600&fit=crop"
    ];

    const handleRsvpSubmit = () => {
        if (rsvpForm.name && rsvpForm.attendance) {
            alert('Terima kasih atas konfirmasi kehadiran Anda!');
            setRsvpForm({ name: '', attendance: '', message: '' });
        } else {
            alert('Mohon lengkapi nama dan pilih kehadiran Anda');
        }
    };

    const handleAttendanceSelect = (attendance) => {
        setRsvpForm({ ...rsvpForm, attendance });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center p-4 font-serif text-gray-800 overflow-hidden">
            <audio ref={audioRef} loop>
                <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
            </audio>

            {/* Book Container */}
            <div
                className={`relative transition-all duration-1000 ease-out ${isOpen ? 'w-full max-w-6xl' : 'w-full max-w-md'
                    }`}
                style={{
                    height: '600px',
                    perspective: '2000px'
                }}
            >
                {/* Cover Page */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 rounded-2xl shadow-2xl transition-all duration-1000 cursor-pointer overflow-hidden ${isOpen ? 'opacity-0 pointer-events-none' : 'hover:shadow-xl hover:scale-105'
                        }`}
                    onClick={handleOpenBook}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-transparent to-purple-600/20"></div>
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
                        <div className="mb-4">
                            <div className="w-16 h-1 bg-white/60 mx-auto mb-2"></div>
                            <p className="font-sans text-lg tracking-wide">The Wedding Of</p>
                            <div className="w-16 h-1 bg-white/60 mx-auto mt-2"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
                            Sarah <span className="text-pink-200">&</span> Ahmad
                        </h1>

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-8 h-0.5 bg-white/60"></div>
                            <p className="font-sans text-xl tracking-widest">25.12.2024</p>
                            <div className="w-8 h-0.5 bg-white/60"></div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                            <span className="font-sans text-lg tracking-wide">Buka Undangan</span>
                        </div>

                        <p className="mt-6 text-sm font-sans tracking-wide opacity-80">Tap to open</p>
                    </div>
                </div>

                {/* Book Interior */}
                <div
                    className={`absolute inset-0 transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Left Page */}
                        <div className="w-1/2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50">
                                {currentPage === 0 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-rose-800">Mempelai Wanita</h2>
                                        <div className="flex-grow flex flex-col items-center justify-center">
                                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-rose-200 ring-4 ring-rose-100">
                                                <img
                                                    src="https://images.unsplash.com/photo-1494790108755-2616c0763b9e?w=400&h=400&fit=crop&crop=face"
                                                    alt="Sarah"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-3xl font-bold text-pink-600 mb-2">Sarah Muslimah</h3>
                                            <p className="text-center text-gray-600 mb-4">Putri dari Bapak Ahmad & Ibu Siti</p>
                                            <div className="bg-rose-100/50 p-4 rounded-lg">
                                                <p className="text-center italic text-gray-700">"Wanita yang shalehah adalah perhiasan dunia yang paling berharga"</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentPage === 1 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">Akad Nikah</h2>
                                        <div className="flex-grow flex flex-col justify-center space-y-6">
                                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                                                <div className="flex items-center mb-3">
                                                    <Calendar className="mr-3 text-green-600" />
                                                    <span className="font-semibold">Minggu, 25 Desember 2024</span>
                                                </div>
                                                <div className="flex items-center mb-3">
                                                    <Clock className="mr-3 text-green-600" />
                                                    <span className="font-semibold">08:00 - 10:00 WIB</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <MapPin className="mr-3 mt-1 text-green-600 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Masjid Al-Ikhlas</p>
                                                        <p className="text-gray-600">Jl. Kemanggisan Raya No. 123, Jakarta</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p className="italic text-gray-600">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"</p>
                                                <p className="text-sm text-gray-500 mt-2">- QS. Ar-Rum: 21</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentPage === 2 && (
                                    <div className="p-8 h-full">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">Galeri Foto</h2>
                                        <div className="grid grid-cols-2 gap-4 h-5/6">
                                            {galleryImages.map((img, i) => (
                                                <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                    <img
                                                        src={img}
                                                        alt={`Gallery ${i + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {currentPage === 3 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">Wedding Gift</h2>
                                        <div className="flex-grow flex flex-col justify-center">
                                            <div className="text-center mb-6">
                                                <Gift className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                                                <p className="text-gray-600 mb-6">Doa restu Anda adalah hadiah terindah. Namun jika ingin memberikan tanda kasih, dapat melalui:</p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                                    <h4 className="font-bold text-purple-800 mb-1">Bank BCA</h4>
                                                    <p className="font-mono text-lg">1234567890</p>
                                                    <p className="text-sm text-gray-600">a.n. Ahmad Maulana</p>
                                                </div>
                                                <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
                                                    <h4 className="font-bold text-rose-800 mb-1">Dana / OVO</h4>
                                                    <p className="font-mono text-lg">081234567890</p>
                                                    <p className="text-sm text-gray-600">a.n. Sarah Muslimah</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Page */}
                        <div className="w-1/2 relative overflow-hidden border-l border-gray-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-rose-50">
                                {currentPage === 0 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">Mempelai Pria</h2>
                                        <div className="flex-grow flex flex-col items-center justify-center">
                                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-purple-200 ring-4 ring-purple-100">
                                                <img
                                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                                                    alt="Ahmad"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-3xl font-bold text-purple-600 mb-2">Ahmad Maulana</h3>
                                            <p className="text-center text-gray-600 mb-4">Putra dari Bapak Umar & Ibu Fatimah</p>
                                            <div className="bg-purple-100/50 p-4 rounded-lg">
                                                <p className="text-center italic text-gray-700">"Pria terbaik adalah yang paling baik kepada keluarganya"</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentPage === 1 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-pink-800">Walimah</h2>
                                        <div className="flex-grow flex flex-col justify-center">
                                            <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-400 mb-6">
                                                <div className="flex items-center mb-3">
                                                    <Calendar className="mr-3 text-pink-600" />
                                                    <span className="font-semibold">Minggu, 25 Desember 2024</span>
                                                </div>
                                                <div className="flex items-center mb-3">
                                                    <Clock className="mr-3 text-pink-600" />
                                                    <span className="font-semibold">11:00 - 15:00 WIB</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <MapPin className="mr-3 mt-1 text-pink-600 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Gedung Al-Hikmah</p>
                                                        <p className="text-gray-600">Jl. Fatmawati No. 456, Jakarta</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-xl">
                                                <h3 className="text-center font-semibold text-rose-800 mb-4">Countdown Timer</h3>
                                                <div className="grid grid-cols-4 gap-2 text-center">
                                                    {Object.entries(timeLeft).map(([unit, value]) => (
                                                        <div key={unit} className="bg-white/70 rounded-lg p-2">
                                                            <div className="text-2xl font-bold text-rose-700">{value}</div>
                                                            <div className="text-xs uppercase text-gray-600">{unit.slice(0, 3)}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentPage === 2 && (
                                    <div className="p-8 h-full">
                                        <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">Konfirmasi Kehadiran</h2>
                                        <form
                                            className="flex flex-col gap-4"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                handleRsvpSubmit();
                                            }}
                                        >
                                            {/* Input Nama */}
                                            <input
                                                type="text"
                                                placeholder="Nama Lengkap"
                                                value={rsvpForm.name}
                                                onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                                                className="w-full p-3 border border-purple-200 rounded-xl bg-white/70 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                                            />

                                            {/* Pilihan Kehadiran */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => handleAttendanceSelect("hadir")}
                                                    className={`py-3 rounded-xl font-semibold transition-all ${rsvpForm.attendance === "hadir"
                                                            ? "bg-green-500 text-white shadow-lg"
                                                            : "bg-green-100 text-green-800 hover:bg-green-200"
                                                        }`}
                                                >
                                                    ✅ Hadir
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleAttendanceSelect("tidak hadir")}
                                                    className={`py-3 rounded-xl font-semibold transition-all ${rsvpForm.attendance === "tidak hadir"
                                                            ? "bg-red-500 text-white shadow-lg"
                                                            : "bg-red-100 text-red-800 hover:bg-red-200"
                                                        }`}
                                                >
                                                    ❌ Tidak Hadir
                                                </button>
                                            </div>

                                            {/* Pesan/Ucapan */}
                                            <textarea
                                                placeholder="Ucapan & Doa untuk kedua mempelai..."
                                                rows="4"
                                                value={rsvpForm.message}
                                                onChange={(e) => setRsvpForm({ ...rsvpForm, message: e.target.value })}
                                                className="w-full p-3 border border-purple-200 rounded-xl bg-white/70 resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
                                            />

                                            {/* Tombol Submit */}
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                            >
                                                Kirim Konfirmasi
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {currentPage === 3 && (
                                    <div className="p-8 h-full flex flex-col">
                                        <div className="flex-grow flex flex-col justify-center items-center text-center">
                                            <Heart className="w-20 h-20 text-pink-400 mx-auto mb-6 animate-pulse" />
                                            <h2 className="text-4xl font-bold text-rose-800 mb-4">Terima Kasih</h2>
                                            <div className="bg-rose-50 p-6 rounded-xl mb-6">
                                                <p className="italic text-gray-700 leading-relaxed">
                                                    Merupakan suatu kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do'a restu kepada kedua mempelai.
                                                </p>
                                            </div>
                                            <p className="text-pink-700 font-semibold mb-4">Wassalamu'alaikum Wr. Wb.</p>
                                            <div className="w-20 h-1 bg-rose-300 mb-4"></div>
                                            <p className="font-bold text-gray-800">Keluarga Besar Ahmad & Sarah</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            {isOpen && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 0}
                        className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="font-semibold">Sebelumnya</span>
                    </button>

                    <button
                        onClick={togglePlay}
                        className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
                    >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                    </button>

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages - 1}
                        className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all"
                    >
                        <span className="font-semibold">Selanjutnya</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* Page Indicator */}
            {isOpen && (
                <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`w-3 h-3 rounded-full transition-all ${currentPage === i
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                                    : 'bg-white/60 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}