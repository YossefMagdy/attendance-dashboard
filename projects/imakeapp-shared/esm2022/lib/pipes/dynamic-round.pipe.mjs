import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class DynamicRoundPipe {
    transform(value, ...args) {
        if (isNaN(value)) {
            return value;
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = (parseFloat(String(value)).toFixed(args[0]));
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, name: "dynamic_round" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "dynamic_round"
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yb3VuZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW1ha2VhcHAtc2hhcmVkL3NyYy9saWIvcGlwZXMvZHluYW1pYy1yb3VuZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQVNoRSxNQUFNLE9BQU8sZ0JBQWdCO0lBR3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsR0FBRyxJQUFXO1FBR25DLElBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNqQjtZQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsc0VBQXNFO1FBQ3RFLElBQUksSUFBc0IsQ0FBQztRQUMzQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFbkQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQzt1R0FqQlEsZ0JBQWdCO3FHQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSDVCLElBQUk7bUJBQUM7b0JBQ0YsSUFBSSxFQUFHLGVBQWU7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuXG5cblxuQFBpcGUoe1xuICAgIG5hbWUgOiBcImR5bmFtaWNfcm91bmRcIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljUm91bmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybVxue1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSBcbiAgICB7XG5cbiAgICAgICAgaWYgKCBpc05hTih2YWx1ZSkgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIGlzIGRvbmUgdG8gaGFuZGxlIGlmICd2YWx1ZScgaXMgaW50ZWdlciAtPiB0b0ZpeGVkIHRocm93IGVycm9yXG4gICAgICAgIGxldCB0ZW1wIDogbnVtYmVyIHwgc3RyaW5nO1xuICAgICAgICB0ZW1wID0gKHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZChhcmdzWzBdKSlcblxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgXG4gICAgfVxuXG5cbn0iXX0=