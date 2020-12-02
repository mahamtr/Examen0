import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'viewEstadoClientesDeuda'}}
})
export class ViewEstadoClientesDeuda extends Entity {
  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'limiteCredito', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  limiteCredito?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'FECHADEPAGO', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechadepago?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'ventaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  ventaId?: number;

  @property({
    type: 'string',
    length: 27,
    mssql: {columnName: 'ALERTA', dataType: 'varchar', dataLength: 27, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  alerta?: string;

  @property({
    type: 'string',
    required: true,
    length: 17,
    mssql: {columnName: 'TIPO_PAGADOR', dataType: 'varchar', dataLength: 17, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tipoPagador: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ViewEstadoClientesDeuda>) {
    super(data);
  }
}

export interface ViewEstadoClientesDeudaRelations {
  // describe navigational properties here
}

export type ViewEstadoClientesDeudaWithRelations = ViewEstadoClientesDeuda & ViewEstadoClientesDeudaRelations;
