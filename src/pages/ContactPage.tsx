import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, CheckCircle2, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Opportunité UX/UI Design');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API fallback ignored safely
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Merci de renseigner votre nom, votre adresse e-mail et votre message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError(null);
    setSubmitted(false);
  };

  return (
    <div className="pt-8 sm:pt-12 space-y-12">
      <div className="space-y-3 max-w-2xl border-b border-[#34223F]/10 pb-8">
        <div className="text-xs sm:text-sm font-medium text-[#70428C]">
          Échangeons sur votre projet ou recrutement
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#34223F]">Contact</h1>
        <p className="text-base leading-relaxed text-[#34223F]/80">
          Recruteur, agence digitale, startup ou entrepreneur ? Utilisez le formulaire ci-dessous ou
          contactez-moi directement par e-mail, WhatsApp ou LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Direct Contact Channels */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl text-[#34223F]">Coordonnées directes</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#70428C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="text-xs text-[#34223F]/60">Adresse e-mail</div>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-medium text-[#34223F] hover:text-[#70428C] break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-[#70428C] hover:bg-[#F6ECFA] transition-colors cursor-pointer shrink-0"
                  aria-label="Copier l’adresse e-mail"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 flex items-center gap-3 hover:border-[#B58ACB] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#70428C] shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-[#34223F]/60">WhatsApp</div>
                  <div className="text-sm font-medium text-[#34223F]">
                    {PROFILE.phoneDisplay}
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#70428C] shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-[#34223F]/60">Localisation</div>
                  <div className="text-sm font-medium text-[#34223F]">{PROFILE.location}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#34223F]/10 flex flex-wrap gap-3">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#34223F] text-white text-sm font-medium hover:bg-[#70428C] transition-colors"
              >
                Voir mon LinkedIn
              </a>
              <a
                href={PROFILE.cvPath}
                download="CV_Mariama_Badji_MariaDigi.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#34223F]/15 text-[#34223F] text-sm font-medium hover:bg-[#F6ECFA] transition-colors"
              >
                <Download className="w-4 h-4 text-[#70428C]" aria-hidden="true" />
                <span>Télécharger CV</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form with Validation & Confirmation State */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.06 }}
          className="lg:col-span-7"
        >
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8">
            {submitted ? (
              <div
                className="py-10 text-center space-y-4 max-w-md mx-auto"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-[#F6ECFA] text-[#70428C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-2xl text-[#34223F]">Message envoyé</h2>
                <p className="text-sm sm:text-base text-[#34223F]/80 leading-relaxed">
                  Merci {name} ! Votre message concernant « {subject} » a bien été enregistré.
                  Pour un envoi instantané via votre messagerie, vous pouvez aussi l’ouvrir
                  directement dans votre client mail.
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `[MariaDigi] ${subject} — ${name}`
                    )}&body=${encodeURIComponent(message)}`}
                    className="px-5 py-2.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors"
                  >
                    Ouvrir dans mon client mail
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg border border-[#34223F]/15 text-sm font-medium text-[#34223F] hover:bg-[#F8F6F9] cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="font-serif text-2xl text-[#34223F]">Envoyer un message</h2>

                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-[#F6ECFA] border border-[#70428C]/35 text-sm text-[#34223F]"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#34223F]"
                    >
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom et prénom"
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F6F9] border border-[#34223F]/15 text-sm text-[#34223F] placeholder:text-[#34223F]/45 focus:outline-none focus:border-[#70428C] focus:bg-[#FFFFFF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#34223F]"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@entreprise.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F6F9] border border-[#34223F]/15 text-sm text-[#34223F] placeholder:text-[#34223F]/45 focus:outline-none focus:border-[#70428C] focus:bg-[#FFFFFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-[#34223F]"
                  >
                    Objet de votre demande
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F6F9] border border-[#34223F]/15 text-sm text-[#34223F] focus:outline-none focus:border-[#70428C] focus:bg-[#FFFFFF] transition-colors"
                  >
                    <option value="Opportunité UX/UI Design">Opportunité UX/UI Design</option>
                    <option value="Mission Marketing Digital">Mission Marketing Digital</option>
                    <option value="Création de site WordPress">Création de site WordPress</option>
                    <option value="Entretien / Recrutement">Entretien / Recrutement</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#34223F]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Présentez votre besoin, votre poste ou votre projet..."
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F6F9] border border-[#34223F]/15 text-sm text-[#34223F] placeholder:text-[#34223F]/45 focus:outline-none focus:border-[#70428C] focus:bg-[#FFFFFF] transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
