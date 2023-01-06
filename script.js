function signup() {
    // controle de saisie signup
    var test = true;
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        document.getElementById('firstNameError').innerHTML = "First name must have at least 3 characters"
        document.getElementById('firstNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('firstNameError').innerHTML = ""
    }

    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameError').innerHTML = "Last name must have at least 5 characters"
        document.getElementById('lastNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('lastNameError').innerHTML = ""
    }

    var tel = document.getElementById('tel').value;
    if (tel.length != 8 || isNaN(tel)) {
        document.getElementById('telError').innerHTML = "tel invalide"
        document.getElementById('telError').style.color = "red"
        test = false
    } else {
        document.getElementById('telError').innerHTML = ""
    }

    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email);
    if (!verifEmail) {
        document.getElementById('emailError').innerHTML = "Invalid Email"
        document.getElementById('emailError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailError').innerHTML = ""
    }

    var verifEmailExist = emailExists(email);
    if (verifEmailExist) {
        document.getElementById('emailExistError').innerHTML = "Email already exists"
        document.getElementById('emailExistError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailExistError').innerHTML = ""
    }

    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (!verifPassword) {
        document.getElementById('PasswordError').innerHTML = "invalid Password"
        document.getElementById('PasswordError').style.color = "red"
        test = false
    } else {
        document.getElementById('PasswordError').innerHTML = ""
    }

    var confirmpassword = document.getElementById('confirmPassword').value;
    if (confirmpassword == password) {
        document.getElementById('confirmPasswordError').innerHTML = ""
    } else {
        document.getElementById('confirmPasswordError').innerHTML = "confirm Password must match password"
        document.getElementById('confirmPasswordError').style.color = "red"
        test = false
    }
    // creation de l'utilisateur
    if (test) {
        var idUser = JSON.parse(localStorage.getItem('idUser') || "10")
        var user = {
            id: idUser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            password: password,
            role: "client"
        }
    // ajout de l'utilisateur au tableau users
        var users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem('idUser', idUser + 1)
        location.replace("login.html")
    }
}
// **********************************************************************************************************************************************
function nutritionistSignup() {
// controle de saisie signupnutritionist
    var test = true;
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        document.getElementById('firstNameError').innerHTML = "First name must have at least 3 characters"
        document.getElementById('firstNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('firstNameError').innerHTML = ""
    }

    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameError').innerHTML = "Last name must have at least 5 characters"
        document.getElementById('lastNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('lastNameError').innerHTML = ""
    }

    var test = true;
    var adresse = document.getElementById('adresse').value;
    if (adresse.length < 3) {
        document.getElementById('adresseError').innerHTML = "please enter an adress"
        document.getElementById('adresseError').style.color = "red"
        test = false
    } else {
        document.getElementById('adresseError').innerHTML = ""
    }

    var tel = document.getElementById('tel').value;
    if (tel.length != 8 || isNaN(tel)) {
        document.getElementById('telError').innerHTML = "tel invalide"
        document.getElementById('telError').style.color = "red"
        test = false
    } else {
        document.getElementById('telError').innerHTML = ""
    }

    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email);
    if (!verifEmail) {
        document.getElementById('emailError').innerHTML = "Invalid Email"
        document.getElementById('emailError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailError').innerHTML = ""
    }

    var verifEmailExist = emailExists(email);
    if (verifEmailExist) {
        document.getElementById('emailExistError').innerHTML = "Email already exists"
        document.getElementById('emailExistError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailExistError').innerHTML = ""
    }

    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (!verifPassword) {
        document.getElementById('PasswordError').innerHTML = "invalid Password"
        document.getElementById('PasswordError').style.color = "red"
        test = false
    } else {
        document.getElementById('PasswordError').innerHTML = ""
    }

    var confirmpassword = document.getElementById('confirmPassword').value;
    if (confirmpassword == password) {
        document.getElementById('confirmPasswordError').innerHTML = ""
    } else {
        document.getElementById('confirmPasswordError').innerHTML = "confirm Password must match password"
        document.getElementById('confirmPasswordError').style.color = "red"
        test = false
    }
    // ajout de l'image du nutr
    var image = document.getElementById('image').value;
    var finalImage = replaceCh(image)
    // creation de le l'utilisateur ayant le role nutritionist
    if (test) {
        var idNut = JSON.parse(localStorage.getItem('idNut') || "1000")
        var user = {
            id: idNut,
            firstName: firstName,
            lastName: lastName,
            adresse: adresse,
            email: email,
            tel: tel,
            password: password,
            role: "nutritionist",
            image: finalImage
        }

        var users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem('idNut', idNut + 1)
        location.replace("login.html")
    }
}
// **********************************************************************************************************************************************
function TrainerSignup() {
    // controle de saisie
    var test = true;
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        document.getElementById('firstNameError').innerHTML = "First name must have at least 3 characters"
        document.getElementById('firstNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('firstNameError').innerHTML = ""
    }

    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameError').innerHTML = "Last name must have at least 5 characters"
        document.getElementById('lastNameError').style.color = "red"
        test = false
    } else {
        document.getElementById('lastNameError').innerHTML = ""
    }

    var gym = document.getElementById('gym').value;
    if (gym.length == 0) {
        document.getElementById('gymError').innerHTML = "pls enter the Gym name"
        document.getElementById('gymError').style.color = "red"
        test = false
    } else {
        document.getElementById('gymError').innerHTML = ""
    }

    var tel = document.getElementById('tel').value;
    if (tel.length != 8 || isNaN(tel)) {
        document.getElementById('telError').innerHTML = "tel invalide"
        document.getElementById('telError').style.color = "red"
        test = false
    } else {
        document.getElementById('telError').innerHTML = ""
    }

    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email);
    if (!verifEmail) {
        document.getElementById('emailError').innerHTML = "Invalid Email"
        document.getElementById('emailError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailError').innerHTML = ""
    }

    var verifEmailExist = emailExists(email);
    if (verifEmailExist) {
        document.getElementById('emailExistError').innerHTML = "Email already exists"
        document.getElementById('emailExistError').style.color = "red"
        test = false
    } else {
        document.getElementById('emailExistError').innerHTML = ""
    }

    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (!verifPassword) {
        document.getElementById('PasswordError').innerHTML = "invalid Password"
        document.getElementById('PasswordError').style.color = "red"
        test = false
    } else {
        document.getElementById('PasswordError').innerHTML = ""
    }

    var confirmpassword = document.getElementById('confirmPassword').value;
    if (confirmpassword == password) {
        document.getElementById('confirmPasswordError').innerHTML = ""
    } else {
        document.getElementById('confirmPasswordError').innerHTML = "confirm Password must match password"
        document.getElementById('confirmPasswordError').style.color = "red"
        test = false
    }
    // ajout ded l'image
    var image = document.getElementById('image').value;
    var finalImage = replaceCh(image)

    // creation de l'utilisateur ayant le role trainer
    if (test) {
        var idTr = JSON.parse(localStorage.getItem('idTr') || "2000")
        var user = {
            id: idTr,
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            gym: gym,
            password: password,
            role: "trainer",
            image: finalImage
        }

        var users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem('idTr', idTr + 1)
        location.replace("login.html")
    }
}
// **********************************************************************************************************************************************
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// **********************************************************************************************************************************************
function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
// **********************************************************************************************************************************************
function emailExists(Email) {
    var users = JSON.parse(localStorage.getItem("users") || '[]')
    var exist = false
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == Email) {
            exist = true;
            break;
        }

    }
    return exist

}
// **********************************************************************************************************************************************
function insertAdmins() {
    var admin1 = {
        id: 1,
        firstName: "admin1",
        lastName: "admin1",
        email: "admin1@gmail.com",
        password: "Admin1@22",
        tel: "12345678",
        role: "admin",
    }
    var admin2 = {
        id: 2,
        firstName: "admin2",
        lastName: "admin2",
        email: "admin2@gmail.com",
        password: "Admin2@22",
        tel: "12345678",
        role: "admin",
    }
    var admin3 = {
        id: 3,
        firstName: "admin3",
        lastName: "admin3",
        email: "admin3@gmail.com",
        password: "Admin3@22",
        tel: "12345678",
        role: "admin",
    }

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(admin1, admin2, admin3);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("adminsAdded", true);
}
// **********************************************************************************************************************************************
function login() {
    var email = document.getElementById('emailLog').value;
    var password = document.getElementById('passwordLog').value;
    
    var findUser;
    // parcours sur tout le tableau users 
    var users = JSON.parse(localStorage.getItem('users') || '[]')
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            findUser = users[i]
        }

    }
    if (findUser) {
    // creation de connectedUser
        localStorage.setItem("connectedUser", JSON.stringify(findUser));
    // redirection selon role
        switch (findUser.role) {
            case "client":
                location.replace("clientInterface.html")
               
                break;
            case "admin":
                location.replace("admindashboard.html")

                break;

            case "trainer":
                location.replace("trainerInterface.html")
                
    
                break;

            case "nutritionist":
                location.replace("nutritionistInterface.html")
                
    
                break;

        }
    } else {
        document.getElementById("errorLogin").innerHTML = "wrong informations"
        document.getElementById("errorLogin").style.color = "red"
        
    }

}
// **********************************************************************************************************************************************
function searchById(id,key) {
    var objects = JSON.parse(localStorage.getItem(key) || "[]");
    var object ;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == id) {
            object = objects[i]
            break;
        } 
    }

    return object;
}
// **********************************************************************************************************************************************
function addProduct() {
    // lecture des inputs
    var foodName = document.getElementById('foodName').value
    var calories = document.getElementById('calories').value
    var fat = document.getElementById('fat').value
    var protein = document.getElementById('protein').value
    var carbs = document.getElementById('carbs').value
    var fiber = document.getElementById('fiber').value
    var totalSugar = document.getElementById('totalSugar').value

    var products = JSON.parse(localStorage.getItem('products') || "[]")
    var idProduct = JSON.parse(localStorage.getItem("idProduct") || "1")
    // creation d'un produit
    var product = {
        id: idProduct,
        foodName: foodName,
        calories: calories,
        fat: fat,
        protein: protein,
        carbs: carbs,
        fiber: fiber,
        totalSugar: totalSugar,

    }
    // sauvegarder le produit dans un tableau products
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('idProduct', idProduct + 1)
    location.reload();

}
// **********************************************************************************************************************************************
function qty() {
    // injection d'un input de js vers html
    document.getElementById("quantity").innerHTML = "<input type='number' name='' id='qty' placeholder='quantity'> "

}
// **********************************************************************************************************************************************
function displayProducts() {
    // appel au tableau products
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    // variable pour l'affichage du resultat
    var productsTable = `
    <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
                <th>food</th>
                <th>serving size</th>
                <th>Calories</th>
                <th>Fat</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fiber</th>
                <th>Total Sugar	</th>
                <th>quantity</th>
                <th>add</th>

            </tr>    
        </thead>
          <tbody> `    ;
        // parcours sur tout le tableau products
    for (let i = 0; i < products.length; i++) {
        productsTable = productsTable + `
        <tr>
                <td>${products[i].foodName}</td>
                
                <td>per 100G
                </td>
                <td>${products[i].calories}</td>
                <td>${products[i].fat}</td>
                <td>${products[i].protein}</td>
                <td>${products[i].carbs}</td>
                <td>${products[i].fiber}</td>
                <td>${products[i].totalSugar}</td>
                <td ><button type="submit" class="btn btn-warning" onclick="qty()">qty</button></td>;
                <td><button type="submit" class="btn btn-success" onclick="add(${products[i].id})">add</button></td>
                
            </tr>
            `


    }
    productsTable = productsTable + `
    </tbody>
    </table>`
    // affichage de la variable productstable dans html dand la div avec ID 'productsTable'
    document.getElementById('productsTable').innerHTML = productsTable;
}
// *********************************************************************************************************************************************
function logout() {
    // suppresion de connectedUser
    localStorage.removeItem("connectedUser")
    // redirection vers la page index
    location.replace("index.html")
}
// **********************************************************************************************************************************************
function bmi() {
    // lecture e toutes les inputs
    test = true
    var select = document.getElementById('gender').value
    var weigth = document.getElementById("weigth").value
    var heigth = document.getElementById("heigth").value
    // controle de saisie
    if (weigth <= 0 || weigth > 272) {
        document.getElementById("weigthError").innerHTML = "invalid"
        document.getElementById("weigthError").style.color = "red"
        test = false
    }

    if (heigth <= 0 || heigth > 3) {
        document.getElementById("heigthError").innerHTML = "invalid"
        document.getElementById("heigthError").style.color = "red"
        test = false
    }
    var age = document.getElementById("age").value
    if (age <= 0 || age > 150) {
        document.getElementById("ageError").innerHTML = "invalid"
        document.getElementById("ageError").style.color = "red"
        test = false
    }
    var bmi
    var bmr
    var Bodyfat
    if (test) {
    // affichage de resultat selon le genre
        switch (select) {
            case "male":
                bmi = weigth / (heigth * heigth)
                bmr = 66.47 + (13.75 * weigth) + (5.003 * heigth * 100) - (6.755 * age)
                Bodyfat  = (-44.988) + (0.503 * age) + (10.689 * 0) + (3.172 * bmi) - (0.026 * bmi*bmi) + (0.181 * bmi * 0) - (0.02 * bmi * age) - (0.005 * bmi*bmi * 0) + (0.00021 * bmi*bmi * age)
                break;

            case "female":
                bmi = weigth / (heigth * heigth)
                bmr = 655.1 + (9.563 * weigth) + (1.850 * heigth * 100) - (4.676 * age)
                Bodyfat  = (-44.988) + (0.503 * age) + (10.689 * 1) + (3.172 * bmi) - (0.026 * bmi*bmi) + (0.181 * bmi * 1) - (0.02 * bmi * age) - (0.005 * bmi*bmi * 1) + (0.00021 * bmi*bmi * age)

                break;
        }
    // injection d'un code js dans html
        document.getElementById("bmi").innerHTML = "your Body Mass Index is " + bmi.toFixed(2)
        document.getElementById("bmi").style.fontSize = "50px"

        document.getElementById("bmr").innerHTML = "your basal metabolic rate (BMR) is " + bmr.toFixed(2) + " calories"
        document.getElementById("bmr").style.fontSize = "50px"

        document.getElementById("fat").innerHTML = "your body Fat pourcentage is " + Bodyfat.toFixed(2) + " %"
        document.getElementById("fat").style.fontSize = "50px"
    }
    // changement de couleur dans le tableau selon le resultat
    switch (true) {
        case (bmi < 18.5):
            document.getElementById("first").style.color = "red"
            document.getElementById("first").style.fontWeight = "bold"
            break;
        case (bmi >= 18.5 && bmi <= 24.9):
            document.getElementById("second").style.color = "#66ff66"
            document.getElementById("second").style.fontWeight = "bold"
            break;
        case (bmi >= 25 && bmi <= 29.9):
            document.getElementById("third").style.color = "orange"
            document.getElementById("third").style.fontWeight = "bold"
            break;
        case (bmi >= 30):
            document.getElementById("forth").style.color = "red"
            document.getElementById("forth").style.fontWeight = "bold"
            break;

        default:
            break;
    }
    // injection d'un boutton pour un autre test de js vers html
    if (bmi != null) {
        button = `<input type="submit" class="btn btn-main" value="Run an other test" style="width:100% ;margin-top: 20px ;" onclick="location.reload()">`
        document.getElementById("again").innerHTML = button
    }
}
// **********************************************************************************************************************************************
function add(id) {
    // lecture de l'input quatity
    var quantity = document.getElementById("qty").value
    var test = true
    // appel à connectedUser
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");
    // controle de saisie
    if (quantity < 0) {
        document.getElementById("qtyError").innerHTML = "quantity error"
        document.getElementById("qtyError").style.color = "red"
        test = flase
    } else {
        document.getElementById("qtyError").innerHTML = ""
    }
    // creation de "order"
    if (test) {
        // creation d'un compteur pour id de order
        var idOrder = JSON.parse(localStorage.getItem("idOrder") || "1")
        var order = {
            id: idOrder,
            qty: quantity,
            idUser: connectedUser.id,
            idProduct: id
        };
        // ajouteur order dans un tableau globale orders
        var orders = JSON.parse(localStorage.getItem("orders") || "[]");
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem('idOrder', idOrder + 1)
        // refraichir la page
        location.reload()
    }

}
// **********************************************************************************************************************************************
function displayTracking() {
    // declaration de variables
    var totalCalories=0
    var totalFat=0 
    var totalProtein =0
    var totalCarbs =0
    var totalFiber =0
    var totalSugar =0
    
    // appel aux deux tableau orders et connectedUser
    var orders = JSON.parse(localStorage.getItem("orders") || "[]");
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");
    // declaration d'un variables
    var macroTable = `
    <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
                
                <th>food</th>
                <th>serving size</th>
                <th>Calories</th>
                <th>Fat</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fiber</th>
                <th>Total Sugar	</th>
                <th>action	</th>

            </tr>    
        </thead>
          <tbody> `    ;
        //   parcours sur tout le tableau
    for (let i = 0; i < orders.length; i++) {
        var product=searchById(orders[i].idProduct,"products")
        if (orders[i].idUser == connectedUser.id) {

            macroTable = macroTable + `
        <tr>
                
                <td>${product.foodName}</td>
                
                <td>per ${orders[i].qty * 100}G </td>
                <td>${(Number(product.calories) * Number(orders[i].qty)).toFixed(2)}</td>
                <td>${(Number(product.fat) * Number(orders[i].qty)).toFixed(2)}</td>
                <td>${(Number(product.protein) * Number(orders[i].qty)).toFixed(2)}</td>
                <td>${(Number(product.carbs) * Number(orders[i].qty)).toFixed(2)}</td>
                <td>${(Number(product.fiber) * Number(orders[i].qty)).toFixed(2)}</td>
                <td>${(Number(product.totalSugar) * Number(orders[i].qty)).toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="deleteOrder(${orders[i].id})">Clear</button>
                </td>
            </tr>`;


        }

    }
    // ajout de toutes valeurs ajouté aux variables declaré pour afficher le totale
    for (let i = 0; i < orders.length; i++) {
        var product=searchById(orders[i].idProduct,"products")
        if (orders[i].idUser == connectedUser.id) {
            totalCalories += (Number(product.calories) * Number(orders[i].qty))
            totalFat += (Number(product.fat) * Number(orders[i].qty))
            totalProtein += (Number(product.protein) * Number(orders[i].qty))
            totalCarbs += (Number(product.carbs) * Number(orders[i].qty))
            totalFiber += (Number(product.fiber) * Number(orders[i].qty))
            totalSugar += (Number(product.totalSugar) * Number(orders[i].qty))

        }

    }
    macroTable = macroTable + `
    </tbody>
    </table>
    <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
                <th>Total</th>
                <th></th>
               
                <th>Calories</th>
                <th>Fat</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fiber</th>
                <th>Total Sugar	</th>
                <tbody>
            <tr>
                <td></td>
                <td></td>
                
                <td>${totalCalories.toFixed(2)}</td>
                <td>${totalFat.toFixed(2)}</td>
                <td>${totalProtein.toFixed(2)}</td>
                <td>${totalCarbs.toFixed(2)}</td>
                <td>${totalFiber.toFixed(2)}</td>
                <td>${totalSugar.toFixed(2)}</td>
                
          `
    document.getElementById('macroTable').innerHTML = macroTable;
}
// **********************************************************************************************************************************************
function searchPosById(id, key) {
    var objects = JSON.parse(localStorage.getItem(key) || "[]")
    var pos;
    for (let i = 0; i < objects.length; i++) {
        if (id == objects[i].id) {
            pos = i;
            break;
        }
    }
    return pos;
}
// **********************************************************************************************************************************************
function deleteOrder(id) {
    // appel au tableau orders
    var orders = JSON.parse(localStorage.getItem("orders") || "[]");
    // retirer la position de l'id
    var pos = searchPosById(id, "orders");
    // effacer du tableau de la position ps , 1 case
    orders.splice(pos, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();

}
// **********************************************************************************************************************************************
function replaceCh(ch) {
    var newCh = ch.replace(/\\/g, "/");
    var res = newCh.replace("fakepath", "Users/aymen/Desktop/dev web/templates/gymfit-main/theme/images/nutr");
    return res;
}
// **********************************************************************************************************************************************
function displayNutritionists() {
// appel au tableau users
    var users = JSON.parse(localStorage.getItem("users") || "[]")
    // parcourir le tableau et ajouter chaque fois des valeurs
    var display = ""
    for (let i = 0; i < users.length; i++) {
        if (users[i].role=="nutritionist") {
            display += `
            <div class="col-lg-6">
                    <div class="card border-0 mb-1  bg-transparent rounded-0 mb-4">
                      <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                          <img src="${users[i].image}" alt="" class="img-fluid w-100">
                        </div>
                        <div class="col-md-6">
                          <div class="card-body team-wrap pl-4">
                            <h3 class="card-title text-color">${users[i].firstName + " " + users[i].lastName}</h3>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].role}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">"cabinet : "${users[i].adresse}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].email}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].tel}</h6>
                            <a href="reservation.html" target="_blank" class="btn btn-main " onclick="reservation(${users[i].id})" >reservation <i class="ti-angle-right ml-3"></i></a>      	
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            `
    
        }
       
    }
    document.getElementById("displayNutritionists").innerHTML = display
}
// **********************************************************************************************************************************************
function displayTrainers() {
    var users = JSON.parse(localStorage.getItem("users") || "[]")
    var display = ""
    for (let i = 0; i < users.length; i++) {
        if (users[i].role=="trainer") {
            display += `
            <div class="col-lg-6">
                    <div class="card border-0 mb-1  bg-transparent rounded-0 mb-4">
                      <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                          <img src="${users[i].image}" alt="" style="width:200px;height:350px" class="img-fluid w-100">
                        </div>
                        <div class="col-md-6">
                          <div class="card-body team-wrap pl-4">
                            <h3 class="card-title text-color">${users[i].firstName + " " + users[i].lastName}</h3>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].role}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">"at "${users[i].gym}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].email}</h6>
                            <h6 class="card-subtitle pb-4 letter-spacing">${users[i].tel}</h6>
                            <a href="reservation.html" target="_blank" class="btn btn-main " onclick="reservation(${users[i].id})" >reservation <i class="ti-angle-right ml-3"></i></a>      	
              
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            `  
        }
        

    }
    document.getElementById("displayTrainers").innerHTML = display
}
// **********************************************************************************************************************************************
function displayTrainersAdmin() {
    // appel aux tableau users
    var users = JSON.parse(localStorage.getItem("users") || "[]")
    display = `
        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>role</th>
                <th>gym</th>
                <th>Email</th>
                <th>Tel</th>
            </tr>    
        </thead>
          <tbody> `  

      ;
    // parcours du tableau et afficher a chaque fois les valeurs
    for (let i = 0; i < users.length; i++) {
        if (users[i].role=="trainer") {
            display += `
            <tr>
                    <td>${users[i].firstName}</td>
                    <td>${users[i].lastName}</td>
                    <td>${users[i].role}</td>
                    <td>${users[i].gym}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].tel}</td> 
                </tr>
                ` 
        }
        


    }
    display = display + `
    </tbody>
    </table>`
    document.getElementById('displayTrainersAdmin').innerHTML = display;
}
// **********************************************************************************************************************************************
function displayNutrsAdmin() {
    // appel au tableau
    var users = JSON.parse(localStorage.getItem("users") || "[]")

    display = `
        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>role</th>
                <th>cabinet</th>
                <th>Email</th>
                <th>Tel</th>
            </tr>    
        </thead>
          <tbody> `    ;
    // parcourir le tableau users
    for (let i = 0; i < users.length; i++) {
        // selon le role , on affiche les valeurs
        if (users[i].role=="nutritionist") {
            display += `
            <tr>
                    <td>${users[i].firstName}</td>
                    <td>${users[i].lastName}</td>
                    <td>${users[i].role}</td>
                    <td>${users[i].adresse}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].tel}</td> 
                </tr>
                `
     
        }
        

    }
    display = display + `
    </tbody>
    </table>`
    document.getElementById('displayNutrsAdmin').innerHTML = display;
}
// **********************************************************************************************************************************************
function displayusersAdmin() {
    // appel au tableau users
    var users = JSON.parse(localStorage.getItem("users") || "[]")

    display = `
            <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>role</th>
                    <th>Email</th>
                    <th>Tel</th>
                </tr>    
            </thead>
              <tbody> `    ;
    // parcours sur tout le tableau
    for (let i = 0; i < users.length; i++) {
        display += `
            <tr>
                    <td>${users[i].firstName}</td>
                    <td>${users[i].lastName}</td>
                    <td>${users[i].role}</td>
                    
                    <td>${users[i].email}</td>
                    <td>${users[i].tel}</td> 
                </tr>
                `


    }
    display = display + `
        </tbody>
        </table>`
    document.getElementById('displayusersAdmin').innerHTML = display;
}
// **********************************************************************************************************************************************
function reservation(id) {
    // création de idNeede et sauvegarder l 'id demander dedans
    localStorage.setItem("idNeeded", JSON.stringify(id))
    // création d'un tableau reservation
    var reservation = JSON.parse(localStorage.getItem("reservation") || "[]")
    reservation.push(0)
    localStorage.setItem("reservation", JSON.stringify(reservation))
}
// **********************************************************************************************************************************************
function bookNow() {
    
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var idNeeded = JSON.parse(localStorage.getItem("idNeeded"))

    var reservation = JSON.parse(localStorage.getItem("reservation") || "[]")
    // parcours du tableau reservation
    for (let i = 0; i < reservation.length; i++) {
        // controle des valeurs entrées
        if ((reservation[i].idNtr == idNeeded) && (reservation[i].date == date) && (reservation[i].time == time)) {
            document.getElementById("reservationError").innerHTML = "this date is already Taken"
            document.getElementById("reservationError").style.color = "red"
            document.getElementById("reservationSuccess").innerHTML = ""
            break
        }
        else {
            // creation de reserv pour chaque reservation
            var reserv = {
                idNtr: idNeeded,
                idUser: connectedUser.id,
                firstName: connectedUser.firstName,
                lastName: connectedUser.lastName,
                tel: connectedUser.tel,
                role: connectedUser.role,
                email: connectedUser.email,
                date: date,
                time: time,


            }
            // ajouter reserv dans le tableau reservation
            reservation.push(reserv)
            // reconversion du tableau à un objet JSon
            localStorage.setItem("reservation", JSON.stringify(reservation))
            // affichage d'un msg
            document.getElementById("reservationSuccess").innerHTML = "appointment booked"
            document.getElementById("reservationSuccess").style.color = "green"
            document.getElementById("reservationError").innerHTML = ""
            break
        }
    }


}
// **********************************************************************************************************************************************
function displayReservation() {
    // parcours sur le tableau reservation
    var reservation = JSON.parse(localStorage.getItem("reservation") || "[]")
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    display = `<table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">first Name</th>
        <th scope="col">last Name</th>
        <th scope="col">role</th>
        <th scope="col">Tel</th>
        <th scope="col">email</th>
        <th scope="col">date</th>
        <th scope="col">Time</th>
      </tr>
    </thead>
    <tbody>`
    for (let i = 0; i < reservation.length; i++) {
        // affichage selon l'utlisateur connecté
        if (connectedUser.id == reservation[i].idNtr) {
            display += `
            <tr>
						<th scope="row">${reservation[i].firstName}</th>
						<td>${reservation[i].lastName}</td>
						<td>${reservation[i].role}</td>
						<td>${reservation[i].tel}</td>
						<td>${reservation[i].email}</td>
						<td>${reservation[i].date}</td>
						<td>${reservation[i].time}</td>
					  </tr>
            `
        }
    }
    display += `
    </tbody>
	</table>
    `

    document.getElementById("displayReservation").innerHTML = display;
}
// **********************************************************************************************************************************************
function displayNavBar() {
    // appel au tableau connecteduser 
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    // affichage selon le role
    switch (connectedUser.role) {
        // cas role client
        case "client":
            var display = `<nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="index.html">
			<h2 class="text-white text-capitalize"></i>Fit<span class="text-color">Up</span></h2>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
			<span class="ti-view-list"></span>
		</button>
		<div class="collapse text-center navbar-collapse" id="navbarsid">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item active">
					<a class="nav-link" href="clientInterface.html">Home </span></a>
				</li>
				
				<li class="nav-item"><a class="nav-link" href="BMI.html">BMI </a></li>
				
				<li class="nav-item dropdown">
					<a class="nav-link" href="nutritionist.html">Nutritionists</a></li>
                </li>
                <li><a class="nav-link" href="trainers.html">Trainers</a></li>				
				
				<li class="nav-item"><a class="nav-link" href="macros.html">macros</a></li>
				<li class="nav-item"><a class="nav-link" href="macrotraking.html">macro tracking</a></li>
			</ul>
			<div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
				<a href="tel:+216-55-549-816">
					<h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>+216-55-549-816</h3>
				</a>
			</div>
		</div>
	</div>
</nav>`
        // injection de js vers html
            document.getElementById("displayNavBar").innerHTML = display
            break;
        // cas role admin
        case "admin":
            var display = `<nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="index.html">
			<h2 class="text-white text-capitalize"></i>Fit<span class="text-color">Up</span></h2>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
			<span class="ti-view-list"></span>
		</button>
		<div class="collapse text-center navbar-collapse" id="navbarsid">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item active">
					<a class="nav-link" href="admindashboard.html">dashboard </span></a>
				</li>
				
				<li class="nav-item"><a class="nav-link" href="BMI.html">BMI </a></li>
				
				<li class="nav-item dropdown">
					<a class="nav-link" href="nutritionist.html">Nutritionists</a></li>
                </li>
                <li><a class="nav-link" href="trainers.html">Trainers</a></li>				
				
				<li class="nav-item"><a class="nav-link" href="macros.html">macros</a></li>
				<li class="nav-item"><a class="nav-link" href="macrotraking.html">macro tracking</a></li>
			</ul>
			<div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
				<a href="tel:+216-55-549-816">
					<h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>+216-55-549-816</h3>
				</a>
			</div>
		</div>
	</div>
</nav>`
        // injection de js vers html
            document.getElementById("displayNavBar").innerHTML = display
            break;
        // cas role nutritionist
        case "nutritionist":
            var display = `<nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <h2 class="text-white text-capitalize"></i>Fit<span class="text-color">up</span></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
                    aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="ti-view-list"></span>
                </button>
                <div class="collapse text-center navbar-collapse" id="navbarsid">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="nutritionistInterface.html">Home </span></a>
                        </li>
                        
                        <li class="nav-item"><a class="nav-link" href="BMI.html">BMI </a></li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="nutritionist.html">Nutritionists</a></li>
                        </li>
                        <li><a class="nav-link" href="trainers.html">Trainers</a></li>				
                        
                        <li class="nav-item"><a class="nav-link" href="macros.html">macros</a></li>
                        <li class="nav-item"><a class="nav-link" href="macrotraking.html">macro tracking</a></li>
                    </ul>
                    <div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
                        <a href="tel:+216-55-549-816">
                            <h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>+216-55-549-816</h3>
                        </a>
                    </div>
                </div>
            </div>
        </nav>`
        // injection de js vers html
            document.getElementById("displayNavBar").innerHTML = display
            break;
        // cas role trainer
        case "trainer":
            var display = `<nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <h2 class="text-white text-capitalize"></i>Fit<span class="text-color">Up</span></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
                    aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="ti-view-list"></span>
                </button>
                <div class="collapse text-center navbar-collapse" id="navbarsid">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="trainerInterface.html">Home </span></a>
                        </li>
                        
                        <li class="nav-item"><a class="nav-link" href="BMI.html">BMI </a></li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="nutritionist.html">Nutritionists</a></li>
                        </li>
                        <li><a class="nav-link" href="trainers.html">Trainers</a></li>				
                        
                        <li class="nav-item"><a class="nav-link" href="macros.html">macros</a></li>
                        <li class="nav-item"><a class="nav-link" href="macrotraking.html">macro tracking</a></li>
                    </ul>
                    <div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
                        <a href="tel:+216-55-549-816">
                            <h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>+216-55-549-816</h3>
                        </a>
                    </div>
                </div>
            </div>
        </nav>`
            document.getElementById("displayNavBar").innerHTML = display
            break;

    }
}
// **********************************************************************************************************************************************
function displayFooter() {
// declation d'un variable
var footer=`
<div class="row">
			<div class="col-lg-6 col-md-4 mb-5 mb-lg-0">
				<h2 class="text-white text-capitalize"></i>Fit<span class="text-color">Up</span></h2>
				<p>FitUp is a platform deicated to help you track your body mesures, track your everyday macros , while finding all the help needed from our nutritionists and coaches to reach your goals</p>
			</div>
			

			
			<div class="col-lg-2 col-md-5 mb-5 mb-lg-0">
				<div class="footer-widget">
					<h4 class="mb-4 text-white letter-spacing text-uppercase">Quick Links</h4>
					<ul class="list-unstyled footer-menu lh-40 mb-0">
						<li><a href="BMI.html"><i class="ti-angle-double-right mr-2"></i> BMI</a></li>
						<li><a href="nutritionist.html"><i class="ti-angle-double-right mr-2"></i>Nutritionists</a></li>
						<li><a href="Trainers.html"><i class="ti-angle-double-right mr-2"></i>Trainers</a></li>
						<li><a href="macros.html"><i class="ti-angle-double-right mr-2"></i>macros</a></li>
						<li><a href="macrotraking.html"><i class="ti-angle-double-right mr-2"></i>macro tracking</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-4 col-md-5">
				<div class="footer-widget">
					<h4 class="mb-4 text-white letter-spacing text-uppercase">Home location</h4>
					<p>Washington 6036 Richmond
					hwy., Alexandria, VA USA 22303 </p>
					<span class="text-white">+216 55-549-816</span>
					<span class="text-white">info@fitup.com</span>
				</div>
			</div>
		</div>
`
// injection d'un code js vers html
document.getElementById("footer").innerHTML=footer
}
// *************
function addAppointment(startDate, title, endDate) {
    
    var reservation=JSON.parse(localStorage.getElementById("reservation")||"[]")
        var reserv = {
            dateStr:dateStr
        }
      
        reservation.push(reserv);
      
}
