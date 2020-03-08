function angkaPalindrome(num) {
    // you can only write your code here!
    var isPalindrome = false 
    while (isPalindrome == false){
        num++ 
        var i = num.toString()
        var j=""
        for (var k=i.length-1; k>=0; k--){
            j += i[k]
        }
        
        if (i==j){
            isPalindrome = true
          } 

    }
    return num

  }

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  