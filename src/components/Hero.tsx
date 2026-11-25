export function Hero() {
  const whatsappNumber = "5585989226425"; 
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi seu site e gostaria de agendar uma consulta nutricional."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    
    <section id="inicio" className="pt-19 pb-7 md:pt-27 md:pb-15 relative bg-[#2B0A10] text-[#F5F5F7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Texto (Esquerda no Desktop, Topo no Mobile) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag / Especialidade (typo corrigido: "Performance") */}
            <span className="inline-block py-1 px-3 rounded-full bg-[#3A0B12] border border-[#D4AF37]/40 text-[#F3C653] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
              Performance Para a Vida Real
            </span>

            {/* Título Principal (H1): fonte menor só em telas abaixo de 360px */}
            <h1 className="text-[1.65rem] min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight mb-6">
              Alcance o máximo da sua <span className="text-[#D4AF37]">performance e estética</span> com estratégia nutricional.
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#F5F5F7]/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Acompanhamento nutricional individualizado, prático e baseado em ciência. Potencialize seus treinos, ganhe massa muscular ou defina sem dietas genéricas.
            </p>

            {/* Área dos Botões (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-bold text-[#2B0A10] bg-[#D4AF37] rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F3C653] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {/* Ícone do WhatsApp em SVG */}
                <svg 
                  className="w-5 h-5 mr-2 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                </svg>
                Agendar Minha Consulta
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-[#F5F5F7] bg-[#3A0B12] border border-[#D4AF37]/30 rounded-xl hover:border-[#F3C653] hover:text-[#F3C653] transition-colors duration-200"
              >
                Conhecer o Atendimento
              </a>
            </div>

            {/* Micro-prova social / Credencial */}
            <div className="mt-8 pt-6 border-t border-[#F5F5F7]/15 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-[#F5F5F7]/70">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span>Atendimento Presencial e Online</span>
              </div>
              <span className="hidden sm:inline text-[#D4AF37]/50">•</span>
              <span>CRN-11 00000</span>
            </div>
          </div>

          {/* Coluna da Imagem (Direita no Desktop, Base no Mobile) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Elemento decorativo atrás da foto: encosta na foto e inclina pouco no celular */}
              <div className="absolute inset-0 sm:-inset-2 bg-[#3A0B12] border border-[#D4AF37]/30 rounded-3xl transform rotate-2 sm:rotate-3"></div>
              
              {/* Container da Foto */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#3A0B12] border border-[#D4AF37]/20 aspect-4/5">
                <img
                  src="/images/foto-hero.jpeg"
                  alt="Nutricionista João em consultório"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card Flutuante de Destaque: dentro da foto no celular, flutuando na lateral do sm pra cima (max-w corrigido) */}
              <div className="absolute -bottom-6 left-3 right-3 sm:right-auto sm:-left-6 sm:max-w-57.5 bg-[#3A0B12] p-4 rounded-xl shadow-xl border border-[#D4AF37]/40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#F3C653]"></span>
                  <p className="text-xs text-[#F3C653] font-bold uppercase tracking-wider">Consultoria VIP</p>
                </div>
                <p className="text-sm font-semibold text-[#F5F5F7]">
                  Plano alimentar entregue em até 48 horas úteis após o atendimento.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}