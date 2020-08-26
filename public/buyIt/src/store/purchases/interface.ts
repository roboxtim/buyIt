export interface IStatePurchases {
    status: string,
    page: number,
    purchasesNum: number,
    purchases: Array<Purchase>
}

interface Purchase {
    _id: string,
    name: string;
    user_id: string
}