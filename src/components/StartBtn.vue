<template>
  <div v-if="enoughPlayers">
    <p>
      <h3>{{ $t("SetupTrainings.title") }}</h3>
    </p>
    <p>
      <v-btn to="/setup">{{ $t("start") }}</v-btn>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'GoBtn',

    computed: {
      enoughPlayers() {
        let defenders = 0;
        let attackers = 0;

        this.$store.state.players.forEach(player => {
          if (player.position === "defender") {
            defenders += 1
          } else {
            attackers += 1
          }
        });

        return (defenders >= 2 && attackers >= 2);
      }
    },
  }
</script>
