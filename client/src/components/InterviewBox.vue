<template>
  <div class="interview-box">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'InterviewBox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.interview-box {
  margin: 40px 0 0;
}
</style>
