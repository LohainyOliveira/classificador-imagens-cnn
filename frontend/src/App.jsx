import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  function selecionarImagem(event) {
    const arquivo = event.target.files[0];

    if (arquivo) {
      setImagem(arquivo);
      setPreview(URL.createObjectURL(arquivo));
      setResultado(null);
    }
  }

  async function enviarImagem() {
    if (!imagem) {
      alert("Selecione uma imagem primeiro.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imagem);

    try {
      setCarregando(true);

      const response = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResultado(response.data);
    } catch (error) {
      alert("Erro ao classificar a imagem.");
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container">
      <h1>Classificador de Imagens</h1>

      <p>Envie uma imagem de carro, moto ou bicicleta.</p>

      <input type="file" accept="image/*" onChange={selecionarImagem} />

      {preview && (
        <div className="preview">
          <img src={preview} alt="Imagem selecionada" />
        </div>
      )}

      <button onClick={enviarImagem}>
        {carregando ? "Classificando..." : "Classificar imagem"}
      </button>

      {resultado && (
        <div className="resultado">
          <h2>Resultado</h2>
          <p>
            Classe identificada: <strong>{resultado.classe}</strong>
          </p>
          <p>
            Confiança: <strong>{resultado.confianca}%</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;