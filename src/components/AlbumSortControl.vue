<template>
  <div class="sort-control">
    <div class="flex-children">
      Sort By
      <input
        type="radio"
        id="album"
        name="sort"
        value="album"
        v-model="sortBy"
        v-on:change="$emit('sort-by', sortBy)"
      />
      <label for="album">Album</label>
      <input
        type="radio"
        id="artist"
        name="sort"
        value="artist"
        v-model="sortBy"
        v-on:change="$emit('sort-by', sortBy)"
      />
      <label for="artist">Artist</label>
    </div>
    <div class="flex-children">
      <div class="title">Albums</div>
      <div class="dummy-child"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AlbumSortControl",
  setup() {
    const sortBy = ref("");

    return {
      sortBy,
    };
  },
};
</script>

<style scoped>
.sort-control {
  color: #4cd4b0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  border-bottom: 2px solid #4cd4b0;
  background-color: #4cd4b0;
  color: white;
  font-size: 24px;
  flex: 4;
}

.dummy-child {
  flex: 11;
}

.flex-children {
  padding-left: 30px;
}

.flex-children:nth-child(2) {
  display: flex;
}

input,
label {
  cursor: pointer;
}
</style>
