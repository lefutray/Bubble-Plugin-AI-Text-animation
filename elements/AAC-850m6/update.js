function(instance, properties, context) {
  const container = instance.data.container;
  if (!container) return;

  container.innerHTML = ""; // Limpiar contenido anterior

  // Estilos heredados desde Bubble
  const fontFamily = properties.bubble.font?.family ? `"${properties.bubble.font.family}"` : "inherit";
  const fontSize = properties.bubble.font?.size || 16;
  const fontWeight = properties.bubble.font?.weight || 400;
  const fontColor = properties.bubble.font?.color || "#000000";
  const textAlign = properties.bubble.font?.align || "left";

  // Personalización del usuario
  const starSize = properties.star_size || 16;
  const text = properties.text || "Generating your report";

  const html = `
    <style>
      @keyframes custom-rotate-star {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }

      @keyframes custom-sparkle-appear {
        0%, 49% { opacity: 0; transform: scale(0.8); }
        50%, 100% { opacity: 1; transform: scale(1); }
      }

      @keyframes custom-skeleton-loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      .custom-container {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: ${fontFamily};
        text-align: ${textAlign};
        width: 100%;
        height: 100%;
      }

      .custom-icon-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${starSize * 2}px;
        height: ${starSize * 1.2}px;
      }

      .custom-main-star {
        font-size: ${starSize}px;
        position: absolute;
        color: ${fontColor};
        animation: custom-rotate-star 1.5s infinite linear;
        transform-origin: center;
      }

      .custom-small-star {
        font-size: ${starSize / 2.5}px;
        position: absolute;
        color: ${fontColor}CC;
        opacity: 0;
      }

      .custom-small-star:nth-child(2) {
        top: -2px;
        left: -3px;
        animation: custom-sparkle-appear 1.5s infinite ease-in-out;
      }

      .custom-small-star:nth-child(3) {
        top: 2px;
        right: -3px;
        animation: custom-sparkle-appear 1.5s infinite ease-in-out 0.3s;
      }

      .custom-small-star:nth-child(4) {
        bottom: -1px;
        left: 0px;
        animation: custom-sparkle-appear 1.5s infinite ease-in-out 0.6s;
      }

      .custom-loading-text {
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
        color: ${fontColor};
        background: linear-gradient(90deg, ${fontColor}4D 25%, ${fontColor} 50%, ${fontColor}4D 75%);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: custom-skeleton-loading 2.5s infinite linear;
      }
    </style>

    <div class="custom-container">
      <div class="custom-icon-container">
        <span class="custom-main-star">✦</span>
        <span class="custom-small-star">✦</span>
        <span class="custom-small-star">✦</span>
        <span class="custom-small-star">✦</span>
      </div>
      <span class="custom-loading-text">${text}</span>
    </div>
  `;

  container.innerHTML = html;
}