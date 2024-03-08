export class UserModel {
  nombre: string;
  email: string;
  role: string;
  google: boolean;
  uid: string;
  token: string;
  nit?:string
  nameEmpresa?:string


  constructor(model: any) {
    this.nombre = model.nombre || '';
    this.nameEmpresa = model.nameEmpresa || '';
    this.nit = model.nit || '';
    this.email = model.email || '';
    this.role = model.role || 'USER_ROLE';
    this.google = !!model.google;
    this.uid = model.uid || '';
    this.token = model.token || '';
  }
}
