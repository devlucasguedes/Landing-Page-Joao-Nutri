export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      goal: "Hipertrofia & Rendimento nos Treinos",
      photo: "/images/foto-hero.jpeg",
      quote:
        "Eu achava que precisava viver à base de frango e batata-doce para ganhar massa. O Dr. João ajustou minha dieta com alimentos que eu já gosto e minha energia nos treinos mudou completamente logo nas primeiras semanas.",
      highlight: "Acompanhamento há 6 meses"
    },
    {
      name: "Mariana Silva",
      goal: "Emagrecimento & Reeducação Alimentar",
      photo: "/images/foto-hero.jpeg",
      quote:
        "Já tinha tentado várias dietas restritivas e sempre desistia. Ter o plano montado junto comigo na consulta e o suporte direto no WhatsApp fez toda a diferença para manter a constância sem sofrimento.",
      highlight: "Atendimento Presencial"
    },
    {
      name: "Rafael Mendes",
      goal: "Performance em Corrida & Definição",
      photo: "/images/foto-hero.jpeg",
      quote:
        "O planejamento foi 100% adaptado à minha rotina corrida de trabalho e treinos. Hoje tenho muito mais disposição no dia a dia e consegui evoluir meu condicionamento físico sem passar fome.",
      highlight: "Atendimento Online"
    }
  ];

  return (
    <section
      id="depoimentos"
      className="relative bg-[#2B0A10] text-[#F5F5F7] py-16 md:py-24 border-t border-[#D4AF37]/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#3A0B12] border border-[#D4AF37]/40 text-[#F3C653] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            Prova Social
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-4">
            Histórias reais de quem <span className="text-[#D4AF37]">transformou a rotina</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F7]/80 leading-relaxed">
            Mais do que números na balança: veja o relato de pacientes que conquistaram saúde, constância e alta performance através de um acompanhamento humanizado.
          </p>
        </div>

        {/* Grid de Cards de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl bg-[#3A0B12] border border-[#D4AF37]/25 hover:border-[#F3C653] overflow-hidden shadow-xl transition-all duration-300"
            >
              <div>
                {/* Área da Foto (Nutricionista + Paciente) */}
                <div className="relative h-56 w-full bg-[#2B0A10] overflow-hidden">
                  <img
                    src={item.photo}
                    alt={`Nutricionista João junto com o paciente ${item.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Degradê suave na base da imagem */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#3A0B12] via-transparent to-transparent"></div>
                  
                  {/* Tag da Modalidade/Tempo sobre a foto */}
                  <span className="absolute top-3 right-3 py-1 px-2.5 rounded-full bg-[#2B0A10]/90 border border-[#D4AF37]/40 text-[#F3C653] text-[11px] font-bold tracking-wide">
                    {item.highlight}
                  </span>
                </div>

                {/* Conteúdo do Relato */}
                <div className="p-6 pt-3">
                  {/* 5 Estrelas em Dourado */}
                  <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="text-sm text-[#F5F5F7]/85 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Rodapé do Card: Nome e Objetivo do Paciente */}
              <div className="px-6 py-4 bg-[#2B0A10]/50 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#F5F5F7]">{item.name}</h3>
                  <p className="text-xs text-[#F3C653] font-medium mt-0.5">{item.goal}</p>
                </div>
                
                {/* Ícone decorativo de aspas */}
                <svg className="w-6 h-6 text-[#D4AF37]/30 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Nota discreta de conformidade ética */}
        <p className="text-center text-xs text-[#F5F5F7]/50 mt-10">
          * Depoimentos reais de pacientes acompanhados. Os resultados variam de acordo com a individualidade biológica e aderência de cada pessoa.
        </p>

      </div>
    </section>
  );
}