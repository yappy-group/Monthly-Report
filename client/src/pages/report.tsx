import React from "react";
import { ArrowUp, ArrowDown, Box, Users, Clock, Eye, Target, Layers, CheckCircle2, PlayCircle, Briefcase, LucideIcon, Zap, BarChart3, Info, Calendar, Building2, FileText, Goal } from "lucide-react";

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
  <div className="bg-yappy-grey-light/30 rounded-lg border border-yappy-grey-light p-8 mb-8">
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
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border border-green-100 text-[#ffffff] bg-[#ff7c22]">
      {children}
    </span>
  );
};



const ProgramNarrativeBlock = () => (
  <div className="bg-yappy-grey-light/30 border border-yappy-grey-light text-yappy-grey-dark p-8 rounded-lg mt-8 shadow-sm relative overflow-hidden">
    <h4 className="font-bold text-lg mb-6 flex items-center gap-3 text-yappy-grey-dark relative z-10">
      <div className="w-6 h-6 rounded-full border-2 border-yappy-orange flex items-center justify-center">
        <CheckCircle2 className="w-3 h-3 text-yappy-orange" />
      </div>
      Key Insights & Program Narrative
    </h4>
    <div className="space-y-4 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0" />
          <p className="text-yappy-grey-dark text-[15px] leading-relaxed">Significant increase in role engagement across priority accounts, driven by Tactical campaigns.</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0" />
          <p className="text-yappy-grey-dark text-[15px] leading-relaxed">Watch time up 24%, led by C-Suite personas in heavy industry targets. Three new targets surpassed the 20% exposure threshold.</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full mt-2.5 shrink-0" />
          <p className="text-yappy-grey-dark text-[15px] leading-relaxed">AO program continues to build early awareness across priority heavy industry markets, with consistent uplift in logistics sector.</p>
        </div>
    </div>
    <div className="mt-8 pt-6 border-t border-yappy-grey-light/50 text-sm font-medium flex items-center gap-2 text-[#363636]">
      <Info className="w-4 h-4 text-yappy-orange" />
      This month: 2.4M impressions, 38k complete views, 38% avg completion rate across all campaigns.
    </div>
  </div>
);

// New Component: Program Overview Grid
const ProgramOverviewGrid = () => (
  <div className="mt-8">
    <h3 className="text-lg font-bold text-yappy-grey-dark mb-4 flex items-center gap-2">
      <Layers className="w-5 h-5 text-yappy-orange" />
      Program Overview
    </h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white border border-yappy-grey-light rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <PlayCircle className="w-4 h-4 text-yappy-grey-med" />
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide">Always On Coverage</h4>
        </div>
        <div className="space-y-1 text-[15px]">
          <p className="text-yappy-grey-dark font-medium">AO Target Accounts: <span className="font-bold">142 total</span></p>
          <p className="text-yappy-grey-med">New AO Targets this month: <span className="text-yappy-green font-bold">+12</span></p>
        </div>
      </div>

      <div className="bg-white border border-yappy-grey-light rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-yappy-grey-med" />
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide">Tactical Activity</h4>
        </div>
        <div className="space-y-1 text-[15px]">
          <p className="text-yappy-grey-dark font-medium">Active Tactical Campaigns: <span className="font-bold">5</span></p>
          <p className="text-yappy-grey-med">New/Paused this month: <span className="font-bold">1 New / 0 Paused</span></p>
        </div>
      </div>

      <div className="bg-white border border-yappy-grey-light rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-yappy-grey-med" />
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide">Content Library</h4>
        </div>
        <div className="space-y-1 text-[15px]">
          <p className="text-yappy-grey-dark font-medium">Active Content Pieces: <span className="font-bold">24</span></p>
          <p className="text-yappy-grey-med">Total Library: <span className="font-bold">86 Assets</span></p>
        </div>
      </div>

      <div className="bg-white border border-yappy-grey-light rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Goal className="w-4 h-4 text-yappy-grey-med" />
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide">Program Objectives</h4>
        </div>
        <div className="space-y-1 text-[15px]">
          <p className="text-yappy-grey-dark flex items-center gap-2"><span className="w-1 h-1 bg-yappy-orange rounded-full"></span>Decision Chain Influence</p>
          <p className="text-yappy-grey-dark flex items-center gap-2"><span className="w-1 h-1 bg-yappy-orange rounded-full"></span>Brand Awareness</p>
          <p className="text-yappy-grey-dark flex items-center gap-2"><span className="w-1 h-1 bg-yappy-orange rounded-full"></span>Value Proposition Clarity</p>
        </div>
      </div>
    </div>
  </div>
);

