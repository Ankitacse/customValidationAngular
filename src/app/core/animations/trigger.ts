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
            animate(800, keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 1, offset: 1 })
            ]))
        )
    ]);

export const listAnimation =
    trigger('listAnimation', [
        transition('* => *', [
            query(':enter', [
                style({ opacity: 0, transform: 'translate3d(0, 20%, 0)' }),
                stagger(200, [
                    animate('0.2s', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }))
                ])
            ], { optional: true })
        ])
    ]);

export const listAnimationFadeinLeft =
    trigger('listAnimationFadeinLeft', [
        transition('* => *', [
            query(':enter', [
                style({ opacity: 0, transform: 'translate3d(-10%, 0, 0)' }),
                stagger(200, [
                    animate('0.2s', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }))
                ])
            ], { optional: true })
        ])
    ]);
