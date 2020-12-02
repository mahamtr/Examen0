import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'viewVentasPorCategorias'}}
})
export class ViewVentasPorCategorias extends Entity {
  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'ventas', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  ventas?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ViewVentasPorCategorias>) {
    super(data);
  }
}

export interface ViewVentasPorCategoriasRelations {
  // describe navigational properties here
}

export type ViewVentasPorCategoriasWithRelations = ViewVentasPorCategorias & ViewVentasPorCategoriasRelations;
