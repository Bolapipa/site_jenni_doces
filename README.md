# Jenni Doces

Site de portfolio e apresentacao comercial da **Jenni Doces**, criado para mostrar trabalhos reais, organizar categorias de produtos e facilitar pedidos pelo WhatsApp.

O projeto foi pensado principalmente para quem acessa pelo celular. A experiencia mobile e prioridade porque a maior parte dos clientes provavelmente chega pelo Instagram, WhatsApp ou compartilhamento direto de link.

## Link do Repositorio

Repositorio no GitHub:

```text
https://github.com/Bolapipa/site_jenni_doces
```

## Objetivo do Site

O site existe para ajudar a cliente a:

- conhecer os doces da Jenni Doces
- ver fotos reais dos trabalhos ja feitos
- entender as principais categorias de produtos
- descobrir como pedir um orcamento
- entrar em contato pelo WhatsApp
- visitar o Instagram como vitrine visual da marca

## Publico Principal

O publico principal e mobile.

Isso significa que as decisoes de layout, navegacao, tamanho de texto, botoes e galerias foram tomadas pensando primeiro em telas pequenas.

Na pratica, o site precisa:

- abrir rapido no celular
- ser facil de rolar
- ter botoes claros
- mostrar fotos sem confundir
- evitar poluicao visual
- deixar o WhatsApp sempre facil de encontrar

## Tecnologias Utilizadas

O projeto usa uma base simples:

- `HTML`
- `CSS`
- `JavaScript`

Nao existe framework principal como React, Next.js, Vue, Astro ou Tailwind nesta versao.

Essa escolha foi feita para manter o projeto:

- simples
- leve
- facil de entender
- facil de alterar
- adequado para um site estatico de portfolio

## Bibliotecas Utilizadas

### GSAP

Usado para animacoes leves de entrada e refinamentos visuais.

Motivo:

- cria transicoes mais suaves
- ajuda a deixar a abertura do site mais elegante
- permite movimento sem transformar o projeto em algo pesado

### PhotoSwipe

Usado para abrir fotos em tela maior ao clicar.

Motivo:

- melhora a experiencia de galeria
- valoriza as fotos dos doces
- permite ver detalhes sem criar paginas extras

## O que o Site Possui Hoje

### Topo com Marca e Menu

O topo contem:

- logo/monograma da Jenni Doces
- links para secoes principais
- comportamento dinamico no mobile

No celular, a barra superior some ao rolar para baixo e aparece ao rolar para cima. Isso deixa a tela mais limpa e da mais espaco para as fotos.

### Hero

Primeira area visual do site.

Contem:

- chamada principal
- botoes de WhatsApp e Instagram
- mosaico com fotos reais
- balao informativo sobre personalizados sob encomenda

O hero foi ajustado para o mobile, evitando que textos fiquem em cima das fotos.

### Categorias

O site trabalha com tres categorias principais:

- `Personalizados`
- `Tradicionais`
- `Datas especiais`

Dentro de `Tradicionais`, a comunicacao explica que existem tradicionais simples e tradicionais especiais, sem criar categorias separadas. Isso deixa a navegacao mais simples.

### Galerias de Fotos

As fotos aparecem em:

- categorias
- portfolio em destaque
- mais fotos

As imagens finais usadas pelo site ficam em:

```text
site-assets/
```

### Como Pedir

Secao que explica o que a cliente precisa enviar para pedir um orcamento.

Essa area reduz duvidas antes do contato pelo WhatsApp.

### Feedbacks de Clientes

A secao de feedbacks ja esta preparada.

Hoje ela usa cards simulados, com visual inspirado em conversa de WhatsApp.

Comportamento atual:

- os cards giram automaticamente
- o movimento e continuo
- o usuario pode arrastar com o dedo no celular
- o movimento automatico volta depois que o usuario solta

Quando os prints reais chegarem, eles podem substituir os exemplos atuais.

### FAQ

