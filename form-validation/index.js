const password = document.getElementById("sifre");
const kullaniciAdi = document.getElementById("adSoyad");
const body = document.querySelector(".card-body");
const mail = document.getElementById("email");
const date = document.getElementById("tarih");
const gender = document.getElementById("cinsiyet");
const form = document.getElementById("form");
const mesaj = document.getElementById("mesaj");
const telNo = document.getElementById("telNo");
var sembol = '|,:<>[]{}`;()?.@&$#%!+-"/';

var sembolvar = false;
for (var i = 0; i < password.length; i++) {
    if (sembol.indexOf(password.charAt(i)) != -1) {
        sembolvar = true;
    }
}
function formControl() {
    //şifre kontrolleri

    if (kullaniciAdi.value === "") {
        uyariMesaji("danger", "Ad soyad kısmını boş bırakmayınız.. ");
        return;
    }
    if (kullaniciAdi.value != " ") {
        if (kullaniciAdi.value.length < 3 || kullaniciAdi.value.length > 25 || kullaniciAdi.value.search(/[0-9]/) > -1) {
            uyariMesaji("danger", "ad soyad karakter sayısı 3-25 karekter arasında olmalıdır.sayı içermemelidir..");
            return;
        }

    }

    if (password.value === "" || password.value.length < 6 || password.value.search(/[A-Z]/) < 0 || password.value.search(/[0-9]/) < 0 || password.value.sembolvar === false) {
        uyariMesaji("danger", "şifreniz en az 6 karekter uzunlugunda, bir büyük harf , bir rakam ,bir sembol içermelidir..");
        return;
    }


    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;



    if (telNo.value == "") {
        uyariMesaji("danger", "telefon numarası kısmını boş bırakmayınız");
        return;
    }
    if (telNo.value != "") {
        if (telNo.value.length != 10) {
            uyariMesaji("danger", "numranızı 'xxx xxx xxxx' şekinde ve 0 kullanmadan giriniz");

            return;

        } else if (telNo.value.search(/[a-z]/) > -1) {
            uyariMesaji("danger", "Numaralar kısmında harf kullanmayın");

            return;
        } else if (!telNo.value.match(regex)) {
            uyariMesaji("danger", " numranızı 'xxx xxx-xxxx' şekinde ve 0 kullanmadan giriniz");

            return;
        }
    }

    if (mail.value === "" || mail.value.indexOf("@", 0) === -1 || mail.value.indexOf(".", 0) === -1) {
        uyariMesaji("danger", "email adresinizi mail formuna uygun giriniz..");

        return;
    }
    if (date.value === "") {
        uyariMesaji("danger", "Bir tarih seçiniz..");
        return;
    }
    if (gender.value === "") {
        uyariMesaji("danger", "Cinsiyetinizi seçiniz.");
        return;
    }
    if (mesaj.value === "") {
        uyariMesaji("danger", "Bize düşüncelerinizi mesaj yoluyla iletiniz..");
        return;
    }




    form.submit();

}




function uyariMesaji(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    body.appendChild(alert);

    //uyari mesajını 1 saniye gösterip kaldıran fonksiyon
    setTimeout(function () {
        alert.remove();
    }, 6000);
}


