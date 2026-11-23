import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ExternalLink, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <div className="pt-8 sm:pt-12 space-y-14">
      <div className="space-y-3 max-w-2xl border-b border-[#34223F]/10 pb-8">
        <div className="text-xs sm:text-sm font-medium text-[#70428C]">
          Validation des acquis
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#34223F]">Certifications</h1>
        <p className="text-base leading-relaxed text-[#34223F]/80">
          Parcours certifiants attestant de mes compétences en UX Design et en Marketing Digital,
          avec emplacements dédiés aux justificatifs visuels et liens de vérification officiels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              {/* Visual Certificate Preview Slot */}
              <div className="rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#F8F6F9] border border-[#B58ACB]/35 p-6 flex flex-col justify-between min-h-[190px]">
                <div className="flex items-center justify-between text-xs text-[#70428C] font-medium">
                  <span>{cert.issuer}</span>
                  <span>{cert.status}</span>
                </div>
                <div className="my-4 space-y-1">
                  <div className="flex items-center gap-2 text-[#70428C]">
                    <Award className="w-5 h-5" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Certificat officiel
                    </span>
                  </div>
                  <div className="font-serif text-xl sm:text-2xl text-[#34223F]">
                    {cert.title}
                  </div>
                </div>
                <div className="text-xs text-[#34223F]/60 border-t border-[#34223F]/10 pt-3">
                  Attribué à Mariama Badji · Emplacement prévu pour le scan ou badge officiel
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
        ))}
      </div>

      {/* Verification Info Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#34223F]/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#FFFFFF] border border-[#34223F]/10 p-6 sm:p-8 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#70428C]">{selectedCert.issuer}</div>
                <h3 id="cert-modal-title" className="font-serif text-2xl text-[#34223F] mt-1">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-[#34223F]/70 hover:bg-[#F6ECFA] cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-[#34223F]/80">
              {selectedCert.verificationNote}
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              {selectedCert.verificationUrl && (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors"
                >
                  <span>Page du programme officiel</span>
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
      )}
    </div>
  );
};
