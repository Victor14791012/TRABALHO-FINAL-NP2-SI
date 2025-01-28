const crypto = require("crypto");

// Gerar par de chaves RSA
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048, // Tamanho da chave
});

// Função para criptografar com chave pública
function encryptText(plainText, publicKey) {
  return crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(plainText)
  ).toString("base64");
}

// Função para descriptografar com chave privada
function decryptText(encryptedText, privateKey) {
  return crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(encryptedText, "base64")
  ).toString();
}

// Exemplo de uso
console.log("\nGerando chaves...");
console.log("\nChave pública:\n", publicKey.export({ type: "pkcs1", format: "pem" }));
console.log("\nChave privada:\n", privateKey.export({ type: "pkcs1", format: "pem" }));

const originalText = "Este é um texto seguro com RSA.";
console.log("\nTexto original:", originalText);

const encryptedText = encryptText(originalText, publicKey);
console.log("\nTexto criptografado:", encryptedText);

const decryptedText = decryptText(encryptedText, privateKey);
console.log("\nTexto descriptografado:", decryptedText);
