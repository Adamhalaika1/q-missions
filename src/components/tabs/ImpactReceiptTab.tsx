import React, { useState } from 'react';
import { ImpactReceipt, Language } from '../../types';
import { MOCK_IMPACT_RECEIPTS } from '../../data/mockReceipts';
import { canTransitionTo, computeReceiptVerificationHash, VERIFICATION_STAGES } from '../../utils/missionEngine';
import {
  ShieldCheck,
  Download,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Printer,
  Sparkles,
  ChevronRight,
  Clock,
  ArrowRight,
  ExternalLink,
  QrCode
} from 'lucide-react';

interface ImpactReceiptTabProps {
  lang: Language;
}

export const ImpactReceiptTab: React.FC<ImpactReceiptTabProps> = ({ lang }) => {
  const [selectedReceipt, setSelectedReceipt] = useState<ImpactReceipt>(MOCK_IMPACT_RECEIPTS[0]);
  const [liveStatus, setLiveStatus] = useState<ImpactReceipt['verificationStatus']>(selectedReceipt.verificationStatus);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleSelectReceipt = (receipt: ImpactReceipt) => {
    setSelectedReceipt(receipt);
    setLiveStatus(receipt.verificationStatus);
  };

  const handleAdvanceStatus = (nextStatus: ImpactReceipt['verificationStatus']) => {
    if (canTransitionTo(liveStatus, nextStatus)) {
      setLiveStatus(nextStatus);
    }
  };

  const currentHash = computeReceiptVerificationHash(
    selectedReceipt.receiptNumber,
    liveStatus,
    selectedReceipt.directOutputsEn.length
  );

  const handleDownload = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(selectedReceipt, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${selectedReceipt.receiptNumber}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Simulation & Education Banner */}
      <div className="p-4 rounded-2xl glass-panel border border-[#C5A36B]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'إيصال الأثر المعتمد (VIR) — النموذج الميداني الحي' : 'Verified Impact Receipt (VIR) — Production Audit Ledger'}
            </h3>
          </div>
          <p className="text-xs text-stone-300 max-w-3xl">
            {lang === 'ar'
              ? 'يمثل إيصال الأثر الوثيقة الرسمية الإلزامية لكل مهمة تكتمل في قطر. يفصل بدقة بين النشاط المنفذ، المخرجات المباشرة، والأثر المستدام بالبراهين.'
              : 'The flagship accountability tool of Q-MISSIONS. Distinguishes activities from outputs and verified outcomes with cryptographic audit verification.'}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#8A1538]/30 border border-[#8A1538] text-amber-200">
            Audit Standard: Q-Gov-2026
          </span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#C5A36B] hover:bg-[#b5935b] text-stone-900 transition-all cursor-pointer shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'تحميل الإيصال (JSON)' : 'Export Receipt'}</span>
          </button>
        </div>
      </div>

      {downloadNotice && (
        <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs text-emerald-200 text-center font-semibold">
          {lang === 'ar' ? '✓ تم تصدير ملف إيصال الأثر المعتمد بنجاح' : '✓ Verified Impact Receipt JSON downloaded successfully'}
        </div>
      )}

      {/* Receipt Selector Switcher */}
      <div className="flex flex-wrap gap-3">
        {MOCK_IMPACT_RECEIPTS.map((r) => (
          <button
            key={r.id}
            onClick={() => handleSelectReceipt(r)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              selectedReceipt.id === r.id
                ? 'bg-gradient-to-r from-[#8A1538] to-[#9c1840] text-white border-[#C5A36B] shadow-lg'
                : 'glass-panel text-stone-300 hover:text-white border-white/10'
            }`}
          >
            <span className="font-mono text-[10px] text-amber-300 block">{r.receiptNumber}</span>
            <span>{lang === 'ar' ? r.missionTitleAr : r.missionTitleEn}</span>
          </button>
        ))}
      </div>

      {/* The Printable / Viewable Official Receipt Artifact */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#0b1017] border-2 border-[#C5A36B]/50 p-6 sm:p-10 shadow-2xl relative">
        {/* Subtle top seal */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b-2 border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#8A1538] flex items-center justify-center text-white font-extrabold text-xl shadow-lg border border-[#C5A36B]">
              Q
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A36B] uppercase block">
                {lang === 'ar' ? 'سجل التدقيق الحكومي المستقل' : 'Independent Government-Grade Impact Ledger'}
              </span>
              <h2 className="text-lg font-black text-white">
                {lang === 'ar' ? 'إيصال الأثر الميداني المعتمد' : 'Official Verified Impact Receipt'}
              </h2>
            </div>
          </div>

          <div className="text-center sm:text-end">
            <span className="text-xs font-mono font-bold text-amber-300 block">
              {selectedReceipt.receiptNumber}
            </span>
            <span className="text-[10px] text-stone-400 font-mono">
              Timestamp: {selectedReceipt.completionTimestamp}
            </span>
          </div>
        </div>

        {/* Verification Status Stepper */}
        <div className="py-6 border-b border-white/10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-3">
            {lang === 'ar' ? 'مراحل التدقيق والاعتماد الميداني' : 'Auditing & Verification Lifecycle Stage'}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {VERIFICATION_STAGES.map((st, idx) => {
              const currentIndex = VERIFICATION_STAGES.indexOf(liveStatus);
              const isPast = idx < currentIndex;
              const isCurrent = idx === currentIndex;

              return (
                <button
                  key={st}
                  onClick={() => handleAdvanceStatus(st)}
                  className={`p-2 rounded-lg text-center text-[10px] font-mono font-bold transition-all border ${
                    isCurrent
                      ? 'bg-[#8A1538] text-white border-amber-300 shadow-md scale-105'
                      : isPast
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/5 text-stone-500 border-white/5'
                  }`}
                >
                  <span className="block text-[8px] opacity-75">0{idx + 1}</span>
                  <span className="truncate block">{st}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Core Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-white/10 text-xs">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase block">
              {lang === 'ar' ? 'عنوان المهمة' : 'Mission Title'}
            </span>
            <p className="font-bold text-white text-sm mt-0.5">
              {lang === 'ar' ? selectedReceipt.missionTitleAr : selectedReceipt.missionTitleEn}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase block">
              {lang === 'ar' ? 'الفريق المنفذ' : 'Executing Squad'}
            </span>
            <p className="font-semibold text-amber-200 mt-0.5">{selectedReceipt.teamName}</p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              {selectedReceipt.teamMembers.map(m => `${m.name} (${m.country})`).join(', ')}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase block">
              {lang === 'ar' ? 'الجهة المستضيفة في قطر' : 'Challenge Host Entity'}
            </span>
            <p className="font-semibold text-stone-200 mt-0.5">
              {lang === 'ar' ? selectedReceipt.challengeOwnerAr : selectedReceipt.challengeOwnerEn}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase block">
              {lang === 'ar' ? 'موقع التنفيذ الميداني' : 'Field Venue & Coordinates'}
            </span>
            <p className="font-semibold text-stone-200 mt-0.5">
              {lang === 'ar' ? selectedReceipt.locationAr : selectedReceipt.locationEn}
            </p>
          </div>
        </div>

        {/* Planned vs Completed Activity Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-white/10 text-xs">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-bold text-stone-400 uppercase block mb-1">
              {lang === 'ar' ? 'النشاط المخطط المعتمد' : 'Approved Planned Activity'}
            </span>
            <p className="text-stone-300 leading-relaxed">
              {lang === 'ar' ? selectedReceipt.plannedActivityAr : selectedReceipt.plannedActivityEn}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <span className="text-[10px] font-bold text-emerald-300 uppercase block mb-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'النشاط المنفذ فعلياً والمطابق' : 'Actual Verified Completed Activity'}
            </span>
            <p className="text-stone-200 leading-relaxed">
              {lang === 'ar' ? selectedReceipt.completedActivityAr : selectedReceipt.completedActivityEn}
            </p>
          </div>
        </div>

        {/* Direct Outputs vs Outcome Indicators */}
        <div className="py-6 border-b border-white/10 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase text-[#C5A36B] tracking-wider mb-2">
              {lang === 'ar' ? 'المخرجات المباشرة الملموسة' : 'Direct Tangible Outputs Delivered'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(lang === 'ar' ? selectedReceipt.directOutputsAr : selectedReceipt.directOutputsEn).map((out, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-200">
                  <span className="text-[10px] text-amber-400 font-mono block mb-1">OUTPUT 0{idx + 1}</span>
                  {out}
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Indicators Telemetry */}
          <div>
            <h4 className="text-xs font-bold uppercase text-stone-300 tracking-wider mb-2">
              {lang === 'ar' ? 'مؤشرات الأداء الميداني المقاسة' : 'Measured Field Outcome Indicators'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              {selectedReceipt.outcomeIndicators.map((ind, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#8A1538]/10 border border-[#8A1538]/30">
                  <span className="text-[10px] text-stone-300 font-medium block">
                    {lang === 'ar' ? ind.metricAr : ind.metricEn}
                  </span>
                  <div className="text-xl font-bold text-amber-300 font-mono mt-1">
                    {ind.actual} <span className="text-xs text-stone-400">{lang === 'ar' ? ind.unitAr : ind.unitEn}</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono block mt-0.5">
                    Target: {ind.target} (Exceeded)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audited Evidence Artifacts */}
        <div className="py-6 border-b border-white/10 space-y-3">
          <h4 className="text-xs font-bold uppercase text-stone-300 tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'سجل الأدلة والمرفقات المعتمدة بالتدقيق' : 'Audited Primary Evidence Artifacts'}</span>
          </h4>
          <div className="space-y-2">
            {selectedReceipt.evidenceArtifacts.map((art, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-stone-200 font-medium">
                    {lang === 'ar' ? art.titleAr : art.titleEn}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-stone-400">
                  <span className="text-amber-300">{art.hash}</span>
                  <span>•</span>
                  <span>{art.verifiedBy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficiary Quote & Transparent Limitations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-white/10 text-xs">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] font-bold text-amber-300 uppercase block">
              {lang === 'ar' ? 'شهادة المستفيد الموثقة قانونياً' : 'Lawfully Obtained Beneficiary Testimonial'}
            </span>
            <p className="text-stone-300 italic leading-relaxed">
              {lang === 'ar' ? selectedReceipt.beneficiaryFeedbackAr : selectedReceipt.beneficiaryFeedbackEn}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-900 border border-white/10 space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase block flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              {lang === 'ar' ? 'القيود والتحديات الموثقة بشفافية' : 'Documented Constraints & Limitations'}
            </span>
            <p className="text-stone-300 leading-relaxed">
              {lang === 'ar' ? selectedReceipt.limitationsAr : selectedReceipt.limitationsEn}
            </p>
          </div>
        </div>

        {/* Follow-up Owner & 90-Day Next Steps */}
        <div className="pt-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase block">
                {lang === 'ar' ? 'الجهة المسؤولة عن متابعة الإرث والاستدامة' : 'Designated Institutional Follow-Up Owner'}
              </span>
              <p className="font-bold text-[#C5A36B] text-sm mt-0.5">
                {lang === 'ar' ? selectedReceipt.followUpOwnerAr : selectedReceipt.followUpOwnerEn}
              </p>
            </div>

            {/* Cryptographic Stamp */}
            <div className="p-3 rounded-xl bg-white/5 border border-[#C5A36B]/40 flex items-center gap-3">
              <QrCode className="w-10 h-10 text-amber-300 shrink-0" />
              <div className="text-start">
                <span className="text-[9px] font-mono font-bold text-emerald-400 block">
                  HASH: {currentHash}
                </span>
                <span className="text-[8px] font-mono text-stone-400 block">
                  IMMUTABLE PROOF-OF-IMPACT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
