function login(){
    let nama = document.getElementById("nama").value;
    let pw = document.getElementById("pw").value;
    if (nama == "virgi" && pw == "halo"){
        alert("Login Berhasil")
        window.location.href = "berhasil.html"
    }
    else if (nama == "ahmad2017" && pw == "integrity"){
        alert("Login Berhasil")
        window.location.href = "berhasil.html"
    }
    else {
        alert("Login Gagal")
    }
}