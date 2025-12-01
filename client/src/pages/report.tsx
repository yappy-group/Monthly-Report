import React from "react";
import { ArrowUp, ArrowDown, Box, Users, Clock, Eye, Target, Layers, CheckCircle2, PlayCircle, Briefcase, LucideIcon, Zap, BarChart3, Info } from "lucide-react";

// --- Components ---

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Monthly Progress Report" }: HeaderProps) => (
  <header className="flex items-center justify-between mb-8 pb-6 border-b border-yappy-grey-light">
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 bg-yappy-orange rounded-sm flex items-center justify-center text-white font-bold text-2xl shadow-sm">
        Y
      </div>
      <div>
        <h1 className="text-3xl font-extrabold text-yappy-grey-dark tracking-tight leading-none">{title}</h1>
        <p className="text-sm text-yappy-grey-med font-semibold mt-1.5 tracking-wide">NOVEMBER 2025</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="text-[10px] font-bold text-yappy-grey-med uppercase tracking-widest mb-0.5">Client</p>
        <p className="text-base font-black text-yappy-grey-dark tracking-tight">Acme Industries</p>
      </div>
      <div className="w-12 h-12 bg-white rounded-lg border border-yappy-grey-light flex items-center justify-center shadow-sm">
        <Box className="w-6 h-6 text-yappy-grey-med" />
      </div>
    </div>
  </header>
);

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  trendIsPositive?: boolean;
  icon?: LucideIcon;
}

