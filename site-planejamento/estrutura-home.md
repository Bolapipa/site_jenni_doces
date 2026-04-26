# Estrutura atual da Home - Jenni Doces

## Objetivo deste documento

Este arquivo descreve a estrutura atual da pagina inicial do site.

Ele foi escrito para responder quatro perguntas:

1. Quais secoes existem hoje.
2. Qual a funcao de cada secao.
3. Por que cada secao foi mantida, ajustada ou removida.
4. Como a home foi organizada para funcionar melhor no mobile.

## Ideia central da home

A home foi pensada para fazer a cliente:

1. Entender rapidamente o que a Jenni Doces vende.
2. Ver fotos reais logo no comeco.
3. Encontrar o WhatsApp sem dificuldade.
4. Navegar por categorias claras.
5. Tomar decisao com base em imagem, simplicidade e confianca.

## Ordem atual das secoes

### 1. Topo fixo com marca e navegacao

Conteudo:

- marca `Jenni Doces`
- navegacao com links principais

Objetivo:

- manter orientacao da usuaria
- permitir acesso rapido as secoes
- reforcar identidade da marca

Decisoes importantes:

- no mobile, a barra ficou mais compacta
- a barra foi transformada em elemento fixo no mobile
- ao rolar para baixo, ela some
- ao rolar para cima, ela reaparece

Motivo:

- reduzir poluicao visual
- melhorar o aproveitamento da tela pequena
- deixar a experiencia mais parecida com interfaces modernas de app

### 2. Hero

Conteudo:

- frase principal de venda
- dois botoes principais:
  - WhatsApp
  - Instagram
- imagens de destaque
- pequenos chips de sabores/estilos
- bloco de confianca
- lista curta de pontos fortes
- badge visual sobre a composicao de fotos

Objetivo:

- causar boa primeira impressao
- mostrar capricho visual
- deixar o contato principal acessivel

Decisoes importantes:

- o WhatsApp ficou como canal principal de pedido e orcamento
- o Instagram ficou como vitrine e apoio visual
- a composicao visual do hero foi mantida forte, mas ajustada varias vezes para o mobile
- a badge do hero foi reposicionada no mobile para nao cobrir as fotos
- as imagens do topo foram organizadas em um mosaico mais limpo no celular

### 3. Bloco de prova visual

Conteudo:

- tres cards de entrada para os estilos principais:
  - personalizados
  - tradicionais
  - datas especiais

Objetivo:

- ajudar a cliente a entender a oferta antes de entrar nas galerias
- transformar a navegacao em algo mais comercial e menos confuso

Decisoes importantes:

- os cards ganharam imagem, titulo, descricao e link claro
- a linguagem foi simplificada
- no mobile, o bloco foi refinado para ficar mais facil de escanear

### 4. Categorias

Conteudo:

- tres cards principais:
  - Personalizados
  - Tradicionais
  - Datas especiais

Objetivo:

- servir como entrada principal para o catalogo
- mostrar a divisao comercial do trabalho da Jenni

Decisoes importantes:

- `Tradicionais simples` e `Tradicionais especiais` nao viraram categorias separadas
- ambos ficaram dentro de `Tradicionais`, com explicacao textual

Motivo:

- evitar complexidade desnecessaria
- deixar a navegacao mais simples
- reduzir poluicao de escolha para a cliente

### 5. Secoes detalhadas por categoria

Hoje existem tres secoes detalhadas:

- `categoria-personalizados`
- `categoria-tradicionais`
- `categoria-datas-especiais`

Cada uma contem:

- titulo da categoria
- descricao breve e comercial
- galeria principal
- bloco `Ver mais fotos desta categoria`

Objetivo:

- permitir que a cliente toque na categoria e veja mais fotos daquele estilo
- aprofundar sem deixar a home inteira carregada de uma vez

Decisoes importantes:

- o bloco `Ver mais fotos desta categoria` foi ampliado para mostrar mais imagens
- a estrutura foi pensada para reaproveitar fotos sem duplicar secoes demais

### 6. Como pedir

Conteudo:

- explicacao simples sobre como fazer pedido e orcamento

Objetivo:

- reduzir duvidas
- encurtar a distancia entre interesse e conversa no WhatsApp

Motivo para manter:

- mesmo sendo um site visual, a cliente ainda precisa entender como comprar
- essa secao ajuda a transformar visita em contato

### 7. Portfolio em destaque

Conteudo:

- grade de fotos quadradas menores

Objetivo:

- mostrar mais trabalhos por tela
- facilitar leitura rapida no mobile

Decisoes importantes:

- o formato antigo foi substituido por miniaturas menores
- isso permitiu mostrar mais fotos ao mesmo tempo
- a mesma logica foi reaproveitada na secao `Mais fotos`

### 8. Mais fotos

Conteudo:

- mais imagens do acervo em formato de grade

Objetivo:

- expandir o portfolio sem sobrecarregar as secoes principais

Motivo:

- havia muitas fotos boas ainda nao usadas
- essa secao ajuda a aproveitar melhor o acervo real da marca

### 9. Feedbacks de clientes

Conteudo:

- cards simulando prints de conversa
- movimento automatico em orbita horizontal
- possibilidade de arrastar com o dedo no celular

Objetivo:

- deixar a estrutura pronta para receber prints reais
- mostrar como a prova social vai funcionar
- criar uma area dinamica sem pesar demais a pagina

Decisoes importantes:

- por enquanto os cards sao exemplos
- quando os prints reais chegarem, eles substituem os exemplos atuais
- a interacao foi feita com JavaScript proprio para manter controle e leveza

### 10. FAQ

Conteudo:

- perguntas e respostas basicas

Objetivo:

- reduzir duvidas simples
- manter a cliente mais segura antes do contato

## Secoes e ideias que existiram e foram removidas ou reduzidas

Ao longo do projeto, algumas secoes foram criadas, testadas e depois removidas ou simplificadas.

### Secoes removidas

- `Colecoes em destaque`
- `Assinatura da marca`
- faixa intermediaria de orcamento com CTA redundante
- barra inferior mobile com navegacao duplicada
- bloco de contato muito grande e institucional

## Por que essas secoes sairam

Os principais motivos foram:

- excesso de poluicao visual no mobile
- repeticao de informacao
- pouca utilidade comercial em comparacao ao espaco ocupado
- necessidade de dar mais destaque para as fotos

## Como a home esta organizada para mobile

O projeto foi progressivamente ajustado para `mobile-first`.

Isso significa que:

- a experiencia do celular foi tratada como prioridade
- o desktop virou expansao da experiencia, nao o contrario

Principais ajustes mobile:

- topo compacto
- hero reorganizado
- mais espaco para fotos
- categorias com leitura simples
- grades visuais mais eficientes
- links e CTAs mais diretos

## Fluxo ideal da usuaria

Hoje, a jornada pensada para a cliente e:

1. entrar no site
2. ver imagens bonitas logo no comeco
3. entender rapidamente o tipo de doce
4. escolher a categoria
5. explorar fotos reais
6. entender como pedir
7. entrar em contato pelo WhatsApp

## Resumo pratico

Se alguem precisar entender a home de forma rapida:

- topo = orientacao e navegacao
- hero = impacto visual e contato
- prova visual = caminho comercial
- categorias = divisao principal do catalogo
- secoes detalhadas = aprofundamento por estilo
- como pedir = conversao
- portfolio e mais fotos = prova visual ampla
- FAQ = remocao de duvidas

Essa estrutura foi escolhida para equilibrar:

- beleza
- simplicidade
- clareza
- navegacao mobile
- foco em fotos reais
