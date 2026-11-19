"use client";

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Como funciona o atendimento? É presencial ou online?",
    answer:
      "Atendo tanto de forma presencial no consultório quanto 100% online por videochamada, com a mesma estrutura, suporte e entrega do plano alimentar. Na modalidade online, você recebe todas as orientações detalhadas para realizar suas medidas de acompanhamento com segurança."
  },
  {
    question: "Você atende por plano de saúde?",
    answer:
      "Os atendimentos são exclusivamente particulares para garantir uma consulta sem pressa, individualizada e com acompanhamento próximo entre as sessões. No entanto, emitimos recibo/nota fiscal para que você possa solicitar o reembolso junto ao seu convênio, caso o seu plano ofereça essa opção."
  },
  {
    question: "O plano alimentar é entregue na hora?",
    answer:
      "Construímos a base do seu planejamento juntos durante a consulta, respeitando seus horários, preferências e rotina. Em até 48 horas úteis após o atendimento, você recebe o plano completo, lista de substituições e materiais de apoio diretamente no aplicativo exclusivo e no seu WhatsApp."
  },
  {
    question: "Vou precisar cortar tudo o que gosto ou comprar alimentos caros?",
    answer:
      "De forma alguma. A estratégia é baseada em comida de verdade, acessível e adaptada à sua realidade financeira e rotina. Trabalhamos com flexibilidade e equilíbrio para que você tenha resultados consistentes sem terrorismo nutricional."
  },
  {
    question: "Como funciona o retorno e o acompanhamento após a consulta?",
    answer:
      "O acompanhamento inclui suporte direto pelo WhatsApp para tirar dúvidas sobre substituições, refeições fora de casa ou ajustes pontuais. O retorno para reavaliação física e evolução da estratégia é agendado conforme o protocolo escolhido."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos PIX, transferência bancária e cartão de crédito (com opção de parcelamento nos planos de acompanhamento)."
  }
];

export default function Faq(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
            Tire suas dúvidas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#4A0E1C]">
            Dúvidas Frequentes
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Reuni as principais perguntas sobre como funciona a consulta e o acompanhamento para você agendar com total segurança.
          </p>
        </div>

        {/* Lista de Perguntas (Accordion) */}
        <div className="space-y-4">
          {faqData.map((item: FaqItem, index: number) => {
            const isOpen: boolean = openIndex === index;

            return (
              <div
                key={item.question}
                className={`border rounded-xl transition-all duration-200 bg-white ${
                  isOpen
                    ? 'border-[#5C1324] shadow-md'
                    : 'border-stone-200 hover:border-amber-500/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span
                    className={`font-semibold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[#4A0E1C]' : 'text-stone-800'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#4A0E1C] text-amber-400 rotate-180'
                        : 'bg-stone-100 text-[#4A0E1C]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {/* Conteúdo Expansível */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 leading-relaxed border-t border-stone-100">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA de Apoio ao WhatsApp */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#4A0E1C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-400">
              Ainda ficou com alguma dúvida específica?
            </h3>
            <p className="text-stone-200 text-sm sm:text-base mt-1">
              Fale diretamente com nossa equipe no WhatsApp antes de agendar seu horário.
            </p>
          </div>
          <a
            href="https://wa.me/5585989226425?text=Olá!%20Vi%20o%20site%20e%20tenho%20uma%20dúvida%20sobre%20a%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#360812] font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}