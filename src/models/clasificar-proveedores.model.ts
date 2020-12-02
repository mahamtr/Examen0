import {Model, model, property} from '@loopback/repository';

@model()
export class ClasificarProveedores extends Model {
  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'number',
  })
  ordenes?: number;

  @property({
    type: 'number',
  })
  ventas?: number;


  constructor(data?: Partial<ClasificarProveedores>) {
    super(data);
  }
}

export interface ClasificarProveedoresRelations {
  // describe navigational properties here
}

export type ClasificarProveedoresWithRelations = ClasificarProveedores & ClasificarProveedoresRelations;
