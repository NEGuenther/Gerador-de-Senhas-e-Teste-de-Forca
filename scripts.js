function testarForca(senha) {
    let forca = 0;

    // Comprimento
    if (senha.length >= 12) forca += 3;
    else if (senha.length >= 8) forca += 2;
    else forca += 1;

    // Verificar tipos de caracteres
    if (/[a-z]/.test(senha)) forca += 1;  // Letras minúsculas
    if (/[A-Z]/.test(senha)) forca += 1;  // Letras maiúsculas
    if (/[0-9]/.test(senha)) forca += 1;  // Números
    if (/[^a-zA-Z0-9]/.test(senha)) forca += 1;  // Caracteres especiais

    // Avaliar a força total
    if (forca <= 3) return "Senha Fraca";
    if (forca <= 5) return "Senha Média";
    return "Senha Forte";
}

function retornaForcaSenha() {
    // Obter a senha digitada
    var senha = document.getElementById("senha").value;

    // Testar a força da senha
    var forca = testarForca(senha);

    // Mostrar a força da senha no elemento com o id "forca-senha"
    var p = document.getElementById("forca-senha");
    p.innerHTML = forca;  // Atualizar o texto de acordo com a força da senha
}


function gerarSenha() {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let caracteres = minusculas + maiusculas + numeros + simbolos;

    let senha = "";
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(randomIndex);
    }
    return senha;
}

function retornaSenhaGerada() {
    var senhaGerada = gerarSenha();
    var p = document.getElementById("senha-gerada");
    p.innerHTML = senhaGerada;  // Atualizar o texto de acordo com a força da senha
    
}
