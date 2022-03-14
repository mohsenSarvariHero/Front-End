<template >
<div style="background-color:dark">
        <p id="iconSearch" class="icon-cancel" @click="cancle">X</p>
    <form>

        <input id="text" type="search" name="search" placeholder="Search here....." @blur="back" @change="back1"></form>
        <!-- <script src="search.js"></script> -->
</div>
</template>
<script>

export default {
    name:"Sectionsearch",
    methods: {
        cancle: function(){
              window.location.href = '/about';
        },
        back: function(){
            window.location.href = '/about';
        },
        back1: function(){
            window.location.href = '/about';
        }
    }
}

</script>
<style scoped>
.body {
    background-color: black;
}

.icon-cancel {
    color: white;
    background-color: rgb(66, 66, 63);
    display: inline-block;
    border-radius: 30px;
    height: 30%;
    padding: 15px;
    font-size: 20px;
    margin-left: 50%;
}

.icon-cancel:hover {
    cursor: pointer;
}

input {
    background-color: black;
    border: none;
    border-bottom: 2px solid rgb(148, 144, 144);
    margin-left: 33%;
    margin-top: 15%;
    width: 500px;
    font-size: 40px;
    color: rgb(128, 133, 133);
}
</style>