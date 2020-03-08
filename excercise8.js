function pasanganTerbesar(num) {
    // you can only write your code here!
    var x = num.toString()
    var nampung =[]
    for (var i=0; i<x.length-1; i++){
      var y = x[i] + x[i+1]
      nampung.push(y)
      
    }
    for (var k=0; k < nampung.length; k++){
    for (var j =0; j < nampung.length; j++){
      if( nampung[j] > nampung[j+1]){
        var tamp = nampung[j]
        nampung[j] = nampung[j+1]
        nampung[j+1] = tamp
      
      }
    }
    
  }
  var fix = nampung[nampung.length-1]
  return fix
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99