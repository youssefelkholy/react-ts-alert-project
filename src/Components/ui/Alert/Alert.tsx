import { X } from 'lucide-react';
import './index.scss';
import { ReactNode } from 'react';
import { AlertTypes } from '../../../types';

interface Iprops {
    type: AlertTypes;
    title: string;
    icon: ReactNode;
    desc?: string;
    children?: ReactNode;
}

// eslint-disable-next-line no-empty-pattern
const Alert = ( { type, title, icon, desc, children }: Iprops ) => {
    return (
        <div className={ type }>
            <div className="alert-header">
                <div className="title">
                    { icon }
                    <h4>{ title }</h4>
                </div>
                <X className='close' size={ 20 } />
            </div>
            { children ? children : <p>{ desc }</p> }
        </div>
    );
};

export default Alert;