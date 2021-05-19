<template>
  <div
    class="album-item"
    v-bind:class="{ active: album.currentlyShowing }"
    v-on:click="$emit('show-album-details', album.id)"
  >
    <div
      class="album-image"
      v-bind:style="{
        'background-image': `url('${album.imageUrl}')`,
      }"
    ></div>
    <div class="album-artist">
      <div class="artist-name">{{ album.artist }}</div>
      <div class="album-name">{{ album.album }}</div>
    </div>
    <div class="favorite">
      <i v-bind:class="{ 'fa fa-star': album.isFavorite }"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumItem",
  props: ["album"],
};
</script>

<style scoped>
.album-item {
  border-bottom: 2px solid #eee;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  cursor: pointer;
}

.album-item:hover,
.active {
  border-bottom: 3px solid #4cd4b0;
  border-top: 3px solid #4cd4b0;
  background-color: #fafafa;
}

img {
  height: 80px;
  width: 80px;
}

.album-artist {
  flex: 6;
  text-align: center;
}

.album-image {
  flex: 3;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  background-size: 100% 100%;
}

.favorite {
  flex: 1;
  padding-top: 27px;
  font-size: 20px;
  color: #4cd4b0;
}

.album-name {
  font-size: 14px;
}

.artist-name {
  font-weight: bold;
}
</style>