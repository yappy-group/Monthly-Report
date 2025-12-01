import React from "react";
import { ArrowUp, ArrowDown, Box, Users, Clock, Eye, Target, Layers, CheckCircle2, PlayCircle, Briefcase, LucideIcon } from "lucide-react";

// --- Components ---

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Monthly Progress Report" }: HeaderProps) => (
  <header className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-yappy-orange rounded-sm flex items-center justify-center text-white font-bold text-xl">
        Y
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{title}</h1>
        <p className="text-sm text-gray-500 font-medium mt-1">November 2025</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</p>
        <p className="text-sm font-bold text-gray-800">Acme Industries</p>
      </div>
      <div className="w-10 h-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
        <Box className="w-5 h-5 text-gray-400" />
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
  <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-100">
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
      {Icon && <Icon className="w-4 h-4 text-gray-400" />}
    </div>
    <div className="flex items-baseline gap-3 mt-auto">
      <span className="text-3xl font-bold text-gray-900">{value}</span>
      {trend && (
        <div className={`flex items-center text-xs font-bold px-1.5 py-0.5 rounded-full ${trendIsPositive ? 'text-positive bg-green-50' : 'text-negative bg-red-50'}`}>
          {trendIsPositive ? <ArrowUp className="w-3 h-3 mr-0.5" /> : <ArrowDown className="w-3 h-3 mr-0.5" />}
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
}

const InsightPanel = ({ title, children, footer }: InsightPanelProps) => (
  <div className="bg-gray-50 rounded-lg border border-gray-100 p-8 mt-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {children}
    </div>
    {footer && (
      <div className="mt-6 pt-6 border-t border-gray-200 text-sm font-medium text-gray-600">
        {footer}
      </div>
    )}
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2 shrink-0" />
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-xs font-medium text-gray-600 border border-gray-200">
    {children}
  </span>
);

interface TacticalCardProps {
  name: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
  highlights: string[];
}

const TacticalCard = ({ name, description, stats, tags, highlights }: TacticalCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex gap-2">
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
    
    <div className="grid grid-cols-5 gap-4 mb-6 py-4 border-t border-b border-gray-100">
      {stats.map((s, i) => (
        <div key={i}>
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{s.label}</p>
          <p className="text-lg font-bold text-gray-900">{s.value}</p>
        </div>
      ))}
    </div>

    <div className="space-y-2">
      {highlights.map((h, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
          <span className="text-yappy-orange mt-1">•</span>
          <span>{h}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Pages ---

const Page1_ExecutiveSummary = () => (
  <section className="report-page">
    <Header />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-yappy-orange" />
        Global Overview
      </h2>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
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
  <section className="report-page">
    <Header />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Layers className="w-5 h-5 text-yappy-orange" />
        Tactical Campaign Highlights
      </h2>

      {/* Aggregate Metrics */}
      <div className="grid grid-cols-5 gap-4 mb-10">
        <div className="p-4 bg-gray-50 rounded border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">Roles Engaged</p>
           <p className="text-2xl font-bold text-gray-900">342</p>
        </div>
        <div className="p-4 bg-gray-50 rounded border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">Avg Depth</p>
           <p className="text-2xl font-bold text-gray-900">3.2</p>
        </div>
        <div className="p-4 bg-gray-50 rounded border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">Watch Time</p>
           <p className="text-2xl font-bold text-gray-900">128h</p>
        </div>
        <div className="p-4 bg-gray-50 rounded border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">New Roles</p>
           <p className="text-2xl font-bold text-gray-900">+45</p>
        </div>
        <div className="p-4 bg-gray-50 rounded border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">Completions</p>
           <p className="text-2xl font-bold text-gray-900">1.2k</p>
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
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <h4 className="font-bold text-gray-900 text-sm uppercase mb-3">Tactical Insights</h4>
        <div className="grid grid-cols-2 gap-6">
            <Bullet>Southern Rail showed increasing engagement from Risk & Compliance, indicating momentum in the buying group.</Bullet>
            <Bullet>Content piece 'Automation ROI' resonated strongly among Technology roles at Apex, suggesting readiness for deeper solution messaging.</Bullet>
        </div>
      </div>

    </div>
  </section>
);

const Page3_AlwaysOnHighlights = () => (
  <section className="report-page">
    <Header />
    
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <PlayCircle className="w-5 h-5 text-yappy-orange" />
        Always On Program Highlights
      </h2>

       <div className="grid grid-cols-4 gap-4 mb-8">
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

      <div className="grid grid-cols-1 gap-8">
        
        {/* Top Targets Table */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Always On Targets</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3">Target Name</th>
                  <th className="px-4 py-3">Awareness Stage</th>
                  <th className="px-4 py-3">Impressions</th>
                  <th className="px-4 py-3">Complete Views</th>
                  <th className="px-4 py-3">Watch Time</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Global Logistics Co.</td>
                  <td className="px-4 py-3"><Tag>High</Tag></td>
                  <td className="px-4 py-3 text-gray-600">12,400</td>
                  <td className="px-4 py-3 text-gray-600">4,200</td>
                  <td className="px-4 py-3 text-gray-600">42h</td>
                  <td className="px-4 py-3 text-positive font-medium text-xs">Reached 20% exposure</td>
                </tr>
                 <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Metro Transit Authority</td>
                  <td className="px-4 py-3"><Tag>Medium</Tag></td>
                  <td className="px-4 py-3 text-gray-600">8,100</td>
                  <td className="px-4 py-3 text-gray-600">2,100</td>
                  <td className="px-4 py-3 text-gray-600">28h</td>
                  <td className="px-4 py-3 text-yappy-orange font-medium text-xs">New this month</td>
                </tr>
                 <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">West Coast Ports</td>
                  <td className="px-4 py-3"><Tag>Low</Tag></td>
                  <td className="px-4 py-3 text-gray-600">3,400</td>
                  <td className="px-4 py-3 text-gray-600">850</td>
                  <td className="px-4 py-3 text-gray-600">12h</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Performance */}
        <div>
           <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Content</h3>
           <div className="space-y-3">
              {[
                { title: "The Future of Logistics Automation", type: "AO Only", imp: "45k", views: "12k", orgs: "142", note: "Drove 60% of AO completions" },
                { title: "Safety First: Site Protocols", type: "Shared", imp: "22k", views: "8k", orgs: "98", note: "High retention rate (85%)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{item.title}</span>
                      <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">{item.type}</span>
                    </div>
                    <p className="text-xs text-yappy-orange font-medium">{item.note}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 font-bold uppercase">Imp</p>
                      <p className="font-bold text-gray-700">{item.imp}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 font-bold uppercase">Views</p>
                      <p className="font-bold text-gray-700">{item.views}</p>
                    </div>
                     <div className="text-center">
                      <p className="text-xs text-gray-400 font-bold uppercase">Orgs</p>
                      <p className="font-bold text-gray-700">{item.orgs}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Narrative */}
        <div className="bg-gray-900 text-white p-6 rounded-lg mt-4">
          <h4 className="font-bold text-lg mb-4">Program Narrative</h4>
          <div className="space-y-3">
             <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yappy-orange mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">AO program continues to build early awareness across priority heavy industry markets.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yappy-orange mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Consistent uplift among target clusters in logistics sector, with increasing watch time from Operations roles.</p>
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
