let topo = document.getElementById('header')
let verifica = true

function aumentarHeader(){
    if(verifica == true){
        topo.style.height = '800px'
        verifica = false
    } else {
        topo.style.height = '550px'
        verifica = true
    }
    
}