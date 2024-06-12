(function () {

    'use strict';

    if (typeof window.Cookies !== 'undefined') {
        const cookieconsent = document.querySelector('.cookieconsent');

        if (window.Cookies.get('cookieconsent') === undefined && cookieconsent) {
            cookieconsent.classList.add('js-cookieconsent-open');
        }

        const cookie_buttons = Array.prototype.slice.call(
            document.querySelectorAll('button[data-consent]')
        );
        const sitedomain = window.location.hostname.split('.').slice(-2);
        const cookiedomain = sitedomain.join('.');
        let cookie_options = [];
        cookie_options['domain'] = cookiedomain;
        cookie_options['sameSite'] = 'strict';
        cookie_options['expires'] = 365;
