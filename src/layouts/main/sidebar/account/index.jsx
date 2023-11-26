import {Popover} from "@headlessui/react";
import {useAccount} from "~/store/auth/hooks.js";
import More from "~/layouts/main/sidebar/account/more/index.jsx";

export default function Account(){

  const account = useAccount()

  return(
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button
          className="outline-none my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center"
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt={account.username}  />
          <div className="mx-3 text-[15px] ">
            <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
            <div className="text-[#71767b]">
              @{account.username}
            </div>
          </div>
        </Popover.Button>
        <Popover.Panel className="overflow-hidden py-3 absolute bottom-full w-full left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
          <More />
        </Popover.Panel>
      </Popover>
    </div>
  )
}