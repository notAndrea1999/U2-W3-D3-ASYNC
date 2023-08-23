fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())

  .then((userObj) => {
    const row = document.querySelector(".row");

    userObj.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `<div "class="card">
      <img src=${book.img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price}€</p>
        <a href="#" onclick="deleteBooks(event)" class="btn btn-primary">Scarta</a>
        <a href="#" id="compra" onclick="buyBooks(event)" class="btn btn-primary">Compra</a>
      </div>
    </div>`;
      row.appendChild(col);

      const buyBooks = (book) => {
        const libroComprato = document.createElement("p");
        const carrello = document.querySelector(".dropdown-menu");
        carrello.appendChild(libroComprato);
        libroComprato.innerHTML = `${book.title}`;
      };

      //   const compra = document.getElementById("compra");
      //   compra.addEventListener("click", (book) => {
      //     const libroComprato = document.createElement("p");
      //     const carrello = document.querySelector(".dropdown-menu");
      //     libroComprato.innerHTML = `${book.title}`;
      //     carrello.appendChild(libroComprato);
      //   });
    });
  });

const deleteBooks = (event) => {
  event.target.closest(".col").remove();
};
