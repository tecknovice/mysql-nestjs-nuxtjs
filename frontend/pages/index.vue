<template>
  <el-main>
    <div class="flex header">
      <div>Read/Delete Entity</div>
      <div>
        <NuxtLink to="/create"><el-button>Create</el-button></NuxtLink>
      </div>
    </div>
    <item
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @updateItem="updateItem(note)"
      @deleteItem="deleteItem(note)"
    />
  </el-main>
</template>

<style>
.header {
  padding: 10px;
}
</style>

<script lang="ts">
import { $axios } from '../utils/api'
import item from '@/components/item.vue'
import Note from '@/entities/Note'
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {
    item,
  },
})
export default class Index extends Vue {
  private notes: Note[] = []
  async asyncData() {
    try {
      const notes = await $axios.$get('notes')
      return { notes }
    } catch (error) {
      console.error(error)
    }
  }
  updateItem(note: any) {
    this.$router.push(`${note.id}`)
  }
  async deleteItem(note: any) {
    try {
      await $axios.$delete(`notes/${note.id}`)
      const index = this.notes.findIndex((item) => item.id == note.id)
      this.notes.splice(index, 1)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
