'use strict';

// M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    const sidenavOptions = {};
    const sidenavElems = document.querySelectorAll('.sidenav');
    const sidenavInstances = M.Sidenav.init(sidenavElems, sidenavOptions);

    const dropdownOptions = {
        constrainWidth: false,
        coverTrigger: false
    };
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    const dropdownInstances = M.Dropdown.init(dropdownElems, dropdownOptions);
});

new Twitch.Embed('live', {
    channel: 'imfauxpseudo',
    height: '100%',
    muted: true,
    parent: ['codepen.io', 'fauxpseudo.com'],
    theme: 'dark',
    width: '100%'
});