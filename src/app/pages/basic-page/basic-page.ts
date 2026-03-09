import { DatePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  nameLower = signal('fernando')
  nameUpper = signal('FERNANDO')
  fullName = signal('feRnaNdo ApAriCiO')

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const internal = setInterval(()=>{
      this.customDate.set(new Date())
    }, 1000);

    onCleanup(()=>{
      clearInterval(internal);
    })
  })
}
