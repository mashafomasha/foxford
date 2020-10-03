import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { PageHeader, Table, Result, Button } from 'antd';

import { Employee } from 'types/employee';
import { columns } from './constants';
import { State } from 'store/state';
import {
    employeesOrderSelector,
    employeesByIdSelector,
    employeesLoadingSelector,
    employeesErrorSelector,
} from 'store/selectors/employees';
import { fetchEmployees } from 'store/actions/employees';

type TableRow = Omit<Employee, 'id'> & { key: string };
type TableRowKey = number | string;

type PageStateProps = {
    data: TableRow[];
    loading: boolean;
    error: boolean;
};
type PageDispatchProps = typeof mapDispatchToProps;
type PageProps = PageStateProps & PageDispatchProps;

const getCheckboxProps = (record: TableRow) => ({
    name: record.name,
});

const PageComponent = ({ data, loading, error, getData }: PageProps) => {
    const [selected, setSelected] = React.useState<TableRow[]>([]);

    React.useEffect(() => {
        getData();
    }, [getData]);

    const onChange = React.useCallback(
        (_: TableRowKey[], selectedRows: TableRow[]) => {
            setSelected(selectedRows);
        },
        [setSelected],
    );

    const renderSummary = React.useCallback(
        () =>
            'Пользователи: ' +
            (selected.map(({ name }) => name).join(', ') || '≧☉_☉≦'),
        [selected],
    );

    return (
        <main className="page">
            <PageHeader className="page__header" title="Список сотрудников" />

            <section className="page__table">
                {error && (
                    <Result
                        status="error"
                        title="Мы не смогли загрузить список сотрудников"
                        subTitle="Пожалуйста проверьте своё интернет-соединение"
                        extra={[
                            <Button key="retry" onClick={getData}>
                                Попробовать ещё раз
                            </Button>,
                        ]}
                    ></Result>
                )}

                <Table
                    dataSource={data}
                    columns={columns}
                    rowSelection={{
                        type: 'checkbox',
                        onChange,
                        getCheckboxProps,
                    }}
                    footer={renderSummary}
                    loading={loading}
                    pagination={false}
                    scroll={{ x: 400, y: 600 }}
                />
            </section>
        </main>
    );
};

const mapStateToProps = createStructuredSelector<State, PageStateProps>({
    data: createSelector(
        employeesOrderSelector,
        employeesByIdSelector,
        (order, map) =>
            order.map((id) => {
                const item: TableRow = {
                    ...map[id],
                    key: id,
                };
                return item;
            }),
    ),
    loading: employeesLoadingSelector,
    error: employeesErrorSelector,
});
const mapDispatchToProps = {
    getData: fetchEmployees,
};

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent);
