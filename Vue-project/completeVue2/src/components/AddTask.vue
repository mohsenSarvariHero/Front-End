<template>
<div>
    <div class="add-item">افزودن مورد جدید</div>
    <form @submit.prevent="addTask">
        <input type="text" v-model="title" name="title">
        <input type="submit" value="افزودن" class="btn">
    </form>
    </div>
</template>
<script>
import {uuid} from "vue-uuid";
export default {
    name:"AddTask",
    data(){
        return{
            title: " "
        };
    },
    methods:{
        addTask:function(){
            const newTask = {
                id:uuid.v4(),
                title:this.title,
                completed:false
            };
            this.$emit("add-task",newTask);
            this.title="";
            
        }
    }
};
</script>
<style scoped>
.add-item{
    padding: 5px;
}
.add-item::before {
    content: "+";
    padding: 0px 8px;
    color: rgb(199, 38, 51);
    font-weight: bold;
}
form{
    display: flex;
}
input[type="text"]{
    flex: 10;
    padding: 5px;
    min-width: 0%;
}
input[type="submit"]{
    flex: 2;
 
}

</style>