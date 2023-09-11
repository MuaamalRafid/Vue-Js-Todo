<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-[40px] my-5 ml-7 text-white">ADD NEW TASK</h1>
    <div class="ml-12">
      <form action="" @submit.prevent="addTask">
        <input
          v-model="taskObject.task"
          class="rounded-sm border-8 hover:border-cyan-500 outline-none pl-4 w-[400px] h-[50px] border-none"
          type="text"
          name="Task"
          id="task"
          placeholder="Enter Your Task"
          required
        />
        <input
          class="px-3 w-[100px] h-[49px] text-white rounded-sm hover:bg-[#0380fa] transition-colors ease-in-out cursor-pointer bg-[#cb3d8b]"
          type="submit"
          value="Add"
        />
      </form>
    </div>
    <div class="flex justify-center w-30 mt-[80px] ml-[370px]">
      <img :src="HomeImage" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import swal from "sweetalert";

const HomeImage = require("../assets/undraw_project_completed_re_jr7u.png");
const tasks = ref([]);
const taskObject = ref({
  id: "",
  task: "",
  isCompleted: false,
});

// Methods
const addTask = () => {
  taskObject.value.id = tasks.value.length + 1;
  tasks.value.push(taskObject.value);
  PlaySound("mixkit-positive-interface-beep-221.wav");
  addToLocalSTorage();
  swal({
    title: "Good job!",
    text: "You Add New Task!",
    icon: "success",
    buttons: false,
    timer: 1300,
  });
  taskObject.value = {
    id: "",
    task: "",
    isCompleted: false,
  };
};

function PlaySound(audioSound) {
  let audio = new Audio(require(`../assets/${audioSound}`));
  audio.play();
}
const addToLocalSTorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    tasks.value = JSON.parse(localStorage.getItem("tasks"));
  }
});
</script>
