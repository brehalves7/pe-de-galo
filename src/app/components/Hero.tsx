"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center py-12 px-6 text-white bg-[url('/arquitetura.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay para dar contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <h1 className="text-3xl font-extrabold mb-4 leading-tight md:text-5xl">
          Transformando Sonhos em Realidade{" "}
          <span className="text-yellow-300">Conforto</span> e{" "}
          <span className="underline">Performance</span>
        </h1>
        <p className="text-base mb-6 max-w-lg md:text-lg mx-auto">
          Projeto arquitetônico pronto, funcional e moderno, ideal para
          planejar, orçar e construir com segurança.
        </p>
        <p className="text-base mb-6 max-w-lg md:text-lg mx-auto">
          Você está a um passo da sua Casa Moderna dos Sonhos!
        </p>

        <a
          href="#produto"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Comprar Agora
        </a>
      </div>
    </section>
  );
}
