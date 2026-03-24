document.getElementById('btnEnviar').addEventListener('click', () => {
    const autor = document.getElementById('autor').value;
    const texto = document.getElementById('mensagem').value;

    if (!autor || !texto) {
        alert("Preencha o autor e a mensagem!");
        return;
    }

    const url = `http://localhost:3000/api/mensagem?texto=${encodeURIComponent(texto)}&autor=${encodeURIComponent(autor)}`;

    window.location.href = url;
});