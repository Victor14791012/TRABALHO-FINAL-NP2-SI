// Importação da biblioteca CryptoJS
const CryptoJS = require("crypto-js");

// Chave secreta
const secretKey = "segredo";

// Função para criptografar o texto
function encryptText(plainText) {
    const encryptedText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    return encryptedText;
}

// Função para descriptografar o texto
function decryptText(encryptedText) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}

// Exemplo de uso
console.log();
const originalText = "Meu texto criptografado nota 10.";
console.log("Texto original:", originalText);

console.log();
const encryptedText = encryptText(originalText);
console.log("Texto criptografado:", encryptedText);

console.log();
const decryptedText = decryptText(encryptedText);
console.log("Texto descriptografado:", decryptedText);
