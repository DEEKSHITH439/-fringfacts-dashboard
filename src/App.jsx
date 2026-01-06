import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showScript, setShowScript] = useState(false);
  const [scriptData, setScriptData] = useState(null);

  // State for AI Ideas
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [time, setTime] = useState(new Date());

  // Clock Effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const [selectedHook, setSelectedHook] = useState('mystery');
  const [showAnalysis, setShowAnalysis] = useState(false);

  // --- MOCK DATA FOR "CREATOR ACTION ENGINE" ---

  const heroUpload = {
    topic: "The 'Immortal' Jellyfish",
    hook: "This animal cheats death continuously...",
    confidence: 98,
    viewPot: "2M - 5M",
    uploadTime: "19:30 IST", // 2:00 PM EST roughly
    trigger: "Existential Shock",
    reason: "Breaks the fundamental rule of biology (death). profound visual anomaly."
  };

  const trends = [
    { query: "Animal attacks caught on video", growth: "Breakout", reason: "High volatility day. Users seeking adrenaline.", actions: ["Shock Reel", "Survival Guide"] },
    { query: "Blobfish", growth: "+60%", reason: "Resurgence in 'Ugly Animal' memes on TikTok.", actions: ["Ugly Tier List", "Biology Deep Dive"] },
    { query: "Weird facts about animals", growth: "+50%", reason: "General curiosity spike for weekend long-form.", actions: ["Listicle", "Myth Bust"] }
  ];

  const backupIdeas = [
    { type: "Versus", text: "Honey Badger vs Wolverine: Who actually wins?", safe: true, note: "Compare durability & aggression. Use clips of both.", psychology: "Conflict Resolution", mistake: "Declaring a winner too early." },
    { type: "Cryptid", text: "The 'Skinwalker' whistles you should never ignore...", safe: false, note: "⚠️ Use eerie forest stock footage, NOT gore.", psychology: "Primal Fear", mistake: "Using fake-looking CGI monsters." },
    { type: "Multi-Animal", text: "3 Animals that could take down a Gorilla.", safe: true, note: "Feature Leopard, Grizzly, and hippo stats.", psychology: "Power Scaling", mistake: "Ignoring the Gorilla's intelligence." },
    { type: "Mystery", text: "Why do dogs bark at 'nothing' in the corner?", safe: true, note: "Imply supernatural without stating it.", psychology: "Paranormal Ambiguity", mistake: "Over-explaining the science." },
    { type: "Deep Sea", text: "The creature that eats sharks for breakfast.", safe: true, note: "Orca vs Great White hunting clips.", psychology: "Apex Predator Awe", mistake: "Boring narration." },
  ];

  const competitors = [
    { name: "@CasualGeographic", status: "Surging", lastPost: "4h ago", topVideo: "Animals that will impress your teacher", views: "2.1M", alert: "High Momentum" },
    { name: "@Animalogic", status: "Active", lastPost: "12h ago", topVideo: "Craziest Animal Facts", views: "850K", alert: "Steady" },
    { name: "@NatGeoKids", status: "Steady", lastPost: "1d ago", topVideo: "Weird But True! Shorts", views: "420K", alert: "Educational Gap" },
  ];

  const handleRefreshIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const nextIndex = (currentIdeaIndex + 1) % backupIdeas.length;
      setCurrentIdeaIndex(nextIndex);
      setIsGenerating(false);
    }, 800);
  };

  const currentIdea = backupIdeas[currentIdeaIndex];
  const previewIdea1 = backupIdeas[(currentIdeaIndex + 1) % backupIdeas.length];

  const handleGenerateScript = (type) => {
    setScriptData({
      title: type === 'hero' ? heroUpload.topic : currentIdea.text,
      hook: selectedHook,
      intro: type === 'hero' ? "You think death is the end? Not for this creature." : "Most people think this is impossible...",
      body: "[Fast cut montage of subject] ... biological impossibility ... scientific breakdown...",
      cta: "Subscribe for more weird nature.",
      audio: "Dark Synthwave / Eerie Ambiance"
    });
    setShowScript(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">

            {/* HERO SECTION: TODAY'S BEST UPLOAD */}
            <div className="bg-gradient-to-r from-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/50 p-6 md:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.15)] group">
              <div className="absolute top-0 right-0 p-4 opacity-20 text-9xl select-none group-hover:scale-105 transition-transform duration-700">🚀</div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">Today's Alpha Pick</span>
                    <span className="text-emerald-400 text-xs font-mono">Confidence: {heroUpload.confidence}%</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                    {heroUpload.topic}
                  </h2>
                  <div className="flex items-start gap-3 bg-slate-950/30 p-3 rounded-lg border border-indigo-500/20">
                    <span className="text-2xl">🪝</span>
                    <div>
                      <p className="text-indigo-200 text-sm font-bold">Viral Hook</p>
                      <p className="text-white text-lg font-medium">"{heroUpload.hook}"</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Exp. Views</span>
                      <span className="text-white font-mono font-bold">{heroUpload.viewPot}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Upload At</span>
                      <span className="text-amber-400 font-mono font-bold">{heroUpload.uploadTime}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Trigger</span>
                      <span className="text-rose-400 font-bold uppercase">{heroUpload.trigger}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-3 border-l border-slate-800 md:pl-8">
                  <p className="text-slate-400 text-xs italic">"Why it works: {heroUpload.reason}"</p>
                  <button
                    onClick={() => handleGenerateScript('hero')}
                    className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                  >
                    <span>📜</span> Generate Script
                  </button>
                  <button className="w-full py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-all border border-slate-700">
                    <span>🎨</span> Create Thumbnail
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* LEFT COL: TREND INTELLIGENCE */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-rose-500/10 rounded text-xl">📈</div>
                  <h2 className="text-lg font-bold text-white uppercase tracking-wide">Trend Radar</h2>
                </div>
                <div className="space-y-3">
                  {trends.map((t, i) => (
                    <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-slate-600 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-white text-sm">{t.query}</span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-900/20 px-1 py-0.5 rounded">{t.growth}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">{t.reason}</p>
                      <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button className="flex-1 text-[10px] bg-rose-500/20 text-rose-300 py-1 rounded hover:bg-rose-500/30 font-bold uppercase">⚡ {t.actions[0]}</button>
                        <button className="flex-1 text-[10px] bg-indigo-500/20 text-indigo-300 py-1 rounded hover:bg-indigo-500/30 font-bold uppercase">🧠 {t.actions[1]}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER COL: TOPIC ALCHEMIST */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-indigo-500/10 rounded text-xl">🧪</div>
                  <h2 className="text-lg font-bold text-white uppercase tracking-wide">Topic Alchemist</h2>
                </div>

                <div className="bg-slate-900/80 rounded-xl border border-indigo-500/30 p-5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all">
                  {isGenerating && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 z-20 backdrop-blur-sm">
                      <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                      <span className="text-xs text-indigo-400 font-bold animate-pulse">Distilling Viral Angles...</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${currentIdea.safe ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                      {currentIdea.safe ? 'Policy Safe' : 'Safety Check: Caution'}
                    </span>
                    <button onClick={handleRefreshIdea} className="text-slate-400 hover:text-white text-lg transition-transform hover:rotate-180">↻</button>
                  </div>

                  <div className="min-h-[160px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">Theme: {currentIdea.type}</h3>
                      <p className="text-white font-bold text-lg leading-snug mb-2">"{currentIdea.text}"</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 bg-slate-950/50 p-2 rounded border border-white/5">
                      <div>
                        <span className="block text-slate-500 uppercase font-bold">🧠 Psychology</span>
                        <span className="text-indigo-300">{currentIdea.psychology || "Curiosity"}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 uppercase font-bold">🚫 Avoid</span>
                        <span className="text-rose-300">{currentIdea.mistake || "Boring intro"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button onClick={() => handleGenerateScript('alchemist')} className="py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded flex items-center justify-center gap-1">📜 Script</button>
                    <button className="py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded flex items-center justify-center gap-1">🖼️ Thumb</button>
                  </div>
                </div>

                {/* Next Up Preview */}
                <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-800 flex justify-between items-center opacity-60">
                  <span className="text-xs text-slate-500">Next: {previewIdea1.type}</span>
                  <span className="text-[10px] text-slate-600">Cycle to view</span>
                </div>
              </div>

              {/* RIGHT COL: COACH & REDDIT */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-500/10 rounded text-xl">👮</div>
                  <h2 className="text-lg font-bold text-white uppercase tracking-wide">Daily Coach</h2>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Non-Negotiable Checklist</h3>
                  <div className="space-y-2">
                    {['Post by 7:30 PM for US Prime Time', 'Reply to first 10 comments with questions', 'Check thumbnail on Mobile dark mode', 'Use #FringFacts and #Shorts'].map((task, i) => (
                      <label key={i} className="flex items-center gap-3 p-2 hover:bg-slate-800/50 rounded cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800 accent-emerald-500" />
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-950/20 to-slate-900/50 p-4 rounded-xl border border-orange-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-orange-400 uppercase">Reddit Signal</span>
                    <span className="text-[10px] bg-orange-500/20 text-orange-300 px-1 rounded">HOT</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-tight mb-2">"Polar bear chases resident of Svalbard!!"</p>
                  <p className="text-xs text-slate-500">r/Damnthatsinteresting • 45.2k upvotes</p>
                </div>
              </div>

            </div>
          </div>
        )
      case 'competitors':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">War Room</h2>
                <p className="text-slate-400 text-sm">Real-time market intelligence</p>
              </div>
              <button onClick={() => setShowAnalysis(true)} className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-rose-900/20 transition-all flex items-center gap-2">
                ⚡ Run Gap Analysis
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((c, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-600 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">{c.name[1]}</div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{c.name}</h3>
                        <p className="text-xs text-slate-500">{c.lastPost}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${c.alert === 'High Momentum' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>{c.alert}</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 mb-3">
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Latest Hit</p>
                    <p className="text-sm font-bold text-white line-clamp-2">"{c.topVideo}"</p>
                    <p className="text-xs text-emerald-400 font-mono mt-1">views: {c.views}</p>
                  </div>
                  <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded transition-colors border border-slate-700">Steal This Angle</button>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return <div className="text-white">Select a tab</div>
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 pb-12">
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">

        {/* GLOBAL HEADER */}
        <header className="border-b border-slate-800/50 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="w-full lg:w-auto">
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                FringFacts <span className="text-indigo-500">Intelligence</span>
              </h1>

              {/* Status Bar - Scrollable on very small screens or wrapped */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="flex items-center gap-2 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live
                </span>
                <span className="hidden md:inline">•</span>
                <span className="bg-amber-500/5 px-2 py-1 rounded border border-amber-500/10 text-amber-500">
                  Volatility: High
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2 text-slate-300 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                  <span>⏰ IST:</span>
                  <span className="text-white font-mono">{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}</span>
                </span>
              </div>
            </div>

            {/* Tabs - Horizontal Scroll on Mobile */}
            <div className="w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 min-w-max">
                {['dashboard', 'competitors', 'signals'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-bold capitalize transition-all whitespace-nowrap ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'text-slate-400 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {renderContent()}

        {/* MODAL - SCRIPT GENERATOR (Mobile Optimized) */}
        {showScript && scriptData && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border-t md:border border-slate-700 rounded-t-2xl md:rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh]">
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50 rounded-t-2xl">
                <h3 className="font-bold text-white flex items-center gap-2 text-sm md:text-base">
                  <span>📜</span> Script: <span className="truncate max-w-[150px] md:max-w-xs">{scriptData.title}</span>
                </h3>
                <button onClick={() => setShowScript(false)} className="text-slate-400 hover:text-white bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 font-mono text-xs md:text-sm leading-relaxed text-slate-300">
                <div className="bg-slate-950 p-3 md:p-4 rounded-lg border border-indigo-500/20">
                  <span className="text-indigo-400 font-bold uppercase text-[10px] block mb-1">Hook (0-3s)</span>
                  <p className="text-white text-base md:text-lg font-bold">"{scriptData.intro}"</p>
                  <p className="text-slate-500 text-[10px] mt-2 italic">Visual: Quick zoom into subject.</p>
                </div>
                <div className="bg-slate-950 p-3 md:p-4 rounded-lg border border-slate-800">
                  <span className="text-slate-500 font-bold uppercase text-[10px] block mb-1">Value (3-45s)</span>
                  <p className="whitespace-pre-wrap">{scriptData.body}</p>
                </div>
                <div className="bg-slate-950 p-3 md:p-4 rounded-lg border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold uppercase text-[10px] block mb-1">Call to Action</span>
                  <p className="text-white font-bold">{scriptData.cta}</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-[10px] md:text-xs text-slate-500 bg-slate-900 p-2 rounded border border-slate-800">
                  <span>🔊 Recommended Audio:</span>
                  <span className="text-indigo-300 font-bold">{scriptData.audio}</span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800 bg-slate-950/30 flex justify-end pb-8 md:pb-4 safe-area-bottom">
                <button className="w-full md:w-auto px-6 py-3 md:py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors shadow-lg">Copy to Clipboard</button>
              </div>
            </div>
          </div>
        )}

        {/* ANALYSIS MODAL (Mobile Optimized) */}
        {showAnalysis && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border-t md:border border-slate-700 rounded-t-2xl md:rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh] md:max-h-[80vh]">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950/50 rounded-t-2xl">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-indigo-400">📊</span> Analysis
                  </h3>
                  <p className="text-slate-400 text-[10px] md:text-xs mt-1">Based on last 24h competitor activity</p>
                </div>
                <button onClick={() => setShowAnalysis(false)} className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg transition-colors">✕</button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-rose-400 font-bold uppercase tracking-wider text-xs border-b border-rose-500/20 pb-2 mb-2">⚠️ Critical Gaps</h4>
                  <div className="bg-rose-900/10 border border-rose-500/20 p-3 md:p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-xl md:text-2xl">📉</div>
                      <div>
                        <div className="font-bold text-rose-200 text-sm">Upload Schedule</div>
                        <p className="text-rose-200/60 text-xs mt-1">Missed <span className="text-rose-100 font-bold">2 days</span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ... (Rest of modal content follows similar responsive patterns) ... */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs border-b border-emerald-500/20 pb-2 mb-2">🏆 Winner Strategy</h4>
                  <div className="bg-emerald-900/10 border border-emerald-500/20 p-3 md:p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-xl md:text-2xl">🎵</div>
                      <div>
                        <div className="font-bold text-emerald-200 text-sm">Top Audio</div>
                        <p className="text-emerald-200/60 text-xs mt-1">"Spooky Ambiance" is trending.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-800 bg-slate-950/30 flex flex-col md:flex-row justify-between items-center gap-3 pb-8 md:pb-4 safe-area-bottom">
                <div className="text-[10px] text-slate-500">Next analysis: 14:00:00</div>
                <button onClick={() => setShowAnalysis(false)} className="w-full md:w-auto px-6 py-3 md:py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg">Close Report</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
