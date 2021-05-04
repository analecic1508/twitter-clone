<template>
  <aside class="profile">
    <img class="avatar" :src="data.profileImage" alt="Avatar" />
    <h1>{{ data.name }}</h1>
    <span>@{{ data.username }}</span>
    <p>{{ data.status }}</p>
  </aside>
</template>
<script>
export default {
  props: ["data"],
};
</script>
