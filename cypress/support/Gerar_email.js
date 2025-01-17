function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10); // Gera uma string aleatória
  return `user${randomString}@hotmail.com`; // Retorna o e-mail único
}

export default generateRandomEmail

