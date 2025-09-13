"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';



import Script from 'next/script'
import FormModal from "./rsvpForm";
import { useSearchParams } from "next/navigation";


type Wish = {
  id: number;
  name: string;
  phone: string,
  comment: string;
  timestamp: string;
};


export default function Home() {
  //submit form flag
  const [submitState, setSubmitState] = useState('form'); // 'form', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  //form data
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const attendRef = useRef<HTMLSelectElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  //loading sate submit
  const [loading, setLoading] = useState(false);
  //parameter get
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Tamu Undangan"; // default if no param
  const invitationType = searchParams.get("type") || "1";
  //kopi rekening
  const [copiedAccount, setCopiedAccount] = useState("");
  const copyToClipboard = (text: string, bankName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(bankName);
      setTimeout(() => setCopiedAccount(""), 2000);
    });
  };

  //pesan
  const [wishes, setWishes] = useState<Wish[]>([]);
  //carousell state
  const [currentCaroIndex, setCurrentCaroIndex] = useState(0);
  const [isCaroAutoPlaying, setIsCaroAutoPlaying] = useState(true);

  // Function to generate avatar background color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };
  //data rekening
  const bankAccounts = [
    {
      id: 'bca',
      name: 'BCA',
      accountNumber: '5540807703',
      accountHolder: 'Nuri Handayani',
      logo: '/BCA_logo.png',
      color: '#1f4e79'
    },
    {
      id: 'bni',
      name: 'BNI',
      accountNumber: '0346961267',
      accountHolder: 'Nuri Handayani',
      logo: '/BNI_logo.webp',
      color: '#f57c00'
    }
  ];
  //data pic untuk carousell
  const pics = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
      title: "Wedding Celebration",
      description: "Beautiful moments captured"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      title: "Engagement Party",
      description: "Love in the air"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      title: "Anniversary Dinner",
      description: "Celebrating milestones"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      title: "Birthday Bash",
      description: "Making memories"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      title: "Corporate Event",
      description: "Professional gatherings"
    }
  ];


  // Function to get first letter of name
  const getInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  // Fetch pesan
  useEffect(() => {
    async function fetchWishes() {
      try {
        setLoading(true);
        const res = await fetch("/api/save-rsvp", { cache: "no-store" });
        const json = await res.json();
        if (json.success) {
          setWishes(json.data);  // ✅ use API response
        }
      } catch (error) {
        console.error("Error fetching wishes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchWishes();
  }, []);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {


    e.preventDefault(); // stop browser reload ✅
    const formData = {
      name: nameRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      attend: attendRef.current?.value || "",
      comment: commentRef.current?.value || "",
    };
    setLoading(true);
    setSubmitState('form'); // Reset any previous error state    
    try {
      const res = await fetch("/api/save-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save");
      setSubmitState('success');
      if (nameRef.current) nameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (attendRef.current) attendRef.current.value = "Hadir";
      if (commentRef.current) commentRef.current.value = "";
    } catch (err) {
      console.error(err);
      setSubmitState('error');
      setErrorMessage('Gagal mengirim RSVP. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const resetModalState = () => {
    setSubmitState('form');
    setErrorMessage('');
  };

  //function for carousell
  useEffect(() => {
    if (isCaroAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentCaroIndex((prevIndex) =>
          prevIndex === pics.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isCaroAutoPlaying, pics.length]);

  const goToPrevious = () => {
    setIsCaroAutoPlaying(false);
    setCurrentCaroIndex(currentCaroIndex === 0 ? pics.length - 1 : currentCaroIndex - 1);
    setTimeout(() => setIsCaroAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsCaroAutoPlaying(false);
    setCurrentCaroIndex(currentCaroIndex === pics.length - 1 ? 0 : currentCaroIndex + 1);
    setTimeout(() => setIsCaroAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsCaroAutoPlaying(false);
    setCurrentCaroIndex(index);
    setTimeout(() => setIsCaroAutoPlaying(true), 5000);
  };



  return (

    <div>
      <main id="app">
        <div id="modalOverlay" className="modal-backdrop fade" style={{ display: 'none' }} />
        <div id="loader" className="loader-wrapper" style={{ display: 'none' }}>
          <span className="loader"><span className="loader-inner" /></span>
        </div>
        <audio id="music" loop autoPlay><source src="/bgm2.mp3" /></audio>

        <div id="workspace-container" className="position-fixed h-100 w-100" style={{ overflow: 'hidden' }}>
          <div id="panZoom" className="position-fixed h-100 w-100" style={{ inset: 0, transformOrigin: '50% 50%', transform: 'scale(1.68886) translate(0px, 0px)' }}>
            <div className="h-100 w-100 d-flex align-items-center justify-content-center">
              <div className="canvas not-open" style={{ height: 736 }}>
                <div id="wedStyle" data-guest={decodeURIComponent(name)} data-group="VIP" style={{ height: 736, display: 'block' }}>
                  <div className="wedstyle_track">
                    <ul className="wedstyle_list">
                      <li className="wedstyle_slide wedstyle_list" style={{}}>
                        <div className="container-mobile cover" style={{ backgroundImage: 'url("bg-1.png")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>

                          </div>
                          {/* <div className="d-flex justify-content-center align-items-center" 
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundSize: "cover",
                        zIndex: 2,
                        position: "relative",
                        border: "2px solid var(--inv-border)",
                        WebkitBackdropFilter: "blur(2px)",
                        backdropFilter: "blur(2px)",
                        backgroundColor: "rgba(249, 249, 249, .64)",
                        borderRadius: "1rem"
                      }}> */}
                          <div className="d-flex justify-content-center align-items-center"
                            style={{
                              height: "100%",
                              width: "100%",
                              backgroundSize: "cover",
                              zIndex: 2,
                              position: "relative",
                            }}>

                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="w-100 pt-5">
                              <div className="text-center animate__animated animate__zoomIn animate__slower mt-5 mb-3" style={{ lineHeight: 1 }}>
                                <div className="editable mb-2" style={{ fontSize: '14.4px' }}>The Wedding Of</div>
                                <div className="color-accent editable mb-2 font-aksara white-stroke" style={{ fontSize: 80 }}>Nuri</div>
                                <div className="editable font-latin mt-3" style={{ fontSize: 30 }}>&amp;</div>
                                <div className="color-accent editable mb-2 font-aksara white-stroke" style={{ fontSize: 80 }}>Rahadian</div>
                              </div>
                              <div className="text-center mx-auto" style={{ maxWidth: 280 }}>
                                <div className="text-center mb-3 py-3 px-2 animate__animated animate__zoomIn animate__slower" style={{ backgroundColor: 'rgba(225, 219, 203, 0.67)', border: '2px solid var(--inv-border)', borderRadius: '0.5rem' }}>
                                  <div className="editable mb-1 animate__animated animate__fadeInUp animate__slower" style={{ fontSize: 14 }}>
                                    Kepada Yth;<br />
                                    Bapak/Ibu/Saudara/i
                                  </div>
                                  <div id="guestNameSlot" className="editable color-accent h5 font-weight-bold mb-1 animate__animated animate__fadeInUp animate__slower" style={{ fontSize: 16 }}>{decodeURIComponent(name)}</div>
                                </div>
                                <button className="btn-open-invitation btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow" style={{ fontSize: 14 }}>Open Invitation</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="position-relative h-100 w-100 flex-column d-flex justify-content-center align-items-center" style={{ paddingBottom: '30%' }}>
                            <div className="text-center editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{ fontSize: '14.4px' }}>🏵 Undangan Pernikahan 🏵</div>
                            <div className="pt-3 d-flex align-items-center justify-content-center mb-2 mx-auto animate__animated animate__zoomIn animate__slower" style={{ height: 112, width: 60, marginBottom: "25px !important", backgroundImage: 'url("/gunungan-isi.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center' }}>
                              <div className="editable text-left font-latin" style={{ fontSize: 60, lineHeight: 1, transform: 'translate(2px, 9px)' }}>N</div>
                              <div className="editable text-right font-latin" style={{ fontSize: 60, lineHeight: 1, transform: 'translate(-8px, 33px)' }}>R</div>
                            </div>
                            <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                              <div className="text-center animate__animated animate__fadeInUp animate__slower" style={{ animationDelay: "1500ms" }}>
                                <div className="editable color-accent font-indo" style={{ fontSize: "40px", lineHeight: 1 }}>Nuri</div>
                              </div>
                              <div className="editable font-latin animate__animated animate__zoomIn animate__slower" style={{ margin: "-10px", fontSize: "40px", animationDelay: "500ms" }}>&amp;</div>
                              <div className="text-center animate__animated animate__fadeInDown animate__slower" style={{ animationDelay: "1500ms" }}>
                                <div className="editable color-accent font-indo" style={{ lineHeight: 1, fontSize: "40px" }}>Rahadian</div>
                              </div>
                            </div>
                            {invitationType === "3" && (
                              <div className="image-editable mx-auto animate__animated animate__fadeInUp animate__slower" style={{ height: 'auto', width: 230, overflow: 'hidden', position: 'absolute', bottom: '-120px' }}>
                                <img className="nr_render" src="/wedding_nr.webp" alt="wedding_nr.webp" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>


                          </div>
                          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                            <div className="animate__animated animate__fadeInDown animate__slower">
                              <div className="image-editable" style={{ width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20 }}>
                                <img src="/gunungan-isi.png" alt="gunungan-isi.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{ fontSize: '14.4px' }}>✤ Ar-Rum : 21 ✤</div>
                              <div className="color-accent editable quotes mb-3 animate__animated animate__zoomIn animate__slower" style={{ fontSize: 20 }}>
                                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                              </div>
                              <div className="editable quotes animate__animated animate__fadeInUp animate__slower" style={{ fontSize: 13 }}>
                                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div>
                              <div>
                                <div className="image-editable mb-3 animate__animated animate__fadeInLeft animate__slower" style={{ height: 100, width: 100, margin: 'auto', borderRadius: '100%', overflow: 'hidden' }}>
                                  <img src="/cpw.jpg" alt="cpw.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="text-center animate__animated animate__fadeInLeft animate__slower" style={{ position: 'relative' }}>
                                  <div className="editable color-accent h4 mb-2 font-indo" style={{ fontSize: 24 }}>Nuri Handayani S.Hum, MM</div>
                                  <div className="editable" style={{ fontSize: '14.4px' }}>
                                    Putri dari<br />
                                    Bapak Ir. Sudarmadi, MM<br />
                                    &amp; Ibu dr. Indra Andriani
                                  </div>
                                </div>
                                <div className="editable mb-3 text-center animate__animated animate__fadeIn animate__slower font-photograph-signature" style={{ fontSize: 30 }}>dengan</div>
                                <div className="text-center animate__animated animate__fadeInRight animate__slower" style={{ position: 'relative' }}>
                                  <div className="editable color-accent h4 mb-2 font-indo" style={{ fontSize: 24 }}>Rahadian Adinegoro, S.Kom, B.InfTech</div>
                                  <div className="editable mb-1" style={{ fontSize: '14.4px' }}>
                                    Putra dari<br />
                                    Bapak Rosichin, SE, MM, M.Si<br />
                                    &amp; Ibu Tuti Hartati, SE, M.Si
                                  </div>
                                </div>
                                <div className="image-editable mt-3 animate__animated animate__fadeInRight animate__slower" style={{ height: 100, width: 100, margin: 'auto', borderRadius: '100%', overflow: 'hidden' }}>
                                  <img src="/cpp.jpg" alt="cpp.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="d-flex justify-content-center flex-column align-items-center" style={{ height: '100%' }}>
                            <div className="animate__animated animate__fadeInDown animate__slower">
                              <div className="image-editable" style={{ width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20 }}>
                                <img src="/gunungan-isi.png" alt="gunungan-isi.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                              </div>
                            </div>
                            <div className="text-center animate__animated animate__fadeInDown animate__slower">
                              <div className="editable color-accent font-weight-bold" style={{ fontSize: 25 }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                            </div>
                            <div className="mt-3 text-center animate__animated animate__zoomIn animate__slower">
                              <div className="editable font-latin" style={{ fontSize: 40, lineHeight: '1.2' }}>Minggu</div>
                              <div className="editable color-accent font-indo" style={{ fontSize: 30, lineHeight: '1.2' }}>12 Oktober 2025</div>
                            </div>
                            <div className="mb-3"></div>
                            <div className="text-center animate__animated animate__fadeInDown animate__slower">
                              <div className="editable color-accent font-weight-bold" style={{ fontSize: 16 }}>🏵 Akad Nikah 🏵</div>
                              <div className="editable" style={{ fontSize: 16 }}>Pukul 07.00 - 08.30 WIB</div>
                            </div>
                            <div className="mb-2"></div>
                            <div className="text-center animate__animated animate__fadeInDown animate__slower">
                              <div className="editable color-accent font-weight-bold" style={{ fontSize: 16 }}>🏵 Resepsi 🏵</div>
                              <div className="editable" style={{ fontSize: 16 }}>Pukul 11.00 - 13.00 WIB</div>
                            </div>
                            <div className="mb-2"></div>
                            <div className="mt-2 text-center animate__animated animate__zoomIn animate__slower">
                              <div className="editable color-accent font-weight-bold" style={{ fontSize: 16 }}>🏵 Auditorium Departemen Pertanian 🏵</div>
                              {/* <div className="editable" style={{fontSize: 14}}>
                            Jl. Harsono RM No.3 Ragunan<br />
                            Pasar Minggu, Jakarta Selatan
                          </div> */}
                            </div>

                          </div>
                        </div>
                      </li>
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div style={{ width: '100%' }}>
                              <div>
                                <div
                                  className="animate__animated animate__fadeInDown animate__slow"
                                  style={{
                                    width: "100%",
                                    margin: "auto auto 20px",
                                    borderRadius: 10,
                                    overflow: "hidden",
                                    paddingBottom: "100%",
                                    position: "relative"
                                  }}
                                >
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.752517861053!2d106.82233819999999!3d-6.296218399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f20122238cb1%3A0x7da32d9e4f29d2cf!2sAuditorium%20of%20the%20Ministry%20of%20Agriculture!5e0!3m2!1sen!2sid!4v1757252608929!5m2!1sen!2sid"
                                    className="maps-embed"
                                    style={{ border: 0, position: "absolute" }}
                                  />
                                </div>
                                <button className="btn-maps btn btn-sm btn-pilled btn-block btn-accent mt-1 mb-4">Edit Denah Lokasi</button>
                                <div className="text-center animate__animated animate__fadeInUp animate__slow">
                                  <div className="editable font-weight-bold" style={{ fontSize: 14 }}>Auditorium Departemen Pertanian</div>
                                  <div className="editable mb-3" style={{ fontSize: 14, marginLeft: "50px", marginRight: "50px" }}>Departemen Pertanian Gedung F, Jalan R.M Harsono No. 3, Ragunan, Pasar Minggu, RT.5/RW.7,  Ragunan, Ps. Minggu, Kota Jakarta Selatan, 125500</div>
                                  <a href="https://maps.app.goo.gl/UuyPBf9xyxjHB4Q9A" target="_blank" rel="noreferrer noopener" className="btn-maps-link mx-auto btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style={{ gap: 8, maxWidth: 200 }}>
                                    Petunjuk Ke Lokasi
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* BEGIN RSVP SECTION */}
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div style={{ width: '100%' }}>
                              <div className="animate__animated animate__fadeInDown animate__slower">
                                <div className="image-editable" style={{ width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20 }}>
                                  <img src="/gunungan-isi.png" alt="gunungan-isi.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="editable font-latin color-accent h4 mb-4 animate__animated animate__fadeInDown animate__slower" style={{ fontSize: "28.8px" }}>Doa Untuk Pengantin</div>
                                <div className="editable mb-4 animate__animated animate__fadeInUp animate__slower" style={{ fontSize: "14.4px" }}>
                                  Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan mengumpulkan kalian berdua dalam kebaikan<br />
                                  <br />
                                  HR. Abu Daud
                                </div>
                                {/* <div className="editable mb-4 animate__animated animate__fadeInUp animate__slower">Tekan tombol dibawah ini untuk mengirim ucapan</div> */}
                                <button className="btn-rsvp btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow" style={{ fontSize: 20 }}>Kirim Ucapan</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* END RSVP SECTION */}
                      {/* BEGIN PESAN SECTION  */}
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                          </div>
                          <div className="watermark d-flex flex-column" style={{ height: '100%' }}>
                            <div className="mt-auto" style={{ width: '100%', height: "100%" }}>
                              <div className="text-center">
                                {/* <div className="editable mb-2 animate__animated animate__fadeInDown animate__slower" style={{fontSize: 14}}>
                              Pesan
                            </div> */}
                                {/* <div className="editable mb-3 animate__animated animate__fadeInDown animate__slower font-italic" style={{fontSize: 16}}>Wassalamualaikum Warahmatullahi Wabarakatuh</div> */}

                                <div className="text-center d-flex align-items-center justify-content-center" style={{ gap: 14, lineHeight: '1.2' }}>
                                  <div className="comment card  mt-2 py-2 pr-2" style={{ border: "0 !important", height: "100%" }}>
                                    <div className="card-body mt-0 p-0 text-left" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                      <div style={{ height: "100%", maxHeight: "550px", overflowY: "auto", padding: "10px", }} className="wishes has-animate" data-anim="zoom-in-up" id="wishes-container" data-load-animation="true">
                                        {loading ? (
                                          <p className="font-latin color-accent h4 m-5 editable "
                                            style={{ textAlign: "center", fontSize: "1.5rem" }}>
                                            Memuat pesan...
                                          </p>
                                        ) : (
                                          <>
                                            {wishes.length === 0 && (
                                              <p className="font-latin color-accent h4 m-5 editable "
                                                style={{ textAlign: "center", fontSize: "1.5rem" }}>
                                                Belum ada pesan
                                              </p>
                                            )}

                                            {wishes.map((wish) => (
                                              <div
                                                key={wish.name + wish.phone}
                                                className="wish comment mt-0"
                                                style={{ background: "rgba(255,255,255,0.0)" }}
                                              >
                                                <div
                                                  className="avatar wish-badge rounded-circle d-flex align-items-center justify-content-center text-white font-weight-bold me-3"
                                                  style={{
                                                    height: "40px",
                                                    width: "40px",
                                                    backgroundColor: getAvatarColor(wish.name),
                                                    fontSize: "16px",
                                                    minWidth: "40px",
                                                  }}
                                                >
                                                  {getInitial(wish.name)}
                                                </div>
                                                <div className="wish-description">
                                                  <h6
                                                    style={{ fontSize: "1.05rem", textDecoration: "underline" }}
                                                    className="notranslate"
                                                  >
                                                    {wish.name}
                                                  </h6>
                                                  <p>{wish.comment}</p>
                                                  <small className="text-muted">{wish.timestamp}</small>
                                                </div>
                                              </div>
                                            ))}
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* END PESAN SECTION */}
                      {invitationType !== "1" && (
                        <>
                          {/* BEGIN GIFT SECTION */}
                          <li className="wedstyle_slide" style={{ display: 'none' }}>
                            <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                              <div className="frame">
                                <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                                <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                                <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                                  <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                                </div>
                                <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                                  <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                    <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                                  </div>
                                </div>
                                <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                                  <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                    <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                                  <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                    <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                                  <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                    <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                                  <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                    <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                                  <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                    <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                                  <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                    <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                                  </div>
                                </div>
                                <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                                  <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                    <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                                  </div>
                                </div>

                              </div>
                              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                <div className="text-center" style={{ width: '100%' }}>
                                  <div className="font-latin color-accent h4 mb-2 editable animate__animated animate__fadeInDown animate__slower" style={{ fontSize: '28.8px' }}>Tanda Kasih</div>
                                  <div className="editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{ fontSize: '14.4px' }}>
                                    Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.
                                  </div>
                                  <div className="gift-container mt-3 p-4 rounded animate__animated animate__zoomIn animate__slow">
                                    <div className="bank-accounts-wrapper">
                                      {bankAccounts.map((bank, index) => (
                                        <div
                                          key={bank.id}
                                          className={`bank-account-card ${index > 0 ? 'mt-4' : ''}`}
                                        >
                                          {/* Bank Logo */}
                                          <div className="bank-logo-container">
                                            <div className="bank-logo bg-white rounded shadow-sm">
                                              <img
                                                src={bank.logo}
                                                alt={`${bank.name} logo`}
                                                className="logo-image"
                                              />
                                            </div>
                                          </div>

                                          {/* Account Information */}
                                          <div className="account-info">
                                            {/* Account Holder Name - Emphasized */}
                                            <div className="account-holder-name">
                                              {bank.accountHolder}
                                            </div>

                                            {/* Bank Name */}
                                            <div className="bank-name">
                                              {bank.name}
                                            </div>

                                            {/* Account Number with Copy Button */}
                                            <div className="account-number-section">
                                              <div className="account-number">
                                                {bank.accountNumber}
                                              </div>

                                              <button
                                                type="button"
                                                className={`copy-btn ${copiedAccount === bank.name ? 'copied' : ''}`}
                                                onClick={() => copyToClipboard(bank.accountNumber, bank.name)}

                                              >
                                                {copiedAccount === bank.name ? (
                                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                  </svg>
                                                ) : (
                                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                  </svg>
                                                )}
                                                <span className="copy-text">
                                                  {copiedAccount === bank.name ? 'Tersalin' : 'Salin'}
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* END GIFT SECTION */}
                        </>
                      )}
                      {/* BEGIN OF GALLERY SECTION  */}
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="w-full h-full flex items-center justify-content-center p-0 carousel-container">
                          <div className="w-full max-w-5xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm carousel-wrapper">
                            {/* Main Carousel Container */}
                            <div className="relative h-80 md:h-96 overflow-hidden carousel-main">
                              {/* Slides */}
                              <div
                                className="slides-container"
                                style={{ transform: `translateX(-${currentCaroIndex * 100}%)` }}
                              >
                                {pics.map((pic, index) => (
                                  <div key={pic.id} className="slide">
                                    <img
                                      src={pic.image}
                                      alt={pic.title}
                                      className="slide-image"
                                    />

                                    {/* Simple overlay for text readability */}
                                    <div className="slide-overlay"></div>
                                  </div>
                                ))}
                              </div>

                                  {/* Navigation Arrows */}
                                  <button
                                    onClick={goToPrevious}
                                    className="nav-button nav-button-left"
                                    aria-label="Previous slide"
                                  >
                                    <ChevronLeft size={20} />
                                  </button>

                                  <button
                                    onClick={goToNext}
                                    className="nav-button nav-button-right"
                                    aria-label="Next slide"
                                  >
                                    <ChevronRight size={20} />
                                  </button>
                              
                            </div>
                          </div>
                          <div className="w-full max-w-5xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm carousel-wrapper">
                            {/* Main Carousel Container */}
                            <div className="relative h-80 md:h-96 overflow-hidden carousel-main">
                              {/* Slides */}
                              <div
                                className="slides-container"
                                style={{ transform: `translateX(-${currentCaroIndex * 100}%)` }}
                              >
                                {pics.map((pic, index) => (
                                  <div key={pic.id} className="slide">
                                    <img
                                      src={pic.image}
                                      alt={pic.title}
                                      className="slide-image"
                                    />

                                    {/* Simple overlay for text readability */}
                                    <div className="slide-overlay"></div>
                                  </div>
                                ))}
                              </div>

                                  {/* Navigation Arrows */}
                                  <button
                                    onClick={goToPrevious}
                                    className="nav-button nav-button-left"
                                    aria-label="Previous slide"
                                  >
                                    <ChevronLeft size={20} />
                                  </button>

                                  <button
                                    onClick={goToNext}
                                    className="nav-button nav-button-right"
                                    aria-label="Next slide"
                                  >
                                    <ChevronRight size={20} />
                                  </button>
                              
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>


                      {/* BEGIN OF TERIMAKASIH */}
                      <li className="wedstyle_slide" style={{ display: 'none' }}>
                        <div className="container-mobile" style={{ backgroundImage: 'url("bg.jpg")' }}>
                          <div className="frame">
                            <img src="/trel-1.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                            <img src="/trer-1.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                            <div className="frame-tl w-100 only-cover" style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}>
                              <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{ animationDelay: '1.5s' }} />
                            </div>
                            <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                              <div className="animate-left" style={{ transform: 'translate(-25%, 105%)' }}>
                                <img src="/flol-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                              <div className="animate-right" style={{ transform: 'translate(25%, 105%)' }}>
                                <img src="/flor-2.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '120ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-29%, -85%)' }}>
                                <img src="/bl-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-27%, -87%)' }}>
                                <img src="/sinta.webp" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-left" style={{ transform: 'translate(-16%, -70%)' }}>
                                <img src="/flol-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'left bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.5s' }}>
                              <div className="animate-right" style={{ transform: 'translate(29%, -85%)' }}>
                                <img src="/br-1.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2.2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(27%, -87%)' }}>
                                <img src="/rama.webp" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '100ms' }} />
                              </div>
                            </div>
                            <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{ animationDelay: '2s' }}>
                              <div className="animate-right" style={{ transform: 'translate(16%, -70%)' }}>
                                <img src="/flor-3.png" alt="frame" className="w-100" style={{ transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                              </div>
                            </div>

                          </div>
                          <div className="watermark d-flex flex-column" style={{ height: '100%' }}>
                            <div className="" style={{ width: '100%', marginBottom: '1rem' }}>
                              <div className="text-center">
                                <div className="editable mb-3 animate__animated animate__fadeInDown animate__slower font-italic" style={{ fontSize: 16 }}>
                                  <img src="/tengs.jpg" alt="frame" className="" style={{ width: '90%', marginTop: '1rem', marginBottom: '1rem', transformOrigin: 'right bottom', animationDelay: '300ms', borderRadius: '5%' }} />
                                </div>
                                <div className="editable mb-2 animate__animated animate__fadeInDown animate__slower" style={{ fontSize: 14 }}>
                                  Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kedua mempelai.
                                </div>
                                <div className="editable mb-3 animate__animated animate__fadeInDown animate__slower font-italic" style={{ fontSize: 16 }}>Wassalamualaikum Warahmatullahi Wabarakatuh</div>
                                <div className="text-center d-flex align-items-center justify-content-center animate__animated animate__fadeInDown animate__slow" style={{ gap: 14, lineHeight: '2' }}>
                                  <div>
                                    <div className="editable" style={{ textDecoration: 'underline', fontSize: 13 }}>Keluarga</div>
                                    <div className="editable font-weight-bold" style={{ fontSize: 13 }}>
                                      Bapak Ir. Sudarmadi, MM<br />
                                      &amp; Ibu dr. Indra Andriani
                                    </div>
                                  </div>
                                  <div>
                                    <div className="editable" style={{ textDecoration: 'underline', fontSize: 13 }}>Keluarga</div>
                                    <div className="editable font-weight-bold" style={{ fontSize: 13 }}>
                                      Bapak Rosichin, SE, MM, M.Si<br />
                                      &amp; Ibu Tuti Hartati, SE, M.Si
                                    </div>
                                  </div>
                                </div>
                                <div className="editable mb-3 animate__animated animate__fadeInDown animate__slower font-italic" style={{ fontSize: 16 }}>
                                  <img src="/simple_house.png" alt="frame" className="" style={{ width: '30%', transformOrigin: 'right bottom', animationDelay: '300ms' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* END OF TERIMA KASIH */}
                    </ul>


                  </div>
                </div>
                <div id="smMenu" className="wedstyle_menu">
                  <ul className="wedstyle_menu_list">
                    <li className="wedstyle_menu_item active" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-envelope" style={{ color: 'currentcolor' }} /> <span>Opening</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-star-and-crescent" style={{ color: 'currentcolor' }} /> <span>Greeting</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-article" style={{ color: 'currentcolor' }} /> <span>Quotes</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-heart" style={{ color: 'currentcolor' }} /> <span>Mempelai</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-clock" style={{ color: 'currentcolor' }} /> <span>Acara</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}>
                      <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.532 2.937a6.89 6.89 0 0 1 7.034.058C17.71 4.327 19.012 6.705 19 9.26c-.05 2.54-1.447 4.929-3.193 6.775a18.727 18.727 0 0 1-3.358 2.82 1.173 1.173 0 0 1-.408.144.82.82 0 0 1-.39-.119 18.515 18.515 0 0 1-4.839-4.547A9.28 9.28 0 0 1 5 9.134c-.001-2.562 1.347-4.928 3.532-6.197Zm1.262 7.258a2.378 2.378 0 0 0 2.198 1.497 2.339 2.339 0 0 0 1.683-.701c.446-.454.696-1.07.694-1.713a2.423 2.423 0 0 0-1.462-2.243 2.346 2.346 0 0 0-2.594.52 2.455 2.455 0 0 0-.519 2.64Z" fill="currentColor" />
                        <ellipse opacity=".4" cx={12} cy={21} rx={5} ry={1} fill="currentColor" />
                      </svg>
                      <span>Maps</span>
                    </li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-chat-circle-text" style={{ color: 'currentcolor' }} /> <span>Ucapan</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-book-open-text" style={{ color: 'currentcolor' }} /> <span>Pesan</span></li>
                    {invitationType !== "1" && (
                      <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-gift" style={{ color: 'currentcolor' }} /> <span>Gift</span></li>
                    )}
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-image-square" style={{ color: 'currentcolor' }} /> <span>Gallery</span></li>
                    <li className="wedstyle_menu_item" style={{ maxWidth: '82.8px' }}><i className="icon ph ph-mosque" style={{ color: 'currentcolor' }} /> <span>Thanks</span></li>
                  </ul>
                </div>
                <div className="floating-action d-flex align-items-end flex-column">
                  {/* <button id="btnQrModal" onclick="if (!window.__cfRLUnblockHandlers) return false; showModal(qrModal)" className="btn btn-float"> */}
                  {/* <button id="btnQrModal" className="btn btn-float">

                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256">
                  <rect x={40} y={40} width={80} height={80} rx={16} />
                  <rect x={40} y={136} width={80} height={80} rx={16} />
                  <rect x={136} y={40} width={80} height={80} rx={16} />
                  <path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z" />
                  <path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z" />
                  <path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z" />
                </svg>
              </button> */}
                  {/* <button id="btnMusic" onclick="if (!window.__cfRLUnblockHandlers) return false; playMusic()" className="btn btn-float playing"> */}
                  <button id="btnMusic" className="btn btn-float playing">

                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256" className="play">
                      <path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76Zm92.16,77.59A8,8,0,0,0,160,106.83V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0-1,11.7Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256" className="pause">
                      <path d="M160,32V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H77.25l69.84-54.31A8,8,0,0,1,160,32Zm32,64a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,192,96Zm32-16a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80Z" />
                    </svg>
                  </button>
                  <button id="btnAutoplay" className="btn btn-float">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256" className="play">
                      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256" className="pause">
                      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="lightboxWrapper" className="lightbox-wrapper">
          <div className="lightbox-list" />
          <a href="##" id="lightboxCloseBtn" className="btn-lightbox">
            <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="lightbox-navigation">
            <a href="##" id="lightboxPrevBtn" data-index={0} className="lightbox-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
              </svg>
            </a>
            <a href="##" id="lightboxNextBtn" data-index={0} className="lightbox-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div id="qrModal" tabIndex={-1} role="dialog" aria-labelledby="qrModal" aria-hidden="true" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ height: '100%' }}>
              <div style={{ width: '100%', aspectRatio: '16 / 9', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url("/images/no-image.jpg")' }} />
              <div className="text-center py-4 px-4">
                <div>
                  <div className="mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={180} height={180} viewBox="0 0 180 180">
                      <rect x={0} y={0} width={180} height={180} fill="#ffffff" />
                      <g transform="scale(7.2)">
                        <g transform="translate(0,0)">
                          <path fillRule="evenodd" d="M8 0L8 1L9 1L9 2L10 2L10 3L11 3L11 1L13 1L13 0L11 0L11 1L9 1L9 0ZM14 0L14 1L15 1L15 0ZM16 0L16 1L17 1L17 0ZM12 2L12 4L11 4L11 5L10 5L10 4L9 4L9 5L10 5L10 8L9 8L9 6L8 6L8 8L9 8L9 10L8 10L8 11L7 11L7 10L6 10L6 11L5 11L5 8L3 8L3 9L4 9L4 12L5 12L5 13L3 13L3 10L2 10L2 8L0 8L0 11L1 11L1 12L0 12L0 17L1 17L1 15L3 15L3 16L2 16L2 17L7 17L7 16L6 16L6 15L8 15L8 18L9 18L9 20L8 20L8 22L9 22L9 20L10 20L10 23L8 23L8 25L9 25L9 24L10 24L10 23L11 23L11 20L10 20L10 19L12 19L12 21L14 21L14 24L13 24L13 25L15 25L15 22L16 22L16 23L17 23L17 22L19 22L19 21L21 21L21 16L22 16L22 18L24 18L24 19L23 19L23 22L20 22L20 23L18 23L18 25L19 25L19 24L21 24L21 25L22 25L22 24L24 24L24 25L25 25L25 18L24 18L24 16L25 16L25 14L24 14L24 13L25 13L25 10L24 10L24 9L25 9L25 8L24 8L24 9L19 9L19 8L18 8L18 9L19 9L19 10L16 10L16 9L17 9L17 6L16 6L16 8L14 8L14 7L15 7L15 6L14 6L14 5L15 5L15 4L16 4L16 5L17 5L17 3L15 3L15 4L14 4L14 2ZM12 4L12 5L11 5L11 7L12 7L12 9L10 9L10 10L9 10L9 11L10 11L10 10L12 10L12 11L13 11L13 13L11 13L11 12L10 12L10 13L9 13L9 14L8 14L8 12L7 12L7 11L6 11L6 12L7 12L7 13L6 13L6 14L3 14L3 15L4 15L4 16L5 16L5 15L6 15L6 14L8 14L8 15L9 15L9 14L10 14L10 15L11 15L11 14L14 14L14 13L16 13L16 12L17 12L17 13L18 13L18 14L19 14L19 15L20 15L20 16L21 16L21 15L20 15L20 13L21 13L21 14L23 14L23 13L24 13L24 12L21 12L21 10L20 10L20 11L19 11L19 13L18 13L18 11L15 11L15 10L14 10L14 11L13 11L13 10L12 10L12 9L14 9L14 8L13 8L13 7L14 7L14 6L13 6L13 7L12 7L12 5L14 5L14 4ZM6 8L6 9L7 9L7 8ZM22 10L22 11L24 11L24 10ZM14 11L14 12L15 12L15 11ZM1 13L1 14L2 14L2 13ZM16 14L16 16L15 16L15 15L12 15L12 16L9 16L9 17L14 17L14 18L12 18L12 19L13 19L13 20L14 20L14 19L16 19L16 16L18 16L18 15L17 15L17 14ZM23 15L23 16L24 16L24 15ZM14 16L14 17L15 17L15 16ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM12 22L12 23L13 23L13 22ZM21 23L21 24L22 24L22 23ZM16 24L16 25L17 25L17 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" fill="#000000" />
                        </g>
                      </g>
                    </svg>
                    <div style={{ marginTop: 10, textAlign: 'center' }} />
                  </div>
                </div>
                <hr style={{ marginTop: '1rem', marginBottom: '1rem', borderWidth: '2px 0px 0px', borderTopStyle: 'dashed', borderRightStyle: 'initial', borderBottomStyle: 'initial', borderLeftStyle: 'initial', borderTopColor: 'rgba(0, 0, 0, 0.1)', borderRightColor: 'initial', borderBottomColor: 'initial', borderLeftColor: 'initial', borderImage: 'initial' }} />
                <div style={{ textAlign: 'center' }}>
                  <strong>24 May 2025</strong><br />
                  <p className="mb-0">19:59</p>
                  <p />
                </div>
                <hr style={{ marginTop: '1rem', marginBottom: '1rem', borderWidth: '2px 0px 0px', borderTopStyle: 'dashed', borderRightStyle: 'initial', borderBottomStyle: 'initial', borderLeftStyle: 'initial', borderTopColor: 'rgba(0, 0, 0, 0.1)', borderRightColor: 'initial', borderBottomColor: 'initial', borderLeftColor: 'initial', borderImage: 'initial' }} />
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: 'rgb(178, 178, 178)' }}>Nama</div>
                  <div>{decodeURIComponent(name)}</div>
                </div>
              </div>
              {/* <button onclick="if (!window.__cfRLUnblockHandlers) return false; closeModal(qrModal)" type="button" className="btn btn-close"> */}
              <button type="button" className="btn btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* RSVP MODAL FORM */}

        <div id="rsvpModal" tabIndex={-1} role="dialog" aria-labelledby="rsvpModal" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <button type="button" className="close-rsvp-btn btn" style={{ position: "relative", left: "83%", width: "60px" }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12"></path></svg></button>
              {/* Error Banner */}
              {submitState === 'error' && (
                <div className="alert alert-danger alert-dismissible mb-3" role="alert">
                  <div className="d-flex align-items-center">
                    <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSubmitState('form')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {/* Success State */}
              {submitState === 'success' ? (
                <div className="text-center py-4">
                  <div className="mb-4">
                    <svg
                      className="text-success"
                      width="64"
                      height="64"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <h4 className="font-accent text-success mb-3">Terima Kasih!</h4>
                  <p className="text-muted">
                    Terima kasih untuk pesannya
                  </p>
                </div>
              ) : (
                <div className="rsvp-form show">
                  <div className="mb-4"><div className="font-indo h4 text-center">Ucapan</div></div>
                  <form className="pt-2" onSubmit={handleSubmit}>
                    <div>
                      <div className="form-group mb-2">
                        <label htmlFor="inputname" className="small mb-1">Nama</label>
                        <input ref={nameRef} aria-hidden="false" id="inputname" type="text" placeholder="Nama" required className="form-control" />
                      </div>
                    </div>
                    {/* <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputphone" className="small mb-1">No WhatsApp</label> 
                  <input ref={phoneRef}  aria-hidden="false" id="inputphone" type="number" required placeholder="No WhatsApp" className="form-control"  />
                </div>
              </div> */}
                    {/* <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputattendance" className="small mb-1">Kehadiran</label>
                  <select ref={attendRef}  id="inputattendance" defaultValue="Hadir" required className="form-control">
                    <option  value="Hadir">
                      Hadir
                    </option>
                    <option value="Tidak Hadir">
                      Tidak Hadir
                    </option>
                  </select>
                </div>
              </div> */}
                    <div>
                    </div>
                    <div>                      </div>
                    <div className="form-group mb-2">
                      <label htmlFor="inputcomment" className="small mb-1">Komentar atau Ucapan</label>
                      <textarea ref={commentRef} id="inputcomment" rows={3} placeholder="Komentar atau Ucapan" required className="form-control" />
                    </div>
                    <button
                      className="btn btn-primary rounded-pill btn-block mt-4 mb-2"
                      type="submit"
                      disabled={loading}
                    >
                      <span>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" style={{ marginRight: "5%" }} role="status" aria-hidden="true"></span>
                            Mengirim...
                          </>
                        ) : (
                          'Kirim'
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ENDOF RSVP MODAL */}



      </main>
      <div className="modal fade" id="notSupport" tabIndex={-1} role="dialog" aria-labelledby="notSupport" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: '0.8rem' }}>
            <div className="modal-body text-center justify-content-center align-items-center">
              <h2>Pemberitahuan</h2>
              <p>Browser yang kamu gunakan mungkin kurang kompatibel. Beberapa fungsi undangan ini mungkin tidak dapat berjalan dengan baik. Kami merekomendasikan Chrome. Klik tombol dibawah ini untuk mendownload.</p>
              <div className="d-flex justify-content-center">
                <a href="https://apps.apple.com/id/app/google-chrome/id535886823" className="btn p-1" target="_BLANK">
                  <img src="/btn_app_store.png" alt="AppStore" height="40px" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=in&gl=US" className="btn p-1" target="_BLANK">
                  <img src="/btn_play_store.png" alt="PlayStore" height="40px" />
                </a>
              </div>
            </div>
            <div className="modal-footer">
              {/* <button className="btn btn-outline-secondary btn-block rounded-pill" onclick="if (!window.__cfRLUnblockHandlers) return false; closeModal(notSupport)">Tetap Akses</button> */}
              <button className="btn btn-outline-secondary btn-block rounded-pill">Tetap Akses</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Script
    src="/scripts/theme-app.js"
    strategy="afterInteractive"
  /> */}
      <Script
        src="/scripts/themesv2.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
