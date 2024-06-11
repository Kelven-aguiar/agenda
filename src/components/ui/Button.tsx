"use client";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./dialog";

export default function Button() {
	const [clientName, setClientName] = useState("");
	const [time, setTime] = useState("");
	const [day, setDay] = useState("");
	const [petName, setPetName] = useState("");
	const [reason, setReason] = useState("");

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Nome do cliente:" + clientName);
		console.log("Horário: " + time);
		console.log("Dia: " + day);
		console.log("Nome do Pet: " + petName);
		console.log("Motivo:" + reason);
	};

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
									id="clientName"
									type="text"
									name="clientName"
									placeholder="Digite o nome do cliente"
									onChange={(e) =>
										setClientName(e.target.value)
									}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Horário
								</label>
								<input
									id="time"
									type="time"
									value={time}
									onChange={(e) => setTime(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Dia
								</label>
								<input
									id="day"
									type="date"
									value={day}
									onChange={(e) => setDay(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Nome do Pet
								</label>
								<input
									id="petName"
									type="text"
									value={petName}
									onChange={(e) => setPetName(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Motivo
								</label>
								<input
									id="reason"
									type="text"
									value={reason}
									onChange={(e) => setReason(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
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
