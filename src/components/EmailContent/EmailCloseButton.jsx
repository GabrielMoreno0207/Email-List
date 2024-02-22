import { FiX } from "react-icons/fi";


const EmailCloseButton = ({ onClick }) => (
  <button
    className="
    absolute top-2 right-2 px-2 pb-1 rounded
    bg-green-300 hover:bg-green-400
    dark:bg-green-500 dark:hover:bg-green-600
    transition-colors"
    onClick={onClick}
  >
    <FiX className="inline sm:mr-1 mb-[1px]" />
    <span className="hidden sm:inline">Fechar</span>
  </button>
)

export default EmailCloseButton