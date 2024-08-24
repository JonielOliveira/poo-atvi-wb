export function runApplication(prompt: (question: string) => string) {
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Qual é a sua idade?");
    const profissao = prompt("Qual é a sua profissão?");
    
    console.log(`Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`);
}
