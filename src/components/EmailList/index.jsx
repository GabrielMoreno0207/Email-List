import emails from "../../email.json"
import EmailListItem from "./EmailListItem"


const EmailList = ({ setOpenEmail }) => {

  return (
    <div className="relative overflow-y-scroll grow-[1]">
     {emails.map(email => (
        <EmailListItem 
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
          
     ))}
     
    </div>
  )
}

export default EmailList