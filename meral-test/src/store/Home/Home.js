
export default {
  state: {
    account_user: [],
    users_info: []
  },
  actions: {

    getUsers: async function(context) {

       let user = [{
         id: 1,
         title: 'Hellow',
         name: "Petro",
         show: false,
         dron: false,
         icon: require("@/assets/Down.png"),
         user_icon: require("@/assets/user_icon.png")
       }]
       context.commit("updateUser", user);
     },

     getInfoUsers: async function(context) {

       let user_info_slider = [{
         id: 1,
         title: 'the rubin report',
         under_title: 'Get exclusive content.Interact with Dave',
         user_img: require("@/assets/Person1.png"),
       },
       {
         id: 2,
         title: 'ngo - go zone',
         under_title: 'Get exclusive contentInteract with Andy',
         user_img: require("@/assets/Person2.png"),
       },
       {
         id: 3,
         title: 'Bridget Phetasy',
         under_title: 'Get exclusive content Interact with Bridget',
         user_img: require("@/assets/Person3.png"),
       },
       {
         id: 4,
         title: 'Micheal Malice',
         under_title: 'Get exclusive content Interact with Micheal',
         user_img: require("@/assets/Person4.png"),
       },
       {
         id: 5,
         title: 'Convention of States',
         under_title: 'Get exclusive content Interact with Mark',
         user_img: require("@/assets/Person5.png"),
       },

     ]

    context.commit("showInfoUser", user_info_slider);
   }


  },
  mutations: {

    updateUser(state, user) {
      state.account_user = user;
    },

    showUser(state, currency) {
      state.account_user[0].show = currency;
    },

    showFooterTitle(state, currency) {
      state.account_user[0].dron = currency;
    },

    showInfoUser(state, users) {
      state.users_info = users;


    }

  },
   getters: {

     pullState(state) {
      return state.account_user;

    },
     pullInfoUsers(state) {

      return state.users_info;

    }

   }
}
