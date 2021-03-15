<template>
  <div v-if="enoughPlayers">
    <h3 class="mb-3">{{ $t("SetupTrainings.title") }}</h3>
    <p>
      <v-btn to="/setup">{{ $t("start") }}</v-btn>
    </p>
  </div>
</template>

<script>
export default {
  name: "GoBtn",

  computed: {
    enoughPlayers() {
      let players = 0;
      let defenders = 0;
      let attackers = 0;

      this.$store.state.players.forEach(player => {
        players += 1;
        if (player.position === "defender") {
          defenders += 1;
        } else if (player.position === "attacker") {
          attackers += 1;
        } else {
          defenders += 1;
          attackers += 1;
        }
      });

      return players > 3 && defenders > 1 && attackers > 1;
    },
  },
};
</script>
