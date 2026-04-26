# Preview local e simulacao mobile

## Objetivo deste documento

Este arquivo explica como visualizar o projeto localmente, tanto no navegador comum quanto em simulacao de celular.

Ele foi escrito para qualquer pessoa conseguir:

1. subir o preview do projeto
2. abrir o site no navegador
3. testar a versao mobile
4. entender as limitacoes do preview local

## Como o projeto esta sendo servido hoje

O projeto e estatico.

Isso significa que ele pode ser servido com um servidor HTTP simples, sem backend e sem build complexa.

Atualmente, os scripts do projeto usam o Python para isso.

## Scripts existentes no `package.json`

Hoje existem dois scripts principais:

### `npm run preview`

Executa:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Objetivo:

- abrir o site principal em ambiente local
- servir `index.html`, `styles.css`, `script.js` e os assets

### `npm run preview:simulator`

Executa:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Objetivo:

- manter uma porta alternativa para simuladores e testes

## URLs principais do projeto

### Preview principal

Use:

`http://127.0.0.1:4173`

ou

`http://localhost:4173`

### Preview auxiliar de celular

Use:

`http://127.0.0.1:4173/mobile-preview.html`

ou

`http://localhost:4173/mobile-preview.html`

## O que e `mobile-preview.html`

Esse arquivo foi criado para facilitar a revisao mobile no proprio computador.

Ele nao e o site final.

Ele e uma pagina auxiliar que:

- cria um frame de celular
- abre o site dentro de um `iframe`
- permite atualizar rapidamente a visualizacao

## Por que o `mobile-preview.html` foi criado

Durante o desenvolvimento, o maior foco do projeto passou a ser a experiencia mobile.

Entao foi necessario ter uma visualizacao pratica de:

- proporcao de celular
- notch/camera do aparelho
- comportamento do topo
- densidade de informacao

## Ajustes feitos especificamente no `mobile-preview.html`

Ao longo do projeto, o preview mobile recebeu refinamentos para ficar mais fiel:

- frame de celular
- camera/notch visivel
- espaco reservado no topo do `iframe`
- ajustes para a barra superior do site nao parecer atras da camera

## Como abrir dentro do VSCode

Existem dois caminhos principais.

### 1. Simple Browser

No VSCode:

1. Abra `Ctrl + Shift + P`
2. Procure `Simple Browser: Show`
3. Cole uma das URLs locais

### 2. Extensao de simulacao mobile

Ao longo do projeto, foi considerada a extensao:

- `Mobile Preview Simulator`

Observacao importante:

se a extensao estiver apontando para uma porta errada, ela pode mostrar tela branca.

## Por que tela branca pode acontecer

Os motivos mais comuns sao:

1. o servidor local nao esta rodando
2. a extensao esta apontando para porta errada
3. o projeto foi fechado e o processo local parou

## Como verificar rapidamente

Se a pagina estiver branca:

1. confirme se `npm run preview` esta rodando
2. abra `http://127.0.0.1:4173` no navegador
3. teste `http://127.0.0.1:4173/mobile-preview.html`

Se esses links abrirem, o problema esta na configuracao da extensao e nao no site.

## Como compartilhar o site com outra pessoa

O preview local so funciona na propria maquina.

Isso significa:

- `127.0.0.1` e `localhost` funcionam so no computador local
- outra pessoa nao consegue abrir esse endereco no celular dela

Para compartilhar com outra pessoa, existem caminhos como:

- tunel temporario
- hospedagem temporaria
- publicacao em servico como Vercel ou Netlify

## Limitacoes do preview local

O preview local e excelente para desenvolvimento, mas tem algumas limitacoes:

- nao substitui teste em celular real
- nao replica 100 por cento o comportamento do navegador do aparelho
- pode sofrer diferencas por causa do notch desenhado no mockup

## Recomendacao pratica de uso

Durante o desenvolvimento, o fluxo mais seguro e:

1. abrir `index.html` no preview principal
2. abrir `mobile-preview.html` para revisar a versao mobile
3. validar ajustes importantes tambem no celular real

## Resumo pratico

Se alguem novo pegar o projeto:

- use `npm run preview`
- abra `http://127.0.0.1:4173`
- para revisar mobile, abra `http://127.0.0.1:4173/mobile-preview.html`
- lembre que isso e preview local, nao link publico
