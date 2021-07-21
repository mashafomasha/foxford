import * as React from 'react';
import { PageHeader, Result, Spin, Typography } from 'antd';
import { getEmployees } from 'api/employees';

import { Table } from 'components/Table';

import './styles.css';
import { useQuery } from 'react-query';

const { Text } = Typography;

export const Page = () => {
    const { isLoading, isError } = useQuery('employees', getEmployees);

    return (
        <main className="page">
            <PageHeader className="page__header" title="Список сотрудников" />

            <section className="page__table">
                {isError && (
                    <Result
                        status="error"
                        title="Мы не смогли загрузить список сотрудников"
                        subTitle="Пожалуйста проверьте своё интернет-соединение"
                    ></Result>
                )}
                {isLoading && (
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
                {!isLoading && !isError && <Table />}
            </section>
        </main>
    );
};
