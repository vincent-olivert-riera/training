<template>
  <div>
    <h3 class="mb-3">{{ $t("SetupTrainings.title") }}</h3>
    <v-simple-table v-for="day in $store.state.days" :key="day" dense>
      <thead>
        <tr>
          <th colspan="3" class="text-capitalize font-weight-black">
            {{ $t(day) }}
          </th>
        </tr>
        <tr>
          <th>{{ $t("time") }}</th>
          <th>{{ $t("defender") }}</th>
          <th>{{ $t("attacker") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in $store.state.hours" :key="hour">
          <td>{{ hour }}</td>
          <td>
            <v-select
              :items="getCandidates('defender', day, hour)"
              dense
              hide-details
              flat
              solo
              clearable
              placeholder="..."
            ></v-select>
            <v-select
              :items="getCandidates('defender', day, hour)"
              dense
              hide-details
              flat
              solo
              clearable
              placeholder="..."
            ></v-select>
          </td>
          <td>
            <v-select
              :items="getCandidates('attacker', day, hour)"
              dense
              hide-details
              flat
              solo
              clearable
              placeholder="..."
            ></v-select>
            <v-select
              :items="getCandidates('attacker', day, hour)"
              dense
              hide-details
              flat
              solo
              clearable
              placeholder="..."
            ></v-select>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SetupTrainings",

  computed: {
    ...mapState(["players"]),
  },

  methods: {
    getCandidates(position, day, hour) {
      const availablePlayers = this.players.filter(player => {
        return (
          (player.position.toLowerCase() === position ||
            player.position.toLowerCase() === "versatile") &&
          player.availability[day].includes(hour)
        );
      });

      return availablePlayers.map(player => player.name);
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchPlayers");
  },
};
</script>

<style>
.v-data-table tr:hover {
  background: transparent !important;
}
</style>
