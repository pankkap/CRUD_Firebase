var rollV, nameV, genV, addV;
function readForm() {
  // alert("readForm called")
  rollV = document.getElementById("rollBox").value;
  nameV = document.getElementById("nameBox").value;
  genV = document.getElementById("genBox").value;
  addV = document.getElementById("addBox").value;
}

// Insert Data in FireBase

document.getElementById("insert").onclick = function () {
  // alert("Hello insert called")
  readForm();
  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      name: nameV,
      rollno: rollV,
      gender: genV,
      address: addV,
    });
  document.getElementById("rollBox").value = "";
  document.getElementById("nameBox").value = "";
  document.getElementById("genBox").value = "";
  document.getElementById("addBox").value = "";
  console.log("Data Inserted");
  alert("Data Inserted");
};
// Read Data from FireBase

document.getElementById("read").onclick = function () {
  readForm();
  // Validating user Exists or not
  //   var fdbRefer = FirebaseDatabase.getInstance().getReference(
  //     "student/" + rollV
  //   );
  //   if (!fdbRefer) {
  //     alert(`student with ${rollV} is not exists`);
  //   }

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snapshot) {
      document.getElementById("rollBox").value = snapshot.val().rollno;
      document.getElementById("nameBox").value = snapshot.val().name;
      document.getElementById("genBox").value = snapshot.val().gender;
      document.getElementById("addBox").value = snapshot.val().address;
    });
};

// Update Data in FireBase

document.getElementById("update").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      name: nameV,
      //   rollno: rollV,    // remove Rollno, as it is not required
      gender: genV,
      address: addV,
    });
  document.getElementById("rollBox").value = "";
  document.getElementById("nameBox").value = "";
  document.getElementById("genBox").value = "";
  document.getElementById("addBox").value = "";
  console.log("Data Updated");
  alert("Data Updated");
};

// Delete Data in FireBase

document.getElementById("delete").onclick = function () {
  readForm();
  if (confirm("Are u sure want to delete")) {
    document.getElementById("nameBox").value = "";
    document.getElementById("genBox").value = "";
    document.getElementById("addBox").value = "";
    firebase
      .database()
      .ref("student/" + rollV)
      .remove();
    document.getElementById("rollBox").value = "";
    console.log("Data Deleted");
    alert("Data Deleted");
  }
};
