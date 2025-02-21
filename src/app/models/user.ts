export interface User {
  email: string;
  password: string;
  role: 'universidad' | 'hospital' | 'estudiante' | '';
}
