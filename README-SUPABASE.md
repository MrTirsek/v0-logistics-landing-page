# Configuração do Supabase

Este documento explica como configurar a integração com Supabase para o formulário de contato da landing page.

## Pré-requisitos

- Instância Supabase (self-hosted ou cloud)
- Node.js >= 18.17.0

## Passo 1: Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

2. Edite o arquivo `.env.local` e adicione suas credenciais do Supabase:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui
   \`\`\`

   **Onde encontrar essas informações:**
   - Acesse o painel do Supabase
   - Vá em **Project Settings** > **API**
   - `NEXT_PUBLIC_SUPABASE_URL`: URL do projeto
   - `SUPABASE_SERVICE_ROLE_KEY`: Service Role Key (mantenha em segredo!)

## Passo 2: Criar a Tabela no Banco de Dados

Execute o script SQL fornecido no seu banco de dados Supabase:

1. Acesse o SQL Editor no painel do Supabase
2. Copie o conteúdo do arquivo `scripts/create-contatos-table.sql`
3. Cole no editor e execute

Ou, se estiver usando self-hosted, execute diretamente no PostgreSQL:

\`\`\`bash
psql -h seu-host -U seu-usuario -d seu-database -f scripts/create-contatos-table.sql
\`\`\`

## Passo 3: Instalar Dependências

A dependência `@supabase/supabase-js` já está incluída no `package.json`. Execute:

\`\`\`bash
npm install
\`\`\`

## Passo 4: Testar a Integração

1. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Acesse http://localhost:3000

3. Preencha e envie o formulário de contato

4. Verifique se os dados foram salvos na tabela `contatos` do Supabase

## Estrutura da Tabela

A tabela `contatos` possui os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único (gerado automaticamente) |
| nome | VARCHAR(255) | Nome completo do contato |
| whatsapp | VARCHAR(20) | Número de WhatsApp |
| nome_loja | VARCHAR(255) | Nome da loja/negócio |
| segmento | VARCHAR(255) | Segmento de atuação |
| necessidade | VARCHAR(50) | Tipo de serviço (armazenamento, entregas, ambos) |
| created_at | TIMESTAMP | Data e hora do registro |

## API Endpoint

O formulário envia dados para `/api/form` via POST:

**Request:**
\`\`\`json
{
  "name": "João Silva",
  "whatsapp": "(62) 99999-9999",
  "storeName": "Loja Exemplo",
  "segment": "Moda",
  "need": "ambos"
}
\`\`\`

**Response (Sucesso):**
\`\`\`json
{
  "message": "Contato recebido com sucesso!",
  "data": [...]
}
\`\`\`

**Response (Erro):**
\`\`\`json
{
  "error": "Mensagem de erro"
}
\`\`\`

## Segurança

- A `SUPABASE_SERVICE_ROLE_KEY` deve ser mantida em segredo
- Nunca exponha esta chave no código do cliente
- Use Row Level Security (RLS) no Supabase para proteger seus dados
- Considere adicionar rate limiting para prevenir spam

## Troubleshooting

### Erro: "Variáveis de ambiente do Supabase não configuradas"
- Verifique se o arquivo `.env.local` existe e contém as variáveis corretas
- Reinicie o servidor de desenvolvimento após adicionar as variáveis

### Erro: "Erro ao inserir no Supabase"
- Verifique se a tabela `contatos` foi criada corretamente
- Confirme se as credenciais do Supabase estão corretas
- Verifique os logs do servidor para mais detalhes

### Formulário não envia
- Abra o console do navegador para ver erros
- Verifique se todos os campos obrigatórios estão preenchidos
- Confirme se o endpoint `/api/form` está acessível
