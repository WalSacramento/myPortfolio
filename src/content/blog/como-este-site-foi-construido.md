---
title: Como este site foi construído
description: Por que escolhi Astro, como organizo o conteúdo em Markdown e como o site fica rápido e fácil de versionar.
pubDate: 2026-11-23
tags: [astro, markdown, seo]
---

Este site é o meu novo portfólio e blog. A ideia é simples: um lugar para registrar meu fluxo de desenvolvimento, as skills que uso e as ideias de projetos que quero construir.

## Por que Astro

O [Astro](https://astro.build) gera páginas HTML estáticas por padrão, com pouco JavaScript no navegador. Isso ajuda em desempenho e em SEO, porque o conteúdo já chega pronto para os buscadores.

## Conteúdo em Markdown

Cada post é um arquivo `.md` em `src/content/blog/`. O cabeçalho (frontmatter) define título, descrição, data e tags, e o Astro valida esses campos com um schema. As skills seguem o mesmo modelo, em `src/content/skills/`.

```md
---
title: Meu post
description: Resumo curto para buscadores.
pubDate: 2026-11-23
tags: [exemplo]
---

Conteúdo do post em Markdown.
```

## Versionado no git

Como tudo é texto puro, o histórico do git registra a evolução de cada post e de cada skill. Isso serve tanto como portfólio de processo quanto como documentação viva do meu trabalho.

Nos próximos posts vou contar sobre projetos, decisões técnicas e as ferramentas que uso no dia a dia.
