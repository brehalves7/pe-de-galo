// src/components/ProductCard.tsx
"use client";

import Image from "next/image";

interface Props {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string; // caminho da imagem (ex: "/cena-01.png"
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
}: Props) {
  const handleBuy = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
      });

      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao iniciar checkout: " + (data.error || "desconhecido"));
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao iniciar pagamento. Veja o console.");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4">
      <div className="relative w-full h-64">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain rounded-lg"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Sem imagem
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold">{name}</h3>

      {description && <p className="text-gray-600 text-sm">{description}</p>}

      <p className="text-2xl font-extrabold text-blue-600">
        R$ {price.toFixed(2)}
      </p>

      <button
        onClick={handleBuy}
        className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow"
      >
        Comprar Agora
      </button>
    </div>
  );
}
