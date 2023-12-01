import {topics} from "~/utils/consts.jsx";
import Topic from "~/layouts/main/rightbar/topics/topic/index.jsx";


export default function Topics(){
  return(
    <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
      <h5 className="py-3 px-4 flex items-center text-xl font-extrabold leading-6 text-[e7e9ea]">İlgini çekebilecek gündemler</h5>
      <nav className="grid">
        {topics.map((topic, index) => <Topic item={topic} key={index} />) }
      </nav>
    </section>
  )
}