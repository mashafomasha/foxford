import * as React from 'react';
import cn from 'classnames';

type BaseRowProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
> & {
    children: React.ReactNode;
    className?: string;
};

export const BaseRow = React.memo(
    ({ children, className, ...trProps }: BaseRowProps) => (
        <tr className={cn('table__row', className)} {...trProps}>
            {children}
        </tr>
    ),
);
