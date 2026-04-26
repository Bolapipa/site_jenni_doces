# Jenni Doces

Site de portfólio e apresentação comercial da **Jenni Doces**, criado para mostrar trabalhos reais, organizar categorias de produtos e facilitar pedidos pelo WhatsApp.

O projeto foi pensado principalmente para quem acessa pelo celular. A experiência mobile é prioridade porque a maior parte dos clientes provavelmente chega pelo Instagram, WhatsApp ou por compartilhamento direto de link.

## Link do Repositório

Repositório no GitHub:

```text
https://github.com/Bolapipa/site_jenni_doces
```

## Objetivo do Site

O site existe para ajudar a cliente a:

- conhecer os doces da Jenni Doces
- ver fotos reais dos trabalhos já feitos
- entender as principais categorias de produtos
- descobrir como pedir um orçamento
- entrar em contato pelo WhatsApp
- visitar o Instagram como vitrine visual da marca

## Público Principal

O público principal é mobile.

Isso significa que as decisões de layout, navegação, tamanho de texto, botões e galerias foram tomadas pensando primeiro em telas pequenas.

Na prática, o site precisa:

- abrir rápido no celular
- ser fácil de rolar
- ter botões claros
- mostrar fotos sem confundir
- evitar poluição visual
- deixar o WhatsApp fácil de encontrar

## Tecnologias Utilizadas

O projeto usa uma base simples:

- `HTML`
- `CSS`
- `JavaScript`

Não existe framework principal como React, Next.js, Vue, Astro ou Tailwind nesta versão.

Essa escolha foi feita para manter o projeto:

- simples
- leve
- fácil de entender
- fácil de alterar
- adequado para um site estático de portfólio

## Bibliotecas Utilizadas

### GSAP

Usado para animações leves de entrada e refinamentos visuais.

Motivo:

- cria transições mais suaves
- ajuda a deixar a abertura do site mais elegante
- permite movimento sem transformar o projeto em algo pesado

### PhotoSwipe

Usado para abrir fotos em tela maior ao clicar.

Motivo:

- melhora a experiência de galeria
- valoriza as fotos dos doces
- permite ver detalhes sem criar páginas extras

## O Que o Site Possui Hoje

### Topo com Marca e Menu

O topo contém:

- logo/monograma da Jenni Doces
- links para seções principais
- comportamento dinâmico no mobile

No celular, a barra superior some ao rolar para baixo e aparece ao rolar para cima. Isso deixa a tela mais limpa e dá mais espaço para as fotos.

### Hero

Primeira área visual do site.

Contém:

- chamada principal
- botões de WhatsApp e Instagram
- mosaico com fotos reais
- balão informativo sobre personalizados sob encomenda

O hero foi ajustado para o mobile, evitando que textos fiquem em cima das fotos.

### Categorias

O site trabalha com três categorias principais:

- `Personalizados`
- `Tradicionais`
- `Datas especiais`

Dentro de `Tradicionais`, a comunicação explica que existem tradicionais simples e tradicionais especiais, sem criar categorias separadas. Isso deixa a navegação mais simples.

### Galerias de Fotos

As fotos aparecem em:

- categorias
- portfólio em destaque
- mais fotos

As imagens finais usadas pelo site ficam em:

```text
site-assets/
```

### Como Pedir

Seção que explica o que a cliente precisa enviar para pedir um orçamento.

Essa área reduz dúvidas antes do contato pelo WhatsApp.

### Feedbacks de Clientes

A seção de feedbacks já está preparada.

Hoje ela usa cards simulados, com visual inspirado em conversa de WhatsApp.

Comportamento atual:

- os cards giram automaticamente
- o movimento é contínuo
- o usuário pode arrastar com o dedo no celular
- o movimento automático volta depois que o usuário solta

Quando os prints reais chegarem, eles podem substituir os exemplos atuais.

### FAQ

Seção de perguntas frequentes para explicar pontos básicos antes do pedido.

## Estrutura de Pastas

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- .vscode/
|   `-- extensions.json
|-- assets/
|-- site-assets/
|   `-- img/
|-- site-planejamento/
|-- index.html
|-- mobile-preview.html
|-- styles.css
|-- script.js
|-- package.json
|-- package-lock.json
|-- README.md
`-- README-ASSETS.md
```

## Explicação dos Arquivos Principais

### `index.html`

Arquivo principal do site.

Responsável por:

- estrutura da página
- textos
- links
- seções
- imagens
- metadados de SEO

### `styles.css`

Arquivo visual do site.

Responsável por:

- cores
- fontes
- espaçamentos
- responsividade
- layout mobile
- animações visuais
- comportamento visual da barra superior

### `script.js`

Arquivo de interações.

Responsável por:

