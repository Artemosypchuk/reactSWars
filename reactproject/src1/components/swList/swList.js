import React from 'react'
import {Fragment} from 'react'
import SwComponent from './swComponent/swComponent'

const SwList = ({ People, GetPerson }) => {
    let i = 1;
    const listItem = People.map(item => {
        return (
            <SwComponent
                name={item.name}
                key={i++}
                GetPerson={() => GetPerson(item.name)}
            ></SwComponent>
        )
    })

    return (
        <Fragment>
            {listItem}
        </Fragment>
    );
};
export default SwList