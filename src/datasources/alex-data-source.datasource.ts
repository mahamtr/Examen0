import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'alexDataSource',
  connector: 'mssql',
  url: '',
  host: 'Examen1.mssql.somee.com',
  port: 1433,
  user: 'agarcia14_SQLLogin_1',
  password: 'rcjtu16k1g',
  database: 'Examen1'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AlexDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'alexDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.alexDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
