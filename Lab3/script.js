const main = document.getElementById("main");

async function getRandomPerson() {
    try {
        const server = "https://randomuser.me/api";
        const response = await fetch(server, {
            method: "GET",
        });

        const responseResult = await response.json();
        return responseResult.results[0];
    } catch (error) {
        console.error("Error with getting a random user:", error);
    }
}

async function add() {
    const person = await getRandomPerson();

    const card = `
     <div class="card" style="width: 18rem;">
        <img src="${person.picture.medium}" class="card-img-top" alt="Картинка користувача">
 <ul class="list-group list-group-flush">
            <li class="list-group-item">Country: ${person.location.country}</li>
            <li class="list-group-item">Cell: ${person.cell}</li>
            <li class="list-group-item">Email: ${person.email}</li>
            <li class="list-group-item">Coordinates: ${person.location.coordinates.latitude}, ${person.location.coordinates.longitude}</li>
        </ul>
    </div>`;

    main.insertAdjacentHTML("afterbegin", card);
}

function del() {
    main.innerHTML = "";
}

// Початкове додавання одного користувача
add();
