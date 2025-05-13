function(instance, properties) {
  if (!instance.root) return;

  instance.root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.gap = "8px";
  wrapper.style.fontFamily = properties.bubble.font?.family || "sans-serif";
  wrapper.style.fontSize = (properties.bubble.font?.size || 16) + "px";
  wrapper.style.fontWeight = properties.bubble.font?.weight || 400;
  wrapper.style.color = properties.bubble.font?.color || "#000000";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";

  const star = document.createElement("span");
  star.textContent = "✦";
  star.style.fontSize = (properties.star_size || 16) + "px";

  const label = document.createElement("span");
  label.textContent = properties.text || "Loading preview";

  wrapper.appendChild(star);
  wrapper.appendChild(label);
  instance.root.appendChild(wrapper);
}