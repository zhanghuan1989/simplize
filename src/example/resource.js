import * as coresBrowser from './cores';

export let cores = {
    inject: {
        icon: '<i class="fa fa-home"></i>',
        text: 'HOME',
        url: '/',
        order: 1
    },
    webviews: coresBrowser
    // webviews: {
    //     index: coresBrowser.index,
    //     modals: coresBrowser.modals,
    //     buttons: coresBrowser.buttons,
    //     components: coresBrowser.components,
    //     alert: coresBrowser.alert,
    //     confirm: coresBrowser.confirm,
    //     prompt: coresBrowser.prompt,
    //     loading: coresBrowser.loading,
    //     toast: coresBrowser.toast,
    //     actionsheet: coresBrowser.actionsheet,
    //     tip: coresBrowser.tip,
    //     cell: coresBrowser.cell,
    //     selector: coresBrowser.selector,
    //     datetime: coresBrowser.datetime,
    //     pxborder:coresBrowser.pxborder,
    //     popover: coresBrowser.popover,
    //     popup: coresBrowser.popup
    // }
}
