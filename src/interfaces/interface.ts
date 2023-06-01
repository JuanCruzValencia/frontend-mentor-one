export interface FormFields {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface ErrorsField {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export interface FormProps {
  initialState: FormFields;
}
