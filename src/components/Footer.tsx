import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const navigationLinks: FooterLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas Frequentes', href: '#faq' },
];

async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer(): Promise<React.JSX.Element> {
  const currentYear: number = await getCurrentYear();

  return (
    <footer className="bg-[#2B060E] text-stone-300 border-t border-amber-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="#inicio" className="inline-block focus:outline-none">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/logo-jlteam-gold.png"
                  alt="Logomarca João Lucas Nutricionista"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Nutrição individualizada baseada em ciência e estratégia prática, sem dietas restritivas, para transformar sua saúde e performance.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3D0B16] border border-amber-500/20 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>João Lucas • CRN-11 00000</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link: FooterLink) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Localização */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Atendimento
            </h3>
            <ul className="space-y-3.5 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Atendimento Presencial em Fortaleza - CE e Online para todo o Brasil
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Segunda a Sexta: 08h às 19h</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto e Redes Sociais */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Contato & Redes
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5585989226425?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#2B060E] text-sm font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>

              <a
                href="https://www.instagram.com/jldantas__?dmpr=OTRjajlzajIzNHlu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#3D0B16] hover:bg-[#4A0E1C] border border-amber-500/20 text-sm text-stone-200 hover:text-amber-400 transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                    <svg
                        className="w-4 h-4 text-amber-400 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Siga no Instagram
                    </span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior: Direitos Autorais e Créditos */}
      <div className="border-t border-amber-500/10 bg-[#21040B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} João Lucas Dantas Nutricionista. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://github.com/devlucasguedes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/90 hover:text-amber-400 font-medium transition-colors"
            >
              Lucas Guedes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;