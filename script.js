const panels = document.querySelectorAll('.panel');

panels.forEach((panelColumn) => {
    panelColumn.addEventListener('click',(() => {
        removeActiveClasess()
        panelColumn.classList.add('active')
    }))
});

function removeActiveClasess() {
    panels.forEach((panelRemove) => {
        panelRemove.classList.remove('active')
    })
}