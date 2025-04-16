export * from './interfaces';
export * from './models/form.model';
export * from './utils/validator';

export { default as FormModel } from './models/form.model';
export { default as ValidatorUtils } from './utils/validator';

import DymikForm from './components/DymikForm.vue';


export default {
    DymikForm,
    install(app: any) {
        app.component('DymikForm', DymikForm);
    },
};