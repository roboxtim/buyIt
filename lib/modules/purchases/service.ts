import { IPurchases } from './model';
import purchases from './schema';

export default class PurchasesService {

    public createPurchases(purchase_params: IPurchases, callback: any) {
        const _session = new purchases(purchase_params);
        _session.save(callback);
    }

}