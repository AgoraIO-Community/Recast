<template>
  <div class="home">
    <h1>Recast</h1>
    <InterviewBox msg="Welcome to your Recast interview."/>
    <a href="#">Begin your audition</a>
  </div>
</template>

<script>
// @ is an alias to /src
import InterviewBox from '@/components/InterviewBox.vue'

export default {
  name: 'home',
  components: {
    InterviewBox
  }
}
</script>

<style lang="scss" scoped>
  .home {
    color: #FFF;
    padding: 120px 0;
  }

  .home a {
    background-color: white;
    padding: 15px 20px;
    margin-top: 15px !important;
  }
</style>
