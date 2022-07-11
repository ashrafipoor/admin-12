function Content_more() {
    return (
      <div className="flex">
        <div  className="bg-teal-500 w-64 h-40 mt-4 ml-5 rounded-md ">
          
        <h1  className="font-bold text-4xl text-white ml-3 mt-3">150</h1>
        <br/>
        <h4 className="font-semibold text-white ml-4 mt-1">New Orders</h4>
        <button className="bg-teal-600 text-white ml- w-64 h-8 mt-6 rounded-b-lg hover:bg-teal-700">More info</button>
        </div>
        <div className="bg-green-600 w-64 h-40 mt-4 ml-5 rounded-md">
        <h1  className="font-bold text-4xl text-white ml-3 mt-3">53<h1  className="text-lg font-bold text-white ml-10 -mt-10 ">%</h1></h1>
        <br/>
        <h4 className="font-semibold text-white ml-4 mt-1">Bounce Rate</h4>
        <button className="bg-green-700 text-white ml- w-64 h-8 mt-9 rounded-b-lg hover:bg-green-800">More info</button>
        </div>
        <div className="bg-yellow-500 w-64 h-40 mt-4 ml-5 rounded-md">
        <h1  className="font-bold text-4xl text-white ml-3 mt-3">44</h1>
        <br/>
        <h4 className="font-semibold text-black ml-4 mt-1">User Registrations</h4>
        <button className="bg-yellow-600 text-white ml- w-64 h-8 mt-6 rounded-b-lg hover:bg-yellow-700">More info</button>
        </div>
        <div className="bg-red-600 w-64 h-40 mt-4 ml-5 rounded-md">
        <h1  className="font-bold text-4xl text-white ml-3 mt-3">65</h1>
        <br/>
        <h4 className="font-semibold text-white ml-4 mt-1">Unique Visitors</h4>
        <button className="bg-red-700 text-white ml- w-64 h-8 mt-6 rounded-b-lg hover:bg-red-800">More info</button>
        </div>
      </div>
    )
  }
  
  export default Content_more