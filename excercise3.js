var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(){
    res = ""
for( var i = 0; i<input.length; i++){
   var Id = input[i][0]
   var nLengkap = input[i][1]
   var tempat = input[i][2]
   var TTL = input[i][3]
   var hobi = input[i][4]

   var oke = 'Nomor Id: ' + Id + '\n'+ 'Nama Lengkap: ' + nLengkap +'\n'+ 'TTL: ' + tempat + ' '+ TTL + '\n'+ 'Hobi: ' + hobi +'\n' +'\n'
   res += oke
    }
    return res
}
console.log(dataHandling(input))

