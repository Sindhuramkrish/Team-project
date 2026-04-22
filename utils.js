function renderAttendance() {
  let table = document.getElementById("attendanceTable");
  let count = document.getElementById("count");

  table.innerHTML = "";

  let present = 0;
  let absent = 0;

  attendance.forEach(student => {
    let row = document.createElement("tr");

    let cls = student.status === "Present" ? "present" : "absent";

    row.innerHTML = `
      <td>${student.name}</td>
      <td class="${cls}">${student.status}</td>
      <td>${student.date}</td>
    `;

    table.appendChild(row);

    if (student.status === "Present") present++;
    else absent++;
  });

  stats.total = attendance.length;
  stats.present = present;
  stats.absent = absent;

  count.innerText = stats.total;
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function clearForm() {
  document.getElementById("studentName").value = "";
}

renderAttendance();
