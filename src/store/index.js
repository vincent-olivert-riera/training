import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import { apolloClient } from "../apollo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    days: ["monday", "tuesday", "wednesday", "thursday"],
    hours: ["18:30", "19:30", "20:30"],
    players: [],
  },

  mutations: {
    setPlayers(state, players) {
      state.players = players;
    },

    pushPlayer(state, player) {
      state.players.push(player);
    },

    updatePlayer(state, player) {
      const idx = state.players.findIndex(p => p.id === player.id);
      if (idx > -1) {
        state.players[idx] = { ...player };
      }
    },

    popPlayer(state, id) {
      const idx = state.players.findIndex(player => player.id === id);
      if (idx > -1) {
        state.players.splice(idx, 1);
      }
    },
  },

  actions: {
    async fetchPlayers({ commit }) {
      const resp = await apolloClient.query({
        query: gql`
          query {
            players {
              id
              name
              position
              level
              availability {
                monday
                tuesday
                wednesday
                thursday
                friday
                saturday
                sunday
              }
            }
          }
        `,
      });
      commit("setPlayers", resp.data.players);
    },

    async addPlayer({ commit }, args) {
      const resp = await apolloClient.mutate({
        mutation: gql`
          mutation($name: String!, $position: PositionEnum!, $level: Int!) {
            addPlayer(name: $name, position: $position, level: $level) {
              id
              name
              position
              level
              availability {
                monday
                tuesday
                wednesday
                thursday
                friday
                saturday
                sunday
              }
            }
          }
        `,
        variables: {
          name: args.name,
          position: args.position,
          level: args.level,
        },
      });
      commit("pushPlayer", resp.data.addPlayer);
    },

    async updateAvailability({ commit }, args) {
      const resp = await apolloClient.mutate({
        mutation: gql`
          mutation($id: ID!, $availability: AvailabilityInput!) {
            updatePlayer(id: $id, availability: $availability) {
              id
              name
              position
              level
              availability {
                monday
                tuesday
                wednesday
                thursday
                friday
                saturday
                sunday
              }
            }
          }
        `,
        variables: {
          id: args.id,
          availability: args.availability,
        },
      });
      commit("updatePlayer", resp.data.updatePlayer);
    },

    async deletePlayer({ commit }, id) {
      const resp = await apolloClient.mutate({
        mutation: gql`
          mutation($id: ID!) {
            deletePlayer(id: $id) {
              id
            }
          }
        `,
        variables: {
          id: id,
        },
      });
      commit("popPlayer", resp.data.deletePlayer.id);
    },
  },

  modules: {},
});
