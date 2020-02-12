function idConfirm() {
    if(document.getElementById("id").value.length < 5){
        return alert("5이상 입력하세요")
    }
}
function passwordConfirm() {
    if(document.getElementById("password").value.length < 5){
        return alert("5이상 입력하세요")
    }
}