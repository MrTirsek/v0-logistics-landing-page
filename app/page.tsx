"use client"

import type React from "react"

import { useState } from "react"
import { XCircle, Package, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SeteRotasLanding() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    storeName: "",
    segment: "",
    need: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Header with company name and navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9]">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1E3A8A] md:text-2xl">Sete Rotas Logística</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Seu e-commerce vende. A gente guarda e entrega.</p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-all"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#6D28D9] px-4 py-16 text-white md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <Package className="h-4 w-4" />
              <span>Armazenamento + Entregas em Goiânia</span>
            </div>
            <h2 className="mb-6 text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Libere seu tempo e espaço.
              <br />
              <span className="text-blue-200">Deixe a logística com a gente.</span>
            </h2>
            <p className="mb-8 text-pretty text-base leading-relaxed text-blue-50 md:text-lg lg:text-xl max-w-2xl mx-auto">
              A solução completa de armazenamento e entrega em Goiânia que ajuda você a focar no que realmente importa:
              vender mais e crescer seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#DC2626] px-8 py-6 text-base md:text-lg font-semibold text-white transition-all hover:bg-[#B91C1C] hover:scale-105 shadow-xl w-full sm:w-auto"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quero um Orçamento Grátis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 px-8 py-6 text-base md:text-lg font-semibold text-white transition-all hover:bg-white/20 w-full sm:w-auto"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold text-[#1E3A8A] md:text-4xl">
            Se identificou com alguma situação abaixo?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "O estoque da sua loja tomou conta da sua sala de estar?",
              "Você passa o dia inteiro rodando por Goiânia fazendo entregas?",
              "Perdeu vendas porque não tinha como entregar com rapidez?",
              "Sente que a logística está travando o crescimento do seu negócio?",
            ].map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all hover:border-[#6D28D9] hover:shadow-md"
              >
                <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#DC2626]" />
                <p className="text-pretty text-lg leading-relaxed text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#1E3A8A] md:text-4xl">
            A parceria que seu negócio precisa para decolar.
          </h2>
          <p className="mb-12 text-pretty text-center text-lg text-gray-600">
            Seu e-commerce vende. A gente guarda e entrega.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Armazenamento Inteligente */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-[#6D28D9]/10 p-4">
                <Package className="h-8 w-8 text-[#6D28D9]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">Armazenamento Inteligente</h3>
              <p className="text-pretty leading-relaxed text-gray-600">
                Tenha um espaço seguro, limpo e exclusivo para o seu estoque. Chega de caixas espalhadas em casa. Nós
                recebemos, organizamos e cuidamos de tudo.
              </p>
            </div>

            {/* Entregas Rápidas */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-[#DC2626]/10 p-4">
                <Truck className="h-8 w-8 text-[#DC2626]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">Entregas Rápidas</h3>
              <p className="text-pretty leading-relaxed text-gray-600">
                Vendeu? Deixa com a gente! Realizamos entregas em Goiânia todos os dias, com rotas otimizadas e
                agilidade para garantir que seu cliente receba o pedido no menor tempo possível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold text-[#1E3A8A] md:text-4xl">
            Logística completa em 3 passos simples.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-2xl font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A8A]">Você Guarda</h3>
              <p className="text-pretty leading-relaxed text-gray-600">Deixe seu estoque em nosso espaço seguro.</p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#6D28D9] to-[#DC2626] text-2xl font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A8A]">Você Vende</h3>
              <p className="text-pretty leading-relaxed text-gray-600">
                Feche suas vendas e nos envie a lista de entregas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DC2626] text-2xl font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A8A]">Nós Entregamos</h3>
              <p className="text-pretty leading-relaxed text-gray-600">
                Coletamos os produtos e entregamos direto na porta do seu cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form Section */}
      <section
        id="contact-form"
        className="bg-gradient-to-br from-[#6D28D9] to-[#1E3A8A] px-4 py-16 text-white md:py-24"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Pronto para ter mais tempo, mais espaço e clientes mais felizes?
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-blue-100">
              Preencha o formulário abaixo. Vamos entender sua necessidade e montar um plano de parceria perfeito para o
              seu momento — sem compromisso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-2xl text-foreground">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Nome *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-gray-300"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-gray-700">
                WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="border-gray-300"
                placeholder="(62) 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="storeName" className="text-gray-700">
                Nome da Loja/Negócio *
              </Label>
              <Input
                id="storeName"
                type="text"
                required
                value={formData.storeName}
                onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                className="border-gray-300"
                placeholder="Nome do seu e-commerce"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="segment" className="text-gray-700">
                Segmento da Empresa *
              </Label>
              <Input
                id="segment"
                type="text"
                required
                value={formData.segment}
                onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                className="border-gray-300"
                placeholder="Ex: Moda, Eletrônicos, Cosméticos..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="need" className="text-gray-700">
                Qual sua maior necessidade hoje? *
              </Label>
              <Select value={formData.need} onValueChange={(value) => setFormData({ ...formData, need: value })}>
                <SelectTrigger id="need" className="border-gray-300">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="armazenamento">Armazenamento</SelectItem>
                  <SelectItem value="entregas">Entregas</SelectItem>
                  <SelectItem value="ambos">Ambos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#DC2626] px-4 py-6 text-base md:text-lg font-semibold text-white transition-all hover:bg-[#B91C1C] hover:scale-105 leading-tight"
            >
              <span className="block sm:hidden">Receber Orçamento</span>
              <span className="hidden sm:block">Receber meu Orçamento Personalizado</span>
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] px-4 py-8 text-center text-white">
        <p className="text-sm">© 2025 Sete Rotas Logística. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
