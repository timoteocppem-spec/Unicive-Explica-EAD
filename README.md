# Unicive — Landing Page EAD (Polo Caruaru)

Landing page institucional do polo de Caruaru-PE da Unicive, focada em explicar como funciona o curso 100% EAD: plataforma, área financeira, reconhecimento MEC e matrícula.

## 📁 Estrutura do projeto

```
unicive-ead/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos
├── js/
│   └── main.js         # Lógica do modal de vídeos
├── img/
│   └── logo.png        # Logo Unicive — Polo Caruaru
└── README.md
```

## 🚀 Como usar

Basta abrir o `index.html` no navegador, ou subir todos os arquivos para um servidor web / GitHub Pages.

## 🎨 Identidade visual

- **Verde principal:** `#006a52`
- **Verde profundo:** `#003225`
- **Laranja destaque:** `#f0a958`
- **Fonte:** Montserrat (Google Fonts)

## ⚙️ Configurações principais

### 1. Trocar número do WhatsApp
No arquivo `index.html`, procure por `wa.me/5581992640766` e substitua pelo número desejado (formato: DDI + DDD + número, somente dígitos).

### 2. Trocar vídeos do YouTube
**Vídeo principal** (no `index.html`): procure `COLE_O_ID_DO_VIDEO_PRINCIPAL` dentro do `<iframe>` da seção "VÍDEO PRINCIPAL" e substitua pelo ID do vídeo.

**Vídeos dos tutoriais** (no `js/main.js`): edite os campos `videoId` de cada tutorial:
```js
const tutoriais = {
    1: { titulo: '...', videoId: 'AQUI_O_ID_DO_YOUTUBE' },
    ...
};
```

> O ID do vídeo é a parte que vem após `v=` na URL do YouTube.
> Exemplo: em `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, o ID é `dQw4w9WgXcQ`.

### 3. Trocar a logo
Substitua o arquivo `img/logo.png` mantendo o mesmo nome.

## 📦 Push para o GitHub

```bash
git init
git add .
git commit -m "Landing page Unicive EAD - Polo Caruaru"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

---

© 2026 Unicive — Polo EAD Caruaru | Grupo CPPEM
