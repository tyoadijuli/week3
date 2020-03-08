function groupAnimals(animals) {
    // you can only write your code here!
    var hrfdpn = 'abcdefghijklmnopqrstuvwxyz'
    var arr1 = []
    for ( var i = 0; i< hrfdpn.length; i++){
      var arr2 = []
      for ( var j = 0; j< animals.length ; j++){
        if(animals[j][0]==hrfdpn[i]){
          arr2.push(animals[j])
        } 
      }
      if(arr2.length>0)
      arr1.push(arr2)
    }
    return arr1
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]