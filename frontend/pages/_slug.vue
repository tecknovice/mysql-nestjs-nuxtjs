<template>
  <el-main>
    <div class="flex header">
      <div>Create/Update Item</div>
    </div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.content" type="textarea"></el-input>
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
  id: number,
  content: string
}
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { $axios } from '../utils/api'
import {Route} from 'vue-router'
@Component
export default class Create extends Vue {
  private form: Note = {
    id: 0,
    content: '',
  }
  slug: string = ''
  // async asyncData(context: any){
  //   const slug = context.params.slug
  //   let form: Note = {
  //     id: 0,
  //   content: '',
  //   }
  //   if(Number(slug)){
  //     try {
  //       form = await $axios.$get(`/notes/${slug}`)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   return{
  //     form
  //   }
  // }
  async created(){
    console.log('mounted this.$route', this.$route)
    this.slug = this.$route.params.slug
    console.log('Number(this.slug)',Number(this.slug))
    if(Number(this.slug)){
      try {
        this.form = await $axios.$get(`/notes/${this.slug}`)
        console.log('this.form',this.form)
      } catch (error) {
        console.error(error)
      }
    }
  }
  async onSubmit() {
    try {
      console.log('this.slug',this.slug)
      console.log('this.form',this.form)
      if(this.slug =='create')
      await $axios.$post('notes', { note: this.form.content })
      else if(Number(this.slug))
      await $axios.$put(`/notes/${this.slug}`,{note: this.form.content})
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  onCancel() {
    this.$router.push('/')
  }
}
</script>
