import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { I18nProvider, useI18n } from './i18n';

function Navbar() {
  const { t, lang, setLang } = useI18n();
  return (
    <nav className="bg-[#0e0e0e] text-[#f4ffc6] font-['Space_Grotesk'] uppercase tracking-[0.05rem] text-sm font-bold flex justify-between items-center w-full px-6 py-4 max-w-full sticky top-0 z-50">
      <Link to="/" className="text-2xl font-black tracking-tighter text-[#f4ffc6]">IRONLOGIX</Link>
      <div className="flex items-center gap-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as any)}
          className="bg-transparent text-[#f4ffc6] border border-white/20 px-2 py-1 text-xs font-label outline-none cursor-pointer"
        >
          <option value="en" className="bg-[#0e0e0e]">EN</option>
          <option value="zh" className="bg-[#0e0e0e]">ZH</option>
          <option value="es" className="bg-[#0e0e0e]">ES</option>
          <option value="fr" className="bg-[#0e0e0e]">FR</option>
          <option value="de" className="bg-[#0e0e0e]">DE</option>
        </select>
        <button className="bg-[#f4ffc6] text-[#2b340d] px-4 py-2 md:px-6 font-black text-sm tracking-widest hover:bg-[#efe754] transition-all hidden md:block">
          {t('navbar_start')}
        </button>
      </div>
    </nav>
  );
}

// ... Hero, TrainingSystems, SmartTracking, PrivacyProtocol, CTASection remain largely same ...

