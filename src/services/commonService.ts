import Config from "src/common/config";
import NetworkModel from "src/models/networkModel";
import BaseServices from "./baseServices";

export default class CommonService
{
    static async getNetworks():Promise<NetworkModel[]>
    {
        var dt = await BaseServices.postData(Config.server+'web/getOptions',{table:'networks'});
        return dt.value;
    }
}