export function About() {
  const whatsappNumber = "5585989226425";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi sua trajetória no site e gostaria de saber mais sobre o acompanhamento."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const credentials = [
    {
      title: "Formação Acadêmica",
      description: "Graduação em Nutrição com foco em Fisiologia do Exercício e Metabolismo."
    },
    {
      title: "Especialização",
      description: "Pós-graduado em Nutrição Esportiva, Hipertrofia e Emagrecimento Avançado."
    },
    {
      title: "Atendimento Individualizado",
      description: "Protocolos 100% ajustados à sua rotina, preferências e exames bioquímicos."
    },
    {
      title: "Registro Profissional",
      description: "Atuação ética e baseada em evidências científicas (CRN-11 00000)."
    }
  ];

  return (
    <section id="sobre" className="relative bg-[#2B0A10] text-[#F5F5F7] py-16 md:py-24 border-t border-[#D4AF37]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Foto (Esquerda no Desktop para alternar o ritmo visual com a Hero) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Moldura decorativa deslocada */}
              <div className="absolute -inset-3 border-2 border-[#D4AF37]/30 rounded-2xl transform -rotate-2"></div>
              
              {/* Container da Foto */}
              <div className="relative rounded-2xl overflow-hidden bg-[#3A0B12] border border-[#D4AF37]/20 shadow-2xl aspect-4/5">
                <img
                  src="/images/foto-hero.jpeg"
                  alt="Nutricionista João em atendimento"
                  className="w-full h-full object-cover object-center"
                />
                {/* Degradê sutil na base da foto para dar acabamento */}
                <div className="absolute inset-0 bg-linear-to-t from-[#2B0A10]/80 via-transparent to-transparent"></div>
                
                {/* Assinatura / Nome sobre a base da foto */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-bold text-[#F5F5F7]">Dr. João Lucas</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F3C653]">
                    Nutricionista Esportivo & Clínico
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo (Direita no Desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-[#3A0B12] border border-[#D4AF37]/40 text-[#F3C653] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
              Sobre o Especialista
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-6">
              Ciência aplicada à prática para <span className="text-[#D4AF37]">resultados reais</span> e sustentáveis.
            </h2>

            <div className="space-y-4 text-base text-[#F5F5F7]/80 leading-relaxed mb-8">
              <p>
                Acredito que uma estratégia nutricional eficiente não precisa ser sinônimo de sofrimento ou restrições extremas. Meu trabalho é unir a precisão da nutrição esportiva à realidade da sua rotina.
              </p>
              <p>
                Seja o seu objetivo hipertrofia, definição muscular, melhora de rendimento nos treinos ou saúde metabólica, cada detalhe do seu planejamento é pensado para gerar aderência e evolução constante.
              </p>
            </div>

            {/* Grid de Diferenciais / Credenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              {credentials.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-[#3A0B12] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {/* Ícone de Check Dourado */}
                    <svg className="w-4 h-4 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-sm font-bold text-[#F3C653]">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F5F7]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Secundário */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-[#2B0A10] bg-[#D4AF37] rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F3C653] transition-all duration-200"
              >
                Falar Diretamente Comigo
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}