<template>
  <el-main>
    <div class="flex header">
      <div>Create/Update Item</div>
    </div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.note" type="textarea"></el-input>
      </el-form-item>
      <div class="flex">
        <el-button @click="onSubmit">Create/Update</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </div>
    </el-form>
  </el-main>
</template>

<style>
.header {
  padding: 10px;
}
</style>

<script lang="ts">
interface Note {
  id: number | null
  note: string
}
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { $axios } from '../utils/api'
import { Route } from 'vue-router'
@Component
export default class Create extends Vue {
  private form: Note = {
    id: null,
    note: '',
  }
  private slug: string = ''
  async asyncData(context: any) {
    console.log('asyncData')
    const slug = context.params.slug
    if (Number(slug)) {
      try {
        const form = await $axios.$get(`/notes/${slug}`)
        return { form }
      } catch (error) {
        console.error(error)
      }
    } else {
      return { slug }
    }
  }
  // async fetch() {
  //   console.log('fetch')
  //   const slug = 2
  //   console.log('slug', slug)
  //   if (Number(slug)) {
  //     try {
  //       this.form = await $axios.$get(`/notes/${slug}`)
  //       console.log(this.form)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   } else {
  //     this.slug = 'create'
  //   }
  // }
  async onSubmit() {
    try {
      if (this.slug && this.slug == 'create')
        await $axios.$post('notes', { note: this.form.note })
      else if (Number(this.form.id))
        await $axios.$put(`/notes/${this.form.id}`, { note: this.form.note })
      this.$router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  onCancel() {
    this.$router.push('/')
  }
}
</script>
