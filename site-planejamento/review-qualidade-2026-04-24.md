# Review de qualidade - 2026-04-24

## Objetivo

Este documento registra a revisao feita no site da Jenni Doces em 24/04/2026.

A revisao teve foco em:

- experiencia mobile
- fluidez da rolagem
- clareza visual
- legibilidade de textos e titulos
- remocao de codigo antigo
- documentacao didatica para futuras manutencoes

## Principais pontos revisados

### HTML

Foi revisado o arquivo `index.html`.

Melhorias aplicadas:

- remocao do carregamento do Swiper, que nao era mais usado
- atualizacao da versao do `styles.css` para evitar cache antigo
- atualizacao da versao do `script.js` para evitar cache antigo
- comentario do botao flutuante de WhatsApp ajustado para explicar melhor a funcao real
- classes da secao de feedback renomeadas para refletir o comportamento atual de orbita customizada

Por que isso foi feito:

- reduzir carregamento desnecessario
- deixar o HTML mais facil de entender
- evitar que uma pessoa lendo o projeto pense que ainda existe um carrossel Swiper ativo

### CSS

Foi revisado o arquivo `styles.css`.

Melhorias aplicadas:

- remocao de regras antigas de Swiper
- criacao de nomes mais claros para a orbita de feedbacks
- remocao de `content-visibility` que ja nao estava ajudando na experiencia
- normalizacao de `letter-spacing` negativo para melhorar leitura
- manutencao dos textos e titulos principais centralizados
- preservacao dos textos internos de conversa alinhados a esquerda, porque esse padrao parece mais natural em cards de feedback

Por que isso foi feito:

- melhorar legibilidade no mobile
- reduzir confusao entre codigo antigo e comportamento atual
- deixar a leitura mais confortavel em telas pequenas

### JavaScript

Foi revisado o arquivo `script.js`.

Melhorias aplicadas:

- troca definitiva dos seletores antigos de Swiper por nomes de orbita
- remocao de variavel sem uso no loop de animacao
- manutencao da orbita customizada dos feedbacks
- manutencao do arraste manual por toque e mouse
- preservacao do retorno automatico da animacao depois que o usuario solta o card

Por que isso foi feito:

- manter o comportamento fluido
- deixar a intencao do codigo mais clara
- reduzir codigo morto

## Decisao sobre feedbacks

A secao de feedbacks esta pronta como previa.

Hoje ela usa cards simulados porque os prints reais ainda nao foram enviados.

Comportamento atual:

- cards passam automaticamente
- cards podem ser arrastados pelo usuario
- efeito 3D leve
- loop continuo com cards duplicados

Quando os prints reais chegarem:

- os textos simulados podem ser substituidos
- os dados sensiveis dos clientes devem ser ocultados
- a estrutura visual pode continuar a mesma

## Decisao sobre performance

Nesta rodada, a prioridade foi deixar o site mais leve e direto.

Cuidados aplicados:

- remocao de biblioteca nao utilizada
- reducao de efeitos que atrasavam a aparicao das secoes
- manutencao de `loading="lazy"` nas imagens fora do topo
- manutencao de `fetchpriority="high"` na imagem principal
- uso de JavaScript proprio apenas onde havia necessidade real

## Decisao sobre mobile

O projeto continua sendo tratado como mobile-first.

Isso significa:

- a tela pequena vem primeiro nas decisoes de layout
- o topo deve ocupar pouco espaco
- as fotos precisam aparecer rapidamente
- o usuario deve conseguir navegar sem esforco
- botoes e areas de toque precisam ser confortaveis

## Pontos que continuam importantes

Antes de publicar definitivamente:

- testar em celular real novamente
- pedir revisao final da Jenni
- revisar textos comerciais finais
- revisar cores com a marca
- substituir feedbacks simulados por prints reais, se possivel
- publicar em um link estavel

## Resultado da revisao

Depois desta rodada, o projeto ficou:

- mais limpo
- mais facil de manter
- mais coerente com o comportamento atual
- mais leve por remover dependencia antiga
- mais preparado para continuar evoluindo

