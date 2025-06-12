console.log("Frontend js ishga tushdi");

function itemTemplate(data) {
  return `  <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item.reja}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item.reja}"
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>`;
}

let creadFild = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: creadFild.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      creadFild.value = "";
      creadFild.focus();
    })
    .catch((err) => {
      console.log("Iltimos qyta harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  //delete oper
  console.log(e);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisz?")) {
      alert("Yes deb javob berildi");
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos boshdan harakat qilin");
        });
    }
  }
  //edit oper
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});
