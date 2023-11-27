import {useAccount, useAccounts} from "~/store/auth/hooks.js";
import classNames from "classnames";

export default function More(){

  const currentAccount = useAccount()
  const accounts = useAccounts()

  return(
    <div>
      {accounts.map(account =>(
        // eslint-disable-next-line react/jsx-key
        <button className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors",{
          "hover:bg-[#eff3f41a]" : currentAccount.id !== account.id
        })}>
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt={account.username}  />
          <div className="mx-3 flex-1 text-[15px] ">
            <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
            <div className="text-[#71767b]">
              @{account.username}
            </div>
          </div>
          {currentAccount.id === account.id &&(
            <svg viewBox="0 0 24 24" className="mr-2 ml-3" width={18.75} height={18.75} fill="#00ba7c">
              <path
                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
              />
            </svg>
          )}
        </button>
      ))}

      <div className="bg-[#2f3336] my-3 h-px" />

      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold  leading-[20px]">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold  leading-[20px]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full text-[#e7e9ea] text-[15px] font-bold leading-[20px]">
        <div className="max-w-[228px]">
          @prototurkcom hesabından çıkış yap
        </div>
      </button>

    </div>
  )
}