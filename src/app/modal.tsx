'@useClient'
import React from 'react';

// Componente do modal para inserir dados de um novo agendamento
function Modal({ onClose }: { onClose: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Nova Consulta</h2>
        {/* Aqui você pode adicionar o formulário para inserir os dados */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose} // Chama a função onClose quando o botão de fechar é clicado
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
