<template>
  <div id="body">
   
    <TaskList v-bind:tasks="tasks" :title="title" v-on:del-task="deleteTask" 
    v-on:add-task="addTask" />
  </div>
</template>

<script>
import TaskList from "../components/TaskList.vue";

import axios from "axios";
export default {

  components: {
    TaskList,

  },
  data(){
    return{
      title: "کارهای ضروری",
      tasks: []
    };
  },
  methods :{
    deleteTask : function(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(()=>this.tasks=this.tasks.filter(task=> task.id != id))
      .catch(err=>console.log(err));

    },
    addTask: function(newTask){
      axios.post(`https://jsonplaceholder.typicode.com/todos`,newTask)
      .then(res=>this.tasks.push(res.data)) 
      .catch(err=>console.log(err));
    },
  },
  created:function(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then(res => this.tasks=res.data)

      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
@font-face {
    font-family: myfont;
    src: url(../assets/DimaYekan.ttf);
}

#body {
     font-family: myfont;
    background-image: url(../assets/b1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    direction: rtl;
    margin: 0px;
}
.btn {
    display: inline;
  border: none;
  padding:7px 20px;
  background-color: #555;
    color: #fff;

 
    cursor: pointer;
}
</style>