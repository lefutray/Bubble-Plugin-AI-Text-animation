function(instance, context) {
  if (!instance.root || typeof instance.root.appendChild !== "function") {
    console.error("El plugin no tiene acceso a instance.root");
    return;
  }

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100%";

  instance.root.appendChild(container);
  instance.data.container = container;
}