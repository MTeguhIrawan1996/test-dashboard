'use client';

import { DataTable, DataTableProps } from 'mantine-datatable';
import * as React from 'react';

interface ICommonDataTableProps<T> {
  tableProps: DataTableProps<T>;
}

export function CommonDataTable<T>({ tableProps }: ICommonDataTableProps<T>) {
  return (
    <DataTable
      minHeight={tableProps.records && tableProps.records?.length > 0 ? 0 : 300}
      withRowBorders
      highlightOnHover
      verticalSpacing='md'
      defaultColumnProps={{
        textAlign: 'left',
        noWrap: true,
        ellipsis: true,
        titleStyle: (theme) => ({ color: theme.colors.gray[6] }),
        ...tableProps.defaultColumnProps,
      }}
      defaultColumnRender={(row, _, accessor) => {
        const data = row[accessor as keyof typeof row] as React.ReactNode;
        return data || '-';
      }}
      {...tableProps}
    />
  );
}
