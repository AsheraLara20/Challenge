// Función para encriptar el texto
function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = btoa(inputText); // Codifica el texto a base64
    document.getElementById("outputText").value = encryptedText;
  }
  
  // Función para desencriptar el texto
  function decrypt() {
    let inputText = document.getElementById("outputText").value;
    try {
      let decryptedText = atob(inputText); // Decodifica el texto desde base64
      document.getElementById("inputText").value = decryptedText;
    } catch (error) {
      alert("Texto inválido para desencriptar");
    }
  }