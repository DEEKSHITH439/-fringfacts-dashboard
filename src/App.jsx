import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showScript, setShowScript] = useState(false);
  const [scriptData, setScriptData] = useState(null);
  const [selectedHook, setSelectedHook] = useState('mystery'); // Default to mystery
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleGenerateScript = () => {
    setScriptData({
      title: "You Won't Recognize These Animals Without Fur 😱",
      hook: "You think you know what a bear looks like? Wait until you see this.",
      scenes: [
        { time: "0:00 - 0:02", visual: "Normal cute bear video", audio: "This is a bear. Cute, fluffy, dangerous." },
        { time: "0:02 - 0:05", visual: "Shocking image of hairless bear", audio: "But THIS is what it looks like without fur. It looks like a nightmare creature from a scary movie." },
        { time: "0:05 - 0:08", visual: "Hairless Owl", audio: "And this isn't an alien. It's actually an owl without feathers." },
        { time: "0:08 - 0:12", visual: "Hairless Hedgehog", audio: "Finally, this potato with a face... is a hedgehog. Nature is crazy." }
      ],
      callToAction: "Which one scared you the most? Subscribe for more weird facts."
    });
    setShowScript(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-500">
            {/* Left Column: Trend Signals */}
            <div className="md:col-span-3 space-y-6">
              <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800 backdrop-blur-sm">
                <h2 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">Signal Detection</h2>
                <div className="space-y-3">
                  <TrendItem
                    status="FAST TREND"
                    topic="Animals Without Fur"
                    type="Shock Visual"
                    intensity="High"
                    color="text-rose-400"
                    borderColor="border-rose-500/30"
                    bg="bg-rose-500/10"
                  />
                  <TrendItem
                    status="CONFIRMED"
                    topic="Genetic Rareties"
                    type="Mystery"
                    intensity="Med-High"
                    color="text-emerald-400"
                    borderColor="border-emerald-500/30"
                    bg="bg-emerald-500/10"
                  />
                  <TrendItem
                    status="RISING"
                    topic="Pregnancy X-Rays"
                    type="Biology"
                    intensity="Medium"
                    color="text-amber-400"
                    borderColor="border-amber-500/30"
                    bg="bg-amber-500/10"
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Winning Format</h3>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🎭</span>
                      <span className="font-semibold text-slate-200">The Transformation</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Show normal animal (0-1s) &rarr; "Wait until you see..." &rarr; Shock Reveal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: Viral Ideas */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-100">Viral Predictions</h2>
                <span className="text-xs text-slate-500">AI Confidence: 94%</span>
              </div>

              {/* Hero Idea */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-1 border border-slate-700 shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all cursor-pointer">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-emerald-500 text-emerald-950 text-xs font-bold rounded-full">TOP PICK</span>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-slate-800 rounded-lg text-2xl">🐻</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Animals Without Fur</h3>
                      <p className="text-slate-400 text-sm">Shock Factor 10/10 • Visual Anomaly</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-xs text-slate-500 mb-1">Why it works</div>
                      <div className="text-sm font-medium text-slate-300">Pure visual shock. Forces mental re-categorization.</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-xs text-slate-500 mb-1">Execution</div>
                      <div className="text-sm font-medium text-emerald-400">Normal (1s) &rarr; Hook &rarr; Reveal</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleGenerateScript}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Generate Script</span>
                    </button>
                    <button className="px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Ideas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <IdeaCard
                  icon="🧬"
                  title="Genetic Rareties"
                  score="8.5"
                  tags="Mystery"
                  description="Animals with Down Syndrome. High curiosity."
                />
                <IdeaCard
                  icon="👁️"
                  title="How Animals See"
                  score="7.5"
                  tags="Simulation"
                  description="Split screen: Human vs Snake vision."
                  dimmed={true}
                />
              </div>
            </div>

            {/* Right Column: Execution */}
            <div className="md:col-span-3 space-y-6">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h2 className="text-slate-200 text-sm font-bold mb-4 flex items-center gap-2">
                  <span>⚡</span> Daily Action
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Title</label>
                    <div className="mt-1 p-3 bg-slate-950 rounded border border-slate-800 text-sm text-emerald-300 font-medium select-all">
                      You Won't Recognize These Animals Without Fur 😱
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tags</label>
                    <div className="mt-1 p-3 bg-slate-950 rounded border border-slate-800 text-xs text-slate-400 font-mono leading-relaxed select-all">
                      #shorts #animals #nature #weirdfacts #unknownfacts #baldanimals
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-wider">Upload Window</label>
                    <div className="mt-1 p-3 bg-emerald-950/30 rounded border border-emerald-900/50 text-emerald-400 text-sm font-bold flex items-center justify-between">
                      <span>3:00 PM - 5:00 PM</span>
                      <span className="text-xs opacity-70">EST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-5 border border-indigo-500/20">
                <h3 className="text-indigo-300 text-xs font-bold uppercase mb-2">Growth Insight</h3>
                <p className="text-sm text-indigo-100 leading-relaxed">
                  Trends are shifting heavily toward <strong>"Show, don't tell."</strong> If the user can't *see* the fact immediately, retention drops.
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">🎵 Trending Audio</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 hover:bg-slate-800 rounded transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">1</div>
                      <span className="text-sm text-slate-300 font-medium">Spooky Ambiance</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">↗ 120%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-slate-800 rounded transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">2</div>
                      <span className="text-sm text-slate-300 font-medium">Blade Runner Synth</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">↗ 85%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-slate-800 rounded transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">3</div>
                      <span className="text-sm text-slate-300 font-medium">Suspense Rise</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">↗ 40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'signals':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-rose-500/10 rounded text-2xl">🔥</div>
                <div>
                  <h2 className="text-xl font-bold text-white">Google Trends Data</h2>
                  <p className="text-slate-400 text-xs">Real-time search volume spikes (24h)</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Query</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Growth</span>
                </div>
                <div className="divide-y divide-slate-800">
                  <div className="p-4 flex justify-between items-center hover:bg-slate-800/30 transition-colors">
                    <div className="font-medium text-slate-200">Animal attacks caught on video</div>
                    <div className="px-2 py-1 bg-rose-500/20 text-rose-400 text-xs font-bold rounded">BREAKOUT</div>
                  </div>
                  <div className="p-4 flex justify-between items-center hover:bg-slate-800/30 transition-colors">
                    <div className="font-medium text-slate-200">Blobfish</div>
                    <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">+60%</div>
                  </div>
                  <div className="p-4 flex justify-between items-center hover:bg-slate-800/30 transition-colors">
                    <div className="font-medium text-slate-200">Weird facts about animals</div>
                    <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">+50%</div>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/50 text-center">
                  <button className="text-xs text-emerald-400 font-bold hover:text-emerald-300">View Full Report &rarr;</button>
                </div>
              </div>

              <div className="bg-indigo-900/10 rounded-xl p-5 border border-indigo-500/30">
                <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Analysis</h3>
                <p className="text-sm text-indigo-100/80 leading-relaxed">
                  High demand for <strong>Startle/Shock</strong> content. The "Blobfish" spike suggests a return to "Ugly Animal" lists. Consider a "Top 3 Ugliest Animals" Short.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* New: Topic Alchemist / Daily Ideas */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-6xl">💡</div>
                <h2 className="text-xl font-bold text-white mb-1">🧪 Topic Alchemist</h2>
                <p className="text-xs text-slate-400 mb-4 flex items-center gap-1">
                  <span>Daily Viral Angles</span>
                  <span className="text-emerald-500 bg-emerald-500/10 px-1 rounded border border-emerald-500/20">Policy Checked ✅</span>
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">The "Mind-Bender" Angle</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">SAFE</span>
                    </div>
                    <div className="font-bold text-slate-200 text-sm mt-1">"This jellyfish is technically immortal..."</div>
                    <p className="text-xs text-slate-500 mt-1">Focus on biology/science. Avoid "death" triggers.</p>
                  </div>

                  <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">The "Shock" Angle</span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">CAUTION</span>
                    </div>
                    <div className="font-bold text-slate-200 text-sm mt-1">"The deeply disturbing way Anglerfish mate..."</div>
                    <p className="text-xs text-slate-500 mt-1">⚠️ Risk: "Shocking Content". Keep visual non-gory. Use diagrams, not real footage.</p>
                  </div>

                  <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">The "Sad" Angle</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">SAFE</span>
                    </div>
                    <div className="font-bold text-slate-200 text-sm mt-1">"Why the Kiwi bird has no wings (Sad Story)"</div>
                    <p className="text-xs text-slate-500 mt-1">Focus on empathy. High retention potential.</p>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors dashed border border-slate-700">
                  + Generate More Safe Ideas
                </button>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-500/10 rounded text-2xl">🤖</div>
                <div>
                  <h2 className="text-xl font-bold text-white">Reddit Viral Pulse</h2>
                  <p className="text-slate-400 text-xs">Top performing posts in niche subreddits</p>
                </div>
              </div>

              <div className="space-y-4">
                <RedditCard
                  subreddit="r/Damnthatsinteresting"
                  title="Polar bear chases resident of Svalbard!!"
                  score="45.2k"
                  type="Visual Shock"
                  tagColor="text-rose-400 bg-rose-500/10 border-rose-500/20"
                />
                <RedditCard
                  subreddit="r/oddlyterrifying"
                  title="Army of caterpillars form a singular slimy mass"
                  score="28.1k"
                  type="Gross/Weird"
                  tagColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
                />
                <RedditCard
                  subreddit="r/NatureIsFuckingLit"
                  title="A tarsier as small as a golf ball"
                  score="19.4k"
                  type="Cute/Tiny"
                  tagColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                />
              </div>
            </div>
          </div>
        )
      case 'competitors':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-slate-400 font-bold uppercase tracking-wider text-sm">Monitoring 15 Channels</h3>
              <button
                onClick={() => setShowAnalysis(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-indigo-900/20 transition-all flex items-center gap-2 animate-pulse"
              >
                <span>🧠 Run Daily Analysis</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { name: "@CasualGeographic", status: "Trending", lastPost: "4h ago", topVideo: "Animals that will impress your teacher", views: "2.1M" },
                { name: "@Animalogic", status: "Active", lastPost: "12h ago", topVideo: "Craziest Animal Facts", views: "850K" },
                { name: "@NatGeoKids", status: "Steady", lastPost: "1d ago", topVideo: "Weird But True! Shorts", views: "420K" },
                { name: "@AnimalWondersMontana", status: "Normal", lastPost: "2d ago", topVideo: "Neat Animal Facts", views: "150K" },
                { name: "@Funny_Facts333-S", status: "Recent", lastPost: "1d ago", topVideo: "Animals without fur", views: "116K" },
                { name: "@Factsquest18", status: "Recent", lastPost: "1d ago", topVideo: "Two-headed animals", views: "56K" },
                { name: "@Factspedia07", status: "Active", lastPost: "20h ago", topVideo: "How animals see", views: "38K" },
                { name: "@Godiva1650", status: "Quiet", lastPost: "2d ago", topVideo: "--", views: "--" },
                { name: "@FACTSMULTIMEDIA08", status: "Normal", lastPost: "5h ago", topVideo: "Extinct animals", views: "30K" },
                { name: "@Lowlights_12", status: "Normal", lastPost: "3d ago", topVideo: "Deep sea horrors", views: "89K" },
                { name: "@Facts_freeky08", status: "Active", lastPost: "16h ago", topVideo: "Scariest insects", views: "45K" },
                { name: "@TheWildWorld96", status: "Normal", lastPost: "8h ago", topVideo: "Lion vs Tiger", views: "22K" },
                { name: "@strangecreatures-db", status: "Active", lastPost: "30m ago", topVideo: "Alien-like fish", views: "12K" },
                { name: "@untoldfacts031", status: "Quiet", lastPost: "5d ago", topVideo: "--", views: "--" },
                { name: "@Factszone-c22", status: "Normal", lastPost: "1d ago", topVideo: "Cute baby animals", views: "15K" }
              ].map((channel, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-600 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-500">
                        {channel.name[1]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-200 text-sm">{channel.name}</div>
                        <div className="text-xs text-slate-500">{channel.lastPost}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${channel.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                      {channel.status}
                    </span>
                  </div>

                  <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800/50">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Latest Viral Hit</div>
                    <div className="font-medium text-slate-300 text-sm truncate">{channel.topVideo}</div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                      <span>🔥</span>
                      <span>{channel.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return <div>Select a tab</div>
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-emerald-500 selection:text-white relative">
      {showScript && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-emerald-400">✨ Generated Script</h3>
              <button onClick={() => setShowScript(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Title</div>
                <div className="font-medium text-white">{scriptData?.title}</div>
              </div>

              {/* New: Hook Selection */}
              <div className="grid grid-cols-1 gap-2">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Select a Hook</div>
                <div
                  onClick={() => setSelectedHook('mystery')}
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex items-center justify-between group ${selectedHook === 'mystery' ? 'bg-purple-900/30 border-purple-500 ring-1 ring-purple-500/50' : 'bg-purple-900/10 border-purple-500/20 hover:bg-purple-900/20'}`}
                >
                  <span className={`text-sm ${selectedHook === 'mystery' ? 'text-white font-medium' : 'text-purple-200'}`}>"You have been lied to about hairless animals..."</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">MYSTERY</span>
                </div>
                <div
                  onClick={() => setSelectedHook('urgency')}
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex items-center justify-between group ${selectedHook === 'urgency' ? 'bg-rose-900/30 border-rose-500 ring-1 ring-rose-500/50' : 'bg-rose-900/10 border-rose-500/20 hover:bg-rose-900/20'}`}
                >
                  <span className={`text-sm ${selectedHook === 'urgency' ? 'text-white font-medium' : 'text-rose-200'}`}>"Stop scrolling! This bear has NO FUR."</span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-1 rounded">URGENCY</span>
                </div>
              </div>

              <div className="space-y-4">
                {scriptData?.scenes.map((scene, idx) => (
                  <div key={idx} className="flex gap-4 p-3 hover:bg-slate-800/30 rounded-lg transition-colors group">
                    <div className="text-xs font-mono text-slate-500 mt-1 min-w-[60px]">{scene.time}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xs bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20">VISUAL</span>
                        <span className="text-sm text-slate-300">{scene.visual}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">AUDIO</span>
                        <span className="text-sm text-white font-medium">
                          {/* Dynamic Audio Text based on Hook */}
                          {idx === 0 && selectedHook === 'urgency' ? '"Wait! You need to see this weird bear right now."' :
                            idx === 0 && selectedHook === 'mystery' ? '"Everything you know about bears is about to change."' :
                              `"${scene.audio}"`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-900/10 p-4 rounded-lg border border-emerald-900/30">
                <div className="text-xs text-emerald-600 uppercase tracking-wider font-bold mb-1">Call To Action</div>
                <div className="text-sm text-emerald-200">{scriptData?.callToAction}</div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-3">
              <button onClick={() => setShowScript(false)} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Close</button>
              <button
                onClick={() => {
                  const finalScript = { ...scriptData, selectedHook, hookAudio: selectedHook === 'urgency' ? "Wait!..." : "Everything you know..." };
                  navigator.clipboard.writeText(JSON.stringify(finalScript, null, 2));
                  alert('Script with ' + selectedHook + ' hook copied!');
                }}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <span>📋 Copy Script</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-0">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FringFacts Intelligence
          </h1>
          <p className="text-slate-400 mt-1">Daily Growth Engine & Trend Radar</p>
        </div>

        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800 mb-6 md:mb-0">
          <TabButton label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <TabButton label="External Signals" active={activeTab === 'signals'} onClick={() => setActiveTab('signals')} />
          <TabButton label="Competitor Tracker" active={activeTab === 'competitors'} onClick={() => setActiveTab('competitors')} />
        </div>
      </header>

      {/* Main Content Area */}
      {showAnalysis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[80vh]">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-indigo-400">📊</span> Channel Analysis Report
                </h3>
                <p className="text-slate-400 text-xs mt-1">Generated based on last 24h of competitor activity</p>
              </div>
              <button onClick={() => setShowAnalysis(false)} className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg transition-colors">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* My Mistakes / Gaps */}
              <div className="space-y-4">
                <h4 className="text-rose-400 font-bold uppercase tracking-wider text-xs border-b border-rose-500/20 pb-2 mb-4">⚠️ Critical Gaps (Your Mistakes)</h4>

                <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📉</div>
                    <div>
                      <div className="font-bold text-rose-200 text-sm">Inconsistent Upload Schedule</div>
                      <p className="text-rose-200/60 text-xs mt-1">You haven't posted in <span className="text-rose-100 font-bold">2 days</span>. Competitors like @Funny_Facts333-S are posting daily.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎣</div>
                    <div>
                      <div className="font-bold text-rose-200 text-sm">Weak Visual Hooks</div>
                      <p className="text-rose-200/60 text-xs mt-1">Your avg. retention at 0:03 is <span className="text-rose-100 font-bold">45%</span>. Top videos are hitting <span className="text-emerald-400 font-bold">78%</span>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitor Wins */}
              <div className="space-y-4">
                <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs border-b border-emerald-500/20 pb-2 mb-4">🏆 What Winners Are Doing</h4>

                <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎵</div>
                    <div>
                      <div className="font-bold text-emerald-200 text-sm">Using "Spooky Ambiance" Audio</div>
                      <p className="text-emerald-200/60 text-xs mt-1">3 out of top 5 trending videos in the last 24h used this specific audio track.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📝</div>
                    <div>
                      <div className="font-bold text-emerald-200 text-sm">Interactive Text Overlays</div>
                      <p className="text-emerald-200/60 text-xs mt-1">Competitors are asking questions on screen ("Can you guess?") to boost comments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/30 flex justify-between items-center">
              <div className="text-xs text-slate-500">Next analysis available in 14:00:00</div>
              <button onClick={() => setShowAnalysis(false)} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors">
                Got it, I'll Fix This
              </button>
            </div>
          </div>
        </div>
      )}
      {renderContent()}
    </div>
  )
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${active
        ? 'bg-slate-800 text-white shadow-lg shadow-emerald-900/20 border border-slate-700'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
        }`}
    >
      {label}
    </button>
  )
}

function RedditCard({ subreddit, title, score, type, tagColor }) {
  return (
    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold text-slate-500 uppercase">{subreddit}</span>
        <div className="flex items-center gap-1 text-slate-400 text-xs">
          <span>⬆️</span>
          <span>{score}</span>
        </div>
      </div>
      <h4 className="font-semibold text-slate-200 text-sm mb-3 group-hover:text-emerald-400 transition-colors">{title}</h4>
      <span className={`px-2 py-1 rounded text-[10px] font-bold border ${tagColor}`}>
        {type}
      </span>
    </div>
  )
}

function TrendItem({ status, topic, type, color, borderColor, bg }) {
  return (
    <div className={`p-3 rounded-lg border ${borderColor} ${bg}`}>
      <div className="flex justify-between items-center mb-1">
        <span className={`text-[10px] font-bold ${color} uppercase`}>{status}</span>
        <span className="text-[10px] text-slate-500">{type}</span>
      </div>
      <div className="font-medium text-sm text-slate-200">{topic}</div>
    </div>
  )
}

function IdeaCard({ icon, title, score, tags, description, dimmed }) {
  return (
    <div className={`p-4 rounded-xl border border-slate-800 bg-slate-900/50 ${dimmed ? 'opacity-60 grayscale' : 'hover:border-slate-600'} transition-all`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs font-mono font-bold text-slate-500">{score}/10</span>
      </div>
      <h3 className="font-bold text-slate-200 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 mb-3">{description}</p>
      <div className="inline-block px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-500">
        {tags}
      </div>
    </div>
  )
}

export default App
