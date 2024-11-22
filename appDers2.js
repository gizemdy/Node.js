// //let ve const blok kapsamı
// // var function (hatalara daha açık)
// function merhaba(){
//     let mesaj ="merhabaaaa";
//     console.log(mesaj);
// }
// console.log(mesaj);
// //scopetan dolayı sadece içinde erişilebilir (kapsam)

//dongulerde const değil let kullanılır. çünkü const değeri değişmez. let i++ ile i her defasında değişir.

// let sayi=5;
// do{
//     console.log("sayi: ", sayi);
//     sayi--;
// }while (sayi>0);
////////
// async function getUserData() {
//     return{id:1, name: 'John Doe'};
// }
// async function fetchUser() {
//     const user = await getUserData();
//     console.log(user);
// }
// fetchUser();
///////////////
function rastgeleSifreUret(uzunluk){
    let karakterler = "ASDFGHJKLZXCVBNMWERTYUIPertpasdfghjkzxcvbnm786541239";
    let sifre = "";
    for (let i =0; i<uzunluk;i++){
        let rastgeleIndex=Math.floor(Math.random()*karakterler.length);
        sifre+= karakterler[rastgeleIndex];
    }
    return sifre;
}
let olusanSifre = rastgeleSifreUret(10);
console.log("oluşan şifre",olusanSifre);