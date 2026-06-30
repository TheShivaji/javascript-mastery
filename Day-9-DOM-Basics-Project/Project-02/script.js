let showModel = document.querySelectorAll(".show-modal")
let model = document.querySelector(".modal")
let closeModel = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")

const openModal = () => {
  model.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

const closeModals = () => {
  model.classList.add("hidden")
  overlay.classList.add("hidden")
}
for (let i = 0; i < showModel.length; i++)
  showModel[i].addEventListener("click", openModal)

closeModel.addEventListener("click", closeModals)
overlay.addEventListener('click', closeModals);

document.addEventListener('keydown', function (e) {
console.log(e.key)

  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModals();
  }
});
