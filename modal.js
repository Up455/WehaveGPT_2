function openModal(groupIndex, imageIndex) {
  currentGroup = groupIndex;
  currentImage = imageIndex;
  updateModal();
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function updateModal() {
  const group = sculptureGroups[currentGroup];
  const modalImage = document.getElementById("modal-image");
  const modalText = document.getElementById("modal-text");

  modalImage.src = group.images[currentImage];
  modalText.innerHTML = `<h2>${group.title}</h2><p>${group.description}</p>`;
}

function nextImage() {
  const group = sculptureGroups[currentGroup];
  currentImage = (currentImage + 1) % group.images.length;
  updateModal();
}

function prevImage() {
  const group = sculptureGroups[currentGroup];
  currentImage = (currentImage - 1 + group.images.length) % group.images.length;
  updateModal();
}

document.addEventListener("keydown", function(event) {
  if (document.getElementById("modal").style.display === "flex") {
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
    if (event.key === "Escape") closeModal();
  }
});
