// document.body.appendChild(container);

document.getElementById("btn").addEventListener('click', function () {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const isMarried = document.getElementById("isMarried").checked;


    if (firstName && lastName && age) {
        const table = document.getElementById('table');
        const row = table.insertRow(-1); // bu kod setiri menifi 1 yer yerlesdiri yeni asaqi
        const r1 = row.insertCell(0);
        const r2 = row.insertCell(1);
        const r3 = row.insertCell(2);
        const r4 = row.insertCell(3);

        r1.innerHTML = firstName;
        r2.innerHTML = lastName;
        r3.innerHTML = age;
        r4.innerHTML = isMarried ? "Yes" : "No";

        document.getElementById("forma").reset();

    } else {
        alert('form tam olaqaq doldurun');
    }

})

