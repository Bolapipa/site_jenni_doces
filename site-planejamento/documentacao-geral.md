# Documentacao geral do projeto - Jenni Doces

## Objetivo deste documento

Este e o documento principal do projeto.

Ele foi escrito para qualquer pessoa conseguir entender:

1. o que e o projeto
2. qual problema ele resolve
3. quais linguagens foram usadas
4. quais bibliotecas foram usadas
5. quais ferramentas ajudaram no desenvolvimento
6. como o site esta organizado
7. por que certas decisoes foram tomadas
8. como continuar o trabalho depois

## Visao geral do projeto

O projeto `Jenni Doces` e um site de portfolio e apresentacao comercial para uma confeitaria focada em brigadeiros personalizados, tradicionais e produtos sazonais.

O objetivo principal do site e:

- mostrar fotos reais dos doces
- organizar os tipos de produto de forma clara
- facilitar contato para pedidos e orcamentos
- transmitir capricho, confianca e identidade visual

## Problema que o site resolve

Antes do site, o conteudo principal da marca estava concentrado em redes sociais.

Isso e bom para descoberta, mas gera algumas limitacoes:

- fotos ficam misturadas em posts
- o cliente precisa navegar demais para entender o trabalho
- nao existe uma estrutura clara de categorias
- o contato pode ficar espalhado

O site resolve isso reunindo:

- portfolio visual
- categorizacao dos produtos
- experiencia mais limpa
- contato principal via WhatsApp

## Publico principal

O projeto foi desenvolvido com foco principal em quem acessa pelo celular.

Essa decisao foi tomada porque:

- a maior parte do publico provavelmente vem de Instagram e WhatsApp
- o cliente desse tipo de negocio costuma navegar no celular
- telas pequenas exigem mais cuidado com clareza e espaco

Por isso, o projeto foi progressivamente ajustado para `mobile-first`.

## Linguagens utilizadas

### HTML

O HTML foi usado para estruturar o conteudo da pagina.

Ele define:

- cabecalho
- hero
- secoes de categorias
- galerias
- FAQ
- links de contato

Por que foi usado:

- e a base semantica da pagina
- facilita acessibilidade
- deixa o projeto simples e compreensivel

### CSS

O CSS foi usado para:

- layout
- cores
- tipografia
- responsividade
- animacoes visuais
- estados do topo no mobile

Por que foi usado:

- permite identidade visual autoral
- evita depender de framework de estilo desnecessario
- ajuda a deixar o site leve

### JavaScript

O JavaScript foi usado para comportamentos interativos.

Principais usos:

- animacoes de entrada
- lightbox de imagens
- destaque da secao atual no menu
- esconder e mostrar a barra superior no mobile
- pequenas logicas de refinamento visual

Por que foi usado:

- apenas onde o CSS sozinho nao resolvia
- com foco em manter a pagina fluida

## Frameworks utilizados

Atualmente, o projeto nao usa um framework principal de aplicacao.

Ou seja:

- nao usa React
- nao usa Next.js
- nao usa Astro
- nao usa Vue
- nao usa Svelte

### Por que essa escolha foi feita

Porque o site atual consegue entregar bem o objetivo com:

- HTML
- CSS
- JavaScript

Essa escolha traz vantagens importantes:

- codigo mais simples
- menos camadas de abstracao
- mais facilidade de manutencao
- carregamento leve

## Bibliotecas utilizadas

### GSAP

Biblioteca usada:

- `GSAP`

Funcao no projeto:

- animacoes suaves de entrada
- refinamento de ritmo visual

Por que foi escolhida:

- e madura
- funciona bem para pequenos refinamentos
- permite animacoes mais bonitas sem exagero

### PhotoSwipe

Biblioteca usada:

- `PhotoSwipe`

Funcao no projeto:

- abrir imagens em tamanho maior ao clicar

Por que foi escolhida:

- e leve para o tipo de uso
- melhora a experiencia de portfolio
- valoriza as fotos sem criar paginas extras`r`n`r`n### Orbita de feedbacks`r`n`r`nEssa parte nao usa framework externo.`r`n`r`nEla foi criada em JavaScript proprio para:`r`n`r`n- manter os cards de feedback girando sem parar`r`n- permitir arraste manual para a esquerda e para a direita`r`n- pausar automaticamente quando a secao sai da tela`r`n- manter a experiencia leve no celular`r`n`r`nPor que foi feita assim:`r`n`r`n- o comportamento desejado era mais especifico que um carrossel comum`r`n- remover uma biblioteca a mais reduziu carregamento`r`n- o codigo ficou mais facil de explicar e ajustar depois`r`n
## Ferramentas utilizadas durante o desenvolvimento

### VSCode

Usado como editor principal do projeto.

### Servidor local simples com Python

Usado para servir o projeto localmente durante o desenvolvimento.

Scripts atuais:

- `npm run preview`
- `npm run preview:simulator`

### Mobile Preview

Foi usado um arquivo auxiliar chamado:

- `mobile-preview.html`

Ele ajudou a revisar o comportamento mobile no proprio computador.

### Celular real

Tambem houve validacao pratica em aparelho celular.

Isso foi importante porque:

- o mockup no PC nao reproduz tudo
- o toque e a leitura real precisam ser sentidos no aparelho

## Estrutura principal de arquivos

Arquivos principais do projeto:

- `index.html`
  - pagina principal do site

- `styles.css`
  - estilos, responsividade e animacoes CSS

- `script.js`
  - interacoes, animacoes e comportamento de navegacao

- `mobile-preview.html`
  - pagina auxiliar para visualizar o site em frame de celular

- `package.json`
  - scripts locais e dependencias

## Estrutura de pastas

Pastas principais:

- `.vscode`
  - configuracoes e recomendacoes para o editor

