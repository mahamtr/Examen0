import {DefaultCrudRepository} from '@loopback/repository';
import {Venta, VentaRelations} from '../models';
import {AlexDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.id,
  VentaRelations
> {
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource,
  ) {
    super(Venta, dataSource);
  }
}
