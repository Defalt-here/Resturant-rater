fetch("ResturantAPI.json")
.then(function(response){
    return response.json();
})
.then(function(ResturantAPI){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let item of ResturantAPI){
        out+= `
        <tr>
        <td>${item.name}</td>
        <td>${item.Ambience}</td>
        <td>${item.Food}</td>
        <td>${item.Location}</td>
        </tr>
        `
    }
    placeholder.innerHTML = out;
})