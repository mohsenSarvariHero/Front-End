<template>
<div class="list">
    <div>{{title}}</div>
    <div v-for="task in tasks" :key="task.id">
       <TaskItem :task="task"  v-on:del-task="$emit('del-task',task.id)"/>
    </div>
    <AddTask v-on:add-task="addTask" />
    </div>
</template>
<script>
import TaskItem from './TaskItem.vue';
import AddTask from './AddTask.vue';


export default {
  
 name: "TaskList",
 
components: { 
    TaskItem,
    AddTask
 },

 props:["tasks","title"],
  methods:{
      addTask:function(newTask){
          this.$emit("add-task",newTask);
      }
 }
};
</script>

<style scoped>
.list {
    display: inline-block;
    width: 300px;
    background-color: rgb(235, 228, 228);
    vertical-align: top;
    /*در یک خط از بالا در یک ردیف قرار بگیرند*/
    padding: 5px;
    margin: 5px;
    margin-right: 0px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: -2px 2px 3px rgb(129, 128, 128);
}

</style>
