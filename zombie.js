
function submitValues() {
    let x = parseFloat(document.getElementById("boxa").value);
    let y = parseFloat(document.getElementById("boxb").value);
    let z = parseFloat(document.getElementById("boxc").value);

    let a = 2 * x + 11;
    let b = (2 * z + y) - 5;
    let c = (y + z) - x;

    
    document.getElementById("result").textContent =  `
    ${a}
    ${b}
    ${c}
    `;
}
