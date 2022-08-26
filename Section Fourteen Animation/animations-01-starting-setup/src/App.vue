<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false
    };
  },
  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
.modal-enter-from {

}
.modal-enter-active {
  animation: modal 2s ease-out;
}
.modal-enter-to {

}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}
.para-leave-active {
  /* transition: all 5s ease-in; */
  animation: slide-scale 3s;
}
.para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}
.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}
.para-enter-active {
  /* transition: all 5s ease-out; */
  animation: slide-scale 2s ease-out;
}
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}
.animate {
  animation: slide-fade 2s ease-out forwards;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>