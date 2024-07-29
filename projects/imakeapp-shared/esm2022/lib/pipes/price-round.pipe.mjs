import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class PriceRoundPipe {
    transform(value) {
        if (isNaN(value)) {
            return value;
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = (parseFloat(String(value)).toFixed(2));
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, name: "price_round" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "price_round"
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2Utcm91bmQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3BpcGVzL3ByaWNlLXJvdW5kLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBU2hFLE1BQU0sT0FBTyxjQUFjO0lBR3ZCLFNBQVMsQ0FBQyxLQUFhO1FBR25CLElBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNqQjtZQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsc0VBQXNFO1FBQ3RFLElBQUksSUFBc0IsQ0FBQztRQUMzQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFN0MsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQzt1R0FqQlEsY0FBYztxR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUgxQixJQUFJO21CQUFDO29CQUNGLElBQUksRUFBRyxhQUFhO2lCQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cblxuXG5cbkBQaXBlKHtcbiAgICBuYW1lIDogXCJwcmljZV9yb3VuZFwiXG59KVxuZXhwb3J0IGNsYXNzIFByaWNlUm91bmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybVxue1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpIFxuICAgIHtcblxuICAgICAgICBpZiAoIGlzTmFOKHZhbHVlKSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMgaXMgZG9uZSB0byBoYW5kbGUgaWYgJ3ZhbHVlJyBpcyBpbnRlZ2VyIC0+IHRvRml4ZWQgdGhyb3cgZXJyb3JcbiAgICAgICAgbGV0IHRlbXAgOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgICAgIHRlbXAgPSAocGFyc2VGbG9hdChTdHJpbmcodmFsdWUpKS50b0ZpeGVkKDIpKVxuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICBcbiAgICB9XG5cblxufSJdfQ==