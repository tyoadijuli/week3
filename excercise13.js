function targetTerdekat(arr) {
    // you can only write your code here!
    var spcmaju = 0
    var spcmundur = 0
    var xmaju = false
    var xmundur = false

    for ( var i= 0; i<arr.length; i++){
        if (arr[i] == 'o'){

            for ( j=i; j <= arr.length; j++){
                if (arr[j] == ' '){
                spcmaju++
                } else if ( arr[j]== 'x'){
                    spcmaju++
                    xmaju = true
                    break
                }
            }
            for ( j=i; j >= 0; j--){
                if(arr[j] == ' '){
                    spcmundur++
                } else if (arr[j] == 'x'){
                    spcmundur++
                    xmundur = true
                    break
                }
            }
        }
    }
    
    if ( xmaju == false && xmundur == false){
        return 0
    } else if (xmundur == false && xmaju == true){
        return spcmaju
    } else if (xmaju == false && xmundur == true){
        return spcmundur
    } else if ( xmaju == true && xmundur == true && spcmundur<spcmaju){
        return spcmundur
    } else {
        return spcmaju
    }
    
    

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2