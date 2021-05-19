<template>
  <div class="master">
    <div class="album-lists">
      <AlbumItem
        v-bind:key="album.id"
        v-bind:album="album"
        v-for="album in albums"
        v-on:show-album-details="$emit('show-album-details', album.id)"
      />
    </div>
  </div>
</template>

<script>
import AlbumItem from "./AlbumItem";

export default {
  name: "AlbumLists",
  components: {
    AlbumItem,
  },
  props: ["albums"],
};
</script>

<style scoped>
.master {
  flex: 4;
  padding: 30px;
  padding-right: 0px;
  flex-wrap: wrap;
  height: 100vh;
  border-right: 8px solid #fafafa;
  overflow: scroll;
}
</style>
