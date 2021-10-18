function add() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var num4 = Number(document.getElementById("num4").value);

  // var num5 = document.getElementById("num5").value;

  var num6 = Number(document.getElementById("num6").value);
  var num7 = Number(document.getElementById("num7").value);
  var num8 = Number(document.getElementById("num8").value);
  var num9 = Number(document.getElementById("num9").value);
  var arr1 = [
    [num1, num2],
    [num3, num4],
  ];
  var arr2 = [
    [num6, num7],
    [num8, num9],
  ];

  var result = [[], []];
  arr1.map((item, index) => {
    item.map((item2, index2) => {
      console.log(item2 + arr2[index][index2]);
    });
  });
  // for(var i = 0; i <= arr1.length ; i++){
  //     for(var j = 0 ; j <= arr2.length ; j++);
  //     result = arr1[i] + arr2[i]
  //     console.log(result)

  // }
}
