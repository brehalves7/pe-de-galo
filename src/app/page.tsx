"use client";

import { Navbar } from "../app/components/Navbar";
import ProductCard from "../app/components/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import BudgetForm from "./components/BudgetForm";
import Hero from "./components/Hero";

export default function Home() {
  const product = {
    id: "camisa1",
    name: "Camisa Esportiva Premium",
    description: "✔ Projeto pensado para casas até 70m²",
    price: 129.9,
    image: "/cena-01.png",
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Navbar />

      <Hero />
      {/* CONTEÚDO */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Produto */}
        <section
          id="produto"
          className="flex flex-col gap-8 items-center md:grid md:grid-cols-2 md:gap-12 md:items-start mb-16"
        >
          {/* Card produto */}
          <div className="order-2 md:order-1 flex justify-center">
            <ProductCard {...product} />
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold md:text-3xl text-white">
              📐 Detalhes do Projeto:
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Casa térrea moderna</li>
              <li>✅ 3 quartos (1 suíte)</li>
              <li>✅ Sala de estar e jantar integradas</li>
              <li>✅ Cozinha funcional</li>
              <li>✅ Banheiro social</li>
              <li>✅ Área de serviço</li>
              <li>✅ Área gourmet</li>
              <li>✅ Garagem</li>
              <li>✅ Projeto pensado para até 70m²</li>
            </ul>
          </div>
        </section>

        {/* Conteúdo - Carrossel de Produto */}
        <section id="produto" className="py-12 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl text-white">
            Confira nosso produto em detalhes
          </h2>

          <div className="max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/cena-01.png"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-full rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/cena-02.png"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-full rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/cena-03.png"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-full rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
            Receba agora o projeto completo de uma casa moderna com plantas,
            imagens e medidas detalhadas.
          </p>
        </section>

        {/* receber*/}
        <section id="receber" className="py-10">
          <h3 className="text-xl font-semibold text-center mb-6 md:text-2xl text-white">
            O que você irá receber:
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">
                Planta baixa arquitetônica completa
              </h4>
              <p className="text-gray-300 text-sm">
                ✅ Planta baixa arquitetônica completa Layout funcionalo.
              </p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">
                Imagens 3D ilustrativas do projeto
              </h4>
              <p className="text-gray-300 text-sm">
                ✅ Visualize melhor os ambientes e entenda o conceito da casa.
              </p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">Projeto pensado para até 70m²</h4>
              <p className="text-gray-300 text-sm">
                ✅ Ideal para terrenos urbanos, compactos ou residenciais.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-10">
          <h3 className="text-xl font-semibold text-center mb-6 md:text-2xl text-white">
            Por que escolher nosso produto?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">Rápido</h4>
              <p className="text-gray-300 text-sm">Entrega rápida e prática.</p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">Conforto</h4>
              <p className="text-gray-300 text-sm">
                Casa pensando no seus bens estar
              </p>
            </div>
            <div className="p-5 bg-gray-800 rounded-lg shadow text-center">
              <h4 className="font-bold mb-1">Seguro</h4>
              <p className="text-gray-300 text-sm">
                Pagamento esturrido suporte novo e suporte dedicado.
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-10">
          <h3 className="text-xl font-semibold text-center mb-6 md:text-2xl text-white">
            O que muito bem
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <blockquote className="p-5 bg-gray-800 rounded-lg shadow">
              <p className="italic text-sm text-gray-300">
                "Produto excelente, super confortável!"
              </p>
              <footer className="mt-3 text-xs font-semibold">— João</footer>
            </blockquote>
            <blockquote className="p-5 bg-gray-800 rounded-lg shadow">
              <p className="italic text-sm text-gray-300">
                "Chegou rápido e a qualidade é ótima."
              </p>
              <footer className="mt-3 text-xs font-semibold">— Maria</footer>
            </blockquote>
            <blockquote className="p-5 bg-gray-800 rounded-lg shadow">
              <p className="italic text-sm text-gray-300">
                "Recomendo a todos, valeu cada centavo."
              </p>
              <footer className="mt-3 text-xs font-semibold">— Pedro</footer>
            </blockquote>
          </div>
        </section>

        {/* Quem sou eu */}
        <section
          id="sobre"
          className="py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Imagem */}
          <div className="flex justify-center">
            <img
              src="pe-de-galo.jpg"
              alt="Minha foto"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold md:text-3xl text-white">
              Quem sou eu?
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Olá! Meu nome é{" "}
              <span className="font-semibold text-yellow-300">
                Maycon Douglas
              </span>
              , profissional da área de projetos arquitetônicos, focado em criar
              soluções acessíveis, funcionais e bem pensadas para quem deseja
              construir com mais clareza e segurança.
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Este projeto foi criado para ajudar pessoas comuns a planejarem
              melhor sua casa, mesmo antes de contratar outros profissionais.
            </p>
          </div>
        </section>
        <section className="py-15 px-4">
          <BudgetForm />
        </section>

        {/* Desconto */}
        <section
          id="desconto"
          className="py-5 bg-gray-800 rounded-lg text-center px-4 mb-10"
        >
          <h3 className="text-lg font-bold mb-2 md:text-xl text-white">
            DESCONTO EXCLUSIVO:
          </h3>
          <p className="text-gray-300 text-sm mb-4 md:text-base">
            Na compra do projeto pronto hoje, você terá um super desconto em
            outros itens como:
            <p className="py-1">✔ Checklist da Obra Inteligente</p>
            <p className="py-1">✔ Guia Prático de Tomadas e Iluminação </p>
            <p className="py-1">✔ Guia Essencial de Materiais e Acabamentos</p>
          </p>
          <p className="text-gray-300 text-sm mb-4 md:text-base">
            📌 Materiais simples, diretos e práticos para evitar erros comuns na
            obra.
          </p>
        </section>
        {/* Garantia */}
        <section
          id="garantia"
          className="py-10 bg-gray-800 rounded-lg text-center px-4"
        >
          <h3 className="text-lg font-bold mb-2 md:text-xl text-white">
            Satisfação garantida
          </h3>
          <p className="text-gray-300 text-sm mb-4 md:text-base">
            7 dias de garantia — se não ficar satisfeito, devolvemos o dinheiro.
          </p>
          <p className="text-gray-300 text-sm mb-4 md:text-base">
            Está em dúvida? Fique tranquilo você tem 7 dias para decidir se o
            projeto faz sentido para você ou não. Se entender que não é, basta
            solicitar o reembolso.
          </p>
          <a
            href="#produto"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Comprar Agora
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-gray-500 md:text-sm">
        © {new Date().getFullYear()} SuaMarca. Todos os direitos reservados.
      </footer>
    </div>
  );
}
