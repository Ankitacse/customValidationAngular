import { trigger, transition, animate, keyframes, style, query, stagger } from '@angular/animations';

export const slideInUp =
    trigger('slideInUp', [
        transition('* <=> *',
            animate('200ms ease-in', keyframes([
                style({ opacity: 0, transform: 'translate3d(0, 5%, 0)', offset: 0 }),
                style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        )
    ]);

export const fadeIn =
    trigger('fadeIn', [
        transition('* <=> *',
            animate(1000, keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 1, offset: 1 })
            ]))
        )
    ]);

export const listAnimation =
    trigger('listAnimation', [
        transition('* => *', [ // each time the binding value changes
            query(':enter', [
              style({ opacity: 0 }),
              stagger(200, [
                animate('0.5s', style({ opacity: 1 }))
              ])
            ], { optional: true })
          ])
    ]);
