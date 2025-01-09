# RenameApp

[README in English](README-eng.md) 

RenameApp é uma aplicação desktop simples desenvolvida com **Electron** e **Node.js**, que permite renomear todos os arquivos de uma determinada pasta de forma rápida e prática. É uma ferramenta perfeita para quem precisa organizar arquivos em massa com um novo padrão de nomeação.

---

## Sumário
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Usar](#-como-usar)
- [Como Funciona o Código](#-como-funciona-o-código)
- [Principais Arquivos](#-principais-arquivos)
- [Contribuições](#-contribuições)

---

## 🚀 **Funcionalidades**
- Seleção de uma pasta no sistema de arquivos.
- Renomeação automática de todos os arquivos dentro da pasta com um novo padrão de nome fornecido pelo usuário.
- Interface gráfica intuitiva e minimalista para facilitar o uso.

---

## 🛠️ **Tecnologias Utilizadas**
### **Backend (lógica do app):**
- **Electron:** Framework para criar aplicações desktop multiplataforma usando JavaScript, HTML e CSS.
- **Node.js:** Para manipulação de arquivos e lógica de renomeação.

### **Frontend (interface gráfica):**
- **HTML + CSS:** Para criar uma interface simples e responsiva.
- **JavaScript:** Para controlar os eventos da interface gráfica e comunicação com o backend.

### **Empacotamento e Distribuição:**
- **Electron-Builder:** Utilizado para criar o instalador executável do Windows.

---

## 📖 **Como Usar**

1. Baixe o arquivo renameapp Setup 1.0.0.exe

2. Instale o software normalmente (o Windows Defender pode alertar devido ausência de reconhecimento do arquivo, execute mesmo assim).

3. Clique no atalho gerado.
![](https://i.ibb.co/9GBVGCj/11.png)

4. Escreva o novo nome que deseja que os arquivos passem a possuir.
![](https://i.ibb.co/Jtj12hX/12.png)

5. Clique em "Select folder" e selecione a pasta onde estão os arquivos.
![](https://i.ibb.co/2MPLSWV/13.png)

6. Clique em "Rename Files". Uma mensagem deverá aparecer informando que os arquivos foram renomeados com sucesso.
![](https://i.ibb.co/0GD9MmB/14.png)

Arquivos antes.
![](https://i.ibb.co/L9dFTkd/15.png)

Arquivos depois.
![](https://i.ibb.co/K54bjwZ/16.png)

---

## 🧰 **Como Funciona o Código**
### Estrutura do Projeto
```plaintext
renameapp/
│   ├── renderer/
│         ├── index.html      # Interface gráfica
│         ├── renderer.js     # Eventos do frontend
├── package.json              # Configuração do projeto e dependências
├── main.js                   # Inicialização do Electron e lógica principal
├── preload.js                # Comunicação entre frontend e backend
├── renameapp Setup 1.0.0.exe # Instalador do programa
```

### Principais arquivos
**1. main.js**
- Gerencia a criação da janela da aplicação.

**2. preload.js**
- Garante a segurança do app expondo funções seguras do backend para o frontend.

**3. renderer.js**
- Controla os eventos da interface gráfica, como o clique nos botões de "Selecionar Pasta" e "Renomear".

**1. index.html**
- Contém o layout da interface gráfica (input, botões e exibição de mensagens) e estilização CSS interna.

---

## 🤝 **Contribuições**
Contribuições são bem-vindas!