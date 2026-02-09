"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Digite seu nome completo" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z
    .string()
    .min(8, { message: "Digite um telefone válido" })
    .regex(/^\d+$/, { message: "Apenas números" }),
  projectType: z.enum(["residencial", "comercial", "personalizado"]),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type FormData = z.infer<typeof schema>;

export default function BudgetForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: undefined, // Usando undefined em vez de any
    },
  });

  const onSubmit = (data: FormData) => {
    // Validação adicional para projectType
    if (!data.projectType) {
      alert("Por favor, selecione um tipo de projeto");
      return;
    }
    
    console.log("Dados enviados:", data);
    alert("Mensagem enviada com sucesso!");
    // futuramente aqui pode chamar API Next.js ou backend
  };

  return (
    <section
      id="orcamento"
      className="py-12 px-4 max-w-3xl mx-auto bg-white rounded-lg shadow-md text-gray-800"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Solicite um Orçamento
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded-lg p-2"
            placeholder="Digite seu nome"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded-lg p-2"
            placeholder="exemplo@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full border rounded-lg p-2"
            placeholder="(11) 99999-9999"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Tipo de Projeto */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tipo de Projeto
          </label>
          <select
            {...register("projectType")}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial</option>
            <option value="personalizado">Personalizado</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm">Selecione um tipo de projeto</p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full border rounded-lg p-2"
            placeholder="Escreva os detalhes do seu projeto..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}