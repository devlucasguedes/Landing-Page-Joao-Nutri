# Landing Page | João Nutri

Landing page profissional para um nutricionista esportivo, focada em converter visitantes em consultas agendadas pelo WhatsApp.

## Funcionalidades

- Design responsivo (testado de 320px até desktop)
- Carrossel com swipe e indicadores nos cards de **Depoimentos** e **Como Funciona** no celular
- Menu fixo com menu mobile e rolagem até cada seção
- FAQ em formato accordion
- Botões de CTA com mensagem pré-pronta no WhatsApp
- Imagens otimizadas com `next/image`

## Seções

| Seção | Componente | Âncora |
|---|---|---|
| Início | `Hero.tsx` | `#inicio` |
| Sobre | `About.tsx` | `#sobre` |
| Como Funciona | `HowItWorks.tsx` | `#como-funciona` |
| Depoimentos | `Testimonials.tsx` | `#depoimentos` |
| Dúvidas | `Faq.tsx` | `#faq` |
| Rodapé | `Footer.tsx` | - |

## Tecnologias

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) (ícones)

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
# 1. Clonar o repositório
git clone https://github.com/<seu-usuario>/landingpage-joaonutri.git

# 2. Entrar na pasta
cd landingpage-joaonutri

# 3. Instalar as dependências
npm install

# 4. Rodar em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
npm run build   # gera a versão de produção
npm run start   # roda a versão de produção
npm run lint    # verifica problemas no código
```

## Estrutura do projeto

```
src/
├── app/            # layout, página principal e estilos globais
├── components/     # seções da landing page (Hero, About, Faq...)
│   ├── layout/
│   ├── sections/
│   └── ui/
├── hooks/
├── lib/
├── services/
├── types/
└── utils/
public/
└── images/         # fotos e logo (nomes de pasta e arquivos em minúsculo)
```

## Personalização

- **Número do WhatsApp:** está definido em mais de um arquivo (`Navbar`, `Hero`, `About`, `HowItWorks`, `Faq`). Ao trocar, atualize todos.
- **Textos de depoimentos e etapas:** ficam nos arrays no topo de `Testimonials.tsx` e `HowItWorks.tsx`, e o FAQ em `Faq.tsx`.
- **Fotos e logo:** substitua os arquivos em `public/images/`.
- **Favicon:** substitua `src/app/favicon.ico`.

### Paleta de cores

| Uso | Cor |
|---|---|
| Fundo principal | `#2B0A10` |
| Cards | `#3A0B12` |
| Dourado | `#D4AF37` / `#F3C653` |
| Texto | `#F5F5F7` |

## Deploy

O jeito mais simples é pela [Vercel](https://vercel.com/new): importe o repositório do GitHub e o deploy é automático a cada `git push`.

> Em servidores Linux (como a Vercel) o caminho dos arquivos diferencia maiúsculas de minúsculas. Mantenha `images/` e os nomes de arquivos sempre em minúsculo.

## Autor

Desenvolvido por **Lucas** · [GitHub](https://github.com/devlucasguedes)