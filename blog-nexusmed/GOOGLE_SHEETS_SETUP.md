# Configuração: Newsletter → Google Sheets

## 1. Criar o Google Apps Script

1. Acesse [script.google.com](https://script.google.com) e crie um novo projeto
2. Cole o código abaixo no editor:

```javascript
const SHEET_ID = 'SEU_SHEET_ID_AQUI'; // ID da sua planilha
const SHEET_NAME = 'Newsletter'; // Nome da aba

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Cria cabeçalho se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Data', 'Hora']);
    }

    const now = new Date();
    const data_br = Utilities.formatDate(now, 'America/Sao_Paulo', 'dd/MM/yyyy');
    const hora_br = Utilities.formatDate(now, 'America/Sao_Paulo', 'HH:mm:ss');

    sheet.appendRow([data.email, data_br, hora_br]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'online' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 2. Pegar o ID da Planilha

Na URL da sua planilha:
`https://docs.google.com/spreadsheets/d/**SEU_SHEET_ID**/edit`

Copie o ID e substitua no código acima.

## 3. Criar a aba "Newsletter"

Na planilha, crie uma aba chamada exatamente `Newsletter`.

## 4. Fazer o Deploy

1. No Apps Script: **Implantar > Nova implantação**
2. Tipo: **Aplicativo da Web**
3. Executar como: **Eu mesmo**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique em **Implantar** e copie a URL gerada

## 5. Configurar no projeto

Crie o arquivo `.env.local` na raiz de `blog-nexusmed/`:

```env
APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec
```

No Codespace/servidor de produção, adicione essa variável de ambiente nas configurações.
