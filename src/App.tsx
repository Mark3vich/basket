import './App.css';
import Card from './components/card/Card';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  let testData1 = [
    {
      title: "Товар 1",
      icon: "/images_cards/image_1.jpg",
      price: 100,
    },
    {
      title: "Товар 2",
      icon: "/images_cards/image_2.jpg",
      price: 200,
    },
    {
      title: "Товар 3",
      icon: "/images_cards/image_3.jpg",
      price: 300,
    },
    {
      title: "Товар 4",
      icon: "/images_cards/image_2.jpg",
      price: 400,
    },
  ];
  let testData2 = [
    {
      title: "Товар 5",
      icon: "/images_cards/image_1.jpg",
      price: 500,
    },
    {
      title: "Товар 6",
      icon: "/images_cards/image_2.jpg",
      price: 600,
    },
    {
      title: "Товар 7",
      icon: "/images_cards/image_1.jpg",
      price: 600,
    }, 
    {
      title: "Товар 8",
      icon: "/images_cards/image_3.jpg",
      price: 600,
    },
  ];
  let testData3 = [
    {
      title: "Товар 9",
      icon: "/images_cards/image_1.jpg",
      price: 700
    },
    {
      title: "Товар 10",
      icon: "/images_cards/image_2.jpg",
      price: 800
    },
    {
      title: "Товар 11",
      icon: "/images_cards/image_3.jpg",
      price: 900
    },
    {
      title: "Товар 12",
      icon: "/images_cards/image_2.jpg",
      price: 1000
    }
  ];
  return (
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
          id="metka">
            <img
              className="w-full scale-125"
              src="basket-ws.58667f9ab914ba96bbda9ab2cdd754a3.svg"
              alt=""
              ref={containerRef}
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
              {testData1.map((item, index) => (
                <Card item={item} key={index} isFlag={false} />
              ))}
            </div>
            <div
              style={{gridTemplateColumns: "repeat(4, minmax(0px, 1fr))"}}
              className="w-full min-w-full grid grid-cols-4 items-stretch justify-center"
            > 
              {/* на данную группу товаров будет расространаться скрипт */}
              {testData2.map((item, index) => (
                <Card item={item} key={index} isFlag={true} containerRef={containerRef}/>
              ))}
            </div>
            <div
              style={{gridTemplateColumns: "repeat(4, minmax(0px, 1fr))"}}
              className="w-full min-w-full grid grid-cols-4 items-stretch justify-center"
            >
              {testData3.map((item, index) => (
                <Card item={item} key={index} isFlag={false}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
      </div>
  );
}

export default App;
