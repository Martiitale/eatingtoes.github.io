<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For Evan 💌</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Courier New', monospace;
      background: linear-gradient(#fff4f8, #e0e0ff);
      color: #333;
      scroll-behavior: smooth;
    }
    section {
      padding: 80px 20px;
      text-align: center;
    }
    h1, h2 {
      margin-bottom: 20px;
    }
    .secret-text {
      background-color: #fff;
      color: #fff;
      user-select: text;
    }
    .clickable {
      color: #0077ff;
      cursor: pointer;
      text-decoration: underline;
    }
    .hidden-code {
      display: none;
      margin-top: 10px;
      font-size: 1.2rem;
      color: darkred;
    }
    .flower {
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 30px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .flower:hover {
      transform: rotate(10deg) scale(1.2);
    }
    .code-box {
      background-color: #222;
      color: #0f0;
      font-family: monospace;
      padding: 10px;
      margin: 10px auto;
      max-width: 500px;
      display: none;
    }
  </style>
</head>
<body>

  <!-- Hidden flower Easter egg -->
  <div class="flower" onclick="window.open('https://forms.gle/tu-formulario-secreto', '_blank')">🌸</div>

  <section>
    <h1>Hey Evan 👀</h1>
    <p>Esta no es una web cualquiera. Aquí hay escondido un <strong>código</strong> que solo tú puedes encontrar.</p>
    <p>Buena suerte... o no la necesitarás </p>
  </section>

  <section>
    <h2>🌌 Mira las estrellas</h2>
    <p class="clickable" onclick="reveal('code1')">¿Has notado esto? *</p>
    <div id="code1" class="hidden-code">Primera letra: <strong>M</strong></div>
  </section>

  <section>
    <h2>🎥 Fight Club</h2>
    <p class="clickable" onclick="reveal('code2')">Click para reproducir... o no.</p>
    <div id="code2" class="hidden-code">Segunda letra: <strong>A</strong></div>
  </section>

  <section>
    <h2>💻 Texto sin importancia (?)</h2>
    <p class="secret-text">Aquí no hay nada. Sigue bajando. De verdad. Nada. ¿Por qué sigues leyendo esto? Está vacío. O tal vez... <strong>T</strong></p>
  </section>

  <section>
    <h2>🎨 Poppe the Performer?</h2>
    <p class="clickable" onclick="reveal('code4')">Haz clic si te atreves.</p>
    <div id="code4" class="hidden-code">Cuarta letra: <strong>E</strong></div>
  </section>

  <section>
    <h2>🧠 Código morse... o no</h2>
    <p class="clickable" onclick="reveal('code5')">••• --- •••</p>
    <div id="code5" class="hidden-code">Última letra: <strong>A</strong></div>
  </section>

  <section>
    <h2>💬 ¿Ya tienes el código?</h2>
    <p>Una vez reúnas las 5 letras, ordénalas y ve a la siguiente página para introducirlo.</p>
    <div class="code-box">Pista: son tus iniciales y algo más... <br><br> Código final: <strong>matea</strong></div>
  </section>

  <script>
    function reveal(id) {
      document.getElementById(id).style.display = 'block';
    }
  </script>
</body>
</html>
