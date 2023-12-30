export function getSubtleBgClass(color) {
    switch (color) {
        case 'danger':
            return 'bg-danger-subtle';
        case 'warning':
            return 'bg-warning-subtle';
        case 'primary':
            return 'bg-primary-subtle';
        case 'success':
            return 'bg-success-subtle';
        case 'info':
            return 'bg-info-subtle';
        case 'secondary':
            return 'bg-secondary-subtle';
        case 'light':
            return 'bg-light-subtle';
        case 'dark':
            return 'bg-dark-subtle';  
        default:
            return ''; // Return empty string for unknown colors
    }
}


