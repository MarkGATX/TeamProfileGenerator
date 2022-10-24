const fs = require('fs')

let openingCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link href='./styles.css' rel="stylesheet">
    <title>Document</title>
</head>
<main>
    <header class="container-fluid d-flex align-items-middle justify-content-center bg-success align-items-center mb-5 ">
        <h1>Development Team Roster</h1>
    </header>

    <body>
        <div class="container-fluid d-flex justify-content-center">
            <section class='row forCards d-flex justify-content-center flex-wrap col-11'>`

let closingCode = `</section>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
    
        </body>
    </main>
    
    </html>`

const generateHTML = function (data) {
    console.log(data);
    let iconName = '';
    let cardInfoClose = '';
    for (i = 0; i < data.length; i++) {
        console.log(data[i].name)
        console.log(data[i].getRole())
        switch (data[i].getRole()) {

            case `Manager`:
                console.log(data[i].getRole())
                iconName = `coffee`;
                cardInfoClose = `<a href="#" class="list-group-item list-group-item-action disabled">Office Number: ${data[i].officeNumber}</a>
            </div>
        </div>
    </div>`
                break;
            case 'Engineer':
                console.log(data[i].getRole())
                iconName = 'developer_mode';
                cardInfoClose = `<a href="https://github.com/${data[i].github}" class="list-group-item list-group-item-action">GitHub: ${data[i].gitHub}</a>
            </div>
        </div>
    </div>`
                break;
            case 'Intern':
                console.log(data[i].getRole())
                iconName = 'school'
                cardInfoClose = `<a href="#" class="list-group-item list-group-item-action disabled">School: ${data[i].school}</a>
            </div>
        </div>
    </div>`
                break;
        }
        let cardInfoOpen = `<div class="card col-md-4 col-lg-3 p-0 mb-5 ms-3 me-3 rounded">
        <div class="card-header w-100 col-12">
            <h3>${data[i].name}</h3>
            <h4>${data[i].getRole()}<span class="material-icons">${iconName}</span>
        </div>
        <div class="card-body ">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action disabled">Employee ID: ${data[i].id}</a>
                <a href="mailto:${data[i].email}" class="list-group-item list-group-item-action">E-mail: ${data[i].email}</a>`


        openingCode = openingCode + cardInfoOpen + cardInfoClose
    }

    const finalCode = openingCode + closingCode
    console.log(finalCode)
    fs.writeFile('./dist/index.html', finalCode, (err) =>
        err ? console.error(err) : console.log('Page created!'));

}
45
module.exports = { generateHTML };