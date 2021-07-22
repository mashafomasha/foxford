import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PageHeader, Result, Button, Spin, Typography } from 'antd';

import { State } from 'store/state';
import {
    employeesLoadingSelector,
    employeesErrorSelector,
} from 'store/selectors/employees';
import { fetchEmployees } from 'store/slices/employees';

import { Table } from 'components/Table';

import './styles.css';

type PageStateProps = {
    loading: boolean;
    error: boolean;
};
type PageDispatchProps = typeof mapDispatchToProps;
type PageProps = PageStateProps & PageDispatchProps;

const { Text } = Typography;

const PageComponent = ({ loading, error, getData }: PageProps) => {
    React.useEffect(() => {
        getData();
    }, [getData]);

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
                {loading && (
                    <div className="page__loading">
                        <div className="page__message">
                            <Text>Данные загружаются</Text>
                            <br />
                            <Text type="secondary">
                                Пожалуйста сохраняйте спокойствие (ᵔᴥᵔ)
                            </Text>
                        </div>
                        <Spin />
                    </div>
                )}
                {!loading && !error && <Table />}
            </section>
        </main>
    );
};

const mapStateToProps = createStructuredSelector<State, PageStateProps>({
    loading: employeesLoadingSelector,
    error: employeesErrorSelector,
});
const mapDispatchToProps = {
    getData: fetchEmployees,
};

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent);
