import { rotas } from "./routes";

async function gerenciarRota() {
	// 1. Definimos como rota padrão, caso nenhuma definida
    let hash = window.location.hash || '#';
    
	// 2. Verificamos se existe rota mapeada para a hash, se sim, invocamos a função armazenada, senão retornamos página não encontrada
    let conteudo = rotas[hash] ? await rotas[hash]() : '<h1>Página não encontrada</h1>';

	// 3. Atualizamos o DOM para inserir o conteudo retornado (ou não) pela nossa função
	document.getElementById('app').innerHTML = conteudo;
}

// Ouvinte para o evento hashchange
window.addEventListener('hashchange', gerenciarRota);

window.addEventListener('load', gerenciarRota);