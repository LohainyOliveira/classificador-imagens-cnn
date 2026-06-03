# Classificador de Imagens com CNN

Projeto desenvolvido utilizando Redes Neurais Convolucionais (CNN) para classificação automática de imagens.

O sistema recebe uma imagem enviada pelo usuário e identifica se ela pertence a uma das categorias treinadas.

## Classes utilizadas

* Bicicleta
* Carro
* Moto

---

## Tecnologias utilizadas

### Backend

* Python 3.11.15
* Flask
* TensorFlow
* Pillow
* NumPy

### Frontend

* React
* Vite 5.2.0
* Axios

---

## Estrutura do projeto

```txt
classificador-imagens-cnn/
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── dataset/
│   ├── model/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/LohainyOliveira/classificador-imagens-cnn
```

Entre na pasta:

```bash
cd classificador-imagens-cnn
```

---

## Instalação do Backend

Entre na pasta:

```bash
cd backend
```

Crie o ambiente virtual:

```bash
python -m venv venv
```

Ative:

Windows:

```bash
.\venv\Scripts\activate
```

Instale dependências:

```bash
pip install -r requirements.txt
```

Treine o modelo:

```bash
python train_model.py
```

Inicie a API:

```bash
python app.py
```

Servidor:

```txt
http://localhost:5000
```

---

## Instalação do Frontend

Abra outro terminal.

Entre na pasta:

```bash
cd frontend
```

Instale dependências:

```bash
npm install
```

Instale Axios:

```bash
npm install axios
```

Execute:

```bash
npm run dev
```

Aplicação:

```txt
http://localhost:5173
```

---

## Funcionamento

1. Usuário envia uma imagem.
2. Frontend envia para API.
3. Backend processa usando CNN.
4. Sistema retorna a categoria identificada.
5. Exibe o nível de confiança.

---

## Integrantes

* Lohainy Teixeira dos Santos Oliveira
* Humberto Moreira

---

## Licença

Projeto acadêmico desenvolvido para fins educacionais.
