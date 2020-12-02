import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProductos, OrdenProductosRelations} from '../models';
import {AlexDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProductosRepository extends DefaultCrudRepository<
  OrdenProductos,
  typeof OrdenProductos.prototype.id,
  OrdenProductosRelations
> {
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource,
  ) {
    super(OrdenProductos, dataSource);
  }
}
