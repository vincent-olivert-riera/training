<template>
  <div class="trainings">
    <TrainingWeek />
  </div>
</template>

<script>
// @ is an alias to /src
import TrainingWeek from "@/components/TrainingWeek.vue";

export default {
  name: "Trainings",
  components: {
    TrainingWeek,
  },
};
</script>
