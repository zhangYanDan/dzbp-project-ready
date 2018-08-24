import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  resolve
} from 'path';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    skin_sign: ''
  },
  getters: {
    getSkinSign: state => {
      return state.skin_sign;
    }
  },
  mutations: {
    saveSkinSigntoSql(state, data) {
      window.db.transaction((tx) => {
        tx.executeSql('SELECT * FROM SKIN WHERE ID=1', [], (tx, res) => {
          if (res.rows.length > 0) {
            window.db.transaction((tx) => {
              tx.executeSql('UPDATE SKIN SET skinobj=? WHERE ID =1', [JSON.stringify(data)]);
              state.skin_sign = data;
            })
          } else {
            window.db.transaction((tx) => {
              tx.executeSql('INSERT INTO SKIN(id,skinobj) VALUES (?,?)', [1, JSON.stringify(data)]);
              state.skin_sign = data;
            })
          }
        })
      })
    },
    querySkinSignBySql(state) {
      window.db.transaction((tx) => {
        tx.executeSql('SELECT * FROM SKIN WHERE ID=1', [], (tx, res) => {
          state.skin_sign = JSON.parse(res.rows[0].skinobj)
        })
      })
    }
  },
  actions: {
    query(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("querySkinSignBySql");
          resolve();
        }, 100)
      })
    },
  }
})
