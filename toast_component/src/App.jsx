
import './App.css'
import useNotification from './hooks/useNotification'

function App() {
  const {NotificationComponent,triggeredNotification}=useNotification('bottom-left')
  //custom hooks for logic=> useNotification(position)
  return (
    <>
     <div>Toast Component</div>
     <button onClick={()=>triggeredNotification({
      type:'success',
      message:'File sent success',
      duration:2000
     })}>Trigger</button>
     <button onClick={()=>triggeredNotification({
      type:'warning',
      message:'File sent success',
      duration:2000
     })}>Trigger</button>
     <button onClick={()=>triggeredNotification({
      type:'info',
      message:'File sent success',
      duration:2000
     })}>Trigger</button>
     <button onClick={()=>triggeredNotification({
      type:'error',
      message:'File sent success',
      duration:2000
     })}>Trigger</button>
     {NotificationComponent}
   
</>
   
  )
}

export default App
