function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    // Mark complete
    li.onclick = function () {
        li.classList.toggle("done");
    };

    // Delete button
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

        li.appendChild(btn);
        document.getElementById("taskList").appendChild(li);
    
        input.value = "";
    }