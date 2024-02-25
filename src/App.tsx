import Alert from './Components/ui/Alert/Alert';
import { Bell, Ban, Info, CheckCheck, AlertTriangle } from 'lucide-react';


function App () {

  return (
    <div style={ { margin: "2rem" } }>
      <Alert type='alert-default' title='upgrade your plan' icon={ <Bell size={ 20 } /> }>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci, quod odit veritatis dignissimos sit recusandae deserunt nihil! Consequuntur adipisci eos commodi, aut modi quia! <a href="#">Lorem ipsum </a> dolor sit amet.
        </p>
      </Alert>
      <Alert type='alert-info' title='Note' icon={ <Info size={ 20 } /> } desc={ 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci, quod odit veritatis dignissimos sit recusandae deserunt nihil! Consequuntur adipisci eos commodi, aut modi quia!' } />
      <Alert type='alert-success' title='your order has been processed' icon={ <CheckCheck size={ 20 } /> } desc={ 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci, quod odit veritatis dignissimos sit recusandae deserunt nihil! Consequuntur adipisci eos commodi, aut modi quia!' } />
      <Alert type='alert-error' title='something went wrong' icon={ <Ban size={ 20 } /> } desc={ 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci, quod odit veritatis dignissimos sit recusandae deserunt nihil! Consequuntur adipisci eos commodi, aut modi quia!' } />
      <Alert type='alert-warning' title='tips & tricks' icon={ <AlertTriangle size={ 20 } /> } desc={ 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci, quod odit veritatis dignissimos sit recusandae deserunt nihil! Consequuntur adipisci eos commodi, aut modi quia!' } />
    </div>
  );
}

export default App;
