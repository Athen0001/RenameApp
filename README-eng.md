# RenameApp

[README in Portuguese](README.md) 

RenameApp is a simple desktop application developed with **Electron** and **Node.js**, which allows you to quickly and conveniently rename all files in a given folder. It is a perfect tool for those who need to organize files in bulk with a new naming pattern.

---

## Summary
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [How ​​to Use](#-how-to-use)
- [How ​​the Code Works](#-how-the-code-works)
- [Main Files](#-main-files)
- [Contributions](#-contributions)

---

## 🚀 **Features**
- Select a folder in the file system.
- Automatic renaming of all files within the folder with a new name pattern provided by the user.
- Intuitive and minimalist graphical interface for ease of use.

---

## 🛠️ **Technologies Used**
### **Backend (app logic):**
- **Electron:** Framework for creating cross-platform desktop applications using JavaScript, HTML and CSS.
- **Node.js:** For file manipulation and renaming logic.

### **Frontend (graphical interface):**
- **HTML + CSS:** To create a simple and responsive interface.
- **JavaScript:** To control graphical interface events and communication with the backend.

### **Packaging and Distribution:**
- **Electron-Builder:** Used to create the Windows executable installer.

---

## 📖 **How ​​to Use**

1. Download the renameapp Setup 1.0.0.exe file.

2. Install the software normally (Windows Defender may alert you that the file is not recognized, run it anyway).

3. Click on the generated shortcut.

<img src="https://i.ibb.co/9GBVGCj/11.png" alt="Atalho Gerado" width="400" />

4. Write the new name you want the files to have.

<img src="https://i.ibb.co/Jtj12hX/12.png" alt="Novo Nome" width="400" />

5. Click on "Select folder" and select the folder where the files are.

<img src="https://i.ibb.co/2MPLSWV/13.png" alt="Selecionar Pasta" width="400" />

6. Click on "Rename Files". A message should appear informing you that the files were successfully renamed.

<img src="https://i.ibb.co/0GD9MmB/14.png" alt="Arquivos Renomeados" width="400" />

Files before.

<img src="https://i.ibb.co/L9dFTkd/15.png" alt="Arquivos Antes" width="400" />

Files after.

<img src="https://i.ibb.co/K54bjwZ/16.png" alt="Arquivos Depois" width="400" />

---

## 🧰 **How ​​the Code Works**
### Project Structure
```plaintext
renameapp/
│   ├── renderer/
│         ├── index.html      # Graphical interface
│         ├── renderer.js     # Frontend events
├── package.json              # Project setup and dependencies
├── main.js                   # Electron initialization and main logic
├── preload.js                # Communication between frontend and backend
├── renameapp Setup 1.0.0.exe # Program installer
```

### Main files
**1. main.js**
- Manages the creation of the application window.

**2. preload.js**
- Ensures the security of the app by exposing secure functions from the backend to the frontend.

**3. renderer.js**
- Handles graphical interface events, such as clicking on the "Select Folder" and "Rename" buttons.

**1. index.html**
- Contains the graphical interface layout (input, buttons and message display) and internal CSS styling.

---

## 🤝 **Contributions**
Contributions are welcome!