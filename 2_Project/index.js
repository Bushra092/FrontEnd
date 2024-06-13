let toasts = document.querySelectorAll(".btn");

let toastContainer = document.getElementById("toastMsg");
toasts.forEach((toast) => {
  toast.addEventListener("click", () => {
    let text = toast.innerText;
    let elem = document.createElement("div");
    elem.classList.add("btn");
    elem.classList.add("msgElem");

    elem.innerHTML = `  ${text} toast Notification <i class="fa fa-close"></i>  `;
    toastContainer.appendChild(elem);
    let close = elem.querySelector(".fa.fa-close");
    close.addEventListener("click", () => {
      clearTimeout(timeout);
      elem.remove();
    });
    if (text === "Success") {
      elem.style.borderBottom = "3px solid #22C55E";
    }
    if (text === "Info") {
      elem.style.borderBottom = "3px solid #3B82F6";
    }
    if (text === "Warning") {
      elem.style.borderBottom = "3px solid #F97316";
    }
    if (text === "Error") {
      elem.style.borderBottom = "3px solid #EF4444";
    }

    let timeout = setTimeout(() => {
      elem.remove();
    }, 5000);
  });
});
