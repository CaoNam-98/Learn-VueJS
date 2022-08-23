<template>
  <!-- Khi ta truyền sự kiện close từ component con ra component cha thì bên cha sẽ định nghĩ sự kiện đó @close="function" -->
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <!-- #default === v-slot:default -->
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
    </template>
    <template v-slot:actions>
      <!-- Trường hợp này thì đã sử dụng button Okay ghi đè lên button Close -->
      <!-- Nếu muôn xuất hiện button Close thì comment dòng dưới đi -->
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <!-- Ta sử dụng ref để lấy giá trị value của input -->
        <input id="title" name="title" type="text" ref="titleInput">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="10" rows="3" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput">
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  // Dùng inject để gọi đến phương thức bên component cha
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    // Sự kiện khi submit form
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;
      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredUrl.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
