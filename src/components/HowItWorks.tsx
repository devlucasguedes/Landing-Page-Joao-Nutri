"use client"; 

import { useRef, useState } from "react";

export function HowItWorks() {
  const whatsappNumber = "5585989226425";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi como funciona o atendimento no site e gostaria de agendar minha consulta."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Ref do carrossel (tipada como div) e índice do card ativo para as bolinhas
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Calcula qual card está mais centralizado ao rolar
  const handleScroll = () => {
    const el = scrollRef.current;
    const firstCard = el?.firstElementChild as HTMLElement | null;
    if (!el || !firstCard) return;

    const cardWidth = firstCard.offsetWidth + 16; // largura do card + gap (gap-4 = 16px)
    setActive(Math.round(el.scrollLeft / cardWidth));
  };

  const steps = [
    {
      number: "01",
      title: "Anamnese & Rotina",
      description:
        "Conversa detalhada para entender seu histórico de saúde, rotina de trabalho, horários de treino, preferências alimentares e dificuldades.",
      highlight: "Escuta ativa e sem julgamentos"
    },
    {
      number: "02",
      title: "Avaliação Física Completa",
      description:
        "Análise precisa da sua composição corporal (percentual de gordura, massa muscular e circunferências) para mapear seu ponto de partida real.",
      highlight: "Dados exatos para acompanhar a evolução"
    },
    {
      number: "03",
      title: "Plano Montado na Hora",
      description:
        "Construímos juntos o seu planejamento alimentar durante a consulta, garantindo opções práticas e acessíveis para o seu dia a dia.",
      highlight: "Você já sai com a dieta pronta e no app"
    },
    {
      number: "04",
      title: "Suporte & Ajustes Contínuos",
      description:
        "Acompanhamento direto pelo WhatsApp para tirar dúvidas, adaptar refeições em viagens ou eventos e manter sua evolução constante.",
      highlight: "Você nunca fica sem direção entre consultas"
    }
  ];

  return (
    <section
      id="como-funciona"
      className="relative bg-[#2B0A10] text-[#F5F5F7] py-16 md:py-24 border-t border-[#D4AF37]/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#3A0B12] border border-[#D4AF37]/40 text-[#F3C653] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            Metodologia de Atendimento
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-4">
            Como funciona o <span className="text-[#D4AF37]">dia da sua consulta</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F7]/80 leading-relaxed">
            Um processo estruturado em 4 etapas claras para eliminar qualquer dúvida e entregar um planejamento que realmente funciona na prática.
          </p>
        </div>

        {/* Carrossel com swipe no mobile; grid (2 colunas no md, 4 no lg) a partir do tablet */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
            -mx-4 px-4 sm:-mx-6 sm:px-6
            [scrollbar-none] [&::-webkit-scrollbar]:hidden
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:overflow-visible md:snap-none
            md:mx-0 md:px-0 md:pb-0 relative
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                group relative flex flex-col justify-between p-6 rounded-2xl bg-[#3A0B12]
                border border-[#D4AF37]/25 hover:border-[#F3C653] transition-all duration-300 shadow-xl
                shrink-0 w-[80%] sm:w-[60%] snap-center md:w-auto
              "
            >
              <div>
                {/* Topo do Card: Número em destaque + Linha decorativa */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2B0A10] border border-[#D4AF37]/40 text-lg font-extrabold text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#2B0A10] transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-[#D4AF37]/40 to-transparent ml-4"></div>
                </div>

                {/* Título e Descrição */}
                <h3 className="text-xl font-bold text-[#F5F5F7] mb-3 group-hover:text-[#F3C653] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#F5F5F7]/80 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Rodapé do Card: Selo de Valor */}
              <div className="pt-4 border-t border-[#F5F5F7]/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3C653] shrink-0"></span>
                <span className="text-xs font-semibold text-[#F3C653]">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores do carrossel (somente mobile) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-[#D4AF37]" : "w-2 bg-[#D4AF37]/30"
              }`}
            />
          ))}
        </div>

        {/* Bloco Inferior de Fechamento / Chamada para Ação */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#3A0B12] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7]">
              Pronto para dar o primeiro passo na sua evolução?
            </h3>
            <p className="text-sm text-[#F5F5F7]/75 mt-1">
              Consultas disponíveis na modalidade <strong className="text-[#F3C653]">Presencial</strong> e <strong className="text-[#F3C653]">Online</strong> com a mesma qualidade de entrega.
            </p>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-[#2B0A10] bg-[#D4AF37] rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F3C653] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Agendar Meu Horário
          </a>
        </div>

      </div>
    </section>
  );
}