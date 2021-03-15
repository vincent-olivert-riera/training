<template>
  <div>
    <p>
      <h3>{{ $t("SetupTrainings.title") }}</h3>
    </p>
    <v-simple-table v-for="day in $store.state.days" dense>
      <thead>
        <tr>
          <th colspan="3" class="text-capitalize font-weight-black">{{ $t(day) }}</th>
        </tr>
        <tr>
          <th>{{ $t("time") }}</th>
          <th>{{ $t("defender") }}</th>
          <th>{{ $t("attacker") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in $store.state.hours">
          <td>{{ hour }}</td>
          <td>
            <v-select
              :items="getCandidates('defender', day, hour)"
              dense hide-details flat solo
              placeholder="..."
            ></v-select>
            <v-select
              :items="getCandidates('defender', day, hour)"
              dense hide-details flat solo
              placeholder="..."
            ></v-select>
          </td>
          <td>
            <v-select
              :items="getCandidates('attacker', day, hour)"
              dense hide-details flat solo
              placeholder="..."
            ></v-select>
            <v-select
              :items="getCandidates('attacker', day, hour)"
              dense hide-details flat solo
              placeholder="..."
            ></v-select>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
  export default {
    name: 'SetupTrainings',

    methods: {
      getCandidates(position, day, hour) {
        const availablePlayers = this.$store.state.players.filter(player => {
          return player.position === position && player.availability[day].hours.includes(hour)
        });
        
        return availablePlayers.map(player => player.name);
      },
    },

  }
</script>

<style>
.v-data-table tr:hover {
  background: transparent !important;
}
</style>
