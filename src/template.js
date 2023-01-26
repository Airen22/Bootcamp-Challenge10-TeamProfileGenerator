const fs = require('fs');
// const employee = require('./lib/');
// const manager = require('./lib/Manager');
// const engineer = require('./lib/Engineer');
// const intern = require('./lib/Intern');


function generateHTML (data) {
    var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
    <div class="card manager-card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title" id="manager">${this.Name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.Role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.ID}</li>
                <li class="list-group-item">Email: <a href="mailto:bigboss@gmail.com">${this.Email}</a></li>
                <li class="list-group-item">Office number: ${this.getOfficeNumber}</li>
            </ul>
        </div>
    </div>
        <div class="card engineer-card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${this.getName}</h2>
            <h3 class="card-title" id="engineer"><i class="fas fa-user-graduate mr-2"></i>${this.getRole}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.getID}</li>
                <li class="list-group-item">Email: <a href="mailto:engineer@gmail.com">${this.getEmail}</a></li>
                <li class="list-group-item">GitHub: ${this.getGithub}<a href="https://github.com/${this.getGithub}" target="_blank"></a></li>
            </ul>
        </div>
    </div>
    <div class="card intern-card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${this.getName}</h2>
          <h3 class="card-title" id="intern"><i class="fas fa-user-graduate mr-2"></i>${this.getRole}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${this.getID}</li>
              <li class="list-group-item">Email: <a href="mailto:${this.getEmail}">${this.getEmail}</a></li>
              <li class="list-group-item">School: ${this.getSchool}</li>
          </ul>
      </div>
    </div>
                </div>
            </div>
        </div>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous">
        </script>
    </body>
    </html>`

    console.log(this.getEmail)
    // fs.writeFileSync('./dist/index.html', html, (err) =>
    // err ? console.error(err) : console.log('Success!'))
}

module.exports = generateHTML;