function Hero() {
  const { t } = useI18n();
  return (
    <header className="relative min-h-[870px] flex items-center justify-start overflow-hidden px-6 lg:px-24">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125" 
          alt="Gritty black and white close up of heavy industrial gym weights" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIpdQSWbtjtiNbssUozwSLT7wDWSfZMl3Ftcmi6Jqf6DGjq0sBIRI1N-L8idun3FBL3b5NILbMS9oRwCgc_Y7N6aegxap_R6DYmmkIe_sb9XhtzLwZGbUv2l1KEpUVRQ6cRkUXsfkpGA4_nU4YQZDBYaIhrT7ArRsy0503dP-XBnlHHIJGG1P_vWwyGAAcIW63SBqe6q_Ythk1idptI1bUHm_WO9Goj_jhNp7Afbltn_ZIrwyxjC0F2XIHk-IisEHmXBAX5PrmvbA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl">
        <div className="inline-block bg-secondary px-3 py-1 text-on-secondary text-xs font-bold font-label tracking-[0.2rem] mb-6 uppercase">
          {t('hero_version')}
        </div>
        <h1 className="font-headline text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-4 text-white uppercase">
          {t('hero_title1')}<br/>
          <span className="text-[#f4ffc6]">{t('hero_title2')}</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12">
          <button className="technical-gradient text-on-primary font-black px-12 py-5 text-xl tracking-tighter transition-all hover:scale-[1.02] shadow-[4px_4px_0px_#000000] uppercase">
            {t('hero_btn')}
          </button>
          <div className="border-l-4 border-secondary pl-6 max-w-md">
            <p className="text-on-surface-variant font-body text-lg leading-snug">
              {t('hero_desc')}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function TrainingSystems() {
  const { t } = useI18n();
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="font-headline text-5xl font-black uppercase tracking-tight text-[#f4ffc6] mb-4">{t('sys_title')}</h2>
          <p className="text-on-surface-variant font-body">{t('sys_desc')}</p>
        </div>
        <div className="text-right font-label text-sm tracking-widest text-secondary opacity-50 uppercase">
          {t('sys_id')}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="bg-surface-container p-10 border-t-4 border-[#f4ffc6]">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="text-xs font-label text-secondary-fixed tracking-widest uppercase">{t('p1_tag')}</span>
              <h3 className="font-headline text-4xl font-bold mt-2 uppercase">{t('p1_title')}</h3>
            </div>
            <span className="material-symbols-outlined text-4xl text-[#f4ffc6]">settings_input_component</span>
          </div>
          <div className="space-y-6 mb-12">
            <div className="flex justify-between items-center bg-surface-container-low p-4">
              <span className="font-label text-sm uppercase">{t('p1_ph1')}</span>
              <span className="font-headline font-bold text-xl text-[#f4ffc6]">85% 1RM</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container-low p-4">
              <span className="font-label text-sm uppercase">{t('p1_ph2')}</span>
              <span className="font-headline font-bold text-xl text-[#f4ffc6]">90% 1RM</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 h-2 bg-surface-container-high overflow-hidden">
              <div className="h-full bg-[#f4ffc6] w-3/4"></div>
            </div>
            <span className="font-label text-xs uppercase opacity-60">{t('p1_load')}</span>
          </div>
        </div>
        
        <div className="bg-surface-container p-10 border-t-4 border-secondary">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="text-xs font-label text-secondary-fixed tracking-widest uppercase">{t('p2_tag')}</span>
              <h3 className="font-headline text-4xl font-bold mt-2 uppercase">{t('p2_title')}</h3>
            </div>
            <span className="material-symbols-outlined text-4xl text-secondary">reorder</span>
          </div>
          <p className="text-on-surface-variant font-body mb-10 leading-relaxed">
            {t('p2_desc')}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-container-high p-4 text-center">
              <div className="text-3xl font-headline font-black text-secondary">5x5</div>
              <div className="text-[10px] font-label uppercase tracking-widest opacity-60">{t('p2_sets')}</div>
            </div>
            <div className="bg-surface-container-high p-4 text-center">
              <div className="text-3xl font-headline font-black text-secondary">2.5KG</div>
              <div className="text-[10px] font-label uppercase tracking-widest opacity-60">{t('p2_inc')}</div>
            </div>
          </div>
          <button className="w-full py-4 border-2 border-secondary text-secondary font-black tracking-widest hover:bg-secondary hover:text-on-secondary transition-all uppercase">
            {t('p2_btn')}
          </button>
        </div>
      </div>
    </section>
  );
}

function SmartTracking() {
  const { t } = useI18n();
  return (
    <section className="bg-surface-container-low py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-5xl font-black uppercase mb-8 leading-none">
            {t('trk_title1')}<br/><span className="text-[#f4ffc6]">{t('trk_title2')}</span>
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-[#f4ffc6]">calculate</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl uppercase mb-2">{t('trk_epley_title')}</h4>
                <p className="text-on-surface-variant text-sm">{t('trk_epley_desc1')}<span className="font-label text-secondary italic">w * (1 + r/30)</span>{t('trk_epley_desc2')}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">automation</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl uppercase mb-2">{t('trk_load_title')}</h4>
                <p className="text-on-surface-variant text-sm">{t('trk_load_desc')}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-error">warning</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl uppercase mb-2">{t('trk_amrap_title')}</h4>
                <p className="text-on-surface-variant text-sm">{t('trk_amrap_desc')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 border border-white/5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="font-label text-xs uppercase tracking-widest text-[#f4ffc6]">{t('diag_title')}</div>
            <div className="font-label text-xs uppercase tracking-widest opacity-40">{t('diag_user')}</div>
          </div>
          <div className="h-64 flex items-end gap-2 mb-8 border-b border-surface-container-highest">
            <div className="bg-surface-container-high w-full h-[40%]"></div>
            <div className="bg-surface-container-high w-full h-[45%]"></div>
            <div className="bg-surface-container-high w-full h-[55%]"></div>
            <div className="bg-surface-container-high w-full h-[50%]"></div>
            <div className="bg-[#f4ffc6] w-full h-[70%] relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#f4ffc6] text-on-primary text-[10px] px-2 py-1 font-black">185KG</div>
            </div>
            <div className="bg-surface-container-high w-full h-[65%]"></div>
            <div className="bg-surface-container-high w-full h-[75%]"></div>
            <div className="bg-secondary w-full h-[90%] relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary text-[10px] px-2 py-1 font-black">210KG</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-surface-container p-4">
              <div className="text-[10px] font-label text-on-surface-variant uppercase mb-1">{t('diag_fatigue')}</div>
              <div className="text-2xl font-headline font-black text-error">42%</div>
            </div>
            <div className="bg-surface-container p-4">
              <div className="text-[10px] font-label text-on-surface-variant uppercase mb-1">{t('diag_recovery')}</div>
              <div className="text-2xl font-headline font-black text-[#f4ffc6]">7.5</div>
            </div>
            <div className="bg-surface-container p-4">
              <div className="text-[10px] font-label text-on-surface-variant uppercase mb-1">{t('diag_volume')}</div>
              <div className="text-2xl font-headline font-black text-secondary">12.4K</div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-surface-bright flex justify-between items-center">
            <span className="font-label text-xs uppercase text-secondary">{t('diag_status')}</span>
            <span className="material-symbols-outlined text-sm text-[#f4ffc6]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyProtocol() {
  const { t } = useI18n();
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface-container-low border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-6xl text-[#f4ffc6] mb-8">shield_lock</span>
        <h2 className="font-headline text-4xl font-black uppercase mb-6">{t('priv_title')}</h2>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed mb-12">
          {t('priv_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-container-lowest border-l-2 border-[#f4ffc6] text-left">
            <h5 className="font-headline font-bold text-sm uppercase mb-2">{t('priv_dev_title')}</h5>
            <p className="text-xs text-on-surface-variant">{t('priv_dev_desc')}</p>
          </div>
          <div className="p-6 bg-surface-container-lowest border-l-2 border-secondary text-left">
            <h5 className="font-headline font-bold text-sm uppercase mb-2">{t('priv_trk_title')}</h5>
            <p className="text-xs text-on-surface-variant">{t('priv_trk_desc')}</p>
          </div>
          <div className="p-6 bg-surface-container-lowest border-l-2 border-error text-left">
            <h5 className="font-headline font-bold text-sm uppercase mb-2">{t('priv_enc_title')}</h5>
            <p className="text-xs text-on-surface-variant">{t('priv_enc_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-surface-container-lowest flex flex-col md:flex-row min-h-[614px]">
      <div className="flex-1 bg-surface-bright p-12 lg:p-24 flex flex-col justify-center">
        <h2 className="font-headline text-6xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-8">
          {t('cta_title1')} <br/><span className="text-[#f4ffc6]">{t('cta_title2')}</span>
        </h2>
      </div>
      <div className="flex-1 min-h-[300px] relative overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt="Modern high tech gym interior" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCW8Cungzj4tfpR0w_Leoe28FVJbEuWQsTHpfnLRPo97MN_NP0Lar3QaVTN8KW7SRnLoVyRMF6nTL98CBJl-t64UFJ-AJE4aOlsQibuEcMkhi7SCMVfH4aRXxCMgJX6dP_GgutxCQsZQgRH3DohudDPTD5bLgEqkb1zGGqeNoy1tJFOBVZuq8knfRRbmLuA993qbGW0Oq1kLxDKQ-kRrh-v3kYT4O_jC-mvluzO74-Zl5EHqH8wUgWZjuWgCjZK4nIKLrCVHrtMNE"
        />
        <div className="absolute inset-0 bg-[#f4ffc6]/10 mix-blend-multiply"></div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Sync modal state with URL
  useEffect(() => {
    if (location.pathname === '/privacy') {
      setIsPrivacyModalOpen(true);
    } else {
      setIsPrivacyModalOpen(false);
    }
  }, [location.pathname]);

  const handleOpenPrivacy = () => {
    navigate('/privacy');
  };

  const handleClosePrivacy = () => {
    navigate('/');
  };

  return (
    <>
      <footer className="bg-[#0e0e0e] text-[#f4ffc6] font-['Space_Grotesk'] uppercase tracking-widest text-[10px] w-full px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
        <Link to="/" className="text-[#f4ffc6] font-bold text-lg">IRONLOGIX</Link>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <button 
            onClick={handleOpenPrivacy}
            className="text-gray-500 hover:text-[#efe754] transition-all opacity-80 hover:opacity-100 uppercase tracking-widest text-[10px] cursor-pointer"
          >
            {t('ft_priv')}
          </button>
          {t('ft_icp') && (
            <span className="text-gray-500 opacity-80 uppercase tracking-widest text-[10px]">
              {t('ft_icp')}
            </span>
          )}
        </div>
        <div className="opacity-80 text-center md:text-right">
          {t('ft_copy')}
        </div>
      </footer>

      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6">
          <div className="bg-surface-container-lowest border-2 border-secondary w-full max-w-3xl max-h-[85vh] overflow-y-auto flex flex-col shadow-[8px_8px_0px_#000000]">
            <div className="sticky top-0 bg-surface-container-lowest border-b border-white/10 p-6 flex justify-between items-center z-10">
              <h3 className="font-headline text-2xl font-black uppercase text-[#f4ffc6]">{t('priv_title')}</h3>
              <button 
                onClick={handleClosePrivacy}
                className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <div className="p-6 md:p-10 space-y-12 font-body text-on-surface-variant">
              {(t('priv_policy') as any[]).map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-headline font-bold text-xl uppercase text-white border-l-4 border-secondary pl-4">
                    {section.title}
                  </h4>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line pl-5">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <TrainingSystems />
      <SmartTracking />
      <PrivacyProtocol />
      <CTASection />
    </>
  );
}

function MainApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </I18nProvider>
  );
}

