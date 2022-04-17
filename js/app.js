function Add(){
    const Fn = document.getElementById("FN")
    const Sn = document.getElementById("SN")
    const As = document.getElementById("AS")

    As.value =`${Number(Fn.value) + Number(Sn.value)}`


}

function Subtract(){
    const Fn = document.getElementById("FN")
    const Sn = document.getElementById("SN")
    const As = document.getElementById("AS")

    As.value =`${Number(Fn.value) - Number(Sn.value)}`


}

function Multiplication(){
    const Fn = document.getElementById("FN")
    const Sn = document.getElementById("SN")
    const As = document.getElementById("AS")

    As.value =`${Number(Fn.value) * Number(Sn.value)}`


}


function Division(){
    const Fn = document.getElementById("FN")
    const Sn = document.getElementById("SN")
    const As = document.getElementById("AS")

    As.value =`${Number(Fn.value) / Number(Sn.value)}`


}



function Cll(){
    const Fn = document.getElementById("FN")
    const Sn = document.getElementById("SN")
    const As = document.getElementById("AS")

    Fn.value = " "
    Sn.value = " "
    As.value = " "

}