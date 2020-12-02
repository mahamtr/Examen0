import {DefaultCrudRepository} from '@loopback/repository';
import {Credito, CreditoRelations} from '../models';
import {AlexDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CreditoRepository extends DefaultCrudRepository<
  Credito,
  typeof Credito.prototype.id,
  CreditoRelations
> {
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource,
  ) {
    super(Credito, dataSource);
  }
}
