import React from 'react';
import Banner from './Banner/Banner';
import CardInfos from './CardInfo/CardInfos';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfos></CardInfos>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;