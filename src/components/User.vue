<template>
    <div>
        <mt-cell is-link class="userProfile">
            <img slot="icon" src="../assets/userProfile.png" width="96" height="96">
        </mt-cell>
        <mt-cell title="账户">
            <span>已购{{purchasedbookNumber}}本书</span>
            <img slot="icon" src="../assets/100x100.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="书单">
            <span>{{bookListNumber}} 个</span>
            <img slot="icon" src="../assets/100x100.png" width="24" height="24">
        </mt-cell>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'user',
  data() {
    return {
      purchasedbookNumber: 2,
      bookListNumber: 1,
    };
  },
};
</script>

<style>
.userProfile .mint-cell-wrapper{
  text-align: center;
}
</style>

