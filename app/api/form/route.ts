import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, whatsapp, storeName, segment, need } = body

    // Validação básica
    if (!name || !whatsapp || !storeName || !segment || !need) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Criar cliente Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("Variáveis de ambiente do Supabase não configuradas")
      return NextResponse.json({ error: "Erro de configuração do servidor" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Inserir dados na tabela contatos
    const { data, error } = await supabase
      .from("contatos")
      .insert([
        {
          nome: name,
          whatsapp,
          nome_loja: storeName,
          segmento: segment,
          necessidade: need,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Erro ao inserir no Supabase:", error)
      return NextResponse.json({ error: "Erro ao salvar os dados" }, { status: 500 })
    }

    return NextResponse.json({ message: "Contato recebido com sucesso!", data }, { status: 200 })
  } catch (error) {
    console.error("Erro no processamento:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
