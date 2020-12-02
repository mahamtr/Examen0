import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'viewTransaccionPorDia'}}
})
export class ViewTransaccionPorDia extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 14,
    mssql: {columnName: 'TRANSACCION', dataType: 'varchar', dataLength: 14, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  transaccion: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'producto', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  producto?: string;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  precio?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  cantidad?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ViewTransaccionPorDia>) {
    super(data);
  }
}

export interface ViewTransaccionPorDiaRelations {
  // describe navigational properties here
}

export type ViewTransaccionPorDiaWithRelations = ViewTransaccionPorDia & ViewTransaccionPorDiaRelations;
