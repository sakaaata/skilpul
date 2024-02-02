// tipe data java script

let namaSaya = "Stefanus";
const umurSaya= 20;

// operator aritmatika

// Lengkapi kode di bawah
const penjumlahan = 10 + 5
const modulus = penjumlahan %4
const pangkat = modulus **5

// assignment operator

let umur = 10;
umur +=5
// Tulis kode kalian di bawah ini

// string operator

let kalimat = 'Hello';
kalimat += ' world';

// mendeklarasikan fungsi

// Tulis kode kalian di bawah ini
function namaSaya() {
    return "dung";
}

// Contoh pemanggilan fungsi
console.log(namaSaya()); 

// parameter dan argumen

// Tulis kode kalian di bawah ini
// Tulis kode kalian di bawah ini
function luasPersegi(s) {
    // Menghitung luas persegi dengan rumus sisi * sisi
    return s * s;
  }
  
  // Contoh penggunaan fungsi
  var sisiPersegi = 5;
  var hasilLuas = luasPersegi(sisiPersegi);
  
  console.log("Luas persegi dengan sisi", sisiPersegi, "adalah:", hasilLuas);

//   mendelerksasikan objek

// Tulis kode kalian di bawah ini
// Tulis kode kalian di bawah ini
var saya = {
    nama: "Nama Anda",
    umur: 7,           
  };
  
  // Contoh penggunaan objek
  console.log("Nama saya:", saya.nama);
  console.log("Umur saya:", saya.umur);

//   menambah properti baru dalam objek

let manusia = {
    kepala: true,
    badan: true,
    tangan: true
  };
  
  // Menambahkan properti "ekor" dengan nilai false menggunakan dot notation
  manusia.ekor = false;
  
  
  // Contoh penggunaan objek setelah ditambahkan properti "ekor"
  console.log(manusia);

//   menghapus properti objek

let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
  };
  
  // Menghapus properti "roda" dari objek "tubuh"
  delete tubuh.roda;
  
  // Contoh penggunaan objek setelah properti "roda" dihapus
  console.log(tubuh);

//   objek mehtod

let kucing = {
    lucu: true,
    kaki: 4,
    suara: function() {
        return "Meong";
    }
};

// Memanggil method suara
console.log(kucing.suara()); 

//   mendelekrasikan array

// Tulis kode kalian di bawah ini
let hewan = ["Singa", "Gajah", "Harimau", "Panda", "Kanguru"];

// Menampilkan isi array hewan
console.log(hewan);

// mengubah data/elemen dalam array

// method objek math

let bilangan = 0;

let pow = Math.round(Math.pow(bilangan, 2));
let sqrt = Math.round(Math.sqrt(40 + bilangan));
let max = Math.round(Math.max(bilangan, 2.3, 8.5));

console.log(pow);  
console.log(sqrt); 
console.log(max);  

// menggunakan if,else dan if else

function ganjilGenap(platNomor) {
    if (platNomor % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}


let hasil = ganjilGenap(7);
console.log(hasil); 

hasil = ganjilGenap(10);
console.log(hasil); 

// for loop

let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// Tulis kode kalian di bawah ini
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {
        genap.push(angka[i]);
    }
}

console.log(genap); 

// for /of loop

let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// Tulis kode kalian di bawah ini
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {
        genap.push(angka[i]);
    }
}

console.log(genap); 


console.log(ganjil);  

// while loop

let angka = [];

// Tulis kode kalian di bawah ini
let i = 5;

while (i >= 0) {
    angka.push(i);
    i--;
}

console.log(angka);

// do while loop

let angka = [];
let i = 5;

// Ubah kode loop di bawah ini
do {
  angka.push(i);
  i++;
} while (i <= 10);

console.log(angka);  
console.log(i);      

// default parametert

// Tulis kode kalian di bawah ini
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
  }
  
  console.log(warnaKesukaan()); 
  console.log(warnaKesukaan("biru"));

//   rest parametert

let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah); 
