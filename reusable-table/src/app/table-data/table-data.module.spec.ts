import { TableDataModule } from './table-data.module';

describe('TableDataModule', () => {
  let tableDataModule: TableDataModule;

  beforeEach(() => {
    tableDataModule = new TableDataModule();
  });

  it('should create an instance', () => {
    expect(tableDataModule).toBeTruthy();
  });
});