- animações de entrada
- menu ativo conforme a rolagem
- barra superior que some e aparece no mobile
- lightbox das fotos
- órbita dos feedbacks
- arraste manual dos cards de feedback

### `mobile-preview.html`

Arquivo auxiliar para testar o site em formato de celular no computador.

Ele não é a página principal do site. Serve apenas para facilitar a revisão visual durante o desenvolvimento.

### `site-assets/`

Pasta com imagens finais usadas pelo site.

Essa pasta deve ir para o GitHub porque o site depende dela para funcionar.

### `assets/`

Pasta de curadoria local.

Ela guarda materiais brutos, imagens originais e organização de trabalho.

Por padrão, essa pasta fica fora do Git para evitar subir arquivos pesados ou desnecessários.

### `site-planejamento/`

Pasta com documentação do processo, decisões de design, estrutura da home e orientações de manutenção.

## Como Rodar Localmente

Entre na pasta do projeto:

```powershell
cd F:\Projeto_jenni_doces
```

Suba o servidor local:

```powershell
npm run preview
```

Abra no navegador:

```text
http://127.0.0.1:4173
```

Para ver o mockup mobile no computador:

```text
http://127.0.0.1:4173/mobile-preview.html
```

## Scripts Disponíveis

No `package.json` existem estes scripts:

```json
{
  "preview": "python -m http.server 4173 --bind 127.0.0.1",
  "preview:simulator": "python -m http.server 5173 --bind 127.0.0.1"
}
```

### `npm run preview`

Sobe o site localmente na porta `4173`.

### `npm run preview:simulator`

Sobe uma segunda porta para uso com simuladores mobile no VSCode.

## Publicação no GitHub Pages

O projeto possui um workflow em:

```text
.github/workflows/deploy-pages.yml
```

Esse workflow publica o site no GitHub Pages sempre que houver push na branch `main`.

Ele publica apenas os arquivos necessários para o site:

- `index.html`
- `mobile-preview.html`
- `styles.css`
- `script.js`
- `site-assets/`

## Como Ativar o GitHub Pages

Depois do primeiro push, entre no GitHub:

```text
Settings > Pages
```

Em **Build and deployment**, selecione:

```text
Source: GitHub Actions
```

Depois disso, o workflow `Publicar site no GitHub Pages` deve publicar o site automaticamente.

O link final normalmente fica neste formato:

```text
https://bolapipa.github.io/site_jenni_doces/
```

## Como Atualizar o Site

Fluxo recomendado:

1. Alterar os arquivos localmente.
2. Testar no preview local.
3. Conferir o mobile.
4. Criar commit.
5. Fazer push para o GitHub.
6. Aguardar o GitHub Pages publicar.

Comandos básicos:

```powershell
git status
git add .
git commit -m "Descreva a alteração em português"
git push
```

## Padrão de Commits

Use mensagens de commit em português do Brasil.

Bons exemplos:

```text
Ajusta layout mobile do topo
Atualiza fotos da galeria de personalizados
Corrige texto da seção Como pedir
Melhora documentação do projeto
Publica ajustes no GitHub Pages
```

Evite mensagens genéricas como:

```text
update
fix
changes
deploy
```

Uma boa mensagem deve explicar rapidamente o que mudou.

## Cuidados com Imagens

Use `site-assets/` para imagens finais do site.

Evite colocar imagens brutas diretamente no HTML.

Antes de adicionar novas fotos:

- escolha imagens com boa iluminação
- prefira fotos nítidas
- use nomes curtos e descritivos
- mantenha categorias organizadas
- evite arquivos muito pesados

## Cuidados com Feedbacks Reais

Antes de colocar prints de clientes:

- esconda telefone
- esconda foto do cliente
- esconda nome completo, se necessário
- remova informações sensíveis
- mantenha apenas o elogio e contexto necessário

O objetivo é mostrar prova social sem expor dados pessoais.

## Manutenção Recomendada

Antes da publicação final, ainda vale revisar:

- textos finais aprovados pela Jenni
- cores da identidade visual
- fotos que devem ficar em destaque
- prints reais de feedback
- funcionamento em celulares diferentes
- link final do WhatsApp
- SEO e imagem de compartilhamento

## Documentação Complementar

Leia também:

- `README-ASSETS.md`
- `site-planejamento/documentacao-geral.md`
- `site-planejamento/estrutura-home.md`
- `site-planejamento/direcao-home-v2.md`
- `site-planejamento/preview-local.md`
- `site-planejamento/review-qualidade-2026-04-24.md`

## Resumo

Este projeto é um site estático, mobile-first, criado para valorizar os doces da Jenni Doces e facilitar pedidos pelo WhatsApp.

A base técnica foi mantida simples de propósito: HTML, CSS e JavaScript, com apoio pontual de GSAP e PhotoSwipe.

O foco principal é entregar uma experiência bonita, leve, fluida e fácil de usar no celular.

