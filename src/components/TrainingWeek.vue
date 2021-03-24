<template>
  <div>
    <div v-if="loading">
      <v-layout align-center justify-center column fill-height>
        <div class="text-center">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
      </v-layout>
    </div>
    <div v-else>
      <h3 class="mb-3">{{ $t("TrainingWeek.title") }}</h3>
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
                item-text="name"
                item-value="id"
                v-model="trainingWeek[day][convertHour(hour)]['defender_1']"
                dense
                hide-details
                flat
                solo
                clearable
                placeholder="..."
                @input="save"
              ></v-select>
              <v-select
                :items="getCandidates('defender', day, hour)"
                item-text="name"
                item-value="id"
                v-model="trainingWeek[day][convertHour(hour)]['defender_2']"
                dense
                hide-details
                flat
                solo
                clearable
                placeholder="..."
                @input="save"
              ></v-select>
            </td>
            <td>
              <v-select
                :items="getCandidates('attacker', day, hour)"
                item-text="name"
                item-value="id"
                v-model="trainingWeek[day][convertHour(hour)]['attacker_1']"
                dense
                hide-details
                flat
                solo
                clearable
                placeholder="..."
                @input="save"
              ></v-select>
              <v-select
                :items="getCandidates('attacker', day, hour)"
                item-text="name"
                item-value="id"
                v-model="trainingWeek[day][convertHour(hour)]['attacker_2']"
                dense
                hide-details
                flat
                solo
                clearable
                placeholder="..."
                @input="save"
              ></v-select>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gql from "graphql-tag";
import { apolloClient } from "../apollo";

export default {
  name: "TrainingWeek",

  data: () => ({
    trainingWeek: undefined,
    loadingPlayers: true,
    loadingTrainingWeek: true,
  }),

  computed: {
    ...mapState(["players"]),
    loading() {
      return this.loadingPlayers || this.loadingTrainingWeek;
    },
  },

  methods: {
    getCandidates(position, day, hour) {
      return this.players.filter(player => {
        return (
          (player.position.toLowerCase() === position ||
            player.position.toLowerCase() === "versatile") &&
          player.availability[day].includes(hour)
        );
      });
    },

    convertHour(hour) {
      return `_${hour.replace(":", "")}`;
    },

    getNextMonday() {
      const shifts = [1, 0, 6, 5, 4, 3, 2];
      const d = new Date();
      const diff = d.getDate() + shifts[d.getDay()];
      return new Date(d.setDate(diff)).toISOString().slice(0, 10);
    },

    save() {
      if (this.trainingWeek.id) {
        this.updateTrainingWeek();
      } else {
        this.addTrainingWeek();
      }
    },

    getTrainingWeekByDate: async date => {
      const resp = await apolloClient.query({
        query: gql`
          query($date: Date!) {
            trainingWeekByDate(date: $date) {
              id
              date
              monday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              tuesday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              wednesday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              thursday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              friday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              saturday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
              sunday {
                _1800 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1830 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1900 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _1930 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2000 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2030 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
                _2100 {
                  defender_1 {
                    id
                  }
                  defender_2 {
                    id
                  }
                  attacker_1 {
                    id
                  }
                  attacker_2 {
                    id
                  }
                }
              }
            }
          }
        `,
        variables: { date: date },
      });

      return resp.data.trainingWeekByDate;
    },

    addTrainingWeek() {
      apolloClient
        .mutate({
          mutation: gql`
            mutation(
              $date: Date!
              $monday: TrainingWeekHoursInput
              $tuesday: TrainingWeekHoursInput
              $wednesday: TrainingWeekHoursInput
              $thursday: TrainingWeekHoursInput
              $friday: TrainingWeekHoursInput
              $saturday: TrainingWeekHoursInput
              $sunday: TrainingWeekHoursInput
            ) {
              addTrainingWeek(
                date: $date
                monday: $monday
                tuesday: $tuesday
                wednesday: $wednesday
                thursday: $thursday
                friday: $friday
                saturday: $saturday
                sunday: $sunday
              ) {
                id
              }
            }
          `,
          variables: this.trainingWeek,
        })
        .then(resp => {
          console.log(resp.data.addTrainingWeek);
        });
    },

    updateTrainingWeek() {
      apolloClient
        .mutate({
          mutation: gql`
            mutation(
              $id: ID!
              $monday: TrainingWeekHoursInput
              $tuesday: TrainingWeekHoursInput
              $wednesday: TrainingWeekHoursInput
              $thursday: TrainingWeekHoursInput
              $friday: TrainingWeekHoursInput
              $saturday: TrainingWeekHoursInput
              $sunday: TrainingWeekHoursInput
            ) {
              updateTrainingWeek(
                id: $id
                monday: $monday
                tuesday: $tuesday
                wednesday: $wednesday
                thursday: $thursday
                friday: $friday
                saturday: $saturday
                sunday: $sunday
              ) {
                id
              }
            }
          `,
          variables: this.trainingWeek,
        })
        .then(resp => {
          console.log(resp.data.addTrainingWeek);
        });
    },

    removeTypenameProps(obj) {
      for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (typeof obj[prop] === "object") {
            this.removeTypenameProps(obj[prop]);
          } else {
            if (prop === "__typename") {
              delete obj[prop];
            }
          }
        }
      }
    },

    removePlayerIdProps(obj) {
      const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];

      for (const day in obj) {
        if (!days.includes(day)) {
          continue;
        }
        for (const hour in obj[day]) {
          for (const position in obj[day][hour]) {
            if (!obj[day][hour][position]) {
              continue;
            }
            if (obj[day][hour][position].id) {
              obj[day][hour][position] = obj[day][hour][position].id;
            }
          }
        }
      }
    },
  },

  beforeCreate() {
    this.$store
      .dispatch("fetchPlayers")
      .then(() => (this.loadingPlayers = false));
  },

  async created() {
    const nextMonday = this.getNextMonday();

    // Load an existing training week, if any
    const tw = await this.getTrainingWeekByDate(nextMonday);

    if (tw) {
      this.removeTypenameProps(tw);
      this.removePlayerIdProps(tw);
      this.trainingWeek = tw;
    } else {
      // Initialise an empty training object
      this.trainingWeek = { date: nextMonday };
      this.$store.state.days.forEach(day => {
        this.trainingWeek[day] = {};
        this.$store.state.hours.forEach(hour => {
          this.trainingWeek[day][this.convertHour(hour)] = {
            defender_1: undefined,
            defender_2: undefined,
            attacker_1: undefined,
            attacker_2: undefined,
          };
        });
      });
    }

    this.loadingTrainingWeek = false;
  },
};
</script>

<style>
.v-data-table tr:hover {
  background: transparent !important;
}
</style>
