/// =-=- BATCH OS APP CREATOR API TUTORIAL -=-=

/// 1. Notification fucntion

function notify(title, subtitle) {
    window.parent.postMessage({
        type: 'BATCHOS_API',
        action: 'SHOW_NOTIFY',
        data: {
            notif_title: title,
            notif_subtitle: subtitle
        }
    }, '*');
}