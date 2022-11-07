import React from 'react';

const Breadcrumb = ({ items, onClick }) => {

    const handleOnClick = (item, index) => {
        console.log('breadcrumbs click', item, index);
        if (onClick) {
            onClick({
                item: item,
                index: index
            });
        }
    }

    return (
        <>
            {items?.map((item, index) => {
                const i = index
                if (items.length - 1 === i) {
                    return (<li key={i}>
                        <p className='active'>
                            {item.title ? <><span>{">"}</span >{item.title}</> : ""}
                        </p>
                    </li>)
                } else {
                    return <li key={i}>
                        <p style={{ cursor: 'pointer' }} onClick={() => handleOnClick(item, index)}>
                            {item.title ? <><span>{">"}</span>{item.title}</> : ""}
                        </p>
                    </li>
                }
            })
            }
        </>
    );
};

export default Breadcrumb;