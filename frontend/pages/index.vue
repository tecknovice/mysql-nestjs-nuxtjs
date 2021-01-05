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
import item from '../components/item.vue'
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {
    item,
  },
})
export default class Index extends Vue {
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
  deleteItem(note: any) {}
}
</script>
