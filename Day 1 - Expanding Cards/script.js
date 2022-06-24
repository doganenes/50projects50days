const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) =>{
//     console.log(panel)
// }) /* bütün panel elementlerini yazdırır. */


panels.forEach(panel =>{
    panel.addEventListener('click',() =>{
        removeActiveClasses();
        panel.classList.add('active')
    })
}) // forEach method

function removeActiveClasses(){

    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}

// clasList.add() ile class eklemesi yaparız. 