Secao de perguntas frequentes para explicar pontos basicos antes do pedido.

## Estrutura de Pastas

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── .vscode/
│   └── extensions.json
├── assets/
├── site-assets/
│   └── img/
├── site-planejamento/
├── index.html
├── mobile-preview.html
├── styles.css
├── script.js
├── package.json
├── package-lock.json
├── README.md
└── README-ASSETS.md
```

## Explicacao dos Arquivos Principais

### `index.html`

Arquivo principal do site.

Responsavel por:

- estrutura da pagina
- textos
- links
- secoes
- imagens
- metadados de SEO

### `styles.css`

Arquivo visual do site.

Responsavel por:

- cores
- fontes
- espacamentos
- responsividade
- layout mobile
- animacoes visuais
- comportamento visual da barra superior

### `script.js`

Arquivo de interacoes.

Responsavel por:

- animacoes de entrada
- menu ativo conforme a rolagem
- barra superior que some e aparece no mobile
- lightbox das fotos
- orbita dos feedbacks
- arraste manual dos cards de feedback

### `mobile-preview.html`

Arquivo auxiliar para testar o site em formato de celular no computador.

Ele nao e a pagina principal do site. Serve apenas para facilitar revisao visual durante o desenvolvimento.

### `site-assets/`

Pasta com imagens finais usadas pelo site.

Essa pasta deve ir para o GitHub porque o site depende dela para funcionar.

### `assets/`

Pasta de curadoria local.

Ela guarda materiais brutos, imagens originais e organizacao de trabalho.

Por padrao, essa pasta fica fora do Git para evitar subir arquivos pesados ou desnecessarios.

### `site-planejamento/`

Pasta com documentacao do processo, decisoes de design, estrutura da home e orientacoes de manutencao.

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

## Scripts Disponiveis

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

## Publicacao no GitHub Pages

O projeto possui um workflow em:

```text
.github/workflows/deploy-pages.yml
```

Esse workflow publica o site no GitHub Pages sempre que houver push na branch `main`.

Ele publica apenas os arquivos necessarios para o site:

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

Depois disso, o workflow `Deploy GitHub Pages` deve publicar o site automaticamente.

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

Comandos basicos:

```powershell
git status
git add .
git commit -m "Descricao da alteracao"
git push
```

## Cuidados com Imagens

Use `site-assets/` para imagens finais do site.

Evite colocar imagens brutas diretamente no HTML.

Antes de adicionar novas fotos:

- escolha imagens com boa iluminacao
- prefira fotos nitidas
- use nomes curtos e descritivos
- mantenha categorias organizadas
- evite arquivos muito pesados

## Cuidados com Feedbacks Reais

Antes de colocar prints de clientes:

- esconda telefone
- esconda foto do cliente
- esconda nome completo, se necessario
- remova informacoes sensiveis
- mantenha apenas o elogio e contexto necessario

O objetivo e mostrar prova social sem expor dados pessoais.

## Manutencao Recomendada

Antes da publicacao final, ainda vale revisar:

- textos finais aprovados pela Jenni
- cores da identidade visual
- fotos que devem ficar em destaque
- prints reais de feedback
- funcionamento em celulares diferentes
- link final do WhatsApp
- SEO e imagem de compartilhamento

## Documentacao Complementar

Leia tambem:

- `README-ASSETS.md`
- `site-planejamento/documentacao-geral.md`
- `site-planejamento/estrutura-home.md`
- `site-planejamento/direcao-home-v2.md`
- `site-planejamento/preview-local.md`
- `site-planejamento/review-qualidade-2026-04-24.md`

## Resumo

Este projeto e um site estatico, mobile-first, criado para valorizar os doces da Jenni Doces e facilitar pedidos pelo WhatsApp.

A base tecnica foi mantida simples de proposito: HTML, CSS e JavaScript, com apoio pontual de GSAP e PhotoSwipe.

O foco principal e entregar uma experiencia bonita, leve, fluida e facil de usar no celular.

