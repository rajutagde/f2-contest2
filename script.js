let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.filter(item => item.profession === "developer")
       .map(item => console.log(item));
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(item => {
      if (item.profession === "developer") {
        console.log(item);
      }
    });
  }
  
  function addData() {
    arr.push({ id: 4, name: "rajkiran", age: "22", profession: "admin" });
    console.log(arr);
  }
  
  function removeAdmin() {
    arr = arr.filter(item => item.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    const arr2 = [
      { id: 4, name: "rajkiran", age: "22", profession: "developer" },
      { id: 5, name: "ramesh", age: "21", profession: "admin" }
    ];
    const newArr = arr.concat(arr2);
    console.log(newArr);
  }
  