<template>
  <div>
    <li>
      <router-link :to="{ name: 'profile', params: { user: data } }"
        ><img :src="data.profileImage" alt="Avatar" width="50" height="50"
      /></router-link>
      <div class="info">
        <strong
          >{{ fullName }} <span>@{{ data.username }}</span></strong
        >
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: () => {
    return {
      textForEdit: "",
      openDialog: false,
    };
  },
  computed: {
    fullName() {
      return this.data.name + " " + this.data.surname;
    },
  },
};
</script>
