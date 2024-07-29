import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class AppProductNamePipe {
    constructor() { }
    transform(value, ...args) {
        let product_name = value;
        let new_name = '';
        // check length of name
        let name_size = product_name.length;
        if (name_size < 120) {
            // do nothing
            new_name = product_name;
        }
        else {
            new_name = product_name.slice(0, 120) + "...more";
        }
        return new_name;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, name: "app_product_name_pipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'app_product_name_pipe'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXByb2R1Y3QtbmFtZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW1ha2VhcHAtc2hhcmVkL3NyYy9saWIvcGlwZXMvYXBwLXByb2R1Y3QtbmFtZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQVVwRCxNQUFNLE9BQU8sa0JBQWtCO0lBSTVCLGdCQUNFLENBQUM7SUFFSCxTQUFTLENBQUMsS0FBVSxFQUFFLEdBQUcsSUFBVztRQUdqQyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWxCLHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXBDLElBQUssU0FBUyxHQUFHLEdBQUcsRUFDcEI7WUFDRyxhQUFhO1lBQ2IsUUFBUSxHQUFHLFlBQVksQ0FBQztTQUMxQjthQUVEO1lBQ0csUUFBUSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFLLFNBQVMsQ0FBQztTQUNyRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ25CLENBQUM7dUdBM0JTLGtCQUFrQjtxR0FBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUg5QixJQUFJO21CQUFDO29CQUNILElBQUksRUFBRSx1QkFBdUI7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuXG5cblxuXG5AUGlwZSh7XG4gICBuYW1lOiAnYXBwX3Byb2R1Y3RfbmFtZV9waXBlJyAgIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBQcm9kdWN0TmFtZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG5cblxuICAgY29uc3RydWN0b3IoXG4gICApe31cblxuICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKSBcbiAgIHtcblxuICAgICAgbGV0IHByb2R1Y3RfbmFtZSA9IHZhbHVlO1xuICAgICAgbGV0IG5ld19uYW1lID0gJyc7XG5cbiAgICAgIC8vIGNoZWNrIGxlbmd0aCBvZiBuYW1lXG4gICAgICBsZXQgbmFtZV9zaXplID0gcHJvZHVjdF9uYW1lLmxlbmd0aDtcblxuICAgICAgaWYgKCBuYW1lX3NpemUgPCAxMjAgKVxuICAgICAge1xuICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgbmV3X25hbWUgPSBwcm9kdWN0X25hbWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICBuZXdfbmFtZSA9IHByb2R1Y3RfbmFtZS5zbGljZSgwLDEyMCkgKyAgIFwiLi4ubW9yZVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3X25hbWU7XG4gICB9XG5cblxufSJdfQ==