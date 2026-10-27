# Catálogo de Cursos – Decole

Página web com o catálogo de cursos da escola. Mostra a lista de cursos com busca, filtros (categoria, nível, Premium), ordenação, detalhes de cada curso (módulos, duração, público) e botão de WhatsApp. Também gera a "Ficha de curso" para impressão (Ctrl + P).

Não precisa de instalação, servidor ou internet para funcionar. É só HTML, CSS e JavaScript puro.

## Arquivos

| Arquivo | O que faz |
|---|---|
| `index.html` | Estrutura da página (cabeçalho, filtros, botão flutuante do WhatsApp) |
| `style.css` | Todo o visual (cores, tamanhos, versão celular, impressão) |
| `script.js` | Lista de cursos, categorias e toda a lógica de filtros e detalhes |
| `LOGO_SEM FUNDO(2).png` | Logo da escola (precisa estar **na mesma pasta** dos outros arquivos) |

**Importante:** mantenha os 4 arquivos juntos na mesma pasta e não renomeie a logo (o nome está escrito no `index.html` e no `script.js`).

## Como abrir

Dê dois cliques no `index.html`. Ele abre no navegador.

Para publicar, envie os 4 arquivos juntos para a hospedagem (mantendo a mesma pasta).

## Como adicionar um curso novo

Tudo é feito no arquivo `script.js`, em **2 passos**.

### Passo 1: adicionar o curso na lista `starterCourses`

Copie um bloco de um curso existente e cole **dentro da lista**, depois de uma `},` e antes de outro `{`. Exemplo:

```js
{
  id: 38,
  code: "000285",
  name: "YouTube na Prática",
  category: "Informática",
  level: "Profissionalizante",
  duration: "10 meses",
  hours: 72,
  audience: "Para quem é o curso.",
  description: "Objetivo do curso.",
  modules: [
    ["Nome do módulo 1", "8h"],
    ["Nome do módulo 2", "16h"]
  ]
},
```

Campos:

- **id**: número **único**. Use sempre o próximo número que não existe (hoje o último é 38). Se repetir um id, os cursos se misturam.
- **code**: código do pacote no sistema (DKSOFT, em *Alunos > Cadastro de Pacotes*). Aparece no banner do curso.
- **name**: nome que aparece no catálogo.
- **level**: use **exatamente** `"Essencial"`, `"Profissionalizante"` ou `"Avançado"`. Qualquer outro texto faz o curso sumir do filtro de nível.
- **duration**: texto livre, por exemplo `"10 meses"`. A ordenação por duração usa o primeiro número do texto (e multiplica por 12 se tiver a palavra "ano"). Mantenha o padrão `"X meses"`.
- **hours**: carga horária total (soma dos módulos). Use `null` se não houver.
- **audience** / **description**: textos de "Para quem é" e "Objetivo do curso".
- **modules**: lista de `["Nome", "carga"]`. A carga pode ser `"16h"`, `"2 meses"` ou `""` (vazia).
- **bestSeller** (opcional): `bestSeller: 1` mostra o selo "Mais vendido" e coloca o curso no topo. Quanto menor o número, mais alto na lista.
- **isPremium** (opcional): `isPremium: true` marca como Premium (selo dourado e filtro Premium).

Dica para calcular a duração: carga total ÷ horas por aula = número de aulas. Com 1 aula por semana, cada 4 aulas ≈ 1 mês. A escola costuma arredondar para cima.

### Passo 2: definir a categoria em `AREA_BY_ID`

Mais abaixo no `script.js`, procure `AREA_BY_ID` e adicione o id do novo curso na categoria desejada:

```js
3: "design", 23: "design", 30: "design", 35: "design", 38: "design",
```

Categorias disponíveis: `informatica`, `dados`, `design`, `games`, `gestao`, `vendas`, `idiomas`, `outros`.

Se esquecer esse passo, o curso aparece em "Outros cursos".

> O campo `category` dentro de cada curso não é usado nos filtros. Quem manda é o `AREA_BY_ID`.

## Como remover ou esconder um curso

Não apague. Coloque o bloco inteiro entre `/*` e `*/` (como já foi feito com "IA na Prática Profissional", "Pro Adm + IA" e "Games Kids"). Assim dá para reativar depois.

## Como alterar algo existente

| Quero mudar... | Onde |
|---|---|
| Duração, módulos, textos de um curso | `script.js`, no bloco do curso |
| Categoria de um curso | `script.js`, em `AREA_BY_ID` |
| Nome, cor ou ícone de uma categoria | `script.js`, na lista `AREAS` (e `ICONS` para ícones) |
| Número do WhatsApp | **2 lugares**: `script.js` (botão dentro dos detalhes do curso) e `index.html` (botão flutuante). Formato: `55` + DDD + número, sem espaços |
| Cores do site | `style.css`, no começo, em `:root` (`--blue`, `--red` etc.) |
| Frase do topo e título | `index.html` |

## Cuidados ao editar

- Dentro de uma lista JavaScript, cada item termina com **vírgula**, menos o último. Esquecer uma vírgula quebra a página inteira.
- Aspas: use sempre `"aspas duplas"` nos textos. Se precisar de aspas dentro do texto, evite ou use `'simples'`.
- Se a página abrir em branco depois de uma edição, aperte **F12** no navegador, vá na aba **Console** e veja a linha do erro. Quase sempre é vírgula ou aspas faltando.
- Antes de mexer, faça uma **cópia dos arquivos** (backup).
- Depois de editar, abra o `index.html` e confira: o curso aparece, o filtro funciona e os detalhes abrem.

## Contato / histórico

- Última atualização: 
- Responsável atual: 