<template>
    <div>
        <mt-cell is-link class="userProfile" @click.native="handleClickProfile">
            <div slot="icon" class="userProfileDiv">
                <img :src="userAvatar" width="96" height="96">
                <mt-button type="primary" v-show="userId === ''" class="loginButton">登陆</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="账户">
            <span v-show="userId !== ''">已购{{purchasedbookNumber}}本书</span>
            <img slot="icon" src="../assets/100x100.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="书单">
            <span v-show="userId !== ''">{{bookListNumber}} 个</span>
            <img slot="icon" src="../assets/100x100.png" width="24" height="24">
        </mt-cell>
    </div>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import userAvatar from '../assets/userAvatar.jpg';
import myUserAvatar from '../assets/userProfile.png';
import route from '../router'

export default {
  name: 'user',
  data() {
    return {
      purchasedbookNumber: 2,
      bookListNumber: 1
      //userAvatar: userAvatar
    };
  },
  computed: {
    ...mapState({
        userAvatar: state => {
            if (state.userId === ""){
                return userAvatar;
            }
            return myUserAvatar;
        },

        userId: state => state.userId
    })
  },
  methods: {
    handleClickProfile() {
        if (this.userId === ""){
            //go to login
            let path = `/login`;
            route.push(path);
        }
    }
  }
};
</script>

<style>
.userProfile .mint-cell-wrapper {
    text-align: center;
}

.userProfileDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.loginButton {
    margin-top: 1rem;
    width: 50%;
}
</style>

