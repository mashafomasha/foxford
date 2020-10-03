export type TableColumnType = 'name' | 'surname' | 'age';

export type TableColumn = {
    title: string;
    dataIndex: TableColumnType;
};

export const columns: TableColumn[] = [
    {
        title: 'Имя',
        dataIndex: 'name',
    },
    {
        title: 'Фамилия',
        dataIndex: 'surname',
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
    },
];
