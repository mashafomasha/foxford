import * as React from 'react';
import cn from 'classnames';

type BaseCellProps = React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
> & {
    children: React.ReactNode;
    className?: string;
};

export const BaseCell = React.memo(
    ({ children, className, ...tdProps }: BaseCellProps) => (
        <td className={cn('table__cell', className)} {...tdProps}>
            {children}
        </td>
    ),
);
