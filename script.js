    const validStatuses = ["todo", "doing", "done"];

    // Function to prompt and validate status input
    function getValidStatus(taskNumber) {
      let status = "";
      do {
        status = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();
        if (!validStatuses.includes(status)) {
          alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
      } while (!validStatuses.includes(status));
      return status;
    }

    // Function to prompt for task input and return task object
    function createTask(taskNumber) {
      const title = prompt(`Enter title for Task ${taskNumber}:`);
      const description = prompt(`Enter description for Task ${taskNumber}:`);
      const status = getValidStatus(taskNumber);

      return {
        title: title.trim(),
        description: description.trim(),
        status: status
      };
    }

    // Collect input for two tasks
    const task1 = createTask(1);
    const task2 = createTask(2);

    // Store tasks in an array
    const tasks = [task1, task2];

    // Filter tasks with status 'done'
    const completedTasks = tasks.filter(task => task.status === "done");

    // Display completed task titles or motivational message
    if (completedTasks.length > 0) {
      console.log("✅ Completed Tasks:");
      completedTasks.forEach(task => {
        console.log(`- ${task.title} [${task.status}]`);
      });
    } else {
      console.log("💪 No tasks completed, let's get to work!");
    }
