<template>
  <v-form @submit.prevent="add()">
    <h3 class="mb-3">{{ $t("AddPlayers.title") }}</h3>
    <v-text-field
      v-model="name"
      ref="name"
      :label="$t('name')"
      outlined
      clearable
      hide-details
    ></v-text-field>
    <v-radio-group v-model="position" row>
      <v-radio :label="$t('defender')" value="DEFENDER"></v-radio>
      <v-radio :label="$t('attacker')" value="ATTACKER"></v-radio>
      <v-radio :label="$t('versatile')" value="VERSATILE"></v-radio>
    </v-radio-group>
    <v-text-field
      v-model="level"
      type="number"
      min="0"
      :label="$t('level')"
      value="0"
      class="mb-4"
      outlined
      hide-details
    ></v-text-field>
    <v-btn @click="addPlayer()">{{ $t("add") }}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "AddPlayers",

  data: () => ({
    name: "",
    position: "DEFENDER",
    level: 0,
  }),

  methods: {
    addPlayer() {
      if (this.name) {
        this.$store
          .dispatch("addPlayer", {
            name: this.name,
            position: this.position,
            level: Number(this.level),
          })
          .then(() => {
            this.name = "";
            this.$refs.name.focus();
          });
      }
    },
  },

  mounted() {
    this.$refs.name.focus();
  },
};
</script>
