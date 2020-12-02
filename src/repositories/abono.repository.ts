import {DefaultCrudRepository} from '@loopback/repository';
import {Abono, AbonoRelations} from '../models';
import {AlexDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbonoRepository extends DefaultCrudRepository<
  Abono,
  typeof Abono.prototype.id,
  AbonoRelations
> {
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource,
  ) {
    super(Abono, dataSource);
  }
}