- `assets`
  - material bruto e curadoria

- `site-assets`
  - imagens prontas para uso no site

- `site-planejamento`
  - documentacao e registros de estrutura/decisao

## Estrutura atual da pagina

A home atual foi organizada para vender de forma visual e simples.

Partes principais:

1. topo com marca e navegacao
2. hero com imagens e botoes de contato
3. bloco de prova visual
4. categorias
5. secoes detalhadas de categoria
6. como pedir
7. portfolio em destaque
8. mais fotos`r`n9. previa de feedbacks`r`n10. FAQ

## Decisao sobre contato

Foi definido que:

- WhatsApp = canal principal de pedido e orcamento
- Instagram = vitrine e apoio visual

Motivo:

- deixa a navegacao mais clara
- evita o cliente ficar em duvida sobre onde deve pedir

## Decisao sobre categorias

Foi definido trabalhar com tres caminhos principais:

- personalizados
- tradicionais
- datas especiais

Motivo:

- facilita entendimento
- evita excesso de categorias
- melhora a experiencia no mobile

### Observacao importante sobre tradicionais

Dentro de `Tradicionais`, a Jenni trabalha com:

- tradicionais simples
- tradicionais especiais

Mas isso nao foi separado em duas categorias diferentes.

Motivo:

- manter a navegacao simples
- comunicar a diferenca no texto, sem criar excesso de opcoes

## Decisao sobre design

O design passou por varias rodadas de refinamento.

Direcao final:

- visual claro
- fundo suave em rosa muito claro
- mais fotos reais
- menos blocos institucionais
- animacoes suaves
- leitura boa no celular

## Decisao sobre mobile-first

Esse ponto foi central no projeto.

Principais consequencias:

- topo compactado
- barra mobile que some e reaparece
- grades pensadas para tela pequena
- menos poluicao visual
- priorizacao de fotos

## Melhorias de UX feitas ao longo do processo

### Barra superior dinamica

Foi criada uma barra que:

- desaparece ao rolar para baixo
- reaparece ao rolar para cima

Motivo:

- liberar espaco no celular
- deixar a tela mais limpa

### Ajuste para notch e camera

A barra mobile precisou ser afastada do topo por causa de:

- notch
- camera frontal
- mockup do preview mobile

Foi por isso que:

- a barra foi abaixada varias vezes
- o preview ganhou espaco reservado no topo

### Hero refinado

Foram feitos ajustes em:

- badge do hero
- composicao de imagens
- chips de sabores
- espacos internos

Motivo:

- deixar a abertura mais bonita
- evitar sobreposicoes ruins no mobile`r`n- manter o balao de texto fora da frente das fotos`r`n- mostrar melhor a foto principal e as imagens de apoio no topo`r`n`r`n### Feedbacks em orbita`r`n`r`nA secao de feedbacks foi preparada antes dos prints reais chegarem.`r`n`r`nEla hoje usa cards simulando conversas para mostrar como a area vai funcionar.`r`n`r`nComportamento atual:`r`n`r`n- os cards passam automaticamente sem parar`r`n- o usuario pode pressionar e arrastar no celular`r`n- o movimento volta sozinho quando o usuario solta`r`n- a animacao 3D e leve para manter a leitura agradavel`r`n`r`nQuando os prints reais chegarem, a ideia e substituir os exemplos atuais pelas imagens tratadas.`r`n
### Portfolio em grade menor

As fotos do portfolio deixaram de ser grandes demais.

Motivo:

- mostrar mais conteudo por tela
- facilitar leitura visual no celular

## Melhorias de performance

O projeto procurou ficar leve desde o inicio.

Cuidados adotados:

- sem framework pesado
- HTML simples
- CSS autoral
- JavaScript enxuto
- `loading="lazy"` nas imagens fora da hero
- uso de `fetchpriority="high"` na imagem principal
- remocao de dependencias que nao eram mais usadas`r`n- reducao de atrasos nas animacoes de entrada`r`n- cuidado para revelar secoes mais cedo durante a rolagem

## Comentarios e legibilidade de codigo

O projeto foi mantendo a preocupacao com:

- nomes claros
- comentarios curtos e uteis
- separacao por responsabilidade
- facil leitura do HTML, CSS e JS

## O que ficou para depois

Algumas partes estao previstas, mas ainda dependem de decisao ou material real:`r`n`r`n- prints reais de feedbacks de clientes
- curadoria final de todos os textos
- revisao final de cores com aprovacao da Jenni
- publicacao definitiva

## Como continuar o projeto depois

Fluxo recomendado para futuras manutencoes:

1. revisar feedback da Jenni
2. ajustar textos, nomes e frases
3. continuar curadoria das fotos
4. substituir os cards simulados por prints reais de feedbacks
5. revisar mobile em aparelho real
6. publicar versao final

## Documentos complementares

Este documento funciona melhor junto com:

- [README-ASSETS.md](F:\Projeto_jenni_doces\README-ASSETS.md)
- [estrutura-home.md](F:\Projeto_jenni_doces\site-planejamento\estrutura-home.md)
- [direcao-home-v2.md](F:\Projeto_jenni_doces\site-planejamento\direcao-home-v2.md)
- [preview-local.md](F:\Projeto_jenni_doces\site-planejamento\preview-local.md)

## Resumo final

Se alguem novo ler apenas esta parte, ja consegue entender o essencial:

- o projeto e um site de portfolio comercial para a `Jenni Doces`
- a base atual usa `HTML`, `CSS` e `JavaScript`
- usa `GSAP` e `PhotoSwipe` como bibliotecas auxiliares
- foi desenvolvido com foco principal em `mobile`
- a experiencia foi refinada para ficar visual, leve, simples e elegante
- a documentacao foi separada por assunto para facilitar manutencao futura

