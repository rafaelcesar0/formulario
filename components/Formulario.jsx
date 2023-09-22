import React from 'react';

const Formulario = () => {
  return (
    <section>
      <h1 className="text-3xl">
        <b>Formulário de cadastro</b>
      </h1>
      <ul className="list-disc text-left pl-4">
        <li>Nenhum campo pode estar vazio</li>
        <li>Usuário só poderá conter letrase/ou números</li>
        <li>Usuário deverá ter entre 3 e 12 caracteres</li>
      </ul>
      <hr class="border-t border-gray-900 my-4" />

      <form action="/" method="POST" class="space-y-4">
        <div class="flex flex-col">
          <label for="nome" class="mb-1">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu Nome"
            class="px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="flex flex-col">
          <label for="sobrenome" class="mb-1">
            Sobrenome:
          </label>
          <input
            type="text"
            id="sobrenome"
            placeholder="Digite seu Sobrenome"
            class="px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="flex flex-col">
          <label for="cpf" class="mb-1">
            CPF:
          </label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite seu CPF"
            class="px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="flex flex-col">
          <label for="usuario" class="mb-1">
            Usuário:
          </label>
          <input
            type="text"
            id="usuario"
            placeholder="Crie um Usuário"
            class="px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="flex flex-col">
          <label for="senha" class="mb-1">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Crie uma Senha"
            class="px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="flex flex-col">
          <label for="confirmar-senha" class="mb-1">
            Confirmar Senha:
          </label>
          <input
            type="password"
            id="confirmar-senha"
            placeholder="Repita Senha"
            class="px-3 py-2 border rounded-lg"
          />
        </div>
      </form>
    </section>
  );
};

export default Formulario;
