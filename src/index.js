const tasks = [
  { number: "01", title: "Sum Numbers" },
  { number: "02", title: "Const" },
  { number: "03", title: "Let" },
  { number: "04", title: "Hoisting" },
  { number: "05", title: "Ternary Operator" },
  { number: "06", title: "Arrow Functions" },
  { number: "07", title: "Default Parameters" },
  { number: "08", title: "Check Function Parameters" },
  { number: "09", title: "Object Destructuring" },
  { number: "10", title: "Destructuring and Rest Operator" },
  { number: "11", title: "Spread Operator" },
  { number: "12", title: "Copy Array" },
  { number: "13", title: "Template Literals" },
  { number: "14", title: "Object Destructuring" },
  { number: "15", title: "Iterate Over String" },
  { number: "16", title: "Swap Variable Values" },
  { number: "17", title: "IIFE (Immediately Invoked Function Expression)" },
  { number: "18", title: "Classes" },
  { number: "19", title: "Iterate Over Object" },
  { number: "20", title: "Sum Positive and Negative Numbers" },
];

const taskList = document.getElementById("task-list");

tasks.forEach((task) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = `https://github.com/AlenaB-dev/js-challenges/tree/task-${task.number}`;
  link.textContent = `Task ${task.number}: ${task.title}`;
  li.appendChild(link);
  taskList.appendChild(li);
});

// Toggle Theme
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
