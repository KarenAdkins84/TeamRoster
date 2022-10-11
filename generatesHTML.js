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
module.exports = sortArray