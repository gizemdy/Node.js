/////SET TIME OUT(SANIYE BEKLETME ISLEMI)
// console.log("birinci işlem");

// setTimeout(()=>{
// console.log("ikinci işlem");
// },2000); //2 saniye bekle(milisaniye cinsten)
// console.log("üçüncü işlem");
// const merhabaDe = require("./kendiModul.js");

// console.log(merhabaDe("Node.js eğitimi"));


///// Dosyayı oku
// const fs = require("fs");

// const data = fs.readFileSync("merhaba.txt","utf-8"); //dosyayı oku (utf8 formatında)

// console.log("dosya içeriği",data);


////dosyaya metin ekle
// const fs= require("fs");

// fs.appendFileSync("merhaba.txt","   bu metin artık eklendi");

// console.log("dosyaya veri eklendi");
/////kullanıcıdan isim al yoksa da misafir yaz.
// const fs = require("fs");

// const isim = process.argv[2] || "Misafir";

// fs.writeFileSync("merhaba.txt",`Merhaba, ${isim}`);

// const icerik =fs.readFileSync("merhaba.txt","utf-8");

// console.log("dosya iceriği:",icerik);

// console.log("bulunduğunuz dizin: ", __dirname);
// console.log("bu dosyanın tam yolu: ", __filename);


/////kaç saniyede bir yazcak(10000 saniyede) ve kaç sn sonra
// setTimeout(() =>{
//     console.log("bu mesaj 3 sn sonra yazcak");
// },3000);

// const intervalId = setInterval(()=>{
//     console.log("bu mesaj 2snde bir yazcak");

// },2000);

// setTimeout(()=> clearInterval(intervalId),10000);

// ////eventsler (olay tabanlı)

// const EvenEmitter = require("events");
// //yeni evenmitter oluşturduk
// const olayYayici = new EvenEmitter();

// ////olay dinleyici
// olayYayici.on("selamla",(isim) =>{
//     console.log(`merhaba,${isim}`);
// });

// //olay tetikle
// olayYayici.emit("selamla", "node.js(isim)");


////dosyayı oku, utf8le bize getir. hata olursa --- olamzsa --- yaz
// const fs = require("fs");

// fs.readFile("merhaba.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.error("hata oluştu:",err);
//         return;
//     }
//     console.log("dosya içeriği",data);

// });

//////hesaplama dosyasına fonksiyon yazdık, app.jsten fonk çağırdık ve işlem yaptık
// const {toplama, carpma } = require("./hesaplama"); //aynı dizinde olduğu anlamına gelir>> ../ bir üst dizine çıkar

// console.log("Toplama", toplama(5,3));
// console.log("Çarpma", carpma(3,4));

/////SENKRON İŞLEMLER
// const fs = require("fs");

// console.log("birinci işlem başlıyor: ");

// const data = fs.readFileSync("merhaba.txt","utf-8");

// console.log("dosya içeriği:",data);

// console.log("birinci işlem tamamlandı");
////ASENKRON
// const fs = require("fs");
// console.log("birinci işlem başlıyor: ");
// fs.readFile("merhaba.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("hata oluştu",err);
//         return;
//     }
//     console.log("dosya içeriği:",data);
// });
// console.log("birinci işlem tamamlandı");
/////HTTP SUNUCU OLUŞTUR
// const http = require("http");
// //sunucu oluştur
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("merhaba node.js sunucu calışıyor");
// });
// //sunucuyu başlat
// server.listen(3000,()=>{
//     console.log("sunucu localhost:3000 de çalışıyor");
// });
