<template>
  <RouterLink
    v-if="title"
    :href="link"
    :style="cssObject"
    :to="link"
    class="sidebar-link me-2"
  >
    <i :class="icon"></i>{{ title }}
  </RouterLink>
</template>

<script>
export default {
  name: "SidebarTile",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssObject() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<!--suppress CssUnresolvedCustomProperty -->
<style scoped>
.sidebar-link {
  text-decoration: none;
  color: #464646;
  margin-bottom: 9px;
  font-size: 1.2em;
}

.sidebar-link > i {
  margin-right: 0.5rem;
}

.sidebar-link:hover {
  border-left: 3px solid var(--color);
  padding-left: 0.5rem;
  color: var(--color);
}

/*noinspection ALL*/
.router-link-active {
  border-left: 3px solid var(--color);
  padding-left: 0.5rem;
  color: var(--color);
}
</style>
