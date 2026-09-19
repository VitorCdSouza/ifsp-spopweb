export function exibirInicio() {
    return `
		<h1>Bem-vindo</h1>
		<p>Esta é a página inicial do nosso SPA</p>
	`;
}

export function exibirSobre() {
    return `
		<h1>Sobre</h1>
		<p>Esta é nossa aula de Programação Dinâmica para Web e estamos aprendendo sobre SPAs</p>
	`;
}

export function exibirContato() {
    return `
		<h1>Contato</h1>
		<p>Entre em contato conosco: (11) 0000-0000</p>
	`;
}

export async function exibirTODO() {
    let retorno = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => (json));
    console.log(retorno);
    
    return `
		<h1>${retorno.title}</h1>
		<p>userId: ${retorno.userId}</p>
	`
}

export async function exibirPosts() {
    let retorno = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => (json));
    console.log(retorno);
    
    return `
		<h1>${retorno.title}</h1>
		<p>userId: ${retorno.userId}</p>
		<p>body: ${retorno.body}</p>
	`
}

export async function exibirFotos() {
    let retorno = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(json => (json[1]));
    console.log(retorno);
    
    return `
		<h1>${retorno.title}</h1>
		<p>userId: ${retorno.id}</p>
		<img src="${retorno.url}"></img>
	`
}