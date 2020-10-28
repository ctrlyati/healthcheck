<template>
  <div id="login-ui" class="shadow-lg p-3 mb-5 bg-white rounded">
    <h2>Login</h2>
    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
      </g-signin-button>
  </div>
</template>

<script>
// import { store } from '../store/user-store'
// import { firebase, auth } from '../fb/firebase'
// import GSignInButton from 'vue-google-signin-button'

export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  computed: {
    
  },
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object} 
       */
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_WEB_CLIENT_ID
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile)
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  },
  mounted() {
    
  }
}
</script>


<style lang="scss" scoped>
.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
