//sorts array into manager,engineer, or intern//
function sortArray(empArray) {
    for (let i = 0; i < empArray.length; i++) {
        //console.log(empArray[i])
        if (empArray[i].getRole() === "Manager") {
            managerCard(empArray[i])
        } else if (empArray[i].getRole() === "Engineer") {
            engineerCard(empArray[i])
        } else {
            internCard(empArray[i])
        }
    }
} //pushes manager info into html//
function managerCard(manager) {
    return `<div class="card column is-3">
    <div class="card-header">
        <div class="card-header-title">Manager<br>${manager.name}</br></div>
    </div>
    <div class="card-content">
        <ul class="mgrInfo">
            <li>ID: ${manager.id}</li>
            <li>Email: ${manager.email}</li>
            <li>Office#: ${manager.officeNum}</li>
        </ul>
    </div>
</div>`
}
//pushes engineer info into html//
function engineerCard(engineer) {
    return `<div class="card column is-3">
    <div class="card-header">
        <div class="card-header-title">Engineer<br>${engineer.name}</br></div>
    </div>
    <div class="card-content">
        <ul class="engineerInfo">
            <li>ID: ${engineer.id}</li>
            <li>Email: ${engineer.email}</li>
            <li>Github: ${engineer.github}</li>
        </ul>
    </div>
</div>`
}
//pushes intern info into html//
function internCard(intern) {
    return `<div class="card column is-3">
    <div class="card-header">
        <div class="card-header-title">Intern<br>${intern.name}</br></div>
    </div>
    <div class="card-content">
        <ul class="internInfo">
            <li>ID: ${intern.id}</li>
            <li>Email: ${intern.email}</li>
            <li>School: ${intern.school}</li>
        </ul>
    </div>
</div>`
}

// const generateHTML = function (sortArray) {
//     return `<!DOCTYPE html>

//     <html>
//         <head>
//             <meta charset="utf-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <title>Team Profile Generator</title>
//             <meta name="description" content="">
//             <meta name="viewport" content="width=device-width, initial-scale=1">
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
//             <link rel="stylesheet" href="./style.css">
//             </head>
//         <body>
//             <header>Welcome to the Team Profile Generator!</header>
//             <div class="columns">${sortArray}
//                 <div class="card column is-3">
//                     <div class="card-header">
//                         <div class="card-header-title">Manager<br></br></div>
//                     </div>
//                     <div class="card-content">
//                         <ul class="mgrInfo">
//                             <li>ID:</li>
//                             <li>Email:</li>
//                             <li>Office#:</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="card column is-3">
//                     <div class="card-header">
//                         <div class="card-header-title">Engineer<br>(Name)</br></div>
//                     </div>
//                     <div class="card-content">
//                         <ul class="engineerInfo">
//                             <li>ID:</li>
//                             <li>Email:</li>
//                             <li>Github:</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="card column is-3">
//                     <div class="card-header">
//                         <div class="card-header-title">Intern<br>(Name)</br></div>
//                     </div>
//                     <div class="card-content">
//                         <ul class="internInfo">
//                             <li>ID:</li>
//                             <li>Email:</li>
//                             <li>School:</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
            
            
//             <script src="./index.js"></script>
//         </body>
//     </html>`
// }

module.exports = sortArray