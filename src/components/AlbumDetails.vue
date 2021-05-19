<template>
  <div
    class="detail"
    v-on:show-album-details="$emit('show-album-details', album.id)"
  >
    <div v-if="album">
      <div class="album-image">
        <div class="dummy"></div>

        <div style="width: 60%" class="image">
          <img v-bind:src="album.imageUrl" alt="" srcset="" />
        </div>

        <div class="favorite">
          <i
            v-if="album.isFavorite"
            class="fa fa-star"
            v-on:click="$emit('toggle-favorite', album.id)"
          ></i>
          <i
            class="far fa-star"
            v-if="!album.isFavorite"
            v-on:click="$emit('toggle-favorite', album.id)"
          ></i>
        </div>
      </div>
      <div class="album-artist">
        <div class="artist-name">{{ album.artist }}</div>
        <div class="album-designer">({{ album.designer }})</div>
        <div class="album-description">
          {{ album.description }}
        </div>
      </div>
    </div>
    <div v-else class="detail-message">
      Click on an Album to see its details
      <div>
        <i class="fas fa-mouse"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumDetails",
  props: ["album"],
};
</script>

<style scoped>
.detail {
  flex: 8;
  padding-top: 20px;
  padding-left: 120px;
  padding-right: 120px;
}
.album-image {
  text-align: center;
  display: flex;
}

.favorite {
  font-size: 50px;
  cursor: pointer;
  flex: 1;
}

.image {
  flex: 2;
}

.dummy {
  flex: 1;
}

img {
  height: 300px;
  width: 200px;
}

.album-artist {
  text-align: center;
}
.artist-name {
  font-size: 35px;
}

.album-designer {
  color: rgba(230, 225, 225, 0.8);
}
.album-description {
  text-align: left;
  padding: 10px 0px;
  background-color: #fefefe;
  border: 1px solid #eee;
  box-shadow: 1px 3px 5px #ddd;
  padding: 10px;
  margin-top: 20px;
}

.favorite {
  color: #4cd4b0;
}

.detail-message {
  text-align: center;
  font-size: 30px;
  color: #aaaaaa;
  padding-top: 20%;
}

.detail-message div {
  color: #4cd4b0;
  font-size: 90px;
}
</style>