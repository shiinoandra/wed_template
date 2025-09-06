"use client";

import Image from "next/image";
import { useEffect } from "react";
import Script from 'next/script'


export default function Home() {
  // useEffect(() => {
  //   function handleWindowLoad() {
  //     // Create first script
  //     const script1 = document.createElement("script");
  //     script1.src = "/scripts/themesv2.js";
  //     script1.async = true;

  //     script1.onload = () => {
  //       // Load second script after first one is done
  //       const script2 = document.createElement("script");
  //       script2.src = "/scripts/theme-app.js";
  //       script2.async = true;
  //       document.body.appendChild(script2);

  //       // Cleanup script2
  //       return () => {
  //         document.body.removeChild(script2);
  //       };
  //     };

  //     document.body.appendChild(script1);
  //     console.log("script theme loaded")

  //     // Cleanup script1
  //     return () => {
  //       document.body.removeChild(script1);
  //     };
  //   }

  //   // Wait until window is fully loaded
  //   window.addEventListener("load", handleWindowLoad);

  //   return () => {
  //     window.removeEventListener("load", handleWindowLoad);
  //   };
  // }, []);

  return (
    
<div>
    <main id="app">
    <div id="modalOverlay" className="modal-backdrop fade" style={{display: 'none'}} />
    <div id="loader" className="loader-wrapper" style={{display: 'none'}}>
      <span className="loader"><span className="loader-inner" /></span>
    </div>
    {/* <audio id="music" loop="loop" autoPlay="autoplay"><source src="https://assets.satumomen.com/musics/jawa-happy-javanese-backsound-mp3cutnet.mp3" /></audio> */}
    <div id="workspace-container" className="position-fixed h-100 w-100" style={{overflow: 'hidden'}}>
      <div id="panZoom" className="position-fixed h-100 w-100" style={{inset: 0, transformOrigin: '50% 50%', transform: 'scale(1.68886) translate(0px, 0px)'}}>
        <div className="h-100 w-100 d-flex align-items-center justify-content-center">
          <div className="canvas not-open" style={{height: 736}}>
            <div id="satuMomen" data-guest="Nama Tamu" data-group="VIP" style={{height: 736, display: 'block'}}>
              <div className="satumomen_track">
                <ul className="satumomen_list">
                  <li className="satumomen_slide satumomen_cover" style={{}}>
                    <div className="container-mobile cover" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100"  style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100%', width: '100%', backgroundSize: 'cover', zIndex: 2, position: 'relative'}}>
                        <div className="w-100 pt-5">
                          <div className="text-center animate__animated animate__zoomIn animate__slower mt-5 mb-3" style={{lineHeight: 1}}>
                            <div className="editable mb-2" style={{fontSize: '14.4px'}}>The Wedding Of</div>
                            <div className="color-accent editable font-latin" style={{fontSize: 80}}>Dinda</div>
                            <div className="editable font-latin mb-2" style={{fontSize: 30}}>&amp;</div>
                            <div className="color-accent editable mb-2 font-latin" style={{fontSize: 80}}>Fahmi</div>
                          </div>
                          <div className="text-center mx-auto" style={{maxWidth: 280}}>
                            <div className="text-center mb-3 py-3 px-2 animate__animated animate__zoomIn animate__slower" style={{backgroundColor: 'rgba(225, 219, 203, 0.67)', border: '2px solid var(--inv-border)', borderRadius: '0.5rem'}}>
                              <div className="editable mb-1 animate__animated animate__fadeInUp animate__slower" style={{fontSize: 14}}>
                                Kepada Yth;<br />
                                Bapak/Ibu/Saudara/i
                              </div>
                              <div id="guestNameSlot" className="editable color-accent h5 font-weight-bold mb-1 animate__animated animate__fadeInUp animate__slower" style={{fontSize: 16}}>Nama Tamu</div>
                            </div>
                            <button className="btn-open-invitation btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow" style={{fontSize: 14}}>Open Invitation</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="position-relative h-100 w-100 flex-column d-flex justify-content-center align-items-center" style={{paddingBottom: '30%'}}>
                        <div className="text-center editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{fontSize: '14.4px'}}>✤ Undangan Manten ✤</div>
                        <div className="pt-3 d-flex align-items-center justify-content-center mb-2 mx-auto animate__animated animate__zoomIn animate__slower" style={{height: 112, width: 60, backgroundImage: 'url("https://assets.satumomen.com/images/galleries/27897-gallery-1672939613.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center'}}>
                          <div className="editable text-left font-latin" style={{fontSize: 60, lineHeight: 1, transform: 'translate(2px, 9px)'}}>D</div>
                          <div className="editable text-right font-latin" style={{fontSize: 60, lineHeight: 1, transform: 'translate(-8px, 33px)'}}>F</div>
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-center">
                          <div className="text-right animate__animated animate__fadeInLeft animate__slower" style={{width: '40%', animationDelay: '1500ms'}}>
                            <div className="editable color-accent font-accent" style={{fontSize: 40, lineHeight: 1}}>Dinda</div>
                            <div className="editable" style={{fontSize: '14.4px'}}>Palembang</div>
                          </div>
                          <div className="editable px-2 font-latin animate__animated animate__zoomIn animate__slower" style={{fontSize: 60, animationDelay: '500ms'}}>&amp;</div>
                          <div className="text-left animate__animated animate__fadeInRight animate__slower" style={{width: '40%', animationDelay: '1500ms'}}>
                            <div className="editable color-accent font-accent" style={{lineHeight: 1, fontSize: 40}}>Fahmi</div>
                            <div className="editable" style={{fontSize: '14.4px'}}>Surakarta</div>
                          </div>
                        </div>
                        <div className="image-editable mx-auto animate__animated animate__fadeInUp animate__slower" style={{height: 'auto', width: 230, overflow: 'hidden', position: 'absolute', bottom: '-30px'}}>
                          <img src="/301467-gallery-rNpYuhv9jd.png" alt="301467-gallery-rNpYuhv9jd.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="animate__animated animate__fadeInDown animate__slower">
                          <div className="image-editable" style={{width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20}}>
                            <img src="/27897-gallery-1672939613.png" alt="27897-gallery-1672939613.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{fontSize: '14.4px'}}>✤ Adz-Dzariyat : 49 ✤</div>
                          <div className="color-accent editable quotes mb-3 animate__animated animate__zoomIn animate__slower" style={{fontSize: 40}}>
                            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا<br />
                            زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ
                          </div>
                          <div className="editable quotes animate__animated animate__fadeInUp animate__slower" style={{fontSize: 13}}>
                            Mahasuci Allah yang menciptakan makhluk-<br />
                            Nya berpasang-pasangan
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                        <div>
                          <div>
                            <div className="image-editable mb-3 animate__animated animate__fadeInLeft animate__slower" style={{height: 100, width: 100, margin: 'auto', borderRadius: '100%', overflow: 'hidden'}}>
                              <img src="/female-1-1687991981.webp" alt="female-1-1687991981.webp" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>
                            <div className="text-center animate__animated animate__fadeInLeft animate__slower" style={{position: 'relative'}}>
                              <div className="editable color-accent h4 mb-2 font-accent" style={{fontSize: 24}}>Rahmi Nur Aini, S.Ars.L</div>
                              <div className="editable" style={{fontSize: '14.4px'}}>
                                Putri Kedua dari<br />
                                Bapak Yusransyah (Is Dunia Barusa)<br />
                                &amp; Ibu Ferynita(Nyanyak)
                              </div>
                            </div>
                            <div className="editable mb-3 text-center animate__animated animate__fadeIn animate__slower font-photograph-signature" style={{fontSize: 30}}>dengan</div>
                            <div className="text-center animate__animated animate__fadeInRight animate__slower" style={{position: 'relative'}}>
                              <div className="editable color-accent h4 mb-2 font-accent" style={{fontSize: 24}}>Fariz Naufal, S.Ak</div>
                              <div className="editable mb-1" style={{fontSize: '14.4px'}}>
                                Putra Kedua dari<br />
                                Bapak Muhrojin&amp; Ibu Endah Setyawati
                              </div>
                            </div>
                            <div className="image-editable mt-3 animate__animated animate__fadeInRight animate__slower" style={{height: 100, width: 100, margin: 'auto', borderRadius: '100%', overflow: 'hidden'}}>
                              <img src="/male-1-1687991959.webp" alt="male-1-1687991959.webp" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center flex-column align-items-center" style={{height: '100%'}}>
                        <div className="animate__animated animate__fadeInDown animate__slower">
                          <div className="image-editable" style={{width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20}}>
                            <img src="/27897-gallery-1672939613.png" alt="27897-gallery-1672939613.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                          </div>
                        </div>
                        <div className="text-center animate__animated animate__fadeInDown animate__slower">
                          <div className="editable color-accent font-weight-bold" style={{fontSize: 14}}>✤ Akad Pernikahan ✤</div>
                          <div className="editable" style={{fontSize: 14}}>Pukul 08.00 WIB - Selesai</div>
                        </div>
                        <div className="mt-3 text-center animate__animated animate__zoomIn animate__slower">
                          <div className="editable font-latin" style={{fontSize: 50, lineHeight: '1.2'}}>Minggu</div>
                          <div className="editable color-accent font-accent" style={{fontSize: 50, lineHeight: '1.2'}}>23.06.24</div>
                        </div>
                        <div className="mt-2 text-center animate__animated animate__zoomIn animate__slower">
                          <div className="editable color-accent font-weight-bold" style={{fontSize: 14}}>✤ Kediaman Wanita ✤</div>
                          <div className="editable" style={{fontSize: 14}}>
                            Perum KCVRI<br />
                            Blok A. No. 09 RT 01/RW 07
                          </div>
                        </div>
                        <div className="mt-3 image-editable mx-auto animate__animated animate__fadeInUp animate__slower" style={{height: 'auto', width: 130, overflow: 'hidden'}}>
                          <img src="/301467-gallery-FMgCPTNp2h.png" alt="301467-gallery-FMgCPTNp2h.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center flex-column align-items-center" style={{height: '100%'}}>
                        <div className="animate__animated animate__fadeInDown animate__slower">
                          <div className="image-editable" style={{width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20}}>
                            <img src="/27897-gallery-1672939613.png" alt="27897-gallery-1672939613.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                          </div>
                        </div>
                        <div className="text-center animate__animated animate__fadeInDown animate__slower">
                          <div className="editable color-accent font-weight-bold" style={{fontSize: 14}}>✤ Akad Pernikahan ✤</div>
                          <div className="editable" style={{fontSize: 14}}>Pukul 08.00 WIB - Selesai</div>
                        </div>
                        <div className="mt-3 text-center animate__animated animate__zoomIn animate__slower">
                          <div className="editable font-latin" style={{fontSize: 50, lineHeight: '1.2'}}>Minggu</div>
                          <div className="editable color-accent font-accent" style={{fontSize: 50, lineHeight: '1.2'}}>23.06.24</div>
                        </div>
                        <div className="mt-2 text-center animate__animated animate__zoomIn animate__slower">
                          <div className="editable color-accent font-weight-bold" style={{fontSize: 14}}>✤ Kediaman Wanita ✤</div>
                          <div className="editable" style={{fontSize: 14}}>
                            Perum KCVRI<br />
                            Blok A. No. 09 RT 01/RW 07
                          </div>
                        </div>
                        <div className="mt-3 image-editable mx-auto animate__animated animate__fadeInUp animate__slower" style={{height: 'auto', width: 130, overflow: 'hidden'}}>
                          <img src="/301467-gallery-FMgCPTNp2h.png" alt="301467-gallery-FMgCPTNp2h.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                        <div style={{width: '100%'}}>
                          <div>
                            <div className="animate__animated animate__fadeInDown animate__slow" style={{width: '100%', margin: 'auto auto 20px', borderRadius: 10, overflow: 'hidden', paddingBottom: '100%', position: 'relative'}}>
                              <iframe width="100%" height="100%" allowFullScreen src="/place.html" className="maps-embed" style={{border: 0, position: 'absolute'}} />
                            </div>
                            <button className="btn-maps btn btn-sm btn-pilled btn-block btn-accent mt-1 mb-4">Edit Denah Lokasi</button>
                            <div className="text-center animate__animated animate__fadeInUp animate__slow">
                              <div className="editable font-weight-bold" style={{fontSize: 14}}>Harmony Banquet Halls</div>
                              <div className="editable mb-3" style={{fontSize: 14}}>Jl. KH. R. Abdullah Bin Nuh, RT. 06/RW. 02, Curugmekar, Kec. Bogor Barat, Kota Bogor, Jawa Barat</div>
                              <a href="https://www.google.com/maps/place/?q=-6.558613899999999,106.77036269999999" target="_blank" rel="noreferrer noopener" className="btn-maps-link mx-auto btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style={{gap: 8, maxWidth: 200}}>
                                Petunjuk Ke Lokasi
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                        <div style={{width: '100%'}}>
                          <div className="animate__animated animate__fadeInDown animate__slower">
                            <div className="image-editable" style={{width: 158, height: 89, margin: 'auto', overflow: 'hidden', paddingBottom: 20}}>
                              <img src="/27897-gallery-1672939613.png" alt="27897-gallery-1672939613.png" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="editable font-latin color-accent h4 mb-4 animate__animated animate__fadeInDown animate__slower" style={{fontSize: '28.8px'}}>Do'a Untuk Pengantin</div>
                            <div className="editable mb-4 animate__animated animate__fadeInUp animate__slower" style={{fontSize: '14.4px'}}>
                              "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan mengumpulkan kalian berdua dalam kebaikan"<br />
                              <br />
                              [HR. Abu Daud]
                            </div>
                            <div className="editable mb-4 animate__animated animate__fadeInUp animate__slower">Tekan tombol dibawah ini untuk mengirim ucapan dan konfirmasi kehadiran</div>
                            <button className="btn-rsvp btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow" style={{fontSize: 20}}>Konfirmasi &amp; Kirim Ucapan</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                        <div className="text-center" style={{width: '100%'}}>
                          <div className="font-latin color-accent h4 mb-2 editable animate__animated animate__fadeInDown animate__slower" style={{fontSize: '28.8px'}}>Tanda Kasih</div>
                          <div className="editable mb-4 animate__animated animate__fadeInDown animate__slower" style={{fontSize: '14.4px'}}>
                            Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.
                          </div>
                          <div style={{display: 'flex', gap: 8}}>
                            <button className="btn-gift btn btn-block btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style={{maxWidth: 150, margin: 'auto', fontSize: '14.4px'}}>
                              Cashless
                            </button>
                          </div>
                          <div className="gift-container mt-3 p-4 rounded animate__animated animate__zoomIn animate__slow" style={{display: 'none'}}>
                            <div className="d-flex">
                              <div className="mx-auto">
                                <div className="d-flex align-items-center mb-3">
                                  <div className="image-editable bg-white rounded" style={{width: 80, height: 50, overflow: 'hidden'}}>
                                    <img src="/logo-bca-biru-1687975058.png" alt="no-image.jpg" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                                  </div>
                                  <div className="text-left pl-2">
                                    <div className="editable account-number font-weight-bold h5 mb-0">12345678</div>
                                    {/* <button type="button" className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5" data-text={12345678} onClick="copyText(event)" style={{fontFamily: 'sans-serif', borderRadius: 4}}> */}
                                    <button type="button" className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5"  style={{fontFamily: 'sans-serif', borderRadius: 4}}>

                                      Salin Rekening
                                    </button>
                                    <div className="editable" style={{fontSize: '14.4px'}}>BCA : Atas Nama Rekening</div>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="image-editable bg-white rounded" style={{width: 80, height: 50, overflow: 'hidden'}}>
                                    <img src="/bni-1704123714.jpg" alt="no-image.jpg" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                                  </div>
                                  <div className="text-left pl-2">
                                    <div className="editable account-number font-weight-bold h5 mb-0" style={{fontSize: 18}}>12345678</div>
                                    {/* <button type="button" className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5" data-text={12345678} onclick="copyText(event)" style={{fontFamily: 'sans-serif', borderRadius: 4}}> */}
                                    <button type="button" className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5" data-text={12345678}  style={{fontFamily: 'sans-serif', borderRadius: 4}}>

                                      Salin Rekening
                                    </button>
                                    <div className="editable" style={{fontSize: '14.4px'}}>BCA : Atas Nama</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="satumomen_slide" style={{display: 'none'}}>
                    <div className="container-mobile" style={{backgroundImage: 'url("https://satumomen.com/themes/art-blue-java/bg.webp")'}}>
                      <div className="frame">
                        <img src="/tl.webp" alt="frame" className="frame-tl animate__animated animate__fadeInTopLeft animate__slower" />
                        <img src="/tr.webp" alt="frame" className="frame-tr animate__animated animate__fadeInTopRight animate__slower" />
                        <div className="frame-tl w-100 only-cover" style={{transform: 'scale(1.2)', transformOrigin: 'center top'}}>
                          <img src="/gunungan.webp" alt="frame" className="w-100 animate__animated animate__zoomIn animate__slower" style={{animationDelay: '1.5s'}} />
                        </div>
                        <div className="frame-tl animate__animated animate__fadeInTopLeft animate__slow">
                          <div className="animate-left" style={{transform: 'translate(-5%, 145%)'}}>
                            <img src="/tl-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="frame-tr animate__animated animate__fadeInTopRight animate__slow">
                          <div className="animate-right" style={{transform: 'translate(5%, 145%)'}}>
                            <img src="/tr-2.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '120ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-left" style={{transform: 'translate(-29%, -85%)'}}>
                            <img src="/bl-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-27%, -87%)'}}>
                            <img src="/sinta.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-bl animate__animated animate__fadeInBottomLeft animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-left" style={{transform: 'translate(-16%, -70%)'}}>
                            <img src="/bl-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'left bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.5s'}}>
                          <div className="animate-right" style={{transform: 'translate(29%, -85%)'}}>
                            <img src="/br-1.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2.2s'}}>
                          <div className="animate-right" style={{transform: 'translate(27%, -87%)'}}>
                            <img src="/rama.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '100ms'}} />
                          </div>
                        </div>
                        <div className="only-cover frame-br animate__animated animate__fadeInBottomRight animate__slow" style={{animationDelay: '2s'}}>
                          <div className="animate-right" style={{transform: 'translate(16%, -70%)'}}>
                            <img src="/br-3.webp" alt="frame" className="w-100" style={{transformOrigin: 'right bottom', animationDelay: '300ms'}} />
                          </div>
                        </div>
                        <img src="/bm.webp" alt="frame" className="frame-br w-100 animate__animated animate__fadeInUp animate__slower" style={{animationDelay: '1s'}} />
                        <img src="/bl-2.webp" alt="frame" className="frame-bl animate__animated animate__fadeInLeft animate__slower" />
                        <img src="/br-2.webp" alt="frame" className="frame-br animate__animated animate__fadeInRight animate__slower" />
                      </div>
                      <div className="watermark d-flex flex-column" style={{height: '100%'}}>
                        <div className="mt-auto" style={{width: '100%'}}>
                          <div className="text-center">
                            <div className="editable mb-2 animate__animated animate__fadeInDown animate__slower" style={{fontSize: 14}}>
                              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.
                            </div>
                            <div className="editable mb-3 animate__animated animate__fadeInDown animate__slower font-italic" style={{fontSize: 16}}>Wassalamu'alaikum Warahmatullahi Wabarakatuh</div>
                            <div className="text-center d-flex align-items-center justify-content-center animate__animated animate__fadeInDown animate__slow" style={{gap: 14, lineHeight: '1.2'}}>
                              <div>
                                <div className="editable" style={{textDecoration: 'underline', fontSize: 13}}>Keluarga</div>
                                <div className="editable font-weight-bold" style={{fontSize: 13}}>
                                  Bapak H. Roni Nahroni<br />
                                  dan Ibu Hj. Siti Zainab
                                </div>
                              </div>
                              <div>
                                <div className="editable" style={{textDecoration: 'underline', fontSize: 13}}>Keluarga</div>
                                <div className="editable font-weight-bold" style={{fontSize: 13}}>
                                  Bapak Ir. Juhrani<br />
                                  dan Ibu Juniati, S.Km
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="watermark-placeholder text-center mb-auto mb-5 pb-5">
                          <div id="waterMark" className="mt-5" style={{display: 'inherit'}}>
                            <div className="wm-music mt-3 text-center animate__animated animate__fadeInUp animate__slower animate__delay-1s" style={{fontSize: '60%'}}>
                              <div style={{opacity: '0.5'}}><strong>Music:</strong></div>
                              <div style={{opacity: '0.5'}}>Jawa - Happy Javanese Backsound</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div id="smMenu" className="satumomen_menu">
              <ul className="satumomen_menu_list">
                <li className="satumomen_menu_item active" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-envelope" style={{color: 'currentcolor'}} /> <span>Opening</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-star-and-crescent" style={{color: 'currentcolor'}} /> <span>Greeting</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-article" style={{color: 'currentcolor'}} /> <span>Quotes</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-heart" style={{color: 'currentcolor'}} /> <span>Mempelai</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-clock" style={{color: 'currentcolor'}} /> <span>Akad</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-clock" style={{color: 'currentcolor'}} /> <span>Resepsi</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}>
                  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.532 2.937a6.89 6.89 0 0 1 7.034.058C17.71 4.327 19.012 6.705 19 9.26c-.05 2.54-1.447 4.929-3.193 6.775a18.727 18.727 0 0 1-3.358 2.82 1.173 1.173 0 0 1-.408.144.82.82 0 0 1-.39-.119 18.515 18.515 0 0 1-4.839-4.547A9.28 9.28 0 0 1 5 9.134c-.001-2.562 1.347-4.928 3.532-6.197Zm1.262 7.258a2.378 2.378 0 0 0 2.198 1.497 2.339 2.339 0 0 0 1.683-.701c.446-.454.696-1.07.694-1.713a2.423 2.423 0 0 0-1.462-2.243 2.346 2.346 0 0 0-2.594.52 2.455 2.455 0 0 0-.519 2.64Z" fill="currentColor" />
                    <ellipse opacity=".4" cx={12} cy={21} rx={5} ry={1} fill="currentColor" />
                  </svg>
                  <span>Maps</span>
                </li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-chat-circle-text" style={{color: 'currentcolor'}} /> <span>RSVP</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-gift" style={{color: 'currentcolor'}} /> <span>Gift</span></li>
                <li className="satumomen_menu_item" style={{maxWidth: '82.8px'}}><i className="icon ph-fill ph-mosque" style={{color: 'currentcolor'}} /> <span>Thanks</span></li>
              </ul>
            </div>
            <div className="floating-action d-flex align-items-end flex-column">
              {/* <button id="btnQrModal" onclick="if (!window.__cfRLUnblockHandlers) return false; showModal(qrModal)" className="btn btn-float"> */}
              <button id="btnQrModal" className="btn btn-float">

                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256">
                  <rect x={40} y={40} width={80} height={80} rx={16} />
                  <rect x={40} y={136} width={80} height={80} rx={16} />
                  <rect x={136} y={40} width={80} height={80} rx={16} />
                  <path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z" />
                  <path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z" />
                  <path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z" />
                </svg>
              </button>
              {/* <button id="btnMusic" onclick="if (!window.__cfRLUnblockHandlers) return false; playMusic()" className="btn btn-float playing"> */}
              <button id="btnMusic"  className="btn btn-float playing">

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
      <a href="https://satumomen.com/preview/art-blue-java#" id="lightboxCloseBtn" className="btn-lightbox">
        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      <div className="lightbox-navigation">
        <a href="https://satumomen.com/preview/art-blue-java#" id="lightboxPrevBtn" data-index={0} className="lightbox-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
          </svg>
        </a>
        <a href="https://satumomen.com/preview/art-blue-java#" id="lightboxNextBtn" data-index={0} className="lightbox-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    <div id="qrModal" tabIndex={-1} role="dialog" aria-labelledby="qrModal" aria-hidden="true" className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{height: '100%'}}>
          <div style={{width: '100%', aspectRatio: '16 / 9', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url("/images/no-image.jpg")'}} />
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
                <div style={{marginTop: 10, textAlign: 'center'}} />
              </div>
            </div>
            <hr style={{marginTop: '1rem', marginBottom: '1rem', borderWidth: '2px 0px 0px', borderTopStyle: 'dashed', borderRightStyle: 'initial', borderBottomStyle: 'initial', borderLeftStyle: 'initial', borderTopColor: 'rgba(0, 0, 0, 0.1)', borderRightColor: 'initial', borderBottomColor: 'initial', borderLeftColor: 'initial', borderImage: 'initial'}} />
            <div style={{textAlign: 'center'}}>
              <strong>24 May 2025</strong><br />
              <p className="mb-0">19:59</p>
              <p />
            </div>
            <hr style={{marginTop: '1rem', marginBottom: '1rem', borderWidth: '2px 0px 0px', borderTopStyle: 'dashed', borderRightStyle: 'initial', borderBottomStyle: 'initial', borderLeftStyle: 'initial', borderTopColor: 'rgba(0, 0, 0, 0.1)', borderRightColor: 'initial', borderBottomColor: 'initial', borderLeftColor: 'initial', borderImage: 'initial'}} />
            <div style={{marginBottom: 10}}>
              <div style={{color: 'rgb(178, 178, 178)'}}>Nama</div>
              <div>Nama Tamu</div>
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
    <div id="rsvpModal" tabIndex={-1} role="dialog" aria-labelledby="rsvpModal" className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4" style={{height: '100%'}}>
          <div className="rsvp-form show">
            <div className="mb-4"><div className="font-accent h4 text-center">RSVP</div></div>
            <form className="pt-2">
              <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputname" className="small mb-1">Nama</label> <input aria-hidden="false" id="inputname" type="text" placeholder="Nama" required className="form-control" />
                </div>
              </div>
              <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputgroup_name" className="small mb-1">Grup</label> <input aria-hidden="false" id="inputgroup_name" type="text" placeholder="Grup" className="form-control" />
                </div>
              </div>
              <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputphone" className="small mb-1">No WhatsApp</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn bg-white border dropdown-toggle">+62</button>
                      <div className="dropdown-menu shadow">
                        <span className="dropdown-item"><input type="search" placeholder="Search Country..." className="form-control form-control-sm" /></span>
                        <button type="button" className="dropdown-item active">
                          Indonesia +62
                        </button>
                        <button type="button" className="dropdown-item">
                          Australia +61
                        </button>
                        <button type="button" className="dropdown-item">
                          Austria +43
                        </button>
                      </div>
                    </div>
                    <input aria-hidden="false" id="inputphone" type="number" required placeholder="No WhatsApp" className="form-control" />
                  </div>
                </div>
              </div>
              <div>
                <div className="form-group mb-2">
                  <label htmlFor="inputattendance" className="small mb-1">Kehadiran</label>
                  <select id="inputattendance" required className="form-control">
                    <option>
                      Kehadiran
                    </option>
                    <option value="Hadir">
                      Hadir
                    </option>
                    <option value="Tidak Hadir">
                      Tidak Hadir
                    </option>
                  </select>
                </div>
              </div>
              <div>
              </div>
              <div>                      </div>
              <div className="form-group mb-2">
                <label htmlFor="inputcomment" className="small mb-1">Komentar atau Ucapan</label> <textarea id="inputcomment" rows={3} placeholder="Komentar atau Ucapan" required className="form-control" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary rounded-pill btn-block mt-4 mb-2"><span>Kirim</span></button>
            </form>
            <div className="comment border-top mt-4 py-4">
              <div className="comment-item">
                <div className="d-flex">
                  <img src="/saved_resource" alt="Radit" loading="lazy" className="avatar rounded-circle" style={{height: 30, width: 30}} />
                  <div className="ml-2 text-left">
                    <p className="mb-0 font-weight-bold">
                      Radit
                      <span className="badge alert-info">Hadir</span>
                    </p>
                    <p className="mb-0">Selamat</p>
                    <small>19 August 2025 at 21.46</small>
                  </div>
                </div>
              </div>
              <div className="comment-item">
                <div className="d-flex">
                  <img src="/saved_resource(1)" alt="Nama Tamu" loading="lazy" className="avatar rounded-circle" style={{height: 30, width: 30}} />
                  <div className="ml-2 text-left">
                    <p className="mb-0 font-weight-bold">
                      Nama Tamu
                      <span className="badge alert-info">Tidak Hadir</span>
                    </p>
                    <p className="mb-0">hyjj</p>
                    <small>9 August 2025 at 12.57</small>
                  </div>
                </div>
              </div>
              <div className="comment-item">
                <div className="d-flex">
                  <img src="/saved_resource(2)" alt="Nama Tamuss" loading="lazy" className="avatar rounded-circle" style={{height: 30, width: 30}} />
                  <div className="ml-2 text-left">
                    <p className="mb-0 font-weight-bold">
                      Nama Tamuss
                      <span className="badge alert-info">Hadir</span>
                    </p>
                    <p className="mb-0">Sjjsbbs</p>
                    <small>12 July 2025 at 21.36</small>
                  </div>
                </div>
              </div>
              <div className="comment-item">
                <div className="d-flex">
                  <img src="/saved_resource(1)" alt="Nama Tamu" loading="lazy" className="avatar rounded-circle" style={{height: 30, width: 30}} />
                  <div className="ml-2 text-left">
                    <p className="mb-0 font-weight-bold">
                      Nama Tamu
                      <span className="badge alert-info">Tidak Hadir</span>
                    </p>
                    <p className="mb-0">ok</p>
                    <small>9 July 2025 at 13.35</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button onclick="if (!window.__cfRLUnblockHandlers) return false; closeModal(rsvpModal)" type="button" className="btn btn-close"> */}
          <button type="button" className="btn btn-close">

            <svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
  {/* illegal */}
  <div id="illegal" className="container-mobile" style={{background: '#ffffff', zIndex: 9999, minHeight: '100vh', display: 'none', justifyContent: 'center', alignItems: 'center'}}>
    <div className="modal-body modal-body d-flex flex-column align-items-center">
      <div className="mb-4 text-center">
        <svg width={90} height={90} fill="none">
          <path d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="37.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor" />
          <ellipse cx="58.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor" />
          <path d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z" fill="currentColor" />
        </svg>
        <h2 className="mb-3">Jangan Bikin Aku Sedih</h2>
        <p>Kamu didapati mencoba menghapus watermark secara ilegal.</p>
      </div>
    </div>
  </div>
  <div className="modal fade" id="notSupport" tabIndex={-1} role="dialog" aria-labelledby="notSupport" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" style={{borderRadius: '0.8rem'}}>
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
  <Script
    src="/scripts/theme-app.js"
    strategy="afterInteractive"
  />
  <Script
  src="/scripts/themesv2.js"
  strategy="afterInteractive"
/>
</div>

  );
}
