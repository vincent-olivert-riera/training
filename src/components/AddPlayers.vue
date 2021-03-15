<template>
  <v-form @submit.prevent="add()">
    <h3 class="mb-3">{{ $t("AddPlayers.title") }}</h3>
    <v-text-field
      v-model="name"
      ref="name"
      :placeholder="$t('AddPlayers.placeholder')"
      outlined
      clearable
      hide-details
    ></v-text-field>
    <v-radio-group v-model="position" row>
      <v-radio :label="$t('defender')" value="defender"></v-radio>
      <v-radio :label="$t('attacker')" value="attacker"></v-radio>
      <v-radio :label="$t('versatile')" value="versatile"></v-radio>
    </v-radio-group>
    <v-btn @click="add()">{{ $t("add") }}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "AddPlayers",

  data: () => ({
    name: "",
    position: "defender",
  }),

  methods: {
    add() {
      if (this.name) {
        const player = {
          name: this.name,
          position: this.position,
          availability: {},
        };
        this.$store.state.days.forEach(day => {
          player.availability[day] = {
            hours: [...this.$store.state.hours],
          };
        });
        this.$store.state.players.push(player);
        this.name = "";
        this.$refs.name.focus();
      }
    },
  },

  mounted() {
    this.$refs.name.focus();
  },
};
</script>
