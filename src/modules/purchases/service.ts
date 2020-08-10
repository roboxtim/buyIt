import {IPurchases} from './model';
import purchases from './schema';

export default class PurchasesService {

    public createPurchases(purchase_params: IPurchases, callback: any) {
        const _session = new purchases(purchase_params);
        _session.save(callback);
    }

    public getPurchases(query: any, callback: any) {
        purchases.find(query, callback);
    }

    public updatePurchases(query: any, replace: any, callback: any) {
        purchases.updateOne(query, replace, callback);
    }

    public deletePurchases(query : any, callback : any) {
        purchases.deleteOne(query, callback);
    }

}