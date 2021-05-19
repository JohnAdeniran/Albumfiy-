<template>
  <div class="container">
    <AlbumSortControl v-on:sort-by="sortAlbum" />
    <div class="master-detail">
      <AlbumLists
        v-bind:albums="albums"
        v-on:show-album-details="showAlbumDetails"
      />
      <AlbumDetails
        v-bind:album="albumToShow"
        v-on:toggle-favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import AlbumLists from "./components/AlbumLists";
import AlbumDetails from "./components/AlbumDetails";
import AlbumSortControl from "./components/AlbumSortControl";
import { ALBUMS_URL, ALTERNATE_IMAGE_URL, PROXY_URL } from "./constants";

const getAlbums = () => {
  return axios
    .get(`${PROXY_URL}${ALBUMS_URL}`)
    .then(({ data }) => {
      return data.Albums.map((album) => ({
        ...album,
        imageUrl: album.image_url ? album.image_url : ALTERNATE_IMAGE_URL,
        currentlyShowing: false,
        isFavorite: false,
      }));
    })
    .catch(() => []);
};

export default {
  name: "App",
  components: {
    AlbumLists,
    AlbumDetails,
    AlbumSortControl,
  },
  setup() {
    const albums = ref([]);
    const albumToShow = ref(null);

    const showAlbumDetails = (albumId) => {
      albumToShow.value = albums.value.find((album) => album.id === albumId);

      albums.value = albums.value.map((album) => {
        album.currentlyShowing = album.id === albumId;
        return album;
      });
    };

    const sortAlbum = (by) => {
      albums.value.sort((a, b) => {
        const sortByValueA = a[by].toLowerCase();
        const sortByValueB = b[by].toLowerCase();

        if (sortByValueA < sortByValueB) {
          return -1;
        }

        if (sortByValueA > sortByValueB) {
          return 1;
        }

        return 0;
      });
    };

    const toggleFavorite = (albumId) => {
      albums.value = albums.value.map((album) => {
        if (album.id === albumId) {
          album.isFavorite = !album.isFavorite;
        }

        return album;
      });
    };

    getAlbums().then((data) => (albums.value = data));

    return {
      albums,
      albumToShow,
      showAlbumDetails,
      sortAlbum,
      toggleFavorite,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgba(255, 255, 255, 1);
  font-family: "Quattrocento", serif;
  font-size: 18px;
  line-height: 1.8;
}

@media (min-width: 1500px) {
  .container {
    padding: 50px 18%;
  }
}

.master-detail {
  display: flex;
}
</style>
