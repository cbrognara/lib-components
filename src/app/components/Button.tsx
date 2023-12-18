import { classNames } from './classNames'

interface ButtonProps {
    className: string;
    children: React.ReactNode;
    roundedLg: boolean;
    variant: string;
}

export function Button({className, children, roundedLg, variant, ...props}: ButtonProps) {
    return (
        <button className={classNames(
            'color:white px-4 py-2 font-light cursor-pointer select-none [outline:none] disabled:cursor-not-allowed disabled:opacity-50 flex justify-between items-center w-auto gap-2', roundedLg ? 'rounded-lg' : '', 
            variant === 'primary' ? 'bg-blue-700 text-white hover:bg-blue-900' : '',
            variant === 'secondary' ? 'bg-green-700 text-white hover:bg-green-900' : '',
            variant === 'tertiary' ? 'bg-transparent text-blue-800 hover:bg-blue-100 border border-blue-800' : '',
            variant === 'ghost' ? 'bg-transparent text-blue-800 hover:bg-blue-100 hover:border-zinc-50 hover:border-color-blue-800' : '',
            variant === 'danger' ? 'bg-red-700 text-white hover:bg-red-900' : '',
            className)} 
            {...props}
            >
                {children}
                </button>
    )
}