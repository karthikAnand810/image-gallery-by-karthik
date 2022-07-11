import React, { useEffect, useState } from 'react'
import Card from './components/Card/Card';
// import Modal from "./components/Modal/Modal";
import './App.css'
import Modal from './components/Modal/Modal';
const App = () => {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [clickedCard, setClickedCard] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    const getData = async () => {
        const response = await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
        const apiData = await response.json();
        return apiData;
    }
    useEffect(() => {
        getData().then(apiData => {
            setData(apiData);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedCard(item.link);
    };
    return (
        <div className='wrapper'>
            {data.map((apiData, index) => {
                return <Card
                    setOpenModal={setOpenModal}
                    key={index}
                    imgUrl={apiData.thumbnail['small']}
                    title={apiData.title}
                    content={apiData.content}
                    authorName={apiData.author.name}
                    role={apiData.author.role}
                />
            })}
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}

export default App