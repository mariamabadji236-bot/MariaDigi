import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ExternalLink, FileUp, Link2, ShieldCheck, Trash2, X } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface SavedCertOverride {
  verificationUrl?: string;
  fileDataUrl?: string;
  fileType?: 'image' | 'pdf';
  fileName?: string;
}

const STORAGE_KEY = 'mariadigi_cert_overrides_v1';

export const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [overrides, setOverrides] = useState<Record<string, SavedCertOverride>>({});
  const [showAttachForm, setShowAttachForm] = useState(false);
  const [urlDraft, setUrlDraft] = useState('');

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setOverrides(JSON.parse(raw));
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  useEffect(() => {
    if (!selectedCert) return;
    setShowAttachForm(false);
    const saved = overrides[selectedCert.id];
    setUrlDraft(saved?.verificationUrl ?? selectedCert.verificationUrl ?? '');

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedCert, overrides]);

  const persistOverrides = (next: Record<string, SavedCertOverride>) => {
    setOverrides(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore quota or storage errors
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCert) return;
    const trimmed = urlDraft.trim();
    const current = overrides[selectedCert.id] ?? {};
    const next = {
      ...overrides,
      [selectedCert.id]: {
        ...current,
        verificationUrl: trimmed || undefined,
      },
    };
    persistOverrides(next);
    setShowAttachForm(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedCert) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      const current = overrides[selectedCert.id] ?? {};
      const next = {
        ...overrides,
        [selectedCert.id]: {
          ...current,
          fileDataUrl: reader.result,
          fileType: (isPdf ? 'pdf' : 'image') as 'pdf' | 'image',
          fileName: file.name,
        },
      };
      persistOverrides(next);
      setShowAttachForm(false);
    };
    reader.readAsDataURL(file);
  };

  const handleClearFile = (certId: string) => {
    const current = overrides[certId];
    if (!current) return;
    const next = {
      ...overrides,
      [certId]: {
        ...current,
        fileDataUrl: undefined,
        fileType: undefined,
        fileName: undefined,
      },
    };
    persistOverrides(next);
  };

  const activeOverride = selectedCert ? overrides[selectedCert.id] : undefined;
  const activeUrl =
    activeOverride?.verificationUrl || selectedCert?.verificationUrl || undefined;
  const activeFileUrl = activeOverride?.fileDataUrl || selectedCert?.certificateFileUrl;
  const activeFileType =
    activeOverride?.fileType ||
    (selectedCert?.certificateFileUrl?.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image');

  return (
    <div className="pt-8 sm:pt-12 space-y-14">
      <div className="space-y-3 max-w-2xl border-b border-[#34223F]/10 pb-8">
        <div className="text-xs sm:text-sm font-medium text-[#70428C]">
          Validation des acquis
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#34223F]">Certifications</h1>
        <p className="text-base leading-relaxed text-[#34223F]/80">
          Parcours certifiants attestant de mes compétences en UX Design et en Marketing Digital,
          avec aperçu des certificats et accès de vérification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, idx) => {
          const isCoursera = cert.issuer.toLowerCase().includes('coursera');
          return (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8 flex flex-col justify-between gap-6"
            >
              <div className="space-y-6">
                {/* Visual Certificate Preview Card */}
                <div className="rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#F8F6F9] border border-[#B58ACB]/35 p-6 flex flex-col justify-between min-h-[190px]">
                  <div className="flex items-center justify-between text-xs text-[#70428C] font-medium">
                    <span>{cert.issuer}</span>
                    <span>{cert.status}</span>
                  </div>
                  <div className="my-4 space-y-1">
                    <div className="flex items-center gap-2 text-[#70428C]">
                      <Award className="w-5 h-5" aria-hidden="true" />
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        {isCoursera ? 'Certificat Coursera' : 'Certificat officiel'}
                      </span>
                    </div>
                    <div className="font-serif text-xl sm:text-2xl text-[#34223F]">
                      {cert.title}
                    </div>
                  </div>
                  <div className="text-xs text-[#34223F]/65 border-t border-[#34223F]/10 pt-3">
                    Délivré à {PROFILE.fullName}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-2xl text-[#34223F]">{cert.title}</h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#34223F]/80">
                    {cert.summary}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[#34223F]/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#34223F]/55">
                    Domaines couverts
                  </div>
                  <ul className="space-y-2">
                    {cert.competencies.map((comp) => (
                      <li
                        key={comp}
                        className="flex items-center gap-2.5 text-sm text-[#34223F]/85"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#70428C] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#34223F]/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F6ECFA] text-[#70428C] text-sm font-medium hover:bg-[#70428C] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Vérification du certificat</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Certificate Preview & Coursera Verification Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#34223F]/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#34223F]/10 p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#34223F]/10 pb-4">
              <div>
                <div className="text-xs font-medium text-[#70428C]">{selectedCert.issuer}</div>
                <h3 id="cert-modal-title" className="font-serif text-2xl text-[#34223F] mt-1">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-[#34223F]/70 hover:bg-[#F6ECFA] cursor-pointer shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Coursera / Certificate Visual Display */}
            {activeFileUrl ? (
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-[#34223F]/15 bg-[#F8F6F9]">
                  {activeFileType === 'pdf' ? (
                    <iframe
                      src={activeFileUrl}
                      title={`Certificat ${selectedCert.title}`}
                      className="w-full h-[420px] border-0 bg-[#FFFFFF]"
                    />
                  ) : (
                    <img
                      src={activeFileUrl}
                      alt={`Certificat ${selectedCert.title} — ${PROFILE.fullName}`}
                      className="w-full max-h-[440px] object-contain mx-auto bg-[#FFFFFF]"
                    />
                  )}
                </div>
                {activeOverride?.fileDataUrl && (
                  <div className="flex items-center justify-between text-xs text-[#34223F]/65">
                    <span>Fichier associé : {activeOverride.fileName}</span>
                    <button
                      type="button"
                      onClick={() => handleClearFile(selectedCert.id)}
                      className="inline-flex items-center gap-1 text-[#70428C] hover:text-[#34223F] font-medium cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Retirer</span>
                    </button>
                  </div>
                )}
              </div>
            ) : selectedCert.id === 'google-ux' ? (
              <div className="rounded-xl border border-[#0056D2]/25 bg-[#FFFFFF] overflow-hidden shadow-sm">
                {/* Coursera Header Strip */}
                <div className="bg-[#0056D2] px-6 py-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <span className="font-sans font-bold tracking-tight text-base">coursera</span>
                    <span className="text-white/50" aria-hidden="true">|</span>
                    <span className="text-xs font-medium text-white/90">
                      Google Career Certificates
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/95">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    <span>{selectedCert.status}</span>
                  </div>
                </div>

                {/* Certificate Document Body */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-[#FFFFFF] via-[#FAFBFD] to-[#F2F6FC] relative">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-4">
                      <div className="flex items-center gap-2.5">
                        {/* Clean Google G Monogram */}
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#34223F]/65">
                          Google · Certificat Professionnel
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-xs text-[#34223F]/65">
                          Ce certificat atteste que
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl text-[#34223F]">
                          {PROFILE.fullName}
                        </div>
                        <div className="text-xs text-[#34223F]/70 pt-1">
                          a validé le programme de spécialisation
                        </div>
                        <div className="font-serif text-xl text-[#0056D2]">
                          {selectedCert.title}
                        </div>
                      </div>

                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedCert.competencies.map((comp) => (
                          <div
                            key={comp}
                            className="flex items-center gap-2 text-xs text-[#34223F]/80"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-[#0056D2] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Official Coursera Seal */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#0056D2]/15 pt-5 md:pt-0 md:pl-6 text-center gap-3">
                      <div className="w-24 h-24 rounded-full border-4 border-[#0056D2]/20 bg-[#FFFFFF] flex flex-col items-center justify-center p-2 shadow-sm">
                        <Award className="w-7 h-7 text-[#0056D2]" aria-hidden="true" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0056D2] mt-1">
                          Coursera
                        </span>
                        <span className="text-[9px] text-[#34223F]/60">UX Design</span>
                      </div>
                      <div className="text-[11px] leading-snug text-[#34223F]/65">
                        Délivré par Google
                        <br />
                        via Coursera
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-[#B58ACB]/35 bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#F8F6F9] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-[#70428C]">
                  <span>{selectedCert.issuer}</span>
                  <span>{selectedCert.status}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#34223F]/65">Certificat attribué à</div>
                  <div className="font-serif text-2xl text-[#34223F]">{PROFILE.fullName}</div>
                  <div className="font-serif text-lg text-[#70428C] pt-1">
                    {selectedCert.title}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#34223F]/10">
                  {selectedCert.competencies.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-2 text-xs text-[#34223F]/80"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#70428C] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm leading-relaxed text-[#34223F]/80">
              {selectedCert.verificationNote}
            </p>

            {/* Optional Personal Link / File Attachment Form */}
            {showAttachForm && (
              <div className="rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 p-4 sm:p-5 space-y-4">
                <form onSubmit={handleSaveUrl} className="space-y-2.5">
                  <label
                    htmlFor="cert-verify-url"
                    className="block text-xs font-semibold text-[#34223F]"
                  >
                    Lien de vérification personnel (ex. coursera.org/verify/...)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      id="cert-verify-url"
                      type="url"
                      value={urlDraft}
                      onChange={(e) => setUrlDraft(e.target.value)}
                      placeholder="https://www.coursera.org/account/accomplishments/..."
                      className="flex-1 rounded-lg border border-[#34223F]/15 bg-[#FFFFFF] px-3 py-2 text-sm text-[#34223F] focus:outline-none focus:border-[#70428C]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-[#70428C] text-white text-xs font-medium hover:bg-[#34223F] transition-colors cursor-pointer shrink-0"
                    >
                      Enregistrer le lien
                    </button>
                  </div>
                </form>

                <div className="pt-3 border-t border-[#34223F]/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#34223F]/75">
                    Ou importer directement le fichier officiel (PDF, PNG, JPG) :
                  </span>
                  <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFFFF] border border-[#34223F]/15 text-xs font-medium text-[#34223F] hover:border-[#70428C] cursor-pointer">
                    <FileUp className="w-3.5 h-3.5 text-[#70428C]" aria-hidden="true" />
                    <span>Choisir un fichier</span>
                    <input
                      type="file"
                      accept="application/pdf,image/png,image/jpeg,image/webp"
                      onChange={handleFileUpload}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#34223F]/10">
              <button
                type="button"
                onClick={() => setShowAttachForm((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#70428C] hover:text-[#34223F] cursor-pointer"
              >
                <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {showAttachForm
                    ? 'Masquer les options d’ajout'
                    : 'Joindre mon lien ou fichier officiel'}
                </span>
              </button>

              <div className="flex flex-wrap items-center gap-3">
                {activeUrl && (
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors"
                  >
                    <span>
                      {selectedCert.id === 'google-ux'
                        ? 'Ouvrir sur Coursera'
                        : 'Page officielle'}
                    </span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2.5 rounded-lg border border-[#34223F]/15 text-sm font-medium text-[#34223F] hover:bg-[#F8F6F9] cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
