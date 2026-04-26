# Direcao visual e tecnica da Home v2

## Objetivo deste documento

Este arquivo registra a linha de design e as decisoes tecnicas da versao atual da home.

Ele existe para responder:

1. Qual estilo visual foi escolhido.
2. Quais referencias inspiraram a pagina.
3. O que foi ajustado ao longo do processo.
4. Como a experiencia mobile foi priorizada.
5. Quais bibliotecas e tecnicas estao sendo usadas.

## Direcao geral escolhida

A direcao final da home seguiu esta ideia:

- menos cara de `site padrao`
- menos cara de `portfolio de programador`
- mais cara de `marca boutique`
- mais foco em fotos reais
- mais cuidado com leitura em celular

## Linha visual adotada

O site foi sendo puxado para uma combinacao de:

- delicadeza
- vitrine premium
- simplicidade comercial
- movimento suave

## O que foi evitado de proposito

Algumas possibilidades foram consideradas e nao viraram base do projeto:

- excesso de 3D
- excesso de animacoes pesadas
- visual muito futurista
- interface com cara de site de tecnologia
- estrutura muito institucional

O motivo foi simples:

o objetivo do site e vender doces, confianca e capricho, e nao mostrar excesso de tecnologia.

## Referencias que influenciaram a pagina

Durante o processo, varias referencias visuais foram analisadas.

A direcao escolhida combinou principalmente:

- landing pages mais elegantes
- sites de confeitaria com foco em produto
- vitrines visuais com boa experiencia mobile

## Ajustes importantes ao longo da evolucao

### 1. Hero mais comercial

O hero foi encurtado e ficou mais claro.

O objetivo passou a ser:

- mostrar doces bonitos
- explicar rapidamente o que a Jenni faz
- direcionar para o contato principal

### 2. WhatsApp como canal principal

O projeto deixou claro que:

- Instagram = vitrine
- WhatsApp = pedido e orcamento

Isso evitou confusao na navegacao.

### 3. Menos botoes repetidos

Ao longo do processo, varios CTAs repetidos foram removidos.

Motivo:

- reduzir poluicao visual
- deixar a pagina mais elegante
- evitar cansaco de leitura

### 4. Mais fotos reais ao longo do site

O site passou a usar mais imagens do acervo.

Motivo:

- dar mais riqueza visual
- valorizar o trabalho real da marca
- reduzir dependencia de texto para convencer a cliente

### 5. Portfolio e Mais fotos com miniaturas quadradas

Essas secoes foram reformuladas.

Motivo:

- no celular, miniaturas menores funcionam melhor
- mais fotos por tela
- leitura visual mais rapida

### 6. Categorias simplificadas

As categorias ficaram reduzidas a tres caminhos principais:

- personalizados
- tradicionais
- datas especiais

Motivo:

- facilitar decisao
- evitar categorias demais
- manter a navegacao intuitiva

## Direcao mobile-first

Esse projeto foi ajustado para tratar o celular como prioridade.

Isso afetou:

- ordem das informacoes
- quantidade de texto
- tamanho de elementos
- forma de apresentar galerias
- comportamento do topo

## Principais refinamentos mobile

### Topo compacto

O topo foi reduzido e ajustado varias vezes para caber melhor em telas pequenas.

### Topo que some e reaparece

Foi implementado um comportamento onde:

- ao rolar para baixo, o topo some
- ao rolar para cima, o topo reaparece

Motivo:

- liberar area util para as fotos
- deixar a experiencia mais limpa

### Ajustes por causa do notch e da camera

Na visualizacao mobile, a barra superior precisou considerar:

- notch
- camera frontal
- area segura no topo

Por isso, foram adicionados:

- recuos maiores no topo mobile
- uso de `safe-area-inset-top`
- ajustes extras no mockup de `mobile-preview.html`

### Hero refinado para o celular

O hero recebeu varios ajustes:

- reposicionamento da badge
- mais espaco visual
- melhor leitura da composicao de fotos
- composicao em mosaico no mobile
- balao de texto fora da frente das imagens principais

### Categorias com leitura melhor

Os cards de categoria foram refinados para:

- centralizar melhor textos
- equilibrar altura visual
- manter CTA alinhado
- facilitar escaneabilidade

## Paleta de cores

Ao longo do projeto, o fundo e a interface foram suavizados.

Direcao escolhida:

- rosa muito claro
- quase branco
- tons quentes
- contraste delicado

Motivo:

- combinar com confeitaria
- reduzir cansaco visual no mobile
- evitar fundo muito alaranjado

## Tipografia

O projeto usa uma combinacao pensada para:

- ter personalidade nos titulos
- manter leitura facil em blocos menores

Fontes usadas:

- `Cormorant Garamond`
  - usada nos titulos mais expressivos

- `Manrope`
  - usada em textos e elementos funcionais

- `Allura`
  - usada em parte da assinatura visual da marca

## Bibliotecas utilizadas

### GSAP

Usado para animacoes leves de entrada e refinamento visual.

Por que foi usado:

- animacoes suaves
- controle melhor do ritmo da interface
- boa qualidade visual sem precisar de framework pesado

### PhotoSwipe

Usado para lightbox de imagens.

Por que foi usado:

- abrir fotos maiores ao clicar
- manter experiencia simples
- valorizar o portfolio sem criar pagina separada

### Feedbacks em orbita customizada

A secao de feedbacks usa JavaScript proprio.

Ela foi feita para:

- rodar os cards automaticamente sem fim aparente
- permitir arraste manual no celular
- manter um efeito 3D leve
- funcionar sem depender de biblioteca de carrossel

## O que nao esta sendo usado como framework principal

Atualmente o projeto nao foi migrado para:

- React
- Next.js
- Astro
- Vue
- Tailwind como base principal

Motivo:

- a versao atual funciona bem com HTML, CSS e JavaScript puros
- manter a base simples ajuda na legibilidade
- evita complexidade desnecessaria nesta fase

## Decisoes tecnicas de performance

O projeto buscou manter a pagina leve.

Principais cuidados:

- estrutura estatica
- JavaScript enxuto
- animacoes progressivas
- `loading="lazy"` fora da hero
- uso de `fetchpriority="high"` na imagem principal
- remocao de bibliotecas que nao eram mais necessarias
- reveal mais rapido para reduzir demora ao rolar
- preferencia por CSS em vez de JS quando possivel

## Direcao de codigo

O codigo foi mantido com estes principios:

- legibilidade
- separacao clara de responsabilidades
- comentarios curtos onde realmente ajudam
- classes descritivas
- evitacao de logica desnecessaria

## Resumo pratico

Se alguem quiser entender esta versao rapidamente:

- a home atual e mais leve, mais visual e mais mobile-first
- o design foi refinado para parecer marca de confeitaria, nao template generico
- o topo foi tratado como elemento dinamico para limpar a tela pequena
- as fotos ganharam mais protagonismo
- a navegacao foi simplificada para favorecer escolha e contato
