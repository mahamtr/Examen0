// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {AlexDataSourceDataSource} from '../datasources/alex-data-source.datasource';
import {ClasificarProveedores, ViewCuentaPersonal, ViewEstadoClientesDeuda, ViewProductosConPrecioPorProveedor, ViewProductosPrecio30, ViewTransaccionPorDia, ViewVentasPorCategorias} from '../models';

// import {inject} from '@loopback/core';


export class ViewsController {
  private dataSource : any;
  constructor(
    @inject('datasources.alexDataSource') dataSource: AlexDataSourceDataSource
  ) {
    this.dataSource = dataSource;
  }

  @get('/view/ViewTransaccionPorDia', {
    responses: {
      '200': {
        description: 'ViewTransaccionPorDia model count',
        content: {'application/json': {schema: ViewTransaccionPorDia}},
      },
    },
  })
  async transaccionesPorDia(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewTransaccionPorDia');
  }

  @get('/view/ViewEstadoClientesDeuda', {
    responses: {
      '200': {
        description: 'ViewEstadoClientesDeuda model count',
        content: {'application/json': {schema: ViewEstadoClientesDeuda}},
      },
    },
  })
  async ViewEstadoClientesDeuda(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewEstadoClientesDeuda');
  }

  @get('/view/ViewCuentaPersonal', {
    responses: {
      '200': {
        description: 'ViewCuentaPersonal model count',
        content: {'application/json': {schema: ViewCuentaPersonal}},
      },
    },
  })
  async ViewCuentaPersonal(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewCuentaPersonal');
  }

  @get('/view/ViewProductosPrecio30', {
    responses: {
      '200': {
        description: 'ViewProductosPrecio30 model count',
        content: {'application/json': {schema: ViewProductosPrecio30}},
      },
    },
  })
  async ViewProductosPrecio30(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewProductosPrecio30');
  }

  @get('/view/viewProductosConPrecioPorProveedor', {
    responses: {
      '200': {
        description: 'viewProductosConPrecioPorProveedor model count',
        content: {'application/json': {schema: ViewProductosConPrecioPorProveedor}},
      },
    },
  })
  async viewProductosConPrecioPorProveedor(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewProductosConPrecioPorProveedor');
  }


  @get('/view/viewVentasPorCategorias', {
    responses: {
      '200': {
        description: 'viewVentasPorCategorias model count',
        content: {'application/json': {schema: ViewVentasPorCategorias}},
      },
    },
  })
  async viewVentasPorCategorias(
  ): Promise<any> {
     return await this.dataSource.execute('select * from viewVentasPorCategorias');
  }

  @get('/view/ClasificarProveedoresSP/{FI}/{FF}', {
    responses: {
      '200': {
        description: 'ObtenerVentasPorCategorias model count',
        content: {'application/json': {schema: ClasificarProveedores}},
      },
    },
  })
  async ClasificarProveedoresSP(
    @param.path.string('FI') FI: string,
    @param.path.string('FF') FF: string,
  ): Promise<any> {
     return await this.dataSource.execute(`exec clasificarProveedores @fechaInicio = '${FI}',		@fechaFinal = '${FF}'`);
  }



}
