import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {AlexDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.id,
  InventarioRelations
> {
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
