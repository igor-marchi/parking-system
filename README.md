# parking-system

# Sistema de Estacionamento

Este projeto é um sistema de estacionamento simples implementado em TypeScript. Ele faz uso do padrão de projeto Strategy para calcular a tarifa de estacionamento com base no tempo de estadia e na localização do estacionamento.

## Padrão de Projeto Strategy

O padrão de projeto Strategy é usado neste projeto para implementar diferentes algoritmos de cálculo de tarifa de estacionamento. Cada algoritmo representa uma "estratégia" diferente para calcular a tarifa.

A estratégia é selecionada em tempo de execução, dependendo da localização do estacionamento. Isso permite que o sistema de estacionamento suporte diferentes políticas de tarifação para diferentes locais de estacionamento.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

Executando os testes
Para executar os testes, use o seguinte comando:

```bash
npm test
```

Para executar os testes no modo watch, use o seguinte comando:

```bash
npm run test:watch
```
