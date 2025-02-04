class userController {

    constructor(formId, tableId) {
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit();
    }

    onSubmit() {
        this.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            let userData = this.getValues();

            if (userData) {
                this.addLine(userData);
            }
        });
    }

    getValues() {
        let user = {};

        [...this.formEl.elements].forEach((field) => {
            if (field.name) {
                if (field.name === "gender" && field.checked) {
                    user.gender = field.value; 
                } else if (field.type !== "radio") {
                    user[field.name] = field.value;
                }
            }
        });

        return user; 
    }

    addLine(dataUser) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin ? "Sim" : "Não"}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        `;

        this.tableEl.appendChild(tr); 
    }
}