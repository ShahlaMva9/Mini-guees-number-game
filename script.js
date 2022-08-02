let randomNum = Math.ceil(Math.random() * 10);
let try_count = 0;
let true_value = false;
let value;

while (true_value == false) {
  try_count++;
  value = prompt();
  if (value == randomNum) {
    true_value = true;
    alert("You are winner");
    break;
  }
  alert((value < randomNum ? "Lower " : "higher ") + "than number");
}
alert("Try count is: " + try_count);