// New Component: Tactical Rollup Table
const TacticalRollupTable = () => (
  <div className="mb-10">
    <p className="text-xs text-yappy-grey-med font-medium mb-3 italic">Note: Roles Reached, Roles Engaged, and Key Roles are lifetime totals with monthly increases shown as deltas.</p>
    <div className="border border-yappy-grey-light rounded-lg overflow-hidden bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-yappy-grey-light/30 text-yappy-grey-med font-bold border-b border-yappy-grey-light uppercase text-[10px] tracking-wider">
          <tr>
            <th className="px-5 py-3">Target</th>
            <th className="px-5 py-3">Audience Size</th>
            <th className="px-5 py-3">Impressions</th>
            <th className="px-5 py-3">Roles Reached</th>
            <th className="px-5 py-3">Roles Engaged</th>
            <th className="px-5 py-3">Key Roles</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yappy-grey-light text-sm">
          {[
            { name: "Pacific Energy Systems", aud: "45,000", imp: "3,100", impTrend: "+18%", reached: "215", reachedDelta: "+18", engaged: "68", engagedDelta: "+9", keyRoles: "52", keyRolesDelta: "+15" },
            { name: "Southern Rail Logistics", aud: "38,000", imp: "2,400", impTrend: "+8%", reached: "140", reachedDelta: "+12", engaged: "42", engagedDelta: "+5", keyRoles: "28", keyRolesDelta: "+7" },
            { name: "Apex Manufacturing Group", aud: "22,500", imp: "1,200", impTrend: "+3%", reached: "98", reachedDelta: "+5", engaged: "28", engagedDelta: "+2", keyRoles: "18", keyRolesDelta: "+4" },
            { name: "Metro Infrastructure", aud: "28,000", imp: "1,500", impTrend: "+6%", reached: "65", reachedDelta: "+4", engaged: "18", engagedDelta: "+2", keyRoles: "14", keyRolesDelta: "+3" },
            { name: "Global Shipping Corp", aud: "18,200", imp: "900", impTrend: "-1%", reached: "85", reachedDelta: "+3", engaged: "24", engagedDelta: "+1", keyRoles: "12", keyRolesDelta: "+2" },
            { name: "Northern Grid", aud: "12,400", imp: "450", impTrend: "+2%", reached: "45", reachedDelta: "+1", engaged: "12", engagedDelta: "+0", keyRoles: "8", keyRolesDelta: "+1" },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="px-5 py-3 font-bold text-yappy-grey-dark">
                {row.name}
              </td>
              <td className="px-5 py-3 text-yappy-grey-med font-medium">{row.aud}</td>
              <td className="px-5 py-3 text-yappy-grey-dark font-medium">
                {row.imp} <span className={`text-[10px] ml-1 font-bold ${row.impTrend.includes('+') ? 'text-yappy-green' : 'text-yappy-red'}`}>{row.impTrend.includes('+') ? '▲' : '▼'} {row.impTrend}</span>
              </td>
              <td className="px-5 py-3 text-yappy-grey-dark font-medium">
                {row.reached} <span className={`text-[10px] ml-1 font-bold ${row.reachedDelta.includes('+') ? 'text-yappy-green' : 'text-yappy-red'}`}>{row.reachedDelta.includes('+') ? '▲' : '▼'} {row.reachedDelta}</span>
              </td>
               <td className="px-5 py-3 text-yappy-grey-dark font-medium">
                {row.engaged} <span className={`text-[10px] ml-1 font-bold ${row.engagedDelta.includes('+') ? 'text-yappy-green' : 'text-yappy-red'}`}>{row.engagedDelta.includes('+') ? '▲' : '▼'} {row.engagedDelta}</span>
              </td>
               <td className="px-5 py-3 text-yappy-grey-dark font-medium">
                {row.keyRoles} <span className={`text-[10px] ml-1 font-bold ${row.keyRolesDelta.includes('+') ? 'text-yappy-green' : 'text-yappy-red'}`}>{row.keyRolesDelta.includes('+') ? '▲' : '▼'} {row.keyRolesDelta}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// New Component: Tactical Deep Dive
const TacticalDeepDive = () => (
  <div className="bg-white border border-yappy-grey-light rounded-lg p-8 shadow-sm">
    <div className="flex justify-between items-start mb-8 pb-6 border-b border-yappy-grey-light">
      <h3 className="text-xl font-extrabold text-yappy-grey-dark tracking-tight">
        Tactical: Southern Rail Logistics
      </h3>
      <div className="flex items-center gap-1.5 text-sm text-yappy-grey-med font-medium bg-yappy-grey-light/30 px-3 py-1.5 rounded-md border border-yappy-grey-light">
        <Calendar className="w-4 h-4" /> Running for 8 months
      </div>
    </div>

    <div className="mb-10">
      <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide mb-6 flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-yappy-orange" /> Metrics
      </h4>
      <div className="grid grid-cols-4 gap-6">
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Audience Size</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">38,000</p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Impressions</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">24,000 <span className="text-sm text-yappy-green font-bold">▲ +2,000</span></p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Roles Reached</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">140 <span className="text-sm text-yappy-green font-bold">▲ +12</span></p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Roles Engaged</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">42 <span className="text-sm text-yappy-green font-bold">▲ +5</span></p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Key Roles Reached</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">28 <span className="text-sm text-yappy-green font-bold">▲ +7</span></p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Key Roles Engaged</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">18 <span className="text-sm text-yappy-green font-bold">▲ +4</span></p>
        </div>
        <div>
          <p className="text-[10px] text-yappy-grey-med font-bold uppercase mb-2">Watch Time</p>
          <p className="text-2xl font-bold text-yappy-grey-dark">24h <span className="text-sm text-yappy-green font-bold">▲ +3h</span></p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-12 mb-10 border-t border-yappy-grey-light pt-8">
       <div>
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide mb-4">Priority Messages</h4>
          <div className="space-y-2">
             {[
               { name: 'Predictive Maintenance ROI', active: true },
               { name: 'Safety Compliance Standards', active: false },
               { name: 'Operational Efficiency', active: true }
             ].map(msg => (
               <div key={msg.name} className="flex items-center justify-between gap-2 text-sm text-yappy-grey-dark font-medium bg-yappy-grey-light/30 px-3 py-2 rounded">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-yappy-orange rounded-full"></div>
                   {msg.name}
                 </div>
                 {msg.active && <Tag color="green">Active This Month</Tag>}
               </div>
             ))}
          </div>
       </div>
       <div>
          <h4 className="text-sm font-bold text-yappy-grey-dark uppercase tracking-wide mb-4">Best Performing Message</h4>
          <div className="bg-yappy-grey-light/20 p-4 rounded-lg border border-yappy-grey-light/50">
             <p className="font-bold text-yappy-grey-dark text-sm mb-3">"Predictive Maintenance ROI"</p>
             <div className="flex gap-4 text-xs text-yappy-grey-med">
                <span><strong className="text-yappy-grey-dark">1.2k</strong> Impressions</span>
                <span><strong className="text-yappy-grey-dark">450</strong> Views</span>
                <span><strong className="text-yappy-grey-dark">180</strong> Complete Views</span>
             </div>
          </div>
       </div>
    </div>


    <div className="bg-yappy-grey-light/30 p-6 rounded-lg border border-yappy-grey-light">
        <h4 className="font-bold text-yappy-grey-dark text-sm uppercase mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-yappy-orange" />
          Tactical Insights
        </h4>
        <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-yappy-grey-dark uppercase mb-1">New Key Roles Reached</p>
              <p className="text-sm text-yappy-grey-dark">Director of Operations, Head of Compliance</p>
            </div>
            <div>
              <p className="text-xs font-bold text-yappy-grey-dark uppercase mb-1">Key Roles with Repeat Engagement</p>
              <p className="text-sm text-yappy-grey-dark">CFO, Plant Manager, Head of Maintenance</p>
            </div>
        </div>
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
      
      <div className="grid grid-cols-4 gap-5 mb-6">
        <MetricCard 
          label="Watch Time (Hours)" 
          value="486h" 
          trend="24%" 
          trendIsPositive={true} 
          icon={Clock}
        />
        <MetricCard 
          label="Targets Reached %" 
          value="68%" 
          trend="4%" 
          trendIsPositive={true} 
          icon={Briefcase}
        />
        <MetricCard 
          label="Engaged Roles (Tacticals)" 
          value="342" 
          trend="8%" 
          trendIsPositive={true} 
          icon={Users}
        />
         <MetricCard 
          label="Key Roles Engaged (Tacticals)" 
          value="124" 
          trend="15%" 
          trendIsPositive={true} 
          icon={Target}
        />
      </div>
      <p className="text-xs text-yappy-grey-med font-medium mb-10 text-center italic">All metrics shown are for this month across all Always On and Tactical campaigns.</p>

      <ProgramNarrativeBlock />
    </div>
  </section>
);

const Page2_TacticalRollup = () => (
  <section className="report-page print:break-after-page">
    <Header title="Tactical Rollup" />
    <TacticalRollupTable />
  </section>
);

const Page3_TacticalDeepDive = () => (
  <section className="report-page print:break-after-page">
    <Header title="Tactical: Southern Rail Logistics" />
    <TacticalDeepDive />
  </section>
);

const Page4_AlwaysOnHighlights = () => (
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
            Top 5 Always On Targets
          </h3>
          <div className="border border-yappy-grey-light rounded-lg overflow-hidden shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-yappy-grey-med font-semibold border-b border-yappy-grey-light uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-6 py-4">Target Name</th>
                  <th className="px-6 py-4">Awareness Level</th>
                  <th className="px-6 py-4">Impressions</th>
                  <th className="px-6 py-4">Complete Views</th>
                  <th className="px-6 py-4">Watch Time</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yappy-grey-light">
                {[
                  { name: "Global Logistics Co.", level: "High", levelColor: "red", imp: "12,400", views: "4,200", time: "42h", status: "Reached 20% exposure", statusIcon: ArrowUp, statusColor: "text-yappy-green" },
                  { name: "Metro Transit Authority", level: "Medium", levelColor: "orange", imp: "8,100", views: "2,100", time: "28h", status: "New this month", statusIcon: Zap, statusColor: "text-yappy-orange" },
                  { name: "Pacific Ports Group", level: "Medium", levelColor: "orange", imp: "6,500", views: "1,800", time: "22h", status: "Trending Up", statusIcon: ArrowUp, statusColor: "text-yappy-green" },
                  { name: "National Rail Services", level: "Low", levelColor: "gray", imp: "4,200", views: "1,100", time: "18h", status: "-", statusIcon: null, statusColor: "text-yappy-grey-med" },
                  { name: "West Coast Ports", level: "Low", levelColor: "gray", imp: "3,400", views: "850", time: "12h", status: "-", statusIcon: null, statusColor: "text-yappy-grey-med" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-yappy-grey-dark">{row.name}</td>
                    <td className="px-6 py-4"><Tag color={row.levelColor as any}>{row.level}</Tag></td>
                    <td className="px-6 py-4 text-yappy-grey-dark font-mono">{row.imp}</td>
                    <td className="px-6 py-4 text-yappy-grey-dark font-mono">{row.views}</td>
                    <td className="px-6 py-4 text-yappy-grey-dark font-mono">{row.time}</td>
                    <td className={`px-6 py-4 font-bold text-xs flex items-center gap-1 ${row.statusColor}`}>
                      {row.statusIcon && <row.statusIcon className="w-3 h-3" />} {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Performance */}
        <div>
           <h3 className="text-lg font-bold text-yappy-grey-dark mb-5 flex items-center gap-2">
             <Layers className="w-5 h-5 text-yappy-grey-med" />
             Top 5 Performing Content
           </h3>
           <div className="space-y-4">
              {[
                { title: "The Future of Logistics Automation", type: "AO Only", imp: "45k", views: "12k", orgs: "142", note: "Drove 60% of AO completions" },
                { title: "Safety First: Site Protocols", type: "Shared", imp: "22k", views: "8k", orgs: "98", note: "High retention rate (85%)" },
                { title: "Predictive Maintenance Basics", type: "Tactical", imp: "18k", views: "6.5k", orgs: "76", note: "Strong technical engagement" },
                { title: "Sustainability in Supply Chain", type: "AO Only", imp: "15k", views: "5.2k", orgs: "110", note: "High C-Suite views" },
                { title: "Digital Twin Case Study", type: "Shared", imp: "12k", views: "4.8k", orgs: "65", note: "New release" },
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

      </div>
    </div>
  </section>
);

const Report = () => {
  return (
    <div className="report-container bg-gray-100 min-h-screen pb-12">
      <Page1_ExecutiveSummary />
      <Page2_TacticalRollup />
      <Page3_TacticalDeepDive />
      <Page4_AlwaysOnHighlights />
    </div>
  );
};

export default Report;
