<template>
  <section class="welcome-screen">
  </section>
</template>

<script>
  export default {
    name: 'AuthHandle',
    components: {
    },
    async mounted() {
          await this.$store.dispatch('auth/login');

          // alert(this.$store.getters['auth/isLoggedIn']);

          if(!this.$store.getters['auth/isLoggedIn']) {
            await this.$router.push({ name: 'home' });
          }
          else {
            await this.$router.push({name: 'memorials.create.welcome'});
          }
    }
  }
</script>

<style lang="scss">
</style>