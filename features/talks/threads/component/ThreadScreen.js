import FloatActionButton from "@/features/components/FloatActionButton"
import ThreadTile from "./ThreadTile";

export default function ThreadScreen ({threads, onClickCreateThreadBotton}){
    const list = threads.map((threads,index) =>
    <div key={index}><ThreadTile 
    subject={threads.subject} 
    body={threads.body} 
    messageCount={threads.messageCount} 
    isNew={threads.isNew} 
    onClickMessageCount={threads.onClickMessageCount} 
    selected={threads.selected}/>
    </div>
    );
    return(
        <>
            <div className=" grid-cols-1 space-y-10" >{list}</div>
            <button className=" drop-shadow-xl fixed bottom-2 right-2 " onClick={onClickCreateThreadBotton}><FloatActionButton/></button>
</>
);

}