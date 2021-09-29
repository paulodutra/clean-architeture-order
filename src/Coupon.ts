export default class Coupon {

    constructor (readonly code: string, readonly percentage: number, readonly dateValidity: Date) {
    }

    validateCoupon(){
        const currentDate = new Date();
        if(this.dateValidity < currentDate){
            return false;
        }
        return true;
    }
}
