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

        </div>


        {/* Footer */}

        <footer className="mt-auto bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 pb-10 pt-12 text-slate-200 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-16">

          <div className="mx-auto w-full max-w-5xl text-center">



            <div className="inline-flex items-center gap-3 rounded-2xl bg-slate-900/80 px-5 py-3 shadow-[0_20px_55px_rgba(15,23,42,0.8)] ring-1 ring-slate-700/80">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-base font-semibold text-slate-50">

                R

              </div>

              <div className="flex flex-col items-start text-left">

                <span className="text-sm font-semibold tracking-tight text-slate-50">

                  Nomad Recruitment

                </span>

                <span className="mt-0.5 text-[11px] font-normal text-slate-300/90">

                  The transparent recruitment marketplace where both sides decide

                  the deal.

                </span>

              </div>

            </div>



            {/* Primary footer nav */}

            <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-300/90 sm:flex-row sm:gap-x-8">

              <button className="hover:text-white">How It Works</button>

              <button className="hover:text-white">Pricing</button>

              <button className="hover:text-white">About Us</button>

              <button className="hover:text-white">For Companies</button>

              <button className="hover:text-white">For Recruiters</button>

              <button className="hover:text-white">FAQs</button>

              <button className="hover:text-white">Privacy Policy</button>

              <button className="hover:text-white">Terms</button>

              <button className="hover:text-white">Compliance</button>

            </nav>



            {/* Social icons */}

            <div className="mt-9 flex justify-center gap-4 sm:gap-6">

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">

                in

              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">

                🌐

              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">

                🐦

              </button>

            </div>



            {/* Divider */}

            <div className="mt-9 h-px w-full bg-slate-800/80" />



            {/* Bottom row */}

            <div className="mt-4 flex flex-col items-center justify-between gap-3 text-[11px] text-slate-400 sm:flex-row">

              <p className="text-center">

                © {new Date().getFullYear()} Nomad Recruitment. All rights

                reserved.

              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">

                <button className="hover:text-slate-200">Status</button>

                <span className="text-slate-600">•</span>

                <button className="hover:text-slate-200">Security</button>

                <span className="text-slate-600">•</span>

                <button className="hover:text-slate-200">Cookie Settings</button>

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

