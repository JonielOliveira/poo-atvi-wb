import { runApplication } from '../src/app/app-teste';

test('Teste de fluxo de entrada', () => {
    const promptMock = jest.fn()
        .mockReturnValueOnce("João")
        .mockReturnValueOnce("25")
        .mockReturnValueOnce("Desenvolvedor");

    // Espiona console.log para capturar a saída
    const logSpy = jest.spyOn(console, 'log').mockImplementation((msg) => {
        // Exibe a saída no terminal
        process.stdout.write(`${msg}\n`);
    });

    // Exibe entradas no terminal
    promptMock.mockImplementation((question: string) => {
        console.log(`Entrada recebida: ${question}`);
        return promptMock(question);
    });

    runApplication(promptMock);

    // Exibe as entradas e saídas no terminal
    console.log('Entradas recebidas:', promptMock.mock.calls);
    console.log('Saídas capturadas:', logSpy.mock.calls.map(call => call[0]));

    // Verifica o promptMock
    expect(promptMock).toHaveBeenCalledTimes(3);
    // Verifica a saída esperada
    expect(logSpy).toHaveBeenCalledWith("Nome: João, Idade: 25, Profissão: Desenvolvedor");

    // Restaura o console.log original
    logSpy.mockRestore();

});
