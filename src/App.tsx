import './App.css';

function App() {
  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
      <div className="w-full h-screen border flex font-['Open_Sans']">
        <div
          className="w-1/6 justify-between overflow-y-auto h-screen flex flex-col border gap-3 py-4"
        >
          <div className="fixed left-5 top-2 flex items-center gap-1">
            <div className="rounded-full w-3 h-3 mb-1 bg-green-500 relative">
              <div
                className="rounded-full w-1 h-1 mb-2 bg-white absolute right-[1px]"
              ></div>
            </div>
          </div>
          <div className="h-36 w-full flex justify-center">
            <img className="h-36" src="logo.jpg" alt="logotype" />
          </div>
          <div className="text-center font-bold text-gray-600 text-4xl mb-3">
            Стеллаж 1
          </div>
          <div className="text-center font-bold text-gray-600 text-4xl mb-3">
            Сборщик: <span className="font-light"><br />Иванов Олег Андреевич</span>
          </div>
          <div
            className="flex cursor-pointer my-2 rounded-xl flex-col text-center justify-between text-3xl items-center gap-5"
          >
            <div className="flex justify-between px-5 w-full items-center">
              <p className="text-5xl w-full text-center font-extrabold">Заказ</p>
            </div>
            <div
              className="font-extrabold flex text-[3em] first-letter mt-5 justify-center items-center"
            >
              <span>.<span>.</span></span>
            </div>
          </div>
          <div
            className="flex cursor-pointer hover:bg-blue-100 my-2 rounded-xl flex-col text-center justify-between text-3xl items-center gap-5"
          >
            <div className="flex justify-between px-5 w-full items-center">
              <p className="text-5xl w-full text-center font-extrabold">Маршрут</p>
            </div>
            <div
              className="font-extrabold flex text-[3em] mt-5 justify-center items-center"
            >
              <span>.<span></span></span>
            </div>
          </div>
          <div
            className="flex border mb-10 relative cursor-pointer hover:bg-blue-100 rounded-xl flex-col text-center justify-between text-3xl items-center gap-5"
          >
            <img
              className="w-full scale-125"
              src="rack_files/basket-ws.58667f9ab914ba96bbda9ab2cdd754a3.svg"
              alt=""
            />
            <div className="flex justify-between px-5 w-full items-center"></div>
            <div
              className="font-bold text-green-500 absolute top-[95px] left-[90px] flex flex-col text-4xl justify-center items-center"
            >
              <p>Собрано</p>
              <span>.<span></span></span>
            </div>
          </div>
          <a
            aria-current="page"
            className="fixed bottom-0 w-1/6 left-0 active"
            href="https://vhleb7.take-yours.online/"
            ><div
              className="flex justify-center text-white items-center bg-red-500 w-full py-5 hover:bg-red-700"
            >
              <p>Выйти</p>
            </div></a>
        </div>
        <div className="w-5/6 flex flex-col relative font-['Muller']">
          <input
            style={{
              border: 'medium none',
              height: '0px',
              width: '0px',
              outline: 'none'}}
          />
          <div
            style={{
              gridTemplateRows: 'repeat(3, minmax(0px, 1fr))',
              gridTemplateColumns: '1fr',
            }}
            className="grid h-screen w-full justify-center font-['Open_Sans'] text-3xl"
          >
            <div
              style={{gridTemplateColumns: "repeat(4, minmax(0px, 1fr))"}}
              className="w-full min-w-full grid grid-cols-4 items-stretch justify-center"
            >
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
            </div>
            <div
              style={{gridTemplateColumns: "repeat(4, minmax(0px, 1fr))"}}
              className="w-full min-w-full grid grid-cols-4 items-stretch justify-center"
            >
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
            </div>
            <div
              style={{gridTemplateColumns: "repeat(4, minmax(0px, 1fr))"}}
              className="w-full min-w-full grid grid-cols-4 items-stretch justify-center"
            >
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
              <div
                className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false"
              >
                <ul className="mt-2"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
      </div>
    </div>
  );
}

export default App;
