<template>
  <div
    class="flex justify-center text-center gap-6 w-[50%] content-center mx-auto my-5"
  >
    <table
      class="w-[100%] p-20 border-r-[#cb3d8b] border-b-[#cb3d8b] border-4 border-t-[#0380fa] border-l-[#0380fa]"
      v-if="tasks.length"
    >
      <tr class="bg-[#0380fa] border-2 border-b-black">
        <th class="w-[10%]">Id</th>
        <th class="w-[60%]">Task</th>
      </tr>
      <tr
        class="bg-white border-2 border-b-black"
        v-for="task in tasks"
        :key="task.id"
        :style="task.isCompleted ? 'background-color: #bee3c6' : ''"
      >
        <td class="border border-r-black">
          {{ task.id }}
        </td>
        <td
          class="flex justify-between items-center px-5 border border-t-black"
        >
          <div>
            {{ task.task }}
          </div>

          <div class="flex gap-4">
            <button
              @click="complateTask(task)"
              class="bg-[#0380fa] hover:bg-[#3ca43a] px-3 rounded-sm py-1 my-3 text-white"
              :style="task.isCompleted ? 'background-color: #3ca43a' : ''"
            >
              {{ task.isCompleted ? "InComplate" : "Complate" }}
            </button>
            <button
              @click="deletTask(task.id)"
              class="bg-[#b73d3f] hover:bg-[#de5353] px-3 rounded-sm py-1 my-3 text-white"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </table>
    <div v-else class="flex flex-col">
      <h1 class="text-[40px] mt-[35px] text-white">NO TASKS TO SHOW</h1>
      <img class="w-30 mt-[70px] ml-[110px]" :src="noTodoImage" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const tasks = ref([]);
const noTodoImage = require("../assets/undraw_completed_tasks_vs6q.png");

const addToLocalSTorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const deletTask = (id) => {
  PlaySound("free-sound-1674784096.mp3");
  tasks.value = tasks.value.filter((task) => task.id !== id);
  addToLocalSTorage();
};

const complateTask = (task) => {
  if (!task.isCompleted) {
    PlaySound("decidemp3-14575.wav");
  }
  task.isCompleted = !task.isCompleted;
  addToLocalSTorage();
};

function PlaySound(audioSound) {
  let audio = new Audio(require(`../assets/${audioSound}`));
  audio.play();
}

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    tasks.value = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks.value);
});
</script>
