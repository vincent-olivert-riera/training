<template>
  <v-form @submit.prevent="add()">
    <p>
      <h3>{{ $t("AddPlayers.title") }}</h3>
    </p>
    <v-text-field
      v-model="name"
      :placeholder="$t('AddPlayers.placeholder')"
      outlined
      clearable
      hide-details
    ></v-text-field>
    <v-radio-group v-model="position">
      <v-radio :label="$t('defender')" value="defender"></v-radio>
      <v-radio :label="$t('attacker')" value="attacker"></v-radio>
    </v-radio-group>
    <v-btn @click="add()">{{ $t("add") }}</v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'AddPlayers',

    data: () => ({
      name: "",
      position: "defender",
    }),

    methods: {
      add() {
        if (!!this.name) {
          const player = {
            name: this.name,
            position: this.position,
            availability: {},
          };
          this.$store.state.days.forEach(day => {
              player.availability[day] = {
                hours: [...this.$store.state.hours]
              };
          });
          this.$store.state.players.push(player);
          this.name = "";
        }
      },
    },
  }
</script>
