import {IPurchase} from './model';
import purchase from './schema';

export default class PurchaseService {

    public createPurchase(purchase_params: IPurchase, callback: any) {
        const _session = new purchase(purchase_params);
        _session.save(callback);
    }

    public getPurchase(query: any, callback: any) {
        purchase.find(query, callback);
    }

    public updatePurchase(query: any, replace: any, callback: any) {
        purchase.updateOne(query, replace, callback);
    }

    public deletePurchase(query : any, callback : any) {
        purchase.deleteOne(query, callback);
    }

}