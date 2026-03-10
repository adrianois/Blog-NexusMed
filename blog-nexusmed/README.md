# Blog NexusMed

> **Gestão completa para clínicas modernas.**

Blog especializado em gestão clínica, desenvolvido com Next.js 15 + TypeScript + Tailwind CSS.

## 🚀 Como rodar localmente

```bash
cd blog-nexusmed
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
blog-nexusmed/
├── app/
│   ├── layout.tsx          # Layout global com Header e Footer
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Variáveis de design NexusMed + Tailwind
│   ├── blog/
│   │   ├── page.tsx        # Listagem de todos os artigos
│   │   └── [slug]/
│   │       └── page.tsx    # Página de artigo individual
│   ├── categorias/
│   │   └── [categoria]/
│   │       └── page.tsx    # Página de categoria
│   └── sobre/
│       └── page.tsx        # Sobre o blog
├── components/
│   ├── Header.tsx          # Navegação principal com menu dropdown
│   ├── Footer.tsx          # Rodapé com links e categorias
│   ├── Hero.tsx            # Banner principal da home
│   ├── CategoryGrid.tsx    # Grid de categorias
│   ├── PostCard.tsx        # Card de artigo
│   ├── FeaturedPosts.tsx   # Seção de posts em destaque
│   ├── PostHeader.tsx      # Cabeçalho do artigo individual
│   └── Newsletter.tsx      # CTA de inscrição por e-mail
└── lib/
    ├── posts.ts            # Dados e funções dos artigos
    └── categories.ts       # Definição das categorias
```

## 🎨 Identidade Visual NexusMed

| Token | Valor | Uso |
|---|---|---|
| `--nexus-primary` | `#0F6FBF` | Cor principal (azul) |
| `--nexus-primary-dark` | `#0A4F8A` | Títulos, gradiente |
| `--nexus-accent` | `#00C7A3` | Destaque (verde-água) |
| `--nexus-gray-900` | `#0F172A` | Fundo do footer |

## 📝 Adicionando Novos Artigos

Edite o arquivo `lib/posts.ts` e adicione um novo objeto ao array `POSTS`:

```ts
{
  slug: 'meu-novo-artigo',
  title: 'Título do Artigo',
  excerpt: 'Resumo breve do conteúdo.',
  content: `<h2>...</h2><p>...</p>`,
  category: 'gestao-financeira', // slug da categoria
  categoryName: 'Gestão Financeira',
  author: 'Nome do Autor',
  authorRole: 'Cargo',
  date: '2026-03-10',
  readTime: 5,
  tags: ['tag1', 'tag2'],
  coverEmoji: '💡',
}
```

## 🗂️ Categorias Disponíveis

- `gestao-financeira` — Gestão Financeira
- `experiencia-do-paciente` — Experiência do Paciente
- `tecnologia-em-saude` — Tecnologia em Saúde
- `regulamentacao` — Regulamentação
- `marketing-medico` — Marketing Médico
- `gestao-de-equipes` — Gestão de Equipes

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
