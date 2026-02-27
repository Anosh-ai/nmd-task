import { Link } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';



const Home = () => {

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const dropdownRef = useRef(null);



  const languages = [

    { name: 'English', code: 'en' },

    { name: 'Dutch', code: 'nl' },

    { name: 'Spanish', code: 'es' },

    { name: 'German', code: 'de' },

    { name: 'French', code: 'fr' },

    { name: 'Arabic', code: 'ar' },

    { name: 'Portuguese', code: 'pt' },

    { name: 'Russian', code: 'ru' },

    { name: 'Chinese', code: 'zh' }

  ];



  useEffect(() => {

    const handleClickOutside = (event) => {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

        setIsLanguageDropdownOpen(false);

      }

    };



    document.addEventListener('mousedown', handleClickOutside);

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);

    };

  }, []);



  return (

    <div className="min-h-screen text-white">
      <div className="relative flex min-h-screen flex-col">
        {/* Shared background image behind navbar + hero */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/image1.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/55 to-slate-950/35" />
        </div>



        {/* Top nav */}

        <header className="relative z-20">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8">



            {/* Logo */}

            <div className="flex items-center gap-2 sm:gap-3">

              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-900/90 ring-1 ring-white/10">

                <span className="text-sm sm:text-lg font-semibold">R</span>

              </div>

            </div>

            {/* Desktop nav */}

            <nav className="hidden items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-200/80 md:flex">

              <Link to="/" className="text-white hover:text-white/90 transition-colors">Home</Link>

              <Link to="/about" className="hover:text-white/90 transition-colors">About Us</Link>

              <a href="#contact" className="hover:text-white/90 transition-colors">Contact Us</a>



              {/* Language */}

              <div className="relative" ref={dropdownRef}>

                <button 

                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}

                  className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] hover:bg-white/10 transition-colors"

                >

                  <span>{selectedLanguage}</span>

                  <span className={`text-[9px] transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}>▼</span>

                </button>

                

                {isLanguageDropdownOpen && (

                  <div className="absolute top-full mt-2 right-0 z-50 min-w-[160px] rounded-xl border border-slate-200 bg-white shadow-xl shadow-black/20 overflow-hidden">

                    {languages.map((language) => (

                      <button

                        key={language.code}

                        onClick={() => {

                          setSelectedLanguage(language.name);

                          setIsLanguageDropdownOpen(false);

                        }}

                        className={`w-full text-left px-4 py-2.5 text-xs text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-between ${

                          selectedLanguage === language.name ? 'bg-slate-50' : ''

                        }`}

                      >

                        <span>{language.name}</span>

                        {selectedLanguage === language.name && (

                          <span className="text-[10px] text-emerald-500">✓</span>

                        )}

                      </button>

                    ))}

                  </div>

                )}

              </div>



              {/* Sign in */}

              <a

                href="/login"

                className="rounded-full bg-white px-5 py-2 text-[11px] font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-shadow"

              >

                Sign In

              </a>

            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>

          <div className="mx-auto max-w-7xl border-b border-white/10" />

        </header>



        {/* Hero section */}

        <section className="relative z-10">

          <div className="mx-auto  flex max-w-7xl flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-28">



            {/* Left content */}

            <div className="w-full lg:w-4/5  max-w-2xl space-y-[36px]">



              {/* Pill */}

              <div className="inline-flex items-center gap-[6px]  sm:gap-[8px] rounded-full border border-white/15 bg-white/4 px-4 sm:px-5 py-1.5 text-[10px] sm:text-[11px] font-medium shadow-md backdrop-blur-sm w-[240px] sm:w-[280px] h-[36px] sm:h-[40px]">

                <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white/15 text-[9px] sm:text-[10px] text-slate-900 shadow-sm">

                  🚀

                </span>

                <span className="text-white/97 font-medium px-2 text-sm sm:text-[11px]">The Future of Recruitment is Here</span>

              </div>



              {/* Heading */}

              <div className="space-y-[16px]">

                <h1 className="font-inter text-[28px] sm:text-[35px] font-semibold leading-[52px] sm:leading-[60px] tracking-[-1.2px] text-white">
                  The Recruitment Marketplace<br/>Where Both Sides Decide The Deal.
                </h1>



                <p className="max-w-full sm:max-w-md text-[13px] sm:text-[14px] leading-relaxed text-slate-300">

                  Companies post jobs. Recruiters offer candidates with a clear fee.

                  You negotiate upfront and pay only when someone actually starts.

                </p>

              </div>



              {/* CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded-xl bg-white px-4 sm:px-6 py-2 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 shadow-sm hover:bg-white/80 w-full sm:w-auto">
                  Get Started →
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-900/70 px-4 sm:px-6 py-2 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-white w-full sm:w-auto">
                  Learn More
                </button>
              </div>

              {/* Bottom trust row */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34D399] text-xs text-white">
                      ✓
                    </span>
                    <span>Stripe Secured Payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34D399] text-xs text-white">
                      ✓
                    </span>
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34D399] text-xs text-white">
                      ✓
                    </span>
                    <span>24/7 Support</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <img src="/images/avatar1.jpg" alt="User 1" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                      <img src="/images/avatar2.jpg" alt="User 2" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                      <img src="/images/avatar3.jpg" alt="User 3" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                      <img src="/images/avatar4.jpg" alt="User 4" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">25k+ People Join</p>
                    </div>
                    
                    <div className="flex items-center gap-[4px] text-amber-300">
                      <span className="text-[13px] sm:text-[14px]">★★★★★</span>
                      <span className="text-xs sm:text-sm text-slate-300">5.0</span>
                    </div>
                  </div>
                </div>
              </div>



            </div>



            {/* Right stats panel */}

            <div className="w-full relative">
            <aside className="lg:absolute top-16 sm:top-20 lg:top-24 right-4 sm:right-8 lg:right-12 w-64 sm:w-72 lg:w-80 xl:w-96 mx-auto lg:mx-0">
              <div className="flex flex-col gap-3 sm:gap-4">

                <div className="rounded-xl border border-white/10 bg-white/10 p-4 sm:p-5 h-20 sm:h-24">
                  <div className="flex items-center h-full relative">
                    <div className="relative z-10">
                      <p className="text-xl sm:text-2xl font-bold text-white leading-none">500+</p>
                      <p className="text-[11px] sm:text-[12px] text-white/90 mt-1">Active Roles</p>
                    </div>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-white/20 border-2 border-white/30 overflow-hidden flex items-center justify-center">
                        <img src="/images/bag-icon.png" alt="Bag Icon" className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/10  p-6 h-22 sm:h-24">
                  <div className="flex items-center h-full relative">
                    <div className="relative z-10">
                      <p className="text-2xl sm:text-3xl font-bold text-white leading-none">2,000+</p>
                      <p className="text-[12px] sm:text-[13px] text-white/90 mt-1">Recruiters</p>
                    </div>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-white/20 border-2 border-white/30 overflow-hidden flex items-center justify-center">
                        <img src="/images/member.png" alt="People Icon" className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/10 p-6 h-20 sm:h-24">
                  <div className="flex items-center h-full relative">
                    <div className="relative z-10">
                      <p className="text-2xl sm:text-3xl font-bold text-white leading-none">98%</p>
                      <p className="text-[13px] sm:text-[14px] text-white/90 mt-1">Success Rate</p>
                    </div>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-white/20 border-2 border-white/30 overflow-hidden flex items-center justify-center">
                        <img src="/images/verified.png" alt="Success Icon" className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            </div>
          </div>
        </section>

        {/* About / What is Nomad Recruitment - Figma Pixel Perfect */}
        <section id="about" className="relative bg-white min-h-[750px] px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            {/* Small pill */}
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[18px] font-medium text-slate-500 shadow-sm shadow-slate-200">
              About Us
            </div>
            
            {/* Title */}
            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                What is Nomad Recruitment?
              </h2>
      <div className="mx-auto  mt-10 mb-6 h-1 w-16 rounded-full bg-slate-900" />
      <p className="mx-auto   max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[18px]">
        A transparent marketplace connecting companies with professional recruiters,
        <br/> built on fairness and mutual empowerment.
      </p>
    </div>
    
    {/* Cards */}
    <div className="mt-28 grid w-full gap-12 grid-cols-1 md:grid-cols-2">
      {/* Card 1 */}
      <div className="relative flex right-[35px] h-full min-h-[230px] max-w-[380px] mx-auto md:translate-x-36 flex-col rounded-xl bg-white/90 p-6 text-left shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 ">
        {/* Left colored strip */}
        <div className="pointer-events-none absolute inset-y-3 left-0 w-[4px] rounded-r-full bg-slate-900" />
        <div className="flex items-center justify-between pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-white">
            1
          </div>
          <span className="rounded-full  bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
            Marketplace
          </span>
        </div>
        <p className="text-[14px] leading-[18px] text-slate-600">
          Nomad Recruitment is a transparent marketplace connecting companies with professional recruiters and agencies. Unlike traditional platforms with hidden fees and rigid structures, we give both parties full control over pricing, terms, and selection.
        </p>
      </div>
      
      {/* Card 2 */}
      <div className="relative flex h-full min-h-[190px] max-w-[380px] flex-col rounded-xl bg-white/90 p-6 text-left shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 ">
        {/* Left colored strip */}
        <div className="pointer-events-none absolute inset-y-3 left-0 w-[4px] rounded-r-full bg-slate-900" />
        <div className="flex items-center justify-between pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-white">
            2
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
            Process
          </span>
        </div>
        <p className="text-[14px] leading-[18px] text-slate-600">
          Companies post roles and review candidate proposals with upfront fees. Recruiters 
          present qualified candidates and negotiate their terms directly. Payment is held securely and only released when the hire successfully starts work.
        </p>
      </div>
    </div>
  </div>
</section>



          {/* Problem with Traditional Recruitment */}

          <section className="relative px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24" style={{background: 'linear-gradient(270deg, #0F172A 0%, #334F90 100%)'}}>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_70%)]" />
            <div className="mx-auto w-full max-w-6xl text-center">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                THE CHALLENGE
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Problem with Traditional Recruitment
                </h2>
                <div className="mx-auto h-0.5 w-16 rounded-full bg-sky-400" />
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Hidden fees, inflexible terms, and zero transparency leave both companies and recruiters frustrated.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Left Column */}
                <div className="space-y-8 translate-x-20">
                  {/* Card 1 - Top Left */}
                  <div className="relative flex flex-col rounded-2xl bg-gray-50 p-6 md:p-8 text-left shadow-lg min-h-[260px] max-w-[480px] w-full">
                    <div className="absolute top-4 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                      1
                    </div>
                    <div className="flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white mb-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold text-gray-800">
                          Hidden Costs & No Negotiation
                        </h3>
                        <p className="text-gray-700 leading-normal">
                          Companies are locked into rigid fee structures with no room to negotiate. Pricing is often unclear until the very end, leading to budget surprises and mistrust.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 - Bottom Left */}
                  <div className="relative flex flex-col rounded-2xl bg-gray-50 p-6 md:p-8 text-left shadow-lg min-h-[260px] max-w-[480px] w-full">
                    <div className="absolute top-4 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                      3
                    </div>
                    <div className="flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white mb-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold text-gray-800">
                          Slow, Inefficient Process
                        </h3>
                        <p className="text-gray-700 leading-normal">
                          Traditional recruitment involves endless back-and-forth, unclear expectations, and wasted time. Both parties spend weeks navigating unclear processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-12">
                  {/* Card 2 - Top Right */}
                  <div className="relative mt-0 md:mt-12 flex flex-col rounded-2xl bg-gray-50 p-6 md:p-8 text-left shadow-lg min-h-[260px] max-w-[480px] w-full">
                    <div className="absolute top-4 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                      2
                    </div>
                    <div className="flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white mb-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold text-gray-800">
                          Payment Risk for Recruiters
                        </h3>
                        <p className="text-gray-700 leading-normal">
                          Recruiters invest time and resources upfront but face payment delays or disputes. There's no guarantee they'll be compensated fairly for successful placements.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 4 - Bottom Right */}
                  <div className="relative mt-0 md:mt-16 flex flex-col rounded-2xl bg-gray-50 p-6 md:p-8 text-left shadow-lg min-h-[260px] max-w-[480px] w-full">
                    <div className="absolute top-4 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                      4
                    </div>
                    <div className="flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white mb-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold text-gray-800">
                          Lack of Control & Transparency
                        </h3>
                        <p className="text-gray-700 leading-normal">
                          Neither companies nor recruiters have full visibility into the process. Terms are dictated by platforms, not negotiated between the parties who matter most.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* How Nomad Works */}
        <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                OUR PROCESS
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  How Nomad Works
                </h2>
                <div className="mx-auto h-0.5 w-16 rounded-full bg-blue-600" />
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  A simple, transparent process that puts both companies and recruiters in control.
                </p>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-12 h-[310px]  md:gap-8 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="relative flex flex-col rounded-3xl  border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 text-left shadow-lg" style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                <div className="flex flex-col items-start">
                  <div className="relative mt-2" style={{ transform: 'rotate(3deg)' }}>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-900 text-xl font-bold text-white shadow-lg relative z-10" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.34), 0 0 50px rgba(59, 130, 246, 0.17)' }}>
                      01
                    </div>
                  </div>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Companies Post Jobs
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Create detailed job listings with requirements, budget, and timeline. Set your terms and wait for qualified recruiters to apply.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-blue-900 rounded-full" />
              </div>

              {/* Card 2 */}
              <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-lg" style={{ background: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                <div className="flex flex-col items-start">
                  <div className="relative mt-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-900 text-xl font-bold text-white shadow-lg relative z-10" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.34), 0 0 50px rgba(59, 130, 246, 0.17)' }}>
                      02
                    </div>
                  </div>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Recruiters Apply
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Professional recruiters submit qualified candidates with their proposed fees and success rates for your review.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)' }} />
              </div>

              {/* Card 3 */}
              <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-lg" style={{ background: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                <div className="flex flex-col items-start">
                  <div className="relative mt-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-900 text-xl font-bold text-white shadow-lg relative z-10" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.34), 0 0 50px rgba(59, 130, 246, 0.17)' }}>
                      03
                    </div>
                  </div>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Review & Select
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Compare proposals, interview candidates, and select the best fit. Negotiate terms directly with full transparency.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)' }} />
              </div>

              {/* Card 4 */}
              <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-lg" style={{ background: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                <div className="flex flex-col items-start">
                  <div className="relative mt-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-900 text-xl font-bold text-white shadow-lg relative z-10" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.34), 0 0 50px rgba(59, 130, 246, 0.17)' }}>
                      04
                    </div>
                  </div>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Success & Payment
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Payment held securely in escrow and released only when the candidate successfully starts and completes the hiring process.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)' }} />
              </div>
            </div>
          </div>
        </section>


          {/* Why Companies & Recruiters Choose Nomad */}

          <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
  <div className="mx-auto w-full max-w-6xl">
    <div className="grid grid-cols-1 gap-8 lg:gap-14 lg:grid-cols-2 items-start">

      {/* Left Section */}
      <div className="space-y-6 translate-y-16">
        <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
          For Companies
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
          For Companies & <br/> Hiring Teams
        </h2>

        <p className="text-base sm:text-lg translate-y-4 leading-relaxed text-slate-600">
          Post jobs, review qualified candidates from top recruiters, and only pay when you make a successful hire. Complete transparency with no hidden fees.
        </p>

        {/* Styled Div with Exact Specifications */}
        <div  style={{
          width: '100%',
          maxWidth: '470px',
          height: 'auto',
          minHeight: '134.54409790039062px',
          borderRadius: '24px',
          borderWidth: '1.3px',
          background: 'linear-gradient(135deg, rgba(37, 64, 106, 0.03) 0%, rgba(239, 246, 255, 0.3) 50%, rgba(0, 0, 0, 0) 100%)',
          borderTop: '1.3px solid #0F172A1A',
          opacity: 1,
          transform: 'rotate(0deg)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px 40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-900">30–50%</div>
            <div className="text-xs sm:text-sm text-slate-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-900">50%</div>
            <div className="text-xs sm:text-sm text-slate-600">Faster Hiring</div>
          </div>
        </div>

        <button className="inline-flex items-center translate-y-12 rounded-lg bg-blue-900 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-blue-800 text-sm sm:text-base">
          Post Your First Role
          <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Right Section */}
      <div className="space-y-3 sm:space-y-4">
        {[
          'Post your role and receive multiple candidate proposals with transparent fees',
          'Compare proposals, negotiate terms, and select the best recruiter for your needs',
          'Interview candidates directly and make hiring decisions at your own pace',
          'Pay only when your chosen candidate starts work - no upfront costs or hidden fees',
          'Track progress and manage all communications through our centralized platform',
          'Access detailed analytics and reporting to optimize your hiring process',
          'Get dedicated support from our team throughout the entire hiring journey',
          'Enjoy post-hire support and 30-day replacement guarantee for complete peace of mind',
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 sm:p-4 transition hover:bg-slate-100"
          >
            <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-900">
              <img src="/images/image2.png" alt="circle" className="h-4 w-4 sm:h-5 sm:w-5" />
              <img src="/images/image.png" alt="tick" className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2" />
            </div>

            <h4 className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-slate-900 font-normal">
              {text}
            </h4>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

        {/* For Recruiters & Agencies Section */}
        <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-start">

              {/* Left Section - 6 Benefit Cards */}
              <div className="space-y-4">
                {[
                  "Browse open roles from companies actively hiring",
                  "Submit qualified candidates with your proposed fee—no percentage caps",
                  "Negotiate terms directly with companies on a level playing field",
                  "Build your reputation with verified placements and ratings",
                  "Access a steady stream of quality opportunities across industries",
                  "Work independently or as an agency with full control over your business"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                  >
                    <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-900">
                      <img src="/images/image2.png" alt="circle" className="h-4 w-4 sm:h-5 sm:w-5" />
                      <img src="/images/image.png" alt="tick" className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2" />
                    </div>
                    <h4 className="text-[15px] leading-[22px] text-gray-800 font-medium">
                      {text}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                {/* Pill Button */}
                <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  For Recruiters
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                  For Recruiters & <br/>Agencies
                </h2>

                {/* Gradient Blue Line */}
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  Connect with companies actively hiring, set your own fees, and grow your recruitment business with complete transparency and control.
                </p>

                {/* Average Earnings Card */}
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-600">AVERAGE EARNINGS</div>
                    <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">$8,500</div>
                  <div className="text-sm text-gray-600 mt-1">Per successful placement</div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center rounded-lg bg-blue-900 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-blue-800 text-sm sm:text-base">
                  Start Recruiting Today
                  <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Why Nomad is Different Section */}
        <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center mb-12">
              {/* Comparison Pill */}
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 mb-6">
                Comparison
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Nomad is Different</h2>
              
              {/* Gradient Blue Line */}
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-8"></div>
              
              {/* Description */}
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We're not another recruitment agency. We're a marketplace built on transparency, fairness, and mutual control.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg max-w-4xl mx-auto">
              {/* Table Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-gray-50">
                <div className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </div>
                <div className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Traditional Agencies
                </div>
                <div className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider bg-blue-900 rounded-tr-xl">
                  Nomad Recruitment
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-gray-200 bg-white">
                {/* Pricing Control Row */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                  <div className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                    Pricing Control
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-600 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Fixed percentages, no negotiation</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-900 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-900">
                        <img src="/images/image.png" alt="tick" className="h-2 w-2" />
                      </div>
                      <span>Fully negotiable fees between parties</span>
                    </div>
                  </div>
                </div>

                {/* Payment Security Row */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                  <div className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                    Payment Security
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-600 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Payment delays and disputes common</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-900 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-900">
                        <img src="/images/image.png" alt="tick" className="h-2 w-2" />
                      </div>
                      <span>Secure escrow, release on success</span>
                    </div>
                  </div>
                </div>

                {/* Transparency Row */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                  <div className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                    Transparency
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-600 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Hidden fees and unclear processes</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-900 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-900">
                        <img src="/images/image.png" alt="tick" className="h-2 w-2" />
                      </div>
                      <span>Complete fee and process visibility</span>
                    </div>
                  </div>
                </div>

                {/* Control Row */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                  <div className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                    Control
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-600 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Agency dictates terms and timeline</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-900 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-900">
                        <img src="/images/image.png" alt="tick" className="h-2 w-2" />
                      </div>
                      <span>You set terms and control timeline</span>
                    </div>
                  </div>
                </div>

                {/* Cost Efficiency Row */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                  <div className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                    Cost Efficiency
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-600 border-r border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>High overhead costs passed to clients</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 text-sm text-gray-900 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-900">
                        <img src="/images/image.png" alt="tick" className="h-2 w-2" />
                      </div>
                      <span>30-50% cost savings vs traditional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Quality Section */}
        <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" style={{background: 'linear-gradient(180deg, #0F172A 0%, #2A4870 50%, #0F172A 100%)'}}>
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center mb-12">
              {/* Security & Compliance Pill */}
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                Security & Compliance
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trust & Quality</h2>
              
              {/* Gradient Div */}
              <div className="mx-auto h-1 w-24 rounded-full mb-8" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #FFFFFF 50%, rgba(0, 0, 0, 0) 100%)'}}></div>
              
              {/* Description */}
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-16">
                Your recruitment journey is protected by industry-leading security measures and quality standards, ensuring safe and successful hiring outcomes.
              </p>
            </div>

            {/* Four Feature Cards */}
            <div className="w-full max-w-6xl mx-auto h-60 relative">
              {/* Card 1 - Verified Recruiters */}
              <div className="w-64 h-60 left-0 top-0 absolute bg-white rounded-2xl outline outline-[1.21px] outline-offset-[-1.21px] outline-white/20">
                <div className="w-48 h-6 left-[30.96px] top-[105.35px] absolute">
                  <div className="left-0 top-[0.28px] absolute justify-start text-slate-900 text-base font-medium font-['Inter'] leading-6">Verified Recruiters</div>
                </div>
                <div className="w-48 h-16 left-[30.96px] top-[139.50px] absolute">
                  <div className="w-44 left-0 top-[0.55px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">All recruiters undergo verification before joining the platform</div>
                </div>
                <div className="size-14 left-[31.29px] top-[30.51px] absolute bg-gradient-to-l from-slate-900 to-blue-900 rounded-2xl inline-flex justify-center items-center">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7002 14.1056C21.7002 19.5307 17.9026 22.2433 13.3889 23.8166C13.1525 23.8966 12.8958 23.8928 12.6619 23.8057C8.13741 22.2433 4.33984 19.5307 4.33984 14.1056V6.51049C4.33984 6.22272 4.45416 5.94674 4.65764 5.74326C4.86112 5.53978 5.1371 5.42547 5.42486 5.42547C7.5949 5.42547 10.3075 4.12344 12.1954 2.47422C12.4253 2.27783 12.7177 2.16992 13.02 2.16992C13.3223 2.16992 13.6147 2.27783 13.8446 2.47422C15.7434 4.1343 18.4451 5.42547 20.6151 5.42547C20.9029 5.42547 21.1789 5.53978 21.3824 5.74326C21.5858 5.94674 21.7002 6.22272 21.7002 6.51049V14.1056Z" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Card 2 - Rating System */}
              <div className="w-64 h-60 left-[290.17px] top-0 absolute bg-white rounded-2xl outline outline-[1.21px] outline-offset-[-1.21px] outline-white/20">
                <div className="w-48 h-6 left-[30.95px] top-[105.35px] absolute">
                  <div className="left-0 top-[0.28px] absolute justify-start text-slate-900 text-base font-medium font-['Inter'] leading-6">Rating System</div>
                </div>
                <div className="w-48 h-11 left-[30.95px] top-[139.50px] absolute">
                  <div className="w-48 left-0 top-[0.55px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">Track record and ratings ensure quality and accountability</div>
                </div>
                <div className="size-14 left-[31.30px] top-[30.51px] absolute bg-gradient-to-l from-slate-900 to-blue-900 rounded-2xl inline-flex justify-center items-center">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3602 22.786V20.616C17.3602 19.4649 16.9029 18.361 16.089 17.5471C15.2751 16.7331 14.1712 16.2759 13.0201 16.2759H6.51C5.35894 16.2759 4.25502 16.7331 3.4411 17.5471C2.62718 18.361 2.16992 19.4649 2.16992 20.616V22.786" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.76586 11.9355C12.1628 11.9355 14.1059 9.99241 14.1059 7.59545C14.1059 5.19849 12.1628 3.25537 9.76586 3.25537C7.3689 3.25537 5.42578 5.19849 5.42578 7.59545C5.42578 9.99241 7.3689 11.9355 9.76586 11.9355Z" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.3608 11.9347L19.5309 14.1047L23.871 9.76465" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Card 3 - Compliance Ready */}
              <div className="w-64 h-60 left-[580.37px] top-0 absolute bg-white rounded-2xl outline outline-[1.21px] outline-offset-[-1.21px] outline-white/20">
                <div className="w-48 h-6 left-[30.95px] top-[105.35px] absolute">
                  <div className="left-0 top-[0.28px] absolute justify-start text-slate-900 text-base font-medium font-['Inter'] leading-6">Compliance Ready</div>
                </div>
                <div className="w-48 h-16 left-[30.95px] top-[139.50px] absolute">
                  <div className="w-48 left-0 top-[0.55px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">Built with data protection and employment law compliance in mind</div>
                </div>
                <div className="size-14 left-[31.30px] top-[30.51px] absolute bg-gradient-to-l from-slate-900 to-blue-900 rounded-2xl inline-flex justify-center items-center">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2755 2.16992H6.51037C5.93484 2.16992 5.38288 2.39855 4.97592 2.80551C4.56896 3.21247 4.34033 3.76443 4.34033 4.33996V21.7003C4.34033 22.2758 4.56896 22.8278 4.97592 23.2347C5.38288 23.6417 5.93484 23.8703 6.51037 23.8703H19.5306C20.1061 23.8703 20.6581 23.6417 21.0651 23.2347C21.472 22.8278 21.7006 22.2758 21.7006 21.7003V7.59502L16.2755 2.16992Z" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.1904 2.16992V6.51C15.1904 7.08553 15.4191 7.63749 15.826 8.04445C16.233 8.45141 16.7849 8.68004 17.3605 8.68004H21.7005" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.76514 16.276L11.9352 18.446L16.2753 14.106" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Card 4 - Quality Assurance */}
              <div className="w-64 h-60 left-[870.56px] top-0 absolute bg-white rounded-2xl outline outline-[1.21px] outline-offset-[-1.21px] outline-white/20">
                <div className="w-48 h-6 left-[30.95px] top-[105.35px] absolute">
                  <div className="left-0 top-[0.28px] absolute justify-start text-slate-900 text-base font-medium font-['Inter'] leading-6">Quality Assurance</div>
                </div>
                <div className="w-48 h-16 left-[30.95px] top-[139.50px] absolute">
                  <div className="w-48 left-0 top-[0.55px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">Ongoing monitoring to maintain high standards across the platform</div>
                </div>
                <div className="size-14 left-[31.29px] top-[30.51px] absolute bg-gradient-to-l from-slate-900 to-blue-900 rounded-2xl inline-flex justify-center items-center">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7925 13.9858L18.4363 23.2367C18.4547 23.3456 18.4394 23.4576 18.3925 23.5576C18.3455 23.6576 18.2692 23.7409 18.1736 23.7964C18.0781 23.8518 17.9679 23.8768 17.8578 23.8679C17.7476 23.859 17.6429 23.8167 17.5574 23.7467L13.6731 20.8312C13.4855 20.6911 13.2577 20.6154 13.0237 20.6154C12.7896 20.6154 12.5618 20.6911 12.3743 20.8312L8.48341 23.7456C8.39804 23.8155 8.29338 23.8577 8.1834 23.8666C8.07341 23.8755 7.96333 23.8506 7.86784 23.7954C7.77235 23.7401 7.69598 23.657 7.64894 23.5572C7.6019 23.4573 7.58641 23.3456 7.60454 23.2367L9.24726 13.9858" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.0199 15.1902C16.6153 15.1902 19.53 12.2755 19.53 8.68004C19.53 5.0846 16.6153 2.16992 13.0199 2.16992C9.42444 2.16992 6.50977 5.0846 6.50977 8.68004C6.50977 12.2755 9.42444 15.1902 13.0199 15.1902Z" stroke="white" stroke-width="2.17004" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="hidden lg:block size-[699.99px] left-[10%] top-0 absolute bg-cyan-900/5 rounded-full blur-3xl" />
            <div className="hidden lg:block size-[800px] left-[5%] top-[68.26px] absolute bg-blue-400/5 rounded-full blur-3xl" />
            <div className="hidden lg:block size-28 right-[10%] top-[30.51px] absolute origin-top-left rotate-12 rounded-2xl border-4 border-slate-900/10" />
            <div className="hidden lg:block size-32 left-[5%] bottom-[50px] absolute bg-gradient-to-br from-blue-400/10 to-black/0 rounded-full" />
          </div>
          
          <div className="relative mx-auto max-w-4xl lg:max-w-6xl">
            <div className="text-center">
              {/* Ready Pill */}
              <div className="inline-flex items-center gap-3 bg-slate-900/5 rounded-full outline outline-[1.30px] outline-offset-[-1.30px] outline-slate-900/20 px-6 py-3 mb-8">
                <span className="text-neutral-950 text-xl">🚀</span>
                <span className="text-slate-900 text-sm font-medium">Ready to Get Started?</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 lg:mb-8">
                Ready to Transform Your Recruitment?
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 lg:mb-12">
                Join companies and recruiters who are making smarter, fairer hiring decisions. Get started in minutes.
              </p>
              
              {/* Feature Icons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 lg:mb-12">
                <div className="flex items-center gap-2">
                  <div className="size-10 bg-green-100 rounded-full flex justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9948 21.5911C14.5397 21.5911 16.9805 20.5801 18.7801 18.7805C20.5796 16.981 21.5906 14.5402 21.5906 11.9953C21.5906 9.45028 20.5796 7.00954 18.7801 5.20997C16.9805 3.4104 14.5397 2.39941 11.9948 2.39941C9.44979 2.39941 7.00905 3.4104 5.20948 5.20997C3.40991 7.00954 2.39893 9.45028 2.39893 11.9953C2.39893 14.5402 3.40991 16.981 5.20948 18.7805C7.00905 20.5801 9.44979 21.5911 11.9948 21.5911ZM16.4412 10.4443C16.6597 10.2181 16.7806 9.91511 16.7779 9.60061C16.7752 9.28611 16.649 8.98527 16.4266 8.76287C16.2042 8.54048 15.9034 8.41433 15.5889 8.4116C15.2744 8.40887 14.9714 8.52977 14.7452 8.74826L10.7953 12.6982L9.24436 11.1472C9.01813 10.9287 8.71514 10.8078 8.40064 10.8106C8.08614 10.8133 7.7853 10.9394 7.56291 11.1618C7.34051 11.3842 7.21436 11.6851 7.21163 11.9996C7.2089 12.3141 7.3298 12.6171 7.54829 12.8433L9.94725 15.2422C10.1722 15.4671 10.4772 15.5934 10.7953 15.5934C11.1133 15.5934 11.4184 15.4671 11.6433 15.2422L16.4412 10.4443Z" fill="#00A63E"/>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">Free to Start</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="size-10 bg-blue-100 rounded-full flex justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9946 14.9938V16.993M5.99718 20.9912H17.992C18.5222 20.9912 19.0307 20.7806 19.4056 20.4057C19.7805 20.0308 19.9911 19.5223 19.9911 18.9921V12.9947C19.9911 12.4645 19.7805 11.956 19.4056 11.5811C19.0307 11.2062 18.5222 10.9956 17.992 10.9956H5.99718C5.46698 10.9956 4.95849 11.2062 4.58358 11.5811C4.20867 11.956 3.99805 12.4645 3.99805 12.9947V18.9921C3.99805 19.5223 4.20867 20.0308 4.58358 20.4057C4.95849 20.7806 5.46698 20.9912 5.99718 20.9912ZM15.9928 10.9956V6.99729C15.9928 5.93688 15.5716 4.91991 14.8218 4.17009C14.072 3.42027 13.055 2.99902 11.9946 2.99902C10.9342 2.99902 9.9172 3.42027 9.16738 4.17009C8.41756 4.91991 7.99631 5.93688 7.99631 6.99729V10.9956H15.9928Z" stroke="#155DFC" stroke-width="1.99913" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">Secure Payments</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="size-10 bg-purple-100 rounded-full flex justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9941 9.99599V2.99902L3.99805 13.9943H10.995V20.9912L19.9911 9.99599H12.9941Z" stroke="#9810FA" stroke-width="1.99913" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">Instant Setup</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-60 h-16 bg-white rounded-2xl outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 text-slate-900 text-base font-medium font-['Inter'] leading-6 hover:bg-gray-50 transition-colors">
                  Schedule a Demo
                </button>
                <button className="w-full sm:w-72 h-16 bg-gradient-to-l from-slate-900 to-blue-900 rounded-2xl text-white text-base font-medium font-['Inter'] leading-6 hover:from-slate-800 hover:to-blue-800 transition-all flex items-center justify-center gap-2">
                  Get Started for Free
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1533 6.66016L17.4835 9.99036M17.4835 9.99036L14.1533 13.3206M17.4835 9.99036H2.49756" stroke="white" stroke-width="1.6651" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        </div>


        {/* Footer */}
        <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 py-12 sm:py-16 lg:py-20 text-slate-200">
          <div className="mx-auto max-w-7xl">
            {/* Brand Section */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-slate-900/80 px-5 py-3 shadow-[0_20px_55px_rgba(15,23,42,0.8)] ring-1 ring-slate-700/80 mb-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-base font-semibold text-slate-50">
                  R
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-semibold tracking-tight text-slate-50">
                    Nomad Recruitment
                  </span>
                  <span className="mt-0.5 text-[11px] font-normal text-slate-300/90">
                    The transparent recruitment marketplace where both sides decide the deal.
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[11px] font-medium text-slate-300/90 mb-12">
              <button className="hover:text-white transition-colors">How It Works</button>
              <button className="hover:text-white transition-colors">Pricing</button>
              <button className="hover:text-white transition-colors">About Us</button>
              <button className="hover:text-white transition-colors">For Companies</button>
              <button className="hover:text-white transition-colors">For Recruiters</button>
              <button className="hover:text-white transition-colors">FAQs</button>
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Compliance</button>
            </nav>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 sm:gap-6 mb-12">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70 hover:bg-slate-800 transition-colors">
                in
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70 hover:bg-slate-800 transition-colors">
                🌐
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70 hover:bg-slate-800 transition-colors">
                🐦
              </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-slate-800/80 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[11px] text-slate-400">
              <p className="text-center lg:text-left">
                © {new Date().getFullYear()} Nomad Recruitment. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-1">
                <button className="hover:text-slate-200 transition-colors">Status</button>
                <span className="text-slate-600">•</span>
                <button className="hover:text-slate-200 transition-colors">Security</button>
                <span className="text-slate-600">•</span>
                <button className="hover:text-slate-200 transition-colors">Cookie Settings</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };



const StatCard = ({ label, value, icon }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/25 bg-white/8 px-5 py-4 text-sm shadow-[0_18px_50px_rgba(15,23,42,0.6)] backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/80 text-base">
          <span>{icon}</span>
        </div>
        <div className="space-y-0.5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-200/80">
            {label}
          </p>
          <p className="text-lg font-semibold text-white">{value}</p>
        </div>
      </div>
      <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] text-slate-100">
        ⟶
      </button>
    </div>
  );
};



const ProblemCard = ({ index, title, body }) => {
  return (
    <div className="relative flex h-full flex-col rounded-2xl bg-slate-900/95 p-5 text-left shadow-[0_18px_55px_rgba(15,23,42,0.65)] ring-1 ring-slate-800/80">
      <div className="flex items-start justify-between gap-3 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-slate-50">
          <span>{index}</span>
        </div>
        <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/80 text-[11px] text-slate-200">
          ⓘ
        </div>
      </div>
      <h3 className="mb-2 text-sm font-semibold text-slate-50 sm:text-[15px]">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-slate-300">{body}</p>
    </div>
  );
};



const ProcessCard = ({ step, title, body }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 text-left shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
      <div className="mb-4 flex items-center">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-semibold text-white shadow-md shadow-slate-400/40">
            {step}
          </div>
          <div className="absolute -bottom-1 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-slate-300" />
        </div>
      </div>
      <h3 className="mb-2 text-sm font-semibold text-slate-900 sm:text-[15px]">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-slate-500">{body}</p>
    </div>
  );
};



const ValuesCard = ({ label, title, body }) => {
  return (
    <div className="relative flex h-full flex-col rounded-2xl bg-white p-6 text-left shadow-[0_24px_65px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
      <div className="absolute -top-3 left-6 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-medium text-slate-50 shadow-sm shadow-slate-400/40">
        {label}
      </div>
      <div className="mb-4 mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300 bg-blue-500 text-slate-50">
        <span className="text-white text-sm">✓</span>
      </div>
      <h3 className="mb-2 text-sm font-semibold text-slate-900 sm:text-[15px]">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-slate-500">{body}</p>
    </div>
  );
};



export default Home;

