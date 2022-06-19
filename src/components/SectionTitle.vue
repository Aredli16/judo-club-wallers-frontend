<template>
  <div
    v-if="title"
    :style="{ borderBottom: '4px solid ' + color }"
    class="box-title mb-3"
  >
    <p :style="{ backgroundColor: color }" class="title">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
  padding: 10px 25px 10px 20px;
  color: white;
  margin-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

p {
  font-weight: bold;
  font-style: italic;
}
</style>
