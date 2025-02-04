class userController {

    constructor(formId, tableId) {
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit();
    }

    onSubmit() {
        this.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            let values = this.getValues();

            this.getPhoto().then((content)=>{

                values.photo = content;
                this.addLine(values)


            }, (e)=>{
                console.error(e)
            })


            
        });
    }

    getPhoto() {

        return new Promise ((resolve, reject)=>{

            let fileReader = new FileReader(); 

            let elements = [...this.formEl.elements].filter(item => item.name === "photo");
    
            console.log(elements);
    
            if (elements.length > 0 && elements[0].files.length > 0) { 
                let file = elements[0].files[0]; 
    
                fileReader.onload = () => {
                    console.log(fileReader.result);

                    resolve(fileReader.result)
                };

                fileReader.onerror = (e) =>{

                    reject(e);

                }
             if (file) {

                fileReader.readAsDataURL(file); 

             } else {
                resolve
             }
      
            } 

        })

    }

    getValues() {
        let user = {};
    
        [...this.formEl.elements].forEach((field) => {
            if (field.name) {
                if (field.type === "radio") {
                    if (field.checked) {
                        user[field.name] = field.value;
                    }
                } else if (field.type === "checkbox") {
                    user[field.name] = field.checked; 
                } else {
                    user[field.name] = field.value;
                }
            }
        });
    
        return user;
    }

    addLine(dataUser) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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