import React, { useState, useEffect } from 'react';
import Card from './Card';
import FilterandSearch from './FilterandSearch';

const CardPage = () => {
    const [cardData, setCardData] = useState([]);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    useEffect(() => {
        // Replace with your API fetching logic
        fetch('https://api.unsplash.com/photos?client_id=VDgdeNCbCcqgeHCgEKhM1h29TLdxhPDXLokXSVOL970')
            .then(response => response.json())
            .then(data => setCardData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const cardTitles = cardData ? cardData.map(card => card.alt_description) : [];

    return (
        <div>
            <FilterandSearch cardTitles={cardTitles} toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center">
                {cardData.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    );
}

export default CardPage;
