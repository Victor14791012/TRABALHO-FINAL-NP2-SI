# Trabalho Final NP2-2024-2

## 📌 Sobre o Projeto
Este projeto demonstra a aplicação de **criptografia assimétrica** utilizando a biblioteca `crypto` do Node.js. O código implementa a geração de chaves RSA, criptografia de um texto utilizando a chave pública e a sua posterior descriptografia utilizando a chave privada.

## 🔑 O que é Criptografia?
Criptografia é uma técnica utilizada para proteger informações, tornando-as inacessíveis para pessoas não autorizadas. Existem dois principais tipos de criptografia:

### 🔑 Criptografia Simétrica
Na criptografia simétrica, a mesma chave é usada para **criptografar e descriptografar** os dados. Exemplo:
- Algoritmo **AES** (Advanced Encryption Standard).
- Exemplo de uso: **Wi-Fi com WPA2**.

>  **Desvantagem**: Se a chave for comprometida, qualquer pessoa poderá descriptografar os dados.

### 🔹 Criptografia Assimétrica
Na criptografia assimétrica, existem **duas chaves**:
- **Chave pública** (para criptografar)
- **Chave privada** (para descriptografar)

O algoritmo mais utilizado é o **RSA**. Esse método é mais seguro para troca de informações sensíveis.

> ✅ **Vantagem**: Mesmo se alguém tiver acesso à chave pública, os dados não poderão ser descriptografados sem a chave privada.

## ⚠️ Vulnerabilidades em Aplicações Web
Aplicações web estão sujeitas a várias vulnerabilidades. Algumas das mais comuns incluem:

- **SQL Injection**: Quando um atacante insere código SQL malicioso em um campo de entrada.
- **Cross-Site Scripting (XSS)**: Quando scripts maliciosos são injetados em sites confiáveis.
- **Brute Force Attack**: Tentativas automáticas de adivinhar senhas.
- **Man-in-the-Middle (MITM)**: Um atacante intercepta a comunicação entre dois usuários.

### Como Proteger?
- Utilize **criptografia** para armazenar senhas.
- Valide **entradas do usuário** para evitar SQL Injection e XSS.
- Implemente **autenticação de dois fatores (2FA)**.

## Como Executar o Projeto
### 1️⃣ Instalar Dependências
Certifique-se de ter o **Node.js** instalado. Em seguida, instale os pacotes necessários:
```sh
npm install
```

### 2️⃣ Executar o Código
Para rodar o script, use:
```sh
node nome_do_arquivo.js
```



## 📌 Link do Repositório
https://github.com/Victor14791012/TRABALHO-FINAL-NP2-SI

**Feito por:** Victor Hugo Lourenço de Carvalho
**Feito por:** Bruno Almeida
**Turma:** INFO 6B

