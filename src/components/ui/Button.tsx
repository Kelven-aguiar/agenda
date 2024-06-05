"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./dialog";
import { useState } from "react";

const [name, setName] = useState();
function registerClient() {}

const handleRegister = () => {};

export default function Button() {
	return (
		<Dialog>
			<DialogTrigger className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
				Cadastrar nova consulta
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cadastro de nova consulta</DialogTitle>
					<DialogDescription>
						<form className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Nome do Cliente
								</label>
								<input
									type="text"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Horário
								</label>
								<input
									type="time"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Dia
								</label>
								<input
									type="date"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Nome do Pet
								</label>
								<input
									type="text"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Motivo
								</label>
								<textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
							</div>
						</form>
						<button
							onClick={handleRegister}
							className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
						>
							Cadastrar
						</button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
