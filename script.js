function markAttendance() {
  let name = document.getElementById("studentName").value.trim();
  let status = document.getElementById("status").value;

  if (name === "") {
    alert("Enter student name");
    return;
  }

  let student = {
    id: nextId++,
    name: name,
    status: status,
    date: getTodayDate()
  };

  attendance.push(student);

  renderAttendance();
  clearForm();
}
