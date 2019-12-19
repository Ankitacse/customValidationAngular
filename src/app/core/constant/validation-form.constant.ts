/**
 * email field validation messages
 */
export const emailValidatorRulesMessage = [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Please Enter a valid email' }
];

/**
 * password field validation messages
 */
export const passwordValidatorRulesMessage = [
    { type: 'required', message: 'Password is required' }
];

/**
 * signup form validation messages
 */
export const signUpformValidationMessages = {
    jobTitle: [
        { type: 'required', message: 'Job title is required' }
    ],
    email: emailValidatorRulesMessage,
    userName: [
        { type: 'required', message: 'Username is required' }
    ],
    firstName: [
        { type: 'required', message: 'First name is required' }
    ],
    lastName: [
        { type: 'required', message: 'Last name is required' }
    ],
    password: passwordValidatorRulesMessage,
    confirmPassword: [
        { type: 'required', message: 'Confirm Password is required' },
        { type: 'matchValidator', message: 'Confirm password not matched' }
    ],
    recoveryPIN: [
        { type: 'required', message: 'Recovery PIN is required' },
        { type: 'minlength', message: 'Recovery PIN minimum 4 digit' },
        { type: 'maxlength', message: 'Recovery PIN maximum 5 digit' }
    ],
    confirmRecoveryPIN: [
        { type: 'required', message: 'Confirm Recovery PIN is required' },
        { type: 'minlength', message: 'Recovery PIN minimum 4 digit' },
        { type: 'maxlength', message: 'Recovery PIN maximum 5 digit' },
        { type: 'matchValidator', message: 'Recovery PIN not matched' }
    ]
};

/**
 * login form validation messages
 */
export const loginFormValidationMessages = {
    userName: [
        { type: 'required', message: 'Username is required' }
    ],
    password: passwordValidatorRulesMessage
};
