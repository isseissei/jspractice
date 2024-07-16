document.addEventListener("DOMContentLoaded", () => {
    const front = document.getElementById("editor-front");
    const back = document.getElementById("editor-back");
  
    // div 要素をクリックすると input 要素が focus される
    front.addEventListener("click", () => {
      back.style.display = "block";
      back.focus();
    });
  
    back.addEventListener("focus", () => {
      front.classList.add("focus");
    });
  
    back.addEventListener("blur", () => {
      front.classList.remove("focus");
    });
  
    back.addEventListener("input", () => {
      front.textContent = back.value;
    });
  });
  