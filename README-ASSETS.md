# Guia de Assets - Jenni Doces

## Objetivo deste arquivo

Este documento explica como os arquivos visuais do projeto foram organizados, por que essa organizacao foi escolhida e como qualquer pessoa pode continuar separando, renomeando e aproveitando as fotos sem baguncar o site.

O site da `Jenni Doces` depende muito mais das fotos do que de textos longos. Por isso, a organizacao dos assets foi tratada como parte importante do projeto, nao como detalhe secundario.

## Ideia principal da organizacao

A estrutura foi pensada para resolver quatro problemas comuns:

1. Misturar fotos originais com fotos ja selecionadas para o site.
2. Perder tempo tentando descobrir qual imagem foi usada em cada secao.
3. Reaproveitar imagens erradas em partes diferentes do site.
4. Dificultar manutencao futura quando novas fotos chegarem.

## Estrutura principal de pastas

### `assets/`

Essa pasta guarda o material bruto e o material separado manualmente antes de virar asset final para web.

Subpastas importantes:

- `assets/instagram-originais`
  - Guarda o material original salvo do Instagram ou de outras fontes.
  - Aqui ficam as fotos sem tratamento especifico para o site.

- `assets/selecionadas-hero`
  - Guarda as fotos mais fortes para a abertura do site.
  - Regra usada: imagem bonita, clara, com impacto visual imediato.

- `assets/selecionadas-galeria`
  - Guarda fotos escolhidas para galerias amplas do site.
  - Regra usada: variedade, boa apresentacao e boa leitura visual.

- `assets/selecionadas-categorias`
  - Guarda imagens separadas por categoria comercial.
  - Hoje, o site trabalha principalmente com:
    - `personalizados`
    - `tradicionais`
    - `datas-especiais`

- `assets/feedbacks-clientes`
  - Pasta reservada para prints de elogios, conversas e prova social.
  - Ainda nao foi populada com prints reais.
  - O site ja tem uma secao de feedbacks simulada para receber esse material depois.

- `assets/marca-e-logo`
  - Pasta reservada para identidade visual, logo e referencias de marca.

- `assets/descartadas`
  - Pasta para material que nao entrou no site.
  - Essa separacao evita apagar fotos de forma precipitada.

### `site-assets/`

Essa pasta guarda os arquivos preparados para uso direto no site.

Em outras palavras:

- `assets/` = material de trabalho e curadoria
- `site-assets/` = material pronto para a pagina

Exemplos de organizacao dentro de `site-assets/`:

- `site-assets/img/hero`
  - Imagens usadas no bloco principal da home.

- `site-assets/img/categorias`
  - Imagens usadas nas categorias e nas galerias internas de cada categoria.

- `site-assets/img/galeria`
  - Imagens usadas no portfolio e em grades gerais.

## Por que essa divisao foi importante

Essa divisao foi escolhida para manter o projeto escalavel e facil de entender.

Sem essa separacao, aconteceria o seguinte:

- fotos originais e fotos finais ficariam misturadas
- o HTML apontaria para arquivos sem padrao de nome
- seria dificil trocar imagens sem quebrar a pagina
- futuras manutencoes dependeriam de adivinhacao

Com a estrutura atual, fica claro:

- de onde cada foto veio
- em qual fase ela esta
- se ela ainda e material bruto ou se ja faz parte do site

## Criterios usados para escolher fotos

As fotos foram selecionadas pensando em conversao comercial e experiencia visual.

Os criterios principais foram:

1. Boa iluminacao.
2. Enquadramento limpo.
3. Produtos com cara de capricho.
4. Variedade de temas e estilos.
5. Fotos que funcionam bem em telas pequenas.
6. Imagens que reforcam confianca e qualidade.

## Criterios usados para escolher fotos do hero

O hero precisa causar uma boa primeira impressao.

Por isso, as imagens dessa area precisaram ter:

- boa leitura mesmo em celular
- contraste suficiente
- elementos reconheciveis rapidamente
- cara de produto premium
- composicao bonita mesmo com cortes responsivos

## Criterios usados para fotos das categorias

As categorias foram pensadas como porta de entrada para o catalogo.

Cada categoria precisava mostrar um tipo de trabalho:

- `Personalizados`
  - foco em temas, personagens, nomes, cores e detalhes sob encomenda

- `Tradicionais`
  - foco em doces classicos, incluindo simples e especiais na mesma linha comercial

- `Datas especiais`
  - foco em campanhas sazonais como Pascoa e kits tematicos

## Nomeacao e padrao de arquivos

Sempre que possivel, o projeto foi caminhando para nomes de arquivo mais limpos.

Exemplos de boa nomeacao:

- `hero-princesa-aurora.jpg`
- `personalizados-bluey.jpg`
- `tradicionais-simples.jpg`
- `datas-trio-ovos.jpg`

Essa padronizacao ajuda porque:

- facilita encontrar a imagem certa
- melhora a legibilidade do HTML
- reduz erro de apontamento de caminho
- ajuda qualquer pessoa a entender o projeto

## Cuidados com feedbacks de clientes

Os prints reais ainda nao foram adicionados, mas a estrutura visual da secao ja existe no site.

Antes de colocar qualquer print real, siga esta regra:

- esconder telefone
- esconder foto do cliente
- esconder nome completo, se necessario
- evitar expor dados pessoais

Ou seja, a pasta `assets/feedbacks-clientes` ja esta prevista, mas os arquivos devem ser tratados antes de entrar no site.

A secao atual de feedbacks usa exemplos simulados. Quando os prints reais chegarem, eles podem substituir esses exemplos mantendo a mesma ideia visual.

## Boas praticas para continuar alimentando o projeto

Quando novas fotos chegarem, o fluxo recomendado e:

1. Colocar a foto primeiro em `assets/instagram-originais` ou na subpasta correspondente.
2. Fazer uma curadoria manual.
3. Decidir se ela vai para hero, categorias, portfolio ou mais fotos.
4. Copiar a imagem final para `site-assets/img/...` com nome limpo.
5. So depois atualizar o HTML.

## O que nao fazer

Para manter o projeto organizado, evite:

- apontar o HTML direto para `assets/instagram-originais`
- usar nomes aleatorios de arquivo
- misturar fotos sazonais com fotos permanentes sem criterio
- apagar originais antes da curadoria final

## Resumo pratico

Se alguem novo entrar no projeto, basta lembrar:

- `assets/` = banco de material e curadoria
- `site-assets/` = imagens prontas para a pagina
- categorias atuais = `personalizados`, `tradicionais`, `datas-especiais`
- feedbacks reais ainda vao substituir os exemplos simulados
- a organizacao foi pensada para facilitar manutencao, clareza e escalabilidade
