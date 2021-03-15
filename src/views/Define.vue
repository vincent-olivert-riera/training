<template>
  <div class="define">
    <AddPlayers />
    <SetAvailability class="mt-3" />
    <StartBtn class="mt-3" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddPlayers from "@/components/AddPlayers.vue";
import SetAvailability from "@/components/SetAvailability.vue";
import StartBtn from "@/components/StartBtn.vue";

export default {
  name: "Define",
  components: {
    AddPlayers,
    SetAvailability,
    StartBtn,
  },
};
</script>
