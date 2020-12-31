<template>
  <div class="item flex">
    <div class="content">
      {{ note.note }}
    </div>
    <el-button>Update</el-button>
    <el-button>Delete</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Item extends Vue {
  @Prop() readonly note!: any
}
</script>
<style>
.item {
  height: 100px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  margin: 20px 0;
}
.item:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.content {
  flex-grow: 1;
  overflow: hidden;
  height: 100%;
}
</style>
