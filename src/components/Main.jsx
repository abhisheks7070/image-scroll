import React, { useRef, useState, useEffect } from 'react'
import "../App.css"
import axios from 'axios';
const Main = () => {



    // const [images,setImages] = useState([
    //    response,
    // 'https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg',
    // 'https://bestinau.com.au/wp-content/uploads/2019/01/free-images-download-1.jpg',
    // 'https://www.stock-free.org/images/stock-free-test-photo-07092015-16.jpg',
    // 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
    // 'https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg',
    // ]);



    const [images, setImages] = useState([
    ]);

    const count = useRef(0)

    useEffect(() => {

        setImages([])
        for (let i = 0; i <= 7; i++) {
            setImages((prev) => [...prev, `https://picsum.photos/200/20${i}/`])

        }
    }, []);
    useEffect(() => {

        const interval = setInterval(handleRight, 500);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [images]);


    function handleLeft() {
        setImages((prev) => ([prev[images.length - 1], ...images.slice(0, images.length - 1)]))
        count.current == 0 ? count.current = images.length - 1 : count.current = count.current - 1
    }

    function handleRight() {
        setImages((prev) => ([...images.slice(1), prev[0]]))
        console.log(images)
        count.current == images.length - 1 ? count.current = 0 : count.current = count.current + 1
    }


    return (
        <>
            <div className='flex justify-center items-center'>
                <div><button onClick={handleLeft}>L</button></div>
                <div className='flex flex-col items-center'>

                    <div className=" w-[20vw] h-[40vh] m-2 overflow-hidden ">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="rounded-3xl inline-block w-[20vw] h-[40vh] overflow-hidden align-top text-center"
                            >
                                <img
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    className=" w-full h-full object-fit"
                                />
                            </div>
                        ))}

                    </div>

                   
                    <div className=' flex gap-3'>
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`${count.current == index ? "bg-red-600" : "bg-black"} w-4 h-4 rounded-full`}
                            >
                            </div>
                        ))}
                    </div>
                </div>
                <div><button onClick={handleRight}>R</button></div>
            </div>
        </>
    );
}

export default Main
