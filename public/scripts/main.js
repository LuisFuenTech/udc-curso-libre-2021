window.addEventListener("DOMContentLoaded", function () {
  try {
    var form = document.getElementById("form-email");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json"
        }
      })
        .then((response) => {
          if (response.status !== 200) {
            status.classList.add("alert-danger");
            status.innerHTML = `Hubo un problema <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
          } else {
            status.innerHTML = `¡Gracias por escribirnos! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
          }

          status.style.display = "block";
          form.reset();
        })
        .catch((error) => {
          status.classList.add("alert-danger");
          status.style.display = "block";
          status.innerHTML = `Hubo un problema: ${error.message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        });
    }
    form.addEventListener("submit", handleSubmit);
  } catch (error) {}
});
