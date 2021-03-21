<template>
  <div v-if="players.length > 0">
    <h3 class="mb-3">{{ $t("SetAvailability.title") }}</h3>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="player in players" :key="player.id">
        <v-expansion-panel-header>
          {{ player.name }} ({{ $t(player.position.toLowerCase()) }})
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row v-for="day in $store.state.days" :key="`${player.id}-${day}`">
            <v-col xl="1" lg="1" md="1" sm="2" cols="4" class="day-box">
              {{ $t(day) }}
            </v-col>
            <v-col xl="11" lg="11" md="11" sm="10" cols="8">
              <v-select
                :items="$store.state.hours"
                v-model="player.availability[day]"
                dense
                hide-details
                flat
                solo
                placeholder="..."
                multiple
                @input="updateAvailability($event, day, player)"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <p>
              <v-btn color="error" @click="deletePlayer(player.id)">
                {{ $t("delete") }}
              </v-btn>
            </p>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SetAvailability",

  computed: {
    ...mapState(["players"]),
  },

  methods: {
    deletePlayer(id) {
      this.$store.dispatch("deletePlayer", id);
    },

    updateAvailability(hours, day, player) {
      const availability = { ...player.availability };
      delete availability.__typename;
      availability[day] = [...hours].sort();
      this.$store.dispatch("updateAvailability", {
        id: player.id,
        availability: availability,
      });
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchPlayers");
  },
};
</script>

<style scoped>
.day-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
