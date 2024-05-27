function openSecureLink(url) {
    // Open the link in a new tab and use rel="noopener" for security
    var win = window.open(url, '_blank');
    win.rel = 'noopener';
}
