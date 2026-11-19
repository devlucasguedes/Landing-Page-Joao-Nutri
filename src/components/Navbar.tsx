"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, CalendarCheck } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#faq' },
];

export function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#360812]/95 backdrop-blur-md shadow-lg py-3 border-b border-amber-500/20'
          : 'bg-[#4A0E1C] py-4 border-b border-amber-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Canto Esquerdo: Logomarca */}
          <Link
            href="#inicio"
            onClick={handleLinkClick}
            className="flex items-center gap-3 focus:outline-none group"
          >
            {/* Substitua o src pelo caminho exato da sua logo dourada na pasta /public */}
            <div className="relative h-10 w-36 sm:h-12 sm:w-44">
              <Image
                src="/Images/logo-jlteam-gold.png"
                alt="Logomarca João Nutricionista"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Canto Oposto (Direita): Links de Navegação + CTA Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav aria-label="Navegação principal" className="flex items-center gap-6">
              {navLinks.map((link: NavLink) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#360812] text-sm font-bold transition-all shadow-sm hover:shadow-amber-500/20"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendar Consulta
            </a>
          </div>

          {/* Botão Menu Mobile (Canto Direito em telas menores) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 rounded-lg text-amber-400 hover:bg-[#5C1324] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#360812] border-b border-amber-500/20 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-stone-200 hover:text-amber-400 hover:bg-[#4A0E1C] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-amber-500/15">
            <a
              href="https://wa.me/5585989226425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#360812] font-bold transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              Agendar Consulta
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;