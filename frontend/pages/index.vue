<template>
  <el-main>
    <div class="flex header">
      <div>Read/Delete Entity</div>
      <div>
        <NuxtLink to="/create"><el-button>Create</el-button></NuxtLink>
      </div>
    </div>
    <item v-for="note in notes" :key="note.id" :note="note" />
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
import { $axios } from '../utils/api'
import item from '../components/item.vue'
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {
    item,
  },
})
@Component
export default class Index extends Vue {
  async asyncData(context: any) {
    console.log('axios = ', $axios)
    const notes = await $axios.$get('notes')
    console.log('notes', notes)
    return { notes }
  }

  async mounted() {
    // this.$router.push('create')
    // this.$router
  }
}
</script>
