var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input){
input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989",  "Pria", "SMA Internasional Metro")
console.log(input)

var tahun = input.slice(3, 4)
// console.log(tahun)
var i = tahun[0]
var j = i.split('/')
// console.log(j)
var bulan = j[1]
var nama_bulan = "" 
switch (bulan) {
    case "01" :
       nama_bulan = 'Januari'
    break
    case "02" :
        nama_bulan = 'februari'
    break
    case "03" :
     nama_bulan = 'Maret'
    break
    case "04" :
     nama_bulan = 'April'
    break
    case "05" :
    nama_bulan = 'Mei'
    break
    case "06" :
    nama_bulan = 'Juni'
    break
    case "07" :
    nama_bulan = 'Juli'
    break
    case "08" :
       nama_bulan = 'Agustus'
    break
    case "09" :
    
    nama_bulan = 'September'
    break
    case "10" :
       nama_bulan = 'Oktober'
    break
    case "11" :
        nama_bulan = 'November'
    break
    case "12" :
        nama_bulan = 'Desember'
    break
    default : 
        console.log("bulannya gak keliatan")
}
if(bulan<12){
    console.log(nama_bulan)

} 
var sortTanggal = j.sort((a, b) => b-a)
console.log(sortTanggal)
var k = i.split('/').join('-')
console.log(k)
var jumlah = input[1].slice(0, 15)
console.log(jumlah)


}
dataHandling2(input)