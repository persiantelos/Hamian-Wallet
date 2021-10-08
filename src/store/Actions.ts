export default class Actions {
    // some actions here
    getBlockChain(context:any, data:any) {
        context.commit("getBlockChain", data);
    }
};