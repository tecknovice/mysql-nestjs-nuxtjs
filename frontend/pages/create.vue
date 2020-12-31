<template>
  <el-main>
    <div class="flex header">
      <div>Create/Update Entity</div>
    </div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.content" type="textarea"></el-input>
      </el-form-item>
      <div class="flex">
        <el-button @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </div>
    </el-form>
  </el-main>
</template>

<style>
.el-main {
  color: #000;
}
.header {
  padding: 10px;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Create extends Vue {
  private form = {
    content: '',
  }

  async onSubmit(e: Event) {
    console.log(e)
    // try {
    //   await this.$axios.$post('notes', { note: this.form.content })
    //   this.$router.push('/')
    // } catch (error) {
    //   console.log(error)
    // }
  }
  onCancel() {
    // console.log(this)
    // this.$router.push('/')
  }
}
</script>
