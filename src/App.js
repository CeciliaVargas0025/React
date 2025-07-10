import { useState } from "react";
import "./styles.css";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [posts, setPosts] = useState([]);
  const [erro, setErro] = useState("");

  function adicionarPost(e) {
    e.preventDefault();
    if (titulo.trim() === "" || imagem.trim() === "") {
      setErro("Por favor, complete todos os campos.");
      return;
    }
    const novoPost = { titulo: titulo, imagem: imagem };
    setPosts([...posts, novoPost]);

    setTitulo("");
    setImagem("");
    setErro("");
  }

  return (
    <div className="App">
      <h1>Novo Post</h1>

      <form onSubmit={adicionarPost}>
        <label>
          Título:{" "}
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Imagem (URL):{" "}
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {erro && <div className="notificacao-erro">{erro}</div>}

      <hr />
      <h2>Postagens</h2>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.titulo}</h3>
          <img src={post.imagem} alt={post.titulo} />
        </div>
      ))}
    </div>
  );
}
