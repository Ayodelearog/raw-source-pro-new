import type React from "react"

interface MainButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

const MainButton: React.FC<MainButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-[44px] py-[28px] 
        text-[20px] leading-6 font-[600] font-sans 
        text-white shadow-sm
        bg-transparent bg-gradient-to-r from-rsp-blue to-rsp-green hover:bg-rsp-green
        transition-colors duration-300 ease-in-out
        relative overflow-hidden group
        ${className}
      `}
    >
      <span className="relative z-10">{label}</span>
      <div
        className="
        absolute inset-0 bg-rsp-blue
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-300 ease-in-out
        origin-left
      "
      ></div>
    </button>
  )
}

export default MainButton