const MetricCard = ({ label, value, trend, trendIsPositive, icon: Icon }: MetricCardProps) => (
  <div className="flex flex-col p-6 bg-white rounded-lg border border-yappy-grey-light shadow-[0_2px_4px_rgba(0,0,0,0.02)] h-full relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yappy-grey-light to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
    <div className="flex justify-between items-start mb-4">
      <span className="text-[11px] font-bold text-yappy-grey-med uppercase tracking-widest">{label}</span>
      {Icon && <Icon className="w-4 h-4 text-yappy-grey-med/70" />}
    </div>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-4xl font-bold text-yappy-grey-dark tracking-tight">{value}</span>
      {trend && (
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-bold ${
          trendIsPositive 
            ? 'bg-yappy-green/10 text-yappy-green' 
            : 'bg-yappy-red/10 text-yappy-red'
        }`}>
          {trendIsPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {trend}
        </div>
      )}
    </div>
  </div>
);

interface InsightPanelProps {
  title: string;
  children: React.ReactNode;
  footer?: string;
  icon?: LucideIcon;
}

const InsightPanel = ({ title, children, footer, icon: Icon }: InsightPanelProps) => (
  <div className="bg-yappy-grey-light/30 rounded-lg border border-yappy-grey-light p-8 mt-10">
    <h3 className="text-lg font-bold text-yappy-grey-dark mb-5 flex items-center gap-2.5">
      {Icon ? <Icon className="w-5 h-5 text-yappy-orange" /> : <div className="w-1.5 h-5 bg-yappy-orange rounded-full" />}
      {title}
    </h3>
    <div className="space-y-4">
      {children}
    </div>
    {footer && (
      <div className="mt-8 pt-6 border-t border-yappy-grey-light/60 text-sm font-medium text-yappy-grey-med flex items-center gap-2">
        <Info className="w-4 h-4 text-yappy-orange" />
        {footer}
      </div>
    )}
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 group">
    <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
    <p className="text-yappy-grey-dark leading-relaxed text-[15px]">{children}</p>
  </div>
);

const Tag = ({ children, color = "gray" }: { children: React.ReactNode, color?: "gray" | "red" | "orange" | "green" }) => {
  const colorClasses = {
    gray: "bg-yappy-grey-light text-yappy-grey-dark border-transparent",
    red: "bg-red-50 text-red-700 border-red-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    green: "bg-green-50 text-green-700 border-green-100"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

interface TacticalCardProps {
  name: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
  highlights: string[];
}

const TacticalCard = ({ name, description, stats, tags, highlights }: TacticalCardProps) => (
  <div className="bg-white border border-yappy-grey-light rounded-lg p-7 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-xl font-bold text-yappy-grey-dark tracking-tight">{name}</h3>
        <p className="text-sm text-yappy-grey-med font-medium mt-1">{description}</p>
      </div>
      <div className="flex gap-2">
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
    
    <div className="flex items-center gap-8 mb-8 py-5 border-t border-b border-yappy-grey-light relative">
      {stats.map((s, i) => (
        <div key={i} className="flex-1 border-r border-dashed border-yappy-grey-light last:border-0 pr-4 last:pr-0">
          <p className="text-[10px] font-bold text-yappy-grey-med uppercase mb-1 tracking-wider">{s.label}</p>
          <p className="text-xl font-bold text-yappy-grey-dark">{s.value}</p>
        </div>
      ))}
      {/* Sparkline Placeholder */}
      <div className="w-16 h-8 ml-4 opacity-50 hidden sm:block" title="Activity Trend">
        <div className="w-full h-full bg-gradient-to-t from-yappy-orange/20 to-transparent rounded-sm border-b-2 border-yappy-orange relative overflow-hidden">
           <svg viewBox="0 0 64 32" className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
             <path d="M0 32 L10 20 L20 28 L30 10 L40 22 L50 5 L64 15 V32 H0 Z" fill="currentColor" className="text-yappy-orange/10" />
             <path d="M0 32 L10 20 L20 28 L30 10 L40 22 L50 5 L64 15" fill="none" stroke="currentColor" strokeWidth="2" className="text-yappy-orange" />
           </svg>
        </div>
      </div>
    </div>

    <div className="space-y-3 bg-yappy-grey-light/20 p-4 rounded-md -mx-2">
      {highlights.map((h, i) => (
        <div key={i} className="flex items-start gap-2.5 text-[13px] text-yappy-grey-dark font-medium">
          <span className="text-yappy-orange mt-1.5 text-[10px]">●</span>
          <span className="leading-relaxed">{h}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Pages ---

const Page1_ExecutiveSummary = () => (
  <section className="report-page print:break-after-page">
    <Header />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-yappy-grey-dark mb-8 flex items-center gap-2.5">
        <div className="p-1.5 bg-yappy-orange/10 rounded text-yappy-orange">
          <Target className="w-5 h-5" />
        </div>
        Global Overview
      </h2>
      
      <div className="grid grid-cols-4 gap-5 mb-10">
        <MetricCard 
          label="Active Targets" 
          value="28" 
          trend="2" 
          trendIsPositive={true} 
          icon={Briefcase}
        />
        <MetricCard 
          label="Roles Reached" 
          value="840" 
          trend="15%" 
          trendIsPositive={true} 
          icon={Users}
        />
        <MetricCard 
          label="Key Roles Engaged" 
          value="124" 
          trend="8%" 
          trendIsPositive={true} 
          icon={Target}
        />
        <MetricCard 
          label="Content Watch Time" 
          value="342h" 
          trend="24%" 
          trendIsPositive={true} 
          icon={Clock}
        />
      </div>

      <InsightPanel 
        title="Key Insights This Month"
        icon={Zap}
        footer="This month: 2.4M impressions, 38k complete views, 38% avg completion rate across all campaigns."
      >
        <Bullet>Significant increase in role engagement across priority accounts, driven by Tactical campaigns.</Bullet>
        <Bullet>Watch time up 24%, led by C-Suite personas in heavy industry targets.</Bullet>
        <Bullet>Three new targets surpassed the 20% exposure threshold.</Bullet>
      </InsightPanel>
    </div>
  </section>
);

const Page2_TacticalHighlights = () => (
  <section className="report-page print:break-after-page">
    <Header />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-yappy-grey-dark mb-8 flex items-center gap-2.5">
        <div className="p-1.5 bg-yappy-orange/10 rounded text-yappy-orange">
          <Layers className="w-5 h-5" />
        </div>
        Tactical Campaign Highlights
      </h2>

      {/* Aggregate Metrics */}
      <div className="grid grid-cols-5 gap-5 mb-12">
        <div className="p-5 bg-white rounded-lg border border-yappy-grey-light shadow-sm">
           <p className="text-[10px] text-yappy-grey-med uppercase font-bold mb-2 tracking-wider">Roles Engaged</p>
           <p className="text-3xl font-bold text-yappy-grey-dark">342</p>
        </div>
        <div className="p-5 bg-white rounded-lg border border-yappy-grey-light shadow-sm">
           <p className="text-[10px] text-yappy-grey-med uppercase font-bold mb-2 tracking-wider">Avg Depth</p>
           <p className="text-3xl font-bold text-yappy-grey-dark">3.2</p>
        </div>
        <div className="p-5 bg-white rounded-lg border border-yappy-grey-light shadow-sm">
           <p className="text-[10px] text-yappy-grey-med uppercase font-bold mb-2 tracking-wider">Watch Time</p>
           <p className="text-3xl font-bold text-yappy-grey-dark">128h</p>
        </div>
        <div className="p-5 bg-white rounded-lg border border-yappy-grey-light shadow-sm">
           <p className="text-[10px] text-yappy-grey-med uppercase font-bold mb-2 tracking-wider">New Roles</p>
           <p className="text-3xl font-bold text-yappy-grey-dark text-yappy-green">+45</p>
        </div>
        <div className="p-5 bg-white rounded-lg border border-yappy-grey-light shadow-sm">
           <p className="text-[10px] text-yappy-grey-med uppercase font-bold mb-2 tracking-wider">Completions</p>
           <p className="text-3xl font-bold text-yappy-grey-dark">1.2k</p>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6 mb-10">
        <TacticalCard 
          name="Southern Rail Logistics"
          description="Solar deployment for heavy industry site portfolio"
          tags={["Ops", "Finance", "Risk"]}
          stats={[
            { label: "Reached", value: "145" },
            { label: "Engaged", value: "42" },
            { label: "Watch Time", value: "24h" },
            { label: "Impressions", value: "2.4k" },
            { label: "Comp. Views", value: "850" },
          ]}
          highlights={[
            "Emerging interest from Finance leadership; repeat engagement from Operations.",
            "Message 'Predictive Maintenance ROI' driving majority of completions."
          ]}
        />
        
        <TacticalCard 
          name="Apex Manufacturing Group"
          description="Enterprise-wide automation upgrade"
          tags={["CTO Office", "Plant Mgr"]}
          stats={[
            { label: "Reached", value: "88" },
            { label: "Engaged", value: "31" },
            { label: "Watch Time", value: "18h" },
            { label: "Impressions", value: "1.8k" },
            { label: "Comp. Views", value: "620" },
          ]}
          highlights={[
            "Strong traction with regional Plant Managers.",
            "Technical deep-dive content performing 2x above benchmark."
          ]}
        />

         <TacticalCard 
          name="Pacific Energy Systems"
          description="Grid modernization initiative"
          tags={["Infrastructure", "Procurement"]}
          stats={[
            { label: "Reached", value: "210" },
            { label: "Engaged", value: "56" },
            { label: "Watch Time", value: "31h" },
            { label: "Impressions", value: "3.1k" },
            { label: "Comp. Views", value: "940" },
          ]}
          highlights={[
            "Procurement team showing early intent signals.",
            "Video case studies driving high engagement."
          ]}
        />
      </div>

      {/* Insights */}
      <div className="bg-yappy-grey-light/30 p-8 rounded-lg border border-yappy-grey-light">
        <h4 className="font-bold text-yappy-grey-dark text-sm uppercase mb-5 flex items-center gap-2">
          <div className="w-2 h-2 bg-yappy-orange rounded-full"></div>
          Tactical Insights
        </h4>
        <div className="grid grid-cols-2 gap-8">
            <Bullet>Southern Rail showed increasing engagement from Risk & Compliance, indicating momentum in the buying group.</Bullet>
            <Bullet>Content piece 'Automation ROI' resonated strongly among Technology roles at Apex, suggesting readiness for deeper solution messaging.</Bullet>
        </div>
      </div>

    </div>
  </section>
);

const Page3_AlwaysOnHighlights = () => (
  <section className="report-page print:break-after-page">
    <Header title="Always On Program Highlights" />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-yappy-grey-dark mb-8 flex items-center gap-2.5">
        <div className="p-1.5 bg-yappy-orange/10 rounded text-yappy-orange">
          <PlayCircle className="w-5 h-5" />
        </div>
        Program Performance
      </h2>

       <div className="grid grid-cols-4 gap-5 mb-12">
        <MetricCard 
          label="Target Reach" 
          value="68%" 
          trend="4%" 
          trendIsPositive={true} 
          icon={Target}
        />
        <MetricCard 
          label="AO Watch Time" 
          value="156h" 
          trend="12%" 
          trendIsPositive={true} 
          icon={Clock}
        />
        <MetricCard 
          label="Roles Reached" 
          value="2,450" 
          trend="8%" 
          trendIsPositive={true} 
          icon={Users}
        />
        <MetricCard 
          label="Engagement" 
          value="14.2k" 
          trend="2.1%" 
          trendIsPositive={false} 
          icon={Eye}
        />
      </div>

      <div className="grid grid-cols-1 gap-10">
        
        {/* Top Targets Table */}
        <div>
          <h3 className="text-lg font-bold text-yappy-grey-dark mb-5 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-yappy-grey-med" />
            Top Always On Targets
          </h3>
          <div className="border border-yappy-grey-light rounded-lg overflow-hidden shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-yappy-grey-med font-semibold border-b border-yappy-grey-light uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-6 py-4">Target Name</th>
                  <th className="px-6 py-4">Awareness Stage</th>
                  <th className="px-6 py-4">Impressions</th>
                  <th className="px-6 py-4">Complete Views</th>
                  <th className="px-6 py-4">Watch Time</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yappy-grey-light">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-yappy-grey-dark">Global Logistics Co.</td>
                  <td className="px-6 py-4"><Tag color="red">High</Tag></td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">12,400</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">4,200</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">42h</td>
                  <td className="px-6 py-4 text-yappy-green font-bold text-xs flex items-center gap-1">
                    <ArrowUp className="w-3 h-3" /> Reached 20% exposure
                  </td>
                </tr>
                 <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-yappy-grey-dark">Metro Transit Authority</td>
                  <td className="px-6 py-4"><Tag color="orange">Medium</Tag></td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">8,100</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">2,100</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">28h</td>
                  <td className="px-6 py-4 text-yappy-orange font-bold text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3" /> New this month
                  </td>
                </tr>
                 <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-yappy-grey-dark">West Coast Ports</td>
                  <td className="px-6 py-4"><Tag color="gray">Low</Tag></td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">3,400</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">850</td>
                  <td className="px-6 py-4 text-yappy-grey-dark font-mono">12h</td>
                  <td className="px-6 py-4 text-yappy-grey-med text-xs">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Performance */}
        <div>
           <h3 className="text-lg font-bold text-yappy-grey-dark mb-5 flex items-center gap-2">
             <Layers className="w-5 h-5 text-yappy-grey-med" />
             Top Performing Content
           </h3>
           <div className="space-y-4">
              {[
                { title: "The Future of Logistics Automation", type: "AO Only", imp: "45k", views: "12k", orgs: "142", note: "Drove 60% of AO completions" },
                { title: "Safety First: Site Protocols", type: "Shared", imp: "22k", views: "8k", orgs: "98", note: "High retention rate (85%)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white border border-yappy-grey-light rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-1 flex items-start gap-4">
                    {/* Thumbnail Placeholder */}
                    <div className="w-10 h-10 bg-yappy-grey-light rounded flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-yappy-grey-dark text-base">{item.title}</span>
                        <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 bg-yappy-grey-light text-yappy-grey-dark font-semibold rounded">{item.type}</span>
                      </div>
                      <p className="text-xs text-yappy-orange font-medium flex items-center gap-1">
                        <Info className="w-3 h-3" /> {item.note}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 text-sm">
                    <div className="w-16 text-center">
                      <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-1">Imp</p>
                      <p className="font-bold text-yappy-grey-dark text-lg">{item.imp}</p>
                    </div>
                    <div className="w-16 text-center">
                      <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-1">Views</p>
                      <p className="font-bold text-yappy-grey-dark text-lg">{item.views}</p>
                    </div>
                     <div className="w-16 text-center">
                      <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-1">Orgs</p>
                      <p className="font-bold text-yappy-grey-dark text-lg">{item.orgs}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Narrative */}
        <div className="bg-yappy-grey-dark text-white p-8 rounded-lg mt-4 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-yappy-orange/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <h4 className="font-bold text-lg mb-6 flex items-center gap-3 text-white relative z-10">
            <div className="w-6 h-6 rounded-full border-2 border-yappy-orange flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-yappy-orange" />
            </div>
            Program Narrative
          </h4>
          <div className="space-y-4 relative z-10">
             <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(247,124,34,0.6)]" />
                <p className="text-gray-300 text-[15px] leading-relaxed">AO program continues to build early awareness across priority heavy industry markets.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(247,124,34,0.6)]" />
                <p className="text-gray-300 text-[15px] leading-relaxed">Consistent uplift among target clusters in logistics sector, with increasing watch time from Operations roles.</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Report = () => {
  return (
    <div className="report-container bg-gray-100 min-h-screen pb-12">
      <Page1_ExecutiveSummary />
      <Page2_TacticalHighlights />
      <Page3_AlwaysOnHighlights />
    </div>
  );
};

export default Report;
