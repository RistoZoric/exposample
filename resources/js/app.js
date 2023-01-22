import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import {InertiaProgress} from "@inertiajs/progress";

InertiaProgress.init({
    delay: 100,
    color: '#5ebcde',
    includeCSS: true,
    showSpinner: true,
});

createInertiaApp({
    resolve: name => import(`./pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})
