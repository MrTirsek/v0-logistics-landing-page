-- Criar tabela de contatos
CREATE TABLE IF NOT EXISTS contatos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  whatsapp VARCHAR(20) NOT NULL,
  nome_loja VARCHAR(255) NOT NULL,
  segmento VARCHAR(255) NOT NULL,
  necessidade VARCHAR(50) NOT NULL CHECK (necessidade IN ('armazenamento', 'entregas', 'ambos')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criar índice para melhorar performance de consultas por data
CREATE INDEX IF NOT EXISTS idx_contatos_created_at ON contatos(created_at DESC);

-- Adicionar comentários para documentação
COMMENT ON TABLE contatos IS 'Tabela para armazenar contatos do formulário da landing page';
COMMENT ON COLUMN contatos.nome IS 'Nome completo do contato';
COMMENT ON COLUMN contatos.whatsapp IS 'Número de WhatsApp para contato';
COMMENT ON COLUMN contatos.nome_loja IS 'Nome da loja ou negócio';
COMMENT ON COLUMN contatos.segmento IS 'Segmento de atuação da empresa';
COMMENT ON COLUMN contatos.necessidade IS 'Tipo de serviço necessário: armazenamento, entregas ou ambos';
