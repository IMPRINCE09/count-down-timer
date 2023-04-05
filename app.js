const endDate = "20 MARCH 2023 10:00 PM";
const input = document.querySelectorAll("input");
document.getElementById("end-date");
Document.innerHTML = endDate;
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  //   console.log(end, now);
  const diff = (end - now) / 1000;
  if (diff < 0) return;

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor(diff % 60);
}
clock();
setInterval(() => {
  clock();
}, 1000);
