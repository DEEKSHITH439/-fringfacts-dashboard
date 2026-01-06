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
    searchTerm: "Immortal Jellyfish aesthetic",
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
    { type: "Versus", text: "Honey Badger vs Wolverine: Who actually wins?", searchTerm: "Honey Badger vs Wolverine art", safe: true, note: "Compare durability & aggression. Use clips of both.", psychology: "Conflict Resolution", mistake: "Declaring a winner too early." },
    { type: "Cryptid", text: "The 'Skinwalker' whistles you should never ignore...", searchTerm: "Skinwalker forest scary", safe: false, note: "⚠️ Use eerie forest stock footage, NOT gore.", psychology: "Primal Fear", mistake: "Using fake-looking CGI monsters." },
    { type: "Multi-Animal", text: "3 Animals that could take down a Gorilla.", searchTerm: "Silverback Gorilla angry", safe: true, note: "Feature Leopard, Grizzly, and hippo stats.", psychology: "Power Scaling", mistake: "Ignoring the Gorilla's intelligence." },
    { type: "Mystery", text: "Why do dogs bark at 'nothing' in the corner?", searchTerm: "Dog barking at ghost", safe: true, note: "Imply supernatural without stating it.", psychology: "Paranormal Ambiguity", mistake: "Over-explaining the science." },
    { type: "Deep Sea", text: "The creature that eats sharks for breakfast.", searchTerm: "Orca hunting shark", safe: true, note: "Orca vs Great White hunting clips.", psychology: "Apex Predator Awe", mistake: "Boring narration." },
  ];

  // --- COMPETITOR INTELLIGENCE (Real-Time Simulation) ---
  const [competitors, setCompetitors] = useState([
    { name: "@CasualGeographic", status: "Surging", lastPost: "4h ago", topVideo: "Animals that will impress your teacher", views: 2400000, alert: "High Momentum" },
    { name: "@Animalogic", status: "Active", lastPost: "12h ago", topVideo: "Craziest Animal Facts", views: 850000, alert: "Steady" },
    { name: "@NatGeoKids", status: "Steady", lastPost: "1d ago", topVideo: "Weird But True! Shorts", views: 420000, alert: "Educational Gap" },
    { name: "@AnimalWondersMontana", status: "Active", lastPost: "5h ago", topVideo: "Fox laughing sounds", views: 120000, alert: "Audio Spike" },
    { name: "@Funny_Facts333-S", status: "Viral", lastPost: "10m ago", topVideo: "Cat reflexes explained", views: 15600, alert: "JUST UPLOADED" },
    { name: "@Factsquest18", status: "Steady", lastPost: "2h ago", topVideo: "3 Facts about Space", views: 45000, alert: "Steady" },
    { name: "@Factspedia07", status: "Dormant", lastPost: "3d ago", topVideo: "Ocean Mysteries", views: 32000, alert: "Low Activity" },
    { name: "@Godiva1650", status: "Active", lastPost: "6h ago", topVideo: "Horse grooming asmr", views: 89000, alert: "Niche" },
    { name: "@FACTSMULTIMEDIA08", status: "Surging", lastPost: "30m ago", topVideo: "Lion vs Tiger debate", views: 5000, alert: "JUST UPLOADED" },
    { name: "@Lowlights_12", status: "Active", lastPost: "8h ago", topVideo: "Deep sea horrors", views: 670000, alert: "High Momentum" },
    { name: "@Facts_freeky08", status: "Steady", lastPost: "1d ago", topVideo: "Human body facts", views: 12000, alert: "Steady" },
    { name: "@TheWildWorld96", status: "Viral", lastPost: "1h ago", topVideo: "Snake eating egg", views: 890000, alert: "High Momentum" },
    { name: "@strangecreatures-db", status: "Active", lastPost: "5h ago", topVideo: "Rare beetles", views: 34000, alert: "Steady" },
    { name: "@untoldfacts031", status: "Dormant", lastPost: "5d ago", topVideo: "History facts", views: 11000, alert: "Dropping" },
    { name: "@Factszone-c22", status: "Active", lastPost: "3h ago", topVideo: "Dog breeds 101", views: 230000, alert: "Steady" }
  ]);

  // Simulate "Live View Count" updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCompetitors(prev => prev.map(c => ({
        ...c,
        // Randomly add 0-50 views to simulate live ticker, higher for viral ones
        views: c.views + Math.floor(Math.random() * (c.status === 'Viral' || c.status === 'Surging' ? 50 : 5))
      })));
    }, 2000); // Update every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleRefreshCompetitors = () => {
    // Placeholder for toast.success if not imported
    if (typeof toast !== 'undefined' && toast.success) {
      toast.success("Syncing with YouTube Data API...");
    } else {
      console.log("Syncing with YouTube Data API...");
    }
    setTimeout(() => {
      setCompetitors(prev => prev.map(c => ({
        ...c,
        // Simulate a bigger jump on refresh
        views: c.views + Math.floor(Math.random() * 5000),
        // Randomly updated "Last Post" for simulation
        lastPost: Math.random() > 0.8 ? "Just now" : c.lastPost
      })));
      if (typeof toast !== 'undefined' && toast.success) {
        toast.success("Intelligence Updated: 3 New Uploads Found");
      } else {
        console.log("Intelligence Updated: 3 New Uploads Found");
      }
    }, 1500);
  };

  const formatViews = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

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

  const handleAction = (type, action) => {
    const term = type === 'hero' ? heroUpload.searchTerm : currentIdea.searchTerm;
    const name = type === 'hero' ? heroUpload.topic : currentIdea.text;

    if (action === 'pinterest') {
      window.open(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(term)}`, '_blank');
    } else if (action === 'copy') {
      navigator.clipboard.writeText(name);
      if (typeof toast !== 'undefined' && toast.success) {
        toast.success(`Copied: "${name}"`);
      } else {
        alert(`Copied: "${name}"`);
      }
    }
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
                    onClick={() => handleAction('hero', 'copy')}
                    className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>�</span> Copy Name
                  </button>
                  <button
                    onClick={() => handleAction('hero', 'pinterest')}
                    className="w-full py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-500 transition-all border border-rose-500 shadow-lg shadow-rose-900/40 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>📌</span> 1-Click Pinterest
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
                    <button onClick={() => handleAction('alchemist', 'copy')} className="py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded flex items-center justify-center gap-1 active:scale-95 transition-transform">� Copy Name</button>
                    <button onClick={() => handleAction('alchemist', 'pinterest')} className="py-2 bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold rounded flex items-center justify-center gap-1 active:scale-95 transition-transform">� Pinterest</button>
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
        const justUploaded = competitors.filter(c => c.lastPost.includes('m ago') || c.lastPost.includes('Just now') || (c.lastPost.includes('h ago') && parseInt(c.lastPost) < 1));

        return (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  War Room <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full border border-slate-700">Tracking {competitors.length} Channels</span>
                </h2>
                <p className="text-slate-400 text-sm">Real-time market intelligence. <span className="text-emerald-500 animate-pulse">● Live Data Connection Active</span></p>
              </div>
              <div className="flex gap-2">
                <button onClick={handleRefreshCompetitors} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold border border-slate-700 transition-all flex items-center gap-2 shadow-lg active:scale-95">
                  <span>↻</span> Refresh All (Live)
                </button>
                <button onClick={() => setShowAnalysis(true)} className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-rose-900/20 transition-all flex items-center gap-2">
                  ⚡ Run Gap Analysis
                </button>
              </div>
            </div>

            {/* IMPORTANT: NEW UPLOAD FEED */}
            {justUploaded.length > 0 && (
              <div className="mb-8 p-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-xl">
                <div className="bg-slate-950 p-4 rounded-lg">
                  <h3 className="text-white font-bold flex items-center gap-2 mb-3">
                    <span className="text-2xl animate-bounce">🚨</span>
                    <span>COMPETITOR ALERT: Just Uploaded!</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {justUploaded.map((c, i) => (
                      <div key={i} className="flex gap-3 bg-slate-900 p-3 rounded border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-rose-500 rounded flex items-center justify-center text-white font-bold">{c.name[1]}</div>
                        <div>
                          <p className="text-white font-bold text-sm">New Video from {c.name}</p>
                          <p className="text-indigo-400 text-xs italic">"{c.topVideo}"</p>
                          <p className="text-slate-500 text-[10px] uppercase font-bold mt-1">Uploaded: {c.lastPost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((c, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-600 transition-all group relative overflow-hidden">
                  {/* Live Indicator */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className={`w-2 h-2 rounded-full ${c.alert.includes('Upload') ? 'bg-rose-500 animate-ping' : 'bg-emerald-500/50'}`}></span>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">{c.name[1]}</div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{c.name}</h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <span>Last post: {c.lastPost}</span>
                          {c.lastPost.includes('ago') && !c.lastPost.includes('d') ? <span className="text-emerald-500 text-[10px] font-bold">● Active</span> : null}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 mb-3 group-hover:border-indigo-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Latest Hit</p>
                        <p className="text-sm font-bold text-white line-clamp-2 leading-tight">"{c.topVideo}"</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-end border-t border-slate-800 pt-2">
                      <p className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                        <span>👁 {formatViews(c.views)}</span>
                        <span className="text-[10px] text-emerald-600 animate-pulse">▲</span>
                      </p>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${c.alert === 'JUST UPLOADED' ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-800 text-slate-500'}`}>{c.alert}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded transition-colors border border-slate-700 group-hover:border-slate-500 group-hover:text-white">Run Analysis on Channel</button>
                </div>
              ))}
            </div>
          </div>
        )
      case 'signals':
        return (
          <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="animate-pulse text-emerald-500">●</span> Global Signal Matrix
                </h2>
                <p className="text-slate-400 text-sm">Real-time cross-platform trend detection</p>
              </div>
              <button
                onClick={() => toast.success("Signals Updated: +12 New Trends Detected")}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold border border-slate-700 transition-all active:scale-95"
              >
                <span>↻</span> Force 24h Refresh
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* GOOGLE TRENDS */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">🔎</div>
                  <div>
                    <h3 className="font-bold text-white">Google Search Spikes</h3>
                    <p className="text-xs text-slate-500">High volume queries (Last 4h)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { term: "Goblin Shark", vol: "+2,000%", tag: "Deep Sea" },
                    { term: "Giant Squid found", vol: "+550%", tag: "News" },
                    { term: "Are Capybaras dangerous", vol: "+180%", tag: "Question" },
                    { term: "Komodo Dragon speed", vol: "+120%", tag: "Stats" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-slate-800/50 p-2 rounded transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 font-mono text-xs">#{i + 1}</span>
                        <span className="text-slate-200 font-bold text-sm group-hover:text-indigo-400 transition-colors">{item.term}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-emerald-400 font-bold text-xs">{item.vol}</span>
                        <span className="text-[10px] text-slate-500 uppercase">{item.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 text-xs font-bold uppercase tracking-wider rounded border border-indigo-500/20 transition-all">
                  View Full Report
                </button>
              </div>

              {/* REDDIT PULSE */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">🔥</div>
                  <div>
                    <h3 className="font-bold text-white">Reddit Viral Pulse</h3>
                    <p className="text-xs text-slate-500">r/NatureIsMetal, r/Damnthatsinteresting</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Eagle drags mountain goat off cliff", sub: "r/NatureIsMetal", upvotes: "12.5k", hot: true },
                    { title: "The sound of a Shoebill Stork (Machine Gun)", sub: "r/OddlyTerrifying", upvotes: "45k", hot: true },
                    { title: "Octopus punches fish for no reason", sub: "r/AnimalsBeingJerks", upvotes: "8.2k", hot: false }
                  ].map((post, i) => (
                    <div key={i} className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-orange-500/30 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] text-slate-500 font-bold">{post.sub}</span>
                        {post.hot && <span className="bg-orange-500 text-white text-[10px] font-bold px-1 rounded animate-pulse">HOT</span>}
                      </div>
                      <p className="text-slate-200 text-sm font-medium leading-snug mb-2">"{post.title}"</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>⬆ {post.upvotes}</span>
                        <span>•</span>
                        <span className="text-indigo-400 hover:underline">Adapt for Shorts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AUDIO TRENDS */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950/30 border border-slate-800 rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎵</div>
                  <div>
                    <h3 className="font-bold text-white">Audio Search Trends</h3>
                    <p className="text-xs text-slate-500">Sounds with highest retention today</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Spooky Ambiance (Slowed)', 'Underwater Deep Rumble', 'Interstellar Theme (Remix)', 'Suspense Ticking'].map((sound, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-950 border border-slate-700 px-3 py-2 rounded-full hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all cursor-pointer group">
                    <span className="text-indigo-400 group-hover:text-white">▶</span>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">{sound}</span>
                  </div>
                ))}
              </div>
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
                  <span className="text-white font-mono flex items-center gap-2">
                    <span>{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                    <span className="text-slate-600 text-[10px]">|</span>
                    <span className="text-slate-400 text-xs">{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
                  </span>
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
