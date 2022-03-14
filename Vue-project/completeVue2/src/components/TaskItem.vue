<template>
    <div class="list-item" :class="{'is-completed':task.completed}" >
        <input type="checkbox" :checked="task.completed" v-on:change="markComplete">
        {{task.title | smaller}}
        <button class="del" @click="$emit('del-task',task.id)">x</button>
    </div>
</template>

<script>
export default {
    name:"TaskItem",
    props:["task"],
    methods:{
        markComplete: function(){
            this.task.completed= !this.task.completed;
        }
    },
    filters:{
        smaller:function(txt){
            return txt.substr(0,15);
        }
    }
}
</script>
<style scoped>
.list-item {
    background-color: white;
    margin: 8px 0px;
    padding: 5px;
    font-weight: bold;
    box-shadow: -2px 2px 5px rgb(112, 111, 111) inset, -2px 2px 5px rgb(155, 153, 153);
}
.is-completed{
    text-decoration: line-through;
    opacity: 0.6;
}
.del{
background-color: none;
color:red;
border: none;
cursor: pointer;
float: left;
opacity: 0.4;
font-size: 1.5rem;

}
.list-item:hover .del{
    opacity: 1;
}
</style>