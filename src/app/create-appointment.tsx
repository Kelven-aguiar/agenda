"use client"
import React from 'react';
import Modal from './modal';

// Componente do botão para criar um novo agendamento
function NewAppointmentButton() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Função para abrir a janela/modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar a janela/modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex mt-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal} // Chama a função openModal quando o botão é clicado
      >
        Novo Agendamento
      </button>

      {/* Janela/Modal para inserir os dados */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default NewAppointmentButton;
