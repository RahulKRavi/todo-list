import { useState } from "react"

const Body = () => {
    const [textData, setTextData] = useState("")
    const [listData, setListData] = useState(["Learn jquerry"]);


    return (
      <div className="h-dvh bg-teal-300 border-4 border-double border-black ">
        <div className="m-10 h-4/5 bg-yellow-300 grid grid-cols-1 justify-items-center border-4 border-double border-black rounder-md ">
          <h1 className="text-5xl text-center mt-5">TO-DO LIST</h1>
          <div className="mb-5">
            <input
              type="text"
              value={textData}
              onChange={(e) => {
                setTextData(e.target.value);
              }}
            ></input>
            <button
              className="bg-green-700"
              onClick={() => {
                setListData([...listData, textData]);
                setTextData("");
              }}
            >
              ADD
            </button>
          </div>
          <div className="mb-5 self-stretch">
            {listData.map((item) => {
              return (
                <>
                  <input type="checkbox"></input>
                  <p>{item}</p>
                  <button>REMOVE</button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
}
export default Body