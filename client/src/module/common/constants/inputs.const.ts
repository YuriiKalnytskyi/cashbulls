export const passwordError: string[] = [
  'LOWERCASE LETTER',
  'CAPITAL LETTER',
  'SPECIAL CHATACTER',
  '8 CHARACTERS'
];

export const InputsConst: Record<
  'first_name' | 'last_name' | 'email' | 'phone' | 'password' | 'confirm_password',
  {
    name: string;
    label: string;
    placeholder: string;
  }
> = {
  first_name: {
    name: 'first_name',
    label: 'First Name',
    placeholder: 'First Name'
  },
  last_name: {
    name: 'last_name',
    label: 'Last Name',
    placeholder: 'Last Name'
  },
  email: {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Email Address'
  },
  phone: {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Phone'
  },
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Your Password'
  },
  confirm_password: {
    name: 'confirm_password',
    label: 'Confirm Password',
    placeholder: 'Confirm Password'
  }
};
