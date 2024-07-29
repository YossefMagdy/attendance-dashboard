import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class ArrayFromAmountPipe {
    transform(value) {
        if (isNaN(value)) {
            return [1];
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = Array(value).fill(undefined).map((number, index) => ++index);
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, name: "array_from_amount" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "array_from_amount"
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlfZnJvbV9hbW91bnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3BpcGVzL2FycmF5X2Zyb21fYW1vdW50LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBU2hFLE1BQU0sT0FBTyxtQkFBbUI7SUFHNUIsU0FBUyxDQUFDLEtBQWE7UUFHbkIsSUFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ2pCO1lBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFFRCxzRUFBc0U7UUFDdEUsSUFBSSxJQUFlLENBQUM7UUFFcEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUUsQ0FBQztRQUVwRSxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO3VHQWxCUSxtQkFBbUI7cUdBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFIL0IsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUcsbUJBQW1CO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cblxuXG5cbkBQaXBlKHtcbiAgICBuYW1lIDogXCJhcnJheV9mcm9tX2Ftb3VudFwiXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5RnJvbUFtb3VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcikgXG4gICAge1xuXG4gICAgICAgIGlmICggaXNOYU4odmFsdWUpIClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMgaXMgZG9uZSB0byBoYW5kbGUgaWYgJ3ZhbHVlJyBpcyBpbnRlZ2VyIC0+IHRvRml4ZWQgdGhyb3cgZXJyb3JcbiAgICAgICAgbGV0IHRlbXAgOiBudW1iZXJbXTtcblxuICAgICAgICB0ZW1wID0gQXJyYXkodmFsdWUpLmZpbGwodW5kZWZpbmVkKS5tYXAoIChudW1iZXIsaW5kZXgpPT4gKytpbmRleCApO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICBcbiAgICB9XG5cblxufSJdfQ==