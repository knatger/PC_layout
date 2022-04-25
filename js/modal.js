const modal = () => {
  const modalBtn = document.querySelector(".modal__button");
  const courseBtn = document.querySelector(".course__button");
  const modal = document.querySelector(".modal");
  const modalInner = document.querySelector(".modal__inner");
  const closeBtn = document.createElement("div");
  const img = document.createElement("img");

  const buttons = [modalBtn, courseBtn];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
      modalInner.style.position = "relative";
      img.src = "../img/cross.svg";
      closeBtn.className = "modal__close";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.width = "50px";
      closeBtn.style.height = "50px";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "15px";
      closeBtn.style.right = "15px";
      modalInner.append(closeBtn);
      closeBtn.append(img);
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "";
    }
  });
};

modal();
