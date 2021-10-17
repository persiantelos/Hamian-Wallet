export default {
    getBlockChains(context,data){
        context.commit('getBlockChains', data);
    },
}