
import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment'

@Pipe({
    name: 'moment',
    pure: false // для того щоб ангуляр коли баче якісь зміни перерисовував шаблон
})
export class MomentPipe implements PipeTransform{

    transform(m: moment.Moment, format: string ='MMMM YYYY'): any{
        return m.format(format)
    }
}