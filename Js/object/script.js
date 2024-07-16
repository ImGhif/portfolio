let kalkulator = {
    nama: 'kalkulator',
    jenis: 'jadul',
    penambahan: function(a,b) {return a+b},
    pengurangan: function(a,b) {return a-b},
    pengkalian: function(a,b) {return a*b}
}

// console.log(kalkulator.pengkalian(5,4310))

let kulkas = {
    name: 'Warung',
    jenis: {
        jenisWarung: 'Madura',
        jW: function() {console.log('WARUNG MADURA')}
    }
}

console.log(kulkas.jenis.jenisWarung)