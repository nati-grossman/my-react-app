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

export function getBgClassByLanguage(language) {
    switch (language) {
        case 'C#':
            return 'bg-success';
        case 'JavaScript':
            return 'bg-danger';
        case 'web':
            return 'bg-primary';
        case 'Python':
            return 'bg-warning';
        case 'Java':
            return 'bg-info';
        case 'c':
            return 'bg-secondary';
        default:
            return ''; // Return empty string for unknown colors
    }
}


export function chunkArray(array, size) {
    return array.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  }


  export function getColorCircle(fileId) {
    switch (fileId % 5) {
        case 1:
          return 'green_circle';
        case 2:
          return 'red_circle';
        case 3:
          return 'purple_circle';
        case 4:
          return 'pink_circle';  
        case 0:
          return 'blue_circle';
        default:
          return 'Invalid number';
    }
}

