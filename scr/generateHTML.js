const icons = employeeType => {
    if (employeeType === "Manager")
     return '<i class="fas fa-mug-hot"></i>'
    else if (employeeType === "Engineer")
     return '<i class="fas fa-glasses"></i>'
    else if (employeeType === "Intern")
     return '<i class="fas fa-user-graduate"></i>'
} 

const mainHTML = data => 
        
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <title>Team Profile</title>           
        </head>
        <body>
            <nav class="navbar navbar-dark bg-danger mb-5">
                <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
            </nav>
            <div class="container">
                <div class="row">
                
                ${data}

                </div>
            </div>
                
        </body>
    </html>`;
                
    
    
const engineercard = employee => 

    `<div class="card border-success mb-3" style="max-width: 18rem; margin-right: 15px;"> 

        <div class="card-header" style="background-color: darkseagreen;"> 

            <h4>${employee.name}</h4> 

            ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 

        </div> 

        <div class="card-body text-dark">  

            <p class="id">ID: ${employee.id}</p> 

            <p class="email">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p> 

            <p class="school">Github: ${employee.github}</p> 

        </div>  

    </div>`;
           
const interncard = employee => 

    `<div class="card border-warning mb-3" style="max-width: 18rem; margin-right: 15px;"> 

        <div class="card-header" style="background-color: goldenrod;"> 
            
            <h4>${employee.name}</h4> 
            
            ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 
            
        </div> 
            
        <div class="card-body text-dark">  
            
            <p class="id">ID: ${employee.id}</p> 
            
            <p class="email">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p> 
            
            <p class="school">School: ${employee.school}</p> 
            
        </div>  
            
    </div>`;
            
const managercard = employee => 

    `<div class="card border-primary mb-3" style="max-width: 18rem; margin-right: 15px;"> 

        <div class="card-header" style="background-color: cornflowerblue;"> 
            
            <h4>${employee.name}</h4> 
            
            ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 
            
        </div> 
            
        <div class="card-body text-dark">  
            
            <p class="id">ID: ${employee.id}</p> 
            
            <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p> 
            
            <p class="school">Office Number: ${employee.officeNumber}</p> 
            
        </div>  
            
    </div>`;
            
 

// export to index
module.exports = {engineercard, interncard, managercard, mainHTML};