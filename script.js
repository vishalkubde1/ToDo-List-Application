const add_task_tamplate = (input, task_counter) => {
    const divElement = document.createElement("div");
    divElement.className = "task_Fild";
  
    // Create the list item (li) element
    const liElement = document.createElement("li");
  
    // Create the first SVG element
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute("height", "1.8em");
    svg1.setAttribute("viewBox", "0 0 448 512");
    svg1.setAttribute("class", "undone_task cursor_pointer");
  
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute(
      "d",
      "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
    );
    svg1.appendChild(path1);
  
    // Create the input element with the correct attribute name
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("data-t_c_id", `${parseInt(task_counter)}`);
    inputElement.value = input;
    inputElement.readOnly = true;
  
    // Create the second SVG element
    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg2.setAttribute("height", "1.8em");
    svg2.setAttribute("viewBox", "0 0 512 512");
    svg2.setAttribute("class", "cursor_pointer");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute(
      "d",
      "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
    );
    svg2.appendChild(path2);
  
    // Create the third SVG element
    const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg3.setAttribute("height", "1.8em");
    svg3.setAttribute("viewBox", "0 0 448 512");
    svg3.setAttribute("class", "cursor_pointer");
    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute(
      "d",
      "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
    );
    svg3.appendChild(path3);
  
    // Append the created elements to their parent elements
    liElement.appendChild(svg1);
    liElement.appendChild(inputElement);
    liElement.appendChild(svg2);
    liElement.appendChild(svg3);
    divElement.appendChild(liElement);
  
    document.querySelector(".task_list").appendChild(divElement);
  };
  
  const input_fild = document.getElementById("input_fild");
  let task_counter = parseInt(localStorage.getItem("task_counter"));
  
  // Add Task
  document.getElementById("submit_btn").addEventListener("click", () => {
    if (input_fild.value.length != 0) {
      if (isNaN(task_counter)) {
        task_counter = 0;
      }
      localStorage.setItem(`Task_No. ${task_counter + 1}`, `${input_fild.value}`);
      ++task_counter;
      localStorage.setItem("task_counter", `${task_counter}`);
      // creating html tamplate
      add_task_tamplate(input_fild.value, task_counter);
  
      document.querySelector(".task_container").style.display = "none";
      input_fild.value = "";
    }
  });
  
  // Cancel Adding Task
  document.getElementById("cancel_btn").addEventListener("click", () => {
    document.querySelector(".task_container").style.display = "none";
    input_fild.value = "";
  });
  
  // Add Fun() in Task Buttons
  // Add Taskes Btn
  document.getElementById("add_task_btn").addEventListener("click", () => {
    document.querySelector(".task_container").style.display = "flex";
  });
  
  // Deleting All Tasks in localStorage
  document.getElementById("delete_all_task_btn").addEventListener("click", () => {
    document.querySelector(".task_list").innerHTML = "";
    localStorage.clear();
    task_counter = 0;
    localStorage.setItem("task_counter", "0");
  });
  
  // Fetch All Stored Data From LocalStorage
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    if (key === "task_counter") {
      continue;
    }
    const matches = key.match(/\d+/);
    const extractedNumber = parseInt(matches[0], 10);
    add_task_tamplate(localStorage.getItem(key), extractedNumber);
  }
  
  // Task Fild Buttons
  const divs = document.querySelectorAll(".task_Fild");
  
  divs.forEach((div) => {
    const svgs = div.querySelectorAll("li svg");
    const input_element = div.querySelector("input");
  
    svgs.forEach((svg, index) => {
      svg.addEventListener("click", (e) => {
        if (index === svgs.length - 1) {
          localStorage.removeItem("Task_No. " + input_element.dataset.t_c_id);
          console.log(input_element.dataset.t_c_id);
          div.remove();
        }
  
        if (index === svgs.length - 2) {
          const second_svg = e.target;
          second_svg.style.fill = "rgb(0, 224, 224)";
  
          input_element.readOnly = false;
  
          input_element.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              input_element.readOnly = true;
              second_svg.style.fill = "rgba(46, 46, 46, 0.932)";
            }
          });
        }
  
        if (index === svgs.length - 3) {
          e.target.classList.toggle("done_task_color");
          input_element.classList.toggle("line_through");
        }
      });
    });
  });