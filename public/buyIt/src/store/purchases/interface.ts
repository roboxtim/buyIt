export interface IStatePurchases {
    status: string,
    purchases: Array<Purchase>
}

interface Purchase {
    _id: string,
    name: string;
    user_id: string